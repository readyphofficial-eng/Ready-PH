import { useEffect, useRef } from 'react';

export function Confetti({ trigger }: { trigger: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (trigger === 0) return;
    const container = ref.current;
    if (!container) return;
    container.innerHTML = '';
    const colors = ['#ff6b9d', '#ffd93d', '#6bcb77', '#4d96ff', '#a66cdd', '#f97316'];
    for (let i = 0; i < 60; i++) {
      const p = document.createElement('div');
      p.style.cssText = `position:fixed;top:-10px;left:${Math.random() * 100}vw;width:10px;height:10px;background:${colors[i % colors.length]};border-radius:50%;pointer-events:none;z-index:9999;animation:confetti-fall ${1.5 + Math.random() * 1.5}s linear forwards;animation-delay:${Math.random() * 0.5}s;`;
      container.appendChild(p);
    }
    const t = setTimeout(() => { container.innerHTML = ''; }, 3500);
    return () => clearTimeout(t);
  }, [trigger]);
  return <div ref={ref} className="pointer-events-none fixed inset-0 z-[9999]" />;
}

export function speak(text: string): void {
  try {
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'fil-PH';
    u.rate = 0.9;
    const voices = synth.getVoices();
    const fil = voices.find(v => v.lang.startsWith('fil') || v.lang.startsWith('tl'));
    if (fil) u.voice = fil;
    synth.speak(u);
  } catch {}
}
