import type { VideoItem } from '@/types';
import { categorizeVideo } from './storage';

export async function fetchYouTubeVideos(channelId: string): Promise<VideoItem[]> {
  if (!channelId) return [];
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
    const text = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/xml');
    const entries = Array.from(doc.querySelectorAll('entry'));
    return entries.map((entry, i) => {
      const title = entry.querySelector('title')?.textContent ?? '';
      const videoId = entry.querySelector('videoId')?.textContent ?? '';
      const published = entry.querySelector('published')?.textContent ?? '';
      const thumbnail = entry.querySelector('thumbnail')?.getAttribute('url') ?? '';
      return {
        id: `yt-${videoId}` || `yt-${i}`,
        title,
        thumbnail,
        date: published,
        category: categorizeVideo(title),
        youtubeId: videoId,
      } as VideoItem;
    });
  } catch {
    return [];
  }
}

export function getManualVideos(): VideoItem[] {
  try {
    const raw = localStorage.getItem('manualVideos');
    if (!raw) return [];
    const arr = JSON.parse(raw) as Array<{ title: string; url: string; date: string; category?: string; description?: string }>;
    return arr.map((v, i) => ({
      id: `manual-${i}`,
      title: v.title,
      thumbnail: '',
      date: v.date,
      category: (v.category as VideoItem['category']) ?? categorizeVideo(v.title),
      url: v.url,
      youtubeId: v.url.includes('youtu.be')
        ? v.url.split('/').pop()
        : v.url.includes('v=')
        ? v.url.split('v=')[1].split('&')[0]
        : '',
    }));
  } catch {
    return [];
  }
}
