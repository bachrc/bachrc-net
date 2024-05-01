// src/lib/i18n/index.ts
import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

export const frenchLocale = 'fr-FR';
export const englishLocale = 'en-US';

register(englishLocale, () => import('./locales/en.json'));
register(frenchLocale, () => import('./locales/fr.json'));

init({
  fallbackLocale: frenchLocale,
  initialLocale: browser ? window.navigator.language : frenchLocale
});
