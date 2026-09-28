import { useEffect, useState } from 'react';
import { getThemeStickers, getTheme } from '@/lib/themes';

// Deterministic pseudo-random layout so stickers don't jump on re-render
function hashCode(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function ThemeStickers() {
  const [themeId, setThemeId] = useState(getTheme());

  useEffect(() => {
    const onChanged = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setThemeId(detail ?? getTheme());
    };
    window.addEventListener('theme-changed', onChanged);
    return () => window.removeEventListener('theme-changed', onChanged);
  }, []);

  const stickers = getThemeStickers(themeId);
  const cells: { emoji: string; x: number; y: number; size: number; delay: number; rot: number }[] = [];

  // fixed grid of positions across the page (18 slots)
  const slots = [
    [4, 6], [24, 4], [46, 7], [68, 5], [88, 8],
    [8, 26], [30, 24], [52, 27], [74, 25], [92, 28],
    [4, 48], [26, 51], [48, 49], [70, 47], [90, 50],
    [10, 70], [34, 72], [58, 70], [80, 73], [93, 71],
    [6, 90], [28, 88], [50, 92], [72, 90], [90, 89],
  ];
  slots.forEach(([x, y], i) => {
    const seed = hashCode(`${themeId}-${i}`);
    const emoji = stickers[seed % stickers.length];
    const size = 18 + (seed % 16);
    const rot = ((seed % 40) - 20);
    const delay = (seed % 40) / 10;
    cells.push({ emoji, x, y, size, delay, rot });
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {cells.map((c, i) => (
        <span
          key={i}
          className="absolute opacity-[0.07] animate-float select-none"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            fontSize: `${c.size}px`,
            transform: `rotate(${c.rot}deg)`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${6 + (i % 4)}s`,
          }}
        >
          {c.emoji}
        </span>
      ))}
    </div>
  );
}
