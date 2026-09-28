export interface ThemeDef {
  id: string;
  name: string;
  emoji: string;
  vars: Record<string, string>;
  stickers: string[];
}

export const THEMES: ThemeDef[] = [
  {
    id: 'crayon-rainbow', name: 'Crayon Rainbow', emoji: '🌈',
    vars: { '--bg': '#fff7ed', '--surface': '#ffffff', '--primary': '#f97316', '--accent': '#ff6b9d', '--nav-bg': '#ffffff', '--text': '#333333' },
    stickers: ['🌈', '🖍️', '🎨', '✏️', '🖍️'],
  },
  {
    id: 'chalkboard', name: 'Chalkboard', emoji: '🟢',
    vars: { '--bg': '#1a2e1a', '--surface': '#2d4a2d', '--primary': '#a3d977', '--accent': '#f0e68c', '--nav-bg': '#1a2e1a', '--text': '#e8f5e8' },
    stickers: ['✏️', '📚', '🧮', '🌍', '✏️'],
  },
  {
    id: 'space-school', name: 'Space School', emoji: '🚀',
    vars: { '--bg': '#0d1b3e', '--surface': '#1a2855', '--primary': '#4d96ff', '--accent': '#a66cdd', '--nav-bg': '#0d1b3e', '--text': '#e0e8ff' },
    stickers: ['🚀', '⭐', '🪐', '🛸', '👨‍🚀'],
  },
  {
    id: 'jungle-safari', name: 'Jungle Safari', emoji: '🦁',
    vars: { '--bg': '#f0f4e8', '--surface': '#ffffff', '--primary': '#6b8e23', '--accent': '#daa520', '--nav-bg': '#ffffff', '--text': '#3d3d2b' },
    stickers: ['🦁', '🌿', '🐒', '🦜', '🌴'],
  },
  {
    id: 'ocean-blue', name: 'Ocean Blue', emoji: '🌊',
    vars: { '--bg': '#e3f2fd', '--surface': '#ffffff', '--primary': '#0288d1', '--accent': '#4ecdc4', '--nav-bg': '#ffffff', '--text': '#01579b' },
    stickers: ['🌊', '🐠', '🐬', '🫧', '⛵'],
  },
  {
    id: 'farm-animals', name: 'Farm Animals', emoji: '🐮',
    vars: { '--bg': '#fdf5e6', '--surface': '#ffffff', '--primary': '#d2691e', '--accent': '#8b4513', '--nav-bg': '#ffffff', '--text': '#5d3e1a' },
    stickers: ['🐮', '🐷', '🐔', '🚜', '🌾'],
  },
  {
    id: 'candy-pastel', name: 'Candy Pastel', emoji: '🍬',
    vars: { '--bg': '#fff0f5', '--surface': '#ffffff', '--primary': '#ff69b4', '--accent': '#b0e0e6', '--nav-bg': '#ffffff', '--text': '#6b4c5a' },
    stickers: ['🍬', '🍭', '🧁', '🍩', '🫧'],
  },
  {
    id: 'dinosaur', name: 'Dinosaur', emoji: '🦕',
    vars: { '--bg': '#e8f5e9', '--surface': '#ffffff', '--primary': '#2e7d32', '--accent': '#ff6f00', '--nav-bg': '#ffffff', '--text': '#1b5e20' },
    stickers: ['🦕', '🦖', '🌋', '🦴', '🌿'],
  },
  {
    id: 'princess', name: 'Princess', emoji: '👑',
    vars: { '--bg': '#fce4ec', '--surface': '#ffffff', '--primary': '#e91e63', '--accent': '#ce93d8', '--nav-bg': '#ffffff', '--text': '#880e4f' },
    stickers: ['👑', '💗', '🏰', '✨', '🦄'],
  },
  {
    id: 'superhero', name: 'Superhero', emoji: '🦸',
    vars: { '--bg': '#1a1a2e', '--surface': '#16213e', '--primary': '#e94560', '--accent': '#0f3460', '--nav-bg': '#1a1a2e', '--text': '#e8e8e8' },
    stickers: ['🦸', '⚡', '💥', '🛡️', '⭐'],
  },
];

export function getTheme(): string {
  return localStorage.getItem('theme') || 'crayon-rainbow';
}

export function getThemeStickers(themeId: string): string[] {
  const theme = THEMES.find(t => t.id === themeId) ?? THEMES[0];
  return theme.stickers;
}

export function applyTheme(themeId: string): void {
  const theme = THEMES.find(t => t.id === themeId) ?? THEMES[0];
  const body = document.body;
  body.className = body.className.replace(/theme-\S+/g, '').trim();
  body.classList.add(`theme-${theme.id}`);
  Object.entries(theme.vars).forEach(([k, v]) => {
    body.style.setProperty(k, v);
  });
  localStorage.setItem('theme', theme.id);
  window.dispatchEvent(new CustomEvent('theme-changed', { detail: theme.id }));
}

export function initTheme(): void {
  applyTheme(getTheme());
}
