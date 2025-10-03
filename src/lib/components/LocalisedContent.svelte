<script lang="ts">
  import { englishLocale, frenchLocale } from '$lib/i18n';
  import { locale } from 'svelte-i18n';
  interface Props {
    englishContent?: import('svelte').Snippet;
    frenchContent?: import('svelte').Snippet;
  }

  let { englishContent, frenchContent }: Props = $props();
</script>

{#if $locale == englishLocale}
  {@render englishContent?.()}
{:else}
  {@render frenchContent?.()}
{/if}
