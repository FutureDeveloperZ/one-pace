import { ONE_PIECE_ANILIST_ID } from '../constants';
import { getEpisodeForOPRange, getDisplayTitle, buildOverview } from '../mapping/engine';

export function registerEpisodeHooks() {
  console.log("[One Pace] Registering episode hooks");

  $app.onAnimeEpisodeMetadataRequested((e) => {
    if (e.mediaId !== ONE_PIECE_ANILIST_ID) {
      return e.next();
    }

    const files = $database.localFiles.findBy(
      (lf: any) => lf.mediaId === ONE_PIECE_ANILIST_ID
    );

    const matchingFile = files.find((lf: any) => {
      const match = /\[One Pace\]\[(\d+)-(\d+)\]/i.exec(lf.path);
      if (!match) return false;
      const fileOpEnd = parseInt(match[2], 10);
      return fileOpEnd === e.episodeNumber ||
        (lf.parsedInfo?.episode && parseInt(lf.parsedInfo.episode, 10) === e.episodeNumber);
    });

    if (!matchingFile) {
      return e.next();
    }

    const match = /\[One Pace\]\[(\d+)-(\d+)\]/i.exec((matchingFile as any).path);
    if (!match) {
      return e.next();
    }

    const opStart = parseInt(match[1], 10);
    const opEnd = parseInt(match[2], 10);
    const mapping = getEpisodeForOPRange(opStart, opEnd);

    if (!mapping) {
      return e.next();
    }

    const overview = buildOverview(mapping);

    e.animeEpisodeMetadata = {
      anidbId: 0,
      tvdbId: 0,
      title: getDisplayTitle(mapping),
      image: "",
      airDate: "",
      length: Math.round(mapping.lengthMinutes),
      summary: overview,
      overview: overview,
      episodeNumber: e.episodeNumber,
      episode: mapping.paceEp,
      seasonNumber: 1,
      absoluteEpisodeNumber: mapping.opEnd,
      anidbEid: 0,
      hasImage: false
    };

    e.preventDefault();
    return e.next();
  });
}
