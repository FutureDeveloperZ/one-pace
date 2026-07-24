import { DetectedFile } from './types';
import { FILENAME_PATTERN, ONE_PIECE_ANILIST_ID } from './constants';

export function detectOnePaceFiles(): DetectedFile[] {
  const allFiles = $database.localFiles.getAll();
  const onePieceFiles = allFiles.filter(lf => lf.mediaId === ONE_PIECE_ANILIST_ID);

  const detected: DetectedFile[] = [];
  for (const file of onePieceFiles) {
    const match = FILENAME_PATTERN.exec(file.path);
    if (match) {
      detected.push({
        path: file.path,
        paceEpRange: {
          start: parseInt(match[1], 10),
          end: parseInt(match[2], 10)
        },
        arcName: match[3].trim(),
        epNumber: match[4],
        resolution: match[5]
      });
    }
  }

  return detected;
}

export function hasOnePaceFiles(): boolean {
  const allFiles = $database.localFiles.getAll();
  return allFiles.some(lf => lf.mediaId === ONE_PIECE_ANILIST_ID && lf.path.includes('[One Pace]'));
}
