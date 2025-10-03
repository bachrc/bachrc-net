<script lang="ts">
  import ThemesList from './ThemesList.svelte';
  import { t } from 'svelte-i18n';
  import LocalisedContent from './LocalisedContent.svelte';

  interface Props {
    name: string;
    employeur: string;
    duree: string;
    themes: string[];
    englishContent?: import('svelte').Snippet;
    frenchContent?: import('svelte').Snippet;
  }

  let {
    name,
    employeur,
    duree,
    themes,
    englishContent,
    frenchContent
  }: Props = $props();

  const englishContent_render = $derived(englishContent);
  const frenchContent_render = $derived(frenchContent);
</script>

<div class="flex flex-col">
  <div class="flex flex-col bg-white/20 p-2">
    <span class="font-bold text-base">
      {name}
    </span>
    <div class="flex flex-row">
      <span>{employeur}</span>
      <div class="grow"></div>
      <span>{duree}</span>
    </div>
  </div>
  <div class="flex flex-col gap-2 text-justify p-2">
    <LocalisedContent>
      {#snippet englishContent()}
          
          {@render englishContent_render?.()}
        
          {/snippet}
      {#snippet frenchContent()}
          
          {@render frenchContent_render?.()}
        
          {/snippet}
    </LocalisedContent>
  </div>
  {#if themes.length > 0}
    <div class="mt-2 flex flex-col p-2">
      <span class="font-bold mr-1">{$t('themes')}</span>
      <ThemesList {themes} />
    </div>
  {/if}
</div>
