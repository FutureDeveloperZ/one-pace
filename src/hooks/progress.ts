import { ONE_PIECE_ANILIST_ID } from '../constants';

const PACE_FILE_PATTERN = /\[One Pace\]\[(\d+)-(\d+)\]/i;

export function registerProgressHooks() {
  console.log("[One Pace] Registering progress hooks");

  $app.onPreUpdateEntryProgress((e) => {
    if (e.mediaId !== ONE_PIECE_ANILIST_ID) {
      return e.next();
    }

    if (e.progress === null || e.progress === undefined) {
      return e.next();
    }

    console.log(`[One Pace] Progress update requested: ${e.progress}`);

    const files = $database.localFiles.findBy(
      (lf: any) => lf.mediaId === ONE_PIECE_ANILIST_ID
    );

    const paceFiles: Array<{ file: any; opEnd: number; epNum: number }> = [];

    for (const lf of files) {
      const match = PACE_FILE_PATTERN.exec((lf as any).path);
      if (!match) continue;

      const opEnd = parseInt(match[2], 10);
      const epNum = parseInt((lf as any).parsedInfo?.episode || "0", 10);

      if (opEnd > 0) {
        paceFiles.push({ file: lf, opEnd, epNum });
      }
    }

    if (paceFiles.length === 0) {
      return e.next();
    }

    paceFiles.sort((a, b) => a.epNum - b.epNum);

    const match = paceFiles.find((pf) => pf.epNum === e.progress);

    if (!match) {
      console.log(`[One Pace] No matching Pace file for progress ${e.progress}, passing through`);
      return e.next();
    }

    const correctedProgress = match.opEnd;

    console.log(`[One Pace] Corrected progress: ${e.progress} -> ${correctedProgress}`);

    try {
      const collection = $anilist.getAnimeCollection(false);
      const entry = collection?.MediaList?.find(
        (m: any) => m.mediaId === ONE_PIECE_ANILIST_ID
      );
      const currentProgress = entry?.progress || 0;

      if (correctedProgress <= currentProgress) {
        console.log(`[One Pace] Current progress ${currentProgress} >= ${correctedProgress}, skipping update`);
        return e.preventDefault();
      }

      $anilist.updateEntryProgress(ONE_PIECE_ANILIST_ID, correctedProgress, undefined);
      $anilist.refreshAnimeCollection();
      console.log(`[One Pace] AniList progress updated to ${correctedProgress}`);
    } catch (err) {
      console.error("[One Pace] Failed to update AniList:", err);
    }

    e.preventDefault();
    return e.next();
  });
}
