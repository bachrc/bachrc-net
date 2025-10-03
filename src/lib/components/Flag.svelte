<script lang="ts">
  import frenchFlag from '$lib/assets/france.svg';
  import usFlag from '$lib/assets/us.svg';
  import { englishLocale, frenchLocale } from '$lib/i18n';
  import { locale, t } from 'svelte-i18n';
  import { derived } from 'svelte/store';

  function otherLocaleIconUrl(): string {
    if ($locale === frenchLocale) {
      return usFlag;
    } else {
      return frenchFlag;
    }
  }

  function switchLocale() {
    if ($locale === frenchLocale) {
      $locale = englishLocale;
    } else {
      $locale = frenchLocale;
    }
  }

  const localeIcon = derived(locale, otherLocaleIconUrl);
</script>

<button onclick={switchLocale}>
  <img
    alt={$t('changer-de-langue')}
    src={$localeIcon}
    class="w-8" />
</button>
