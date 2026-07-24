import { OnePaceEpisode, OnePaceArc } from '../types';
import episodesData from '../../data/episodes.json';

const data = episodesData as { arcs: Record<string, OnePaceArc>; episodes: OnePaceEpisode[] };

export function getEpisodes(): OnePaceEpisode[] {
  return data.episodes;
}

export function getEpisodeByPaceName(paceName: string): OnePaceEpisode | undefined {
  return data.episodes.find(ep => ep.paceEpisode === paceName);
}

export function getEpisodesByArc(arcName: string): OnePaceEpisode[] {
  return data.episodes.filter(ep => ep.arc === arcName);
}

export function getAllArcs(): string[] {
  return [...new Set(data.episodes.map(ep => ep.arc))];
}
