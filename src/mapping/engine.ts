import { OnePaceEpisode, EpisodeMapping } from '../types';
import { getEpisodes } from './database';

export function getEpisodeForOPRange(opStart: number, opEnd: number): OnePaceEpisode | undefined {
  const episodes = getEpisodes();

  const directMatch = episodes.find(ep => ep.opStart === opStart && ep.opEnd === opEnd);
  if (directMatch) {
    return directMatch;
  }

  const partialMatch = episodes.find(ep =>
    ep.opStart !== null && ep.opEnd !== null &&
    ep.opStart <= opStart && ep.opEnd >= opEnd
  );
  if (partialMatch) {
    return partialMatch;
  }

  return episodes.find(ep =>
    ep.opStart !== null && ep.opEnd !== null &&
    ep.opStart <= opEnd && ep.opEnd >= opStart
  );
}

export function getEpisodeForFile(opStart: number, opEnd: number): EpisodeMapping | undefined {
  const ep = getEpisodeForOPRange(opStart, opEnd);
  if (!ep || ep.opStart === null || ep.opEnd === null) {
    return undefined;
  }

  return {
    paceEp: ep.paceEpisode,
    arc: ep.arc,
    opStart: ep.opStart,
    opEnd: ep.opEnd,
    chapters: ep.chapters,
    lengthMinutes: ep.lengthMinutes
  };
}

export function getDisplayTitle(mapping: EpisodeMapping): string {
  return `${mapping.arc} — ${mapping.paceEp}`;
}

export function getProgressNumber(mapping: EpisodeMapping): number {
  return mapping.opEnd;
}

export function buildOverview(mapping: EpisodeMapping): string {
  const chapterStr = mapping.chapters.length > 0
    ? `Manga Ch. ${mapping.chapters.map(c => c.from === c.to ? c.from : `${c.from}-${c.to}`).join(', ')}`
    : '';

  const epRange = mapping.opStart === mapping.opEnd
    ? `OP Ep. ${mapping.opStart}`
    : `OP Eps. ${mapping.opStart}-${mapping.opEnd}`;

  const duration = mapping.lengthMinutes > 0
    ? `${Math.round(mapping.lengthMinutes)} min`
    : '';

  return [epRange, chapterStr, duration].filter(Boolean).join(' • ');
}
