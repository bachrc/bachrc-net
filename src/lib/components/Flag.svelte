<script lang="ts">
  import frenchFlag from '$lib/assets/france.svg';
  import usFlag from '$lib/assets/us.svg';
  import { englishLocale, frenchLocale } from '$lib/i18n';
  import { locale, t } from 'svelte-i18n';

  function otherLocaleIconUrl(): string {
    if ($locale === 'fr-FR') {
      return usFlag;
    } else {
      return frenchFlag;
    }
  }

  function switchLocale() {
    console.log($locale);
    if ($locale === frenchLocale) {
      $locale = englishLocale;
    } else {
      $locale = frenchLocale;
    }
  }
</script>

<button onclick={switchLocale}>
  <img
    alt={$t('changer-de-langue')}
    src={otherLocaleIconUrl()}
    class="w-8" />
</button>
