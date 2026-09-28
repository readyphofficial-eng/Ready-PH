export function initPWA(onInstallAvailable: () => void): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    (window as any).__deferredPrompt = e;
    onInstallAvailable();
  });

  window.addEventListener('appinstalled', () => {
    (window as any).__deferredPrompt = null;
    localStorage.setItem('pwaInstalled', 'true');
  });
}

export function promptInstall(): void {
  const deferred = (window as any).__deferredPrompt;
  if (deferred) {
    deferred.prompt();
    deferred.userChoice.then(() => {
      (window as any).__deferredPrompt = null;
    });
  }
}

export function canInstall(): boolean {
  return !!(window as any).__deferredPrompt;
}

export function isStandalone(): boolean {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (navigator as any).standalone === true
  );
}

export function isInstalled(): boolean {
  return localStorage.getItem('pwaInstalled') === 'true' || isStandalone();
}
