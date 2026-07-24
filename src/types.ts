export interface OnePaceEpisode {
  arc: string;
  paceEpisode: string;
  chapters: ChapterRange[];
  chaptersRaw: string;
  opStart: number | null;
  opEnd: number | null;
  opEpisodesRaw: string;
  lengthMinutes: number;
}

export interface ChapterRange {
  from: string;
  to: string;
}

export interface OnePaceArc {
  paceEpisodeCount: number;
}

export interface EpisodeMapping {
  paceEp: string;
  arc: string;
  opStart: number;
  opEnd: number;
  chapters: ChapterRange[];
  lengthMinutes: number;
}

export interface DetectedFile {
  path: string;
  paceEpRange: { start: number; end: number };
  arcName: string;
  epNumber: string;
  resolution: string;
}

export interface PluginSettings {
  enabled: boolean;
  autoSync: boolean;
  overrideMetadata: boolean;
  showNotifications: boolean;
  dryRun: boolean;
}
