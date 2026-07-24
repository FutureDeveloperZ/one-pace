import { ONE_PIECE_ANILIST_ID } from '../constants';
import { hasOnePaceFiles } from '../detection';
import { getEpisodeForOPRange } from '../mapping/engine';

export function registerProgressHooks() {
  const isOnePaceDetected = hasOnePaceFiles();

  if (!isOnePaceDetected) {
    console.log("[One Pace] No One Pace files detected, skipping progress hooks");
    return;
  }

  console.log("[One Pace] One Pace files detected, registering progress hooks");

  $app.onPreUpdateEntryProgress((e) => {
    if (e.mediaId !== ONE_PIECE_ANILIST_ID) {
      return e.next();
    }

    if (e.progress === null) {
      return e.next();
    }

    console.log(`[One Pace] Progress update requested: ${e.progress}`);
    return e.next();
  });
}
