<script lang="ts">
  import { englishLocale } from '$lib/i18n';
  import type { Snippet } from 'svelte';
  import { locale } from 'svelte-i18n';

  let {
    frenchContent,
    englishContent
  }: {
    frenchContent: Snippet;
    englishContent: Snippet;
  } = $props();

  function currentLocaleContent(): Snippet {
    switch ($locale) {
      case englishLocale:
        return englishContent;
      default:
        return frenchContent;
    }
  }
</script>

{@render currentLocaleContent()()}
