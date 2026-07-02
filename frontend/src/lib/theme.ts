export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'sos-theme';

export function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return null;
}

export function getPreferredTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
}

export function initTheme(): Theme {
  const theme = getStoredTheme() ?? getPreferredTheme();
  applyTheme(theme);
  return theme;
}
