import type { VideoCategory, VideoItem } from '@/types';

export function lsGet<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) as T : fallback;
  } catch {
    return fallback;
  }
}

export function lsSet<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export function lsRaw(key: string, fallback = ''): string {
  return localStorage.getItem(key) ?? fallback;
}

export function lsRawSet(key: string, value: string): void {
  localStorage.setItem(key, value);
}

export function isOwner(): boolean {
  return localStorage.getItem('isOwner') === 'true';
}

export function addStar(count = 1): number {
  const cur = parseInt(localStorage.getItem('stars') ?? '0', 10);
  const next = cur + count;
  localStorage.setItem('stars', String(next));
  return next;
}

export function getStars(): number {
  return parseInt(localStorage.getItem('stars') ?? '0', 10);
}

export function addMedal(count = 1): number {
  const cur = parseInt(localStorage.getItem('medals') ?? '0', 10);
  const next = cur + count;
  localStorage.setItem('medals', String(next));
  return next;
}

export function getMedals(): number {
  return parseInt(localStorage.getItem('medals') ?? '0', 10);
}

export function addTrophy(count = 1): number {
  const cur = parseInt(localStorage.getItem('trophies') ?? '0', 10);
  const next = cur + count;
  localStorage.setItem('trophies', String(next));
  return next;
}

export function getTrophies(): number {
  return parseInt(localStorage.getItem('trophies') ?? '0', 10);
}

export function addSticker(category: string): void {
  const stickers = lsGet<string[]>('stickers', []);
  if (!stickers.includes(category)) {
    stickers.push(category);
    lsSet('stickers', stickers);
  }
}

export function getStickers(): string[] {
  return lsGet<string[]>('stickers', []);
}

export function toggleFavorite(videoId: string): string[] {
  const favs = lsGet<string[]>('favorites', []);
  const idx = favs.indexOf(videoId);
  if (idx >= 0) favs.splice(idx, 1);
  else favs.push(videoId);
  lsSet('favorites', favs);
  return favs;
}

export function getFavorites(): string[] {
  return lsGet<string[]>('favorites', []);
}

export function addRecentWatched(videoId: string): void {
  const recent = lsGet<string[]>('recentWatched', []);
  if (!recent.includes(videoId)) {
    recent.push(videoId);
    lsSet('recentWatched', recent);
  }
}

export function getRecentWatched(): string[] {
  return lsGet<string[]>('recentWatched', []);
}

export function addQuizResult(score: number): void {
  const results = lsGet<number[]>('quizResults', []);
  results.push(score);
  lsSet('quizResults', results);
}

export function getQuizResults(): number[] {
  return lsGet<number[]>('quizResults', []);
}

export function addGameScore(game: string, score: number): void {
  const scores = lsGet<{ game: string; score: number; date: string }[]>('gameScores', []);
  scores.push({ game, score, date: new Date().toISOString() });
  lsSet('gameScores', scores);
}

export function getGameScores(): { game: string; score: number; date: string }[] {
  return lsGet<{ game: string; score: number; date: string }[]>('gameScores', []);
}

export function getTotalGamePoints(): number {
  return getGameScores().reduce((sum, g) => sum + g.score, 0);
}

export function getStreak(): { current: number; longest: number; isNewDay: boolean } {
  const lastLogin = localStorage.getItem('lastLoginDate');
  const today = new Date().toDateString();
  let current = parseInt(localStorage.getItem('streakCount') ?? '0', 10);
  let longest = parseInt(localStorage.getItem('longestStreak') ?? '0', 10);
  let isNewDay = false;

  if (lastLogin !== today) {
    isNewDay = true;
    if (lastLogin) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (lastLogin === yesterday) {
        current += 1;
      } else {
        current = 1;
      }
    } else {
      current = 1;
    }
    localStorage.setItem('streakCount', String(current));
    localStorage.setItem('lastLoginDate', today);
    if (current > longest) {
      longest = current;
      localStorage.setItem('longestStreak', String(longest));
    }
  }
  return { current, longest, isNewDay };
}

export function addAdminLog(action: string): void {
  const logs = lsGet<{ action: string; date: string }[]>('adminLogs', []);
  logs.push({ action, date: new Date().toISOString() });
  lsSet('adminLogs', logs);
}

export function getAdminLogs(): { action: string; date: string }[] {
  return lsGet<{ action: string; date: string }[]>('adminLogs', []);
}

export function backupData(): void {
  const data: Record<string, string> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) data[key] = localStorage.getItem(key) ?? '';
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ready-ph-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function restoreData(file: File): Promise<void> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string) as Record<string, string>;
      Object.entries(data).forEach(([k, v]) => localStorage.setItem(k, v));
      resolve();
      } catch {
        reject(new Error('Invalid backup file'));
      }
    };
    reader.onerror = () => reject(new Error('Read error'));
    reader.readAsText(file);
  });
}

let screenTimeStart = Date.now();
let screenTimeInterval: ReturnType<typeof setInterval> | null = null;

export function initScreenTime(onLimit: () => void): void {
  const limit = parseInt(localStorage.getItem('screenTimeLimit') ?? '0', 10);
  if (limit === 0) return;
  screenTimeStart = Date.now();
  if (screenTimeInterval) clearInterval(screenTimeInterval);
  screenTimeInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - screenTimeStart) / 60000);
    if (elapsed >= limit) {
      if (screenTimeInterval) clearInterval(screenTimeInterval);
      onLimit();
    }
  }, 30000);
}

export function getScreenTimeElapsed(): number {
  return Math.floor((Date.now() - screenTimeStart) / 60000);
}

export function categorizeVideo(title: string): VideoCategory {
  const t = title.toLowerCase();
  if (/\b(letter|titik|alphabet|abakada|pangalan)\b/i.test(t)) return 'Letters';
  if (/\b(number|bilang|count|numero|numero)\b/i.test(t)) return 'Numbers';
  if (/\b(color|kulay)\b/i.test(t)) return 'Colors';
  if (/\b(shape|hugis|bilog|square|triangulo)\b/i.test(t)) return 'Shapes';
  if (/\b(animal|hayop|aso|pusa|baboy|baka|manok|ibon)\b/i.test(t)) return 'Animals';
  return 'New Uploads';
}

export function getDefaultVideos(): VideoItem[] {
  return [
    { id: 'd1', title: 'Letter A - Abakada', thumbnail: '', date: '2025-01-01', category: 'Letters', youtubeId: '' },
    { id: 'd2', title: 'Bilang 1-10 Counting', thumbnail: '', date: '2025-01-02', category: 'Numbers', youtubeId: '' },
    { id: 'd3', title: 'Kulay Red at Blue', thumbnail: '', date: '2025-01-03', category: 'Colors', youtubeId: '' },
    { id: 'd4', title: 'Hugis Bilog at Square', thumbnail: '', date: '2025-01-04', category: 'Shapes', youtubeId: '' },
    { id: 'd5', title: 'Hayop - Aso at Pusa', thumbnail: '', date: '2025-01-05', category: 'Animals', youtubeId: '' },
    { id: 'd6', title: 'Letter B - Ba Ka Da', thumbnail: '', date: '2025-01-06', category: 'Letters', youtubeId: '' },
    { id: 'd7', title: 'Bilang 11-20', thumbnail: '', date: '2025-01-07', category: 'Numbers', youtubeId: '' },
    { id: 'd8', title: 'Kulay Yellow Green', thumbnail: '', date: '2025-01-08', category: 'Colors', youtubeId: '' },
  ];
}

export function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return 'Magandang Umaga';
  if (h < 18) return 'Magandang Hapon';
  return 'Magandang Gabi';
}

export function generateIdNumber(): string {
  const num = Math.floor(100 + Math.random() * 900);
  return `READY-2025-${num}`;
}

// ---- App Logo (owner-uploaded) ----
export function getAppLogo(): string {
  return lsRaw('appLogo', '');
}

export function setAppLogo(dataUrl: string): void {
  lsRawSet('appLogo', dataUrl);
}

export function clearAppLogo(): void {
  localStorage.removeItem('appLogo');
}

// ---- Online Shop (replaced Freebies) ----
export interface ShopItem {
  logo: string;
  logoImg: string;
  title: string;
  desc: string;
  subDesc: string;
  link: string;
}

export function getShopItems(): ShopItem[] {
  return lsGet<ShopItem[]>('shopItems', []);
}

export function setShopItems(items: ShopItem[]): void {
  lsSet('shopItems', items);
}

// ---- Partners (up to 10 slots) ----
export interface Partner {
  name: string;
  logo: string;
  logoImg: string;
}

export const MAX_PARTNERS = 10;

export function getPartners(): Partner[] {
  return lsGet<Partner[]>('partners', []);
}

export function setPartners(items: Partner[]): void {
  lsSet('partners', items);
}
