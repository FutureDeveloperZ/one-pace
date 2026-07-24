import { ONE_PIECE_ANILIST_ID } from '../constants';
import { hasOnePaceFiles } from '../detection';

export function registerMetadataHooks() {
  const isOnePaceDetected = hasOnePaceFiles();

  if (!isOnePaceDetected) {
    console.log("[One Pace] No One Pace files detected, skipping metadata hooks");
    return;
  }

  console.log("[One Pace] One Pace files detected, registering metadata hooks");

  $app.onGetAnime((e) => {
    if (e.anime?.id !== ONE_PIECE_ANILIST_ID) {
      return e.next();
    }

    const title = e.anime?.title;
    if (title) {
      title.english = "One Pace";
      title.userPreferred = "One Pace";
    }

    return e.next();
  });
}
