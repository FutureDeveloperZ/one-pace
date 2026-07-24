import { ONE_PIECE_ANILIST_ID } from '../constants';

export function registerProgressHooks() {
  console.log("[One Pace] Registering progress hooks");

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
