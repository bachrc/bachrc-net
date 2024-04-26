<script lang="ts">
  import frenchFlag from '$lib/assets/france.svg';
  import usFlag from '$lib/assets/us.svg';
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
    if ($locale === 'fr-FR') {
      $locale = 'en-US';
    } else {
      $locale = 'fr-FR';
    }
  }
</script>

<button onclick={switchLocale}>
  <img
    alt={$t('changer-de-langue')}
    src={otherLocaleIconUrl()}
    class="h-full" />
</button>
