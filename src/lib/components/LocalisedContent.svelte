<script lang="ts">
  import { englishLocale, frenchLocale } from '$lib/i18n';
  import { locale } from 'svelte-i18n';
</script>

{#if $locale == englishLocale}
  <slot name="englishContent" />
{:else}
  <slot name="frenchContent" />
{/if}
