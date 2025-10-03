// src/lib/i18n/index.ts
import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

export const frenchLocale = 'fr';
export const englishLocale = 'en';

register(englishLocale, () => import('./locales/en.json'));
register(frenchLocale, () => import('./locales/fr.json'));

init({
  fallbackLocale: frenchLocale,
  initialLocale: browser
    ? window.navigator.language.split('-')[0]
    : frenchLocale
});
