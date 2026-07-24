import { ONE_PIECE_ANILIST_ID } from '../constants';

export function registerMetadataHooks() {
  console.log("[One Pace] Registering metadata hooks");

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
