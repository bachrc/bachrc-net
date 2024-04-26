<script lang="ts">
  import type { Snippet } from 'svelte';
  import ThemesList from './ThemesList.svelte';
  import { locale, t } from 'svelte-i18n';

  let {
    titre,
    employeur,
    duree,
    themes = [],
    descriptionFr,
    descriptionEn
  }: {
    titre: string;
    employeur: string;
    duree: string;
    themes?: string[];
    descriptionFr: Snippet;
    descriptionEn: Snippet;
  } = $props();

  function currentLocaleDescription(): Snippet {
    switch ($locale) {
      case 'en-US':
        return descriptionEn;
      default:
        return descriptionFr;
    }
  }
</script>

<div class="flex flex-col">
  <span class="font-bold text-base">
    {titre}
  </span>
  <div class="flex flex-row">
    <span>{employeur}</span>
    <div class="grow"></div>
    <span>{duree}</span>
  </div>
  <hr class="my-2" />
  <div class="flex flex-col gap-2 text-justify">
    {@render currentLocaleDescription()()}
  </div>
  {#if themes.length > 0}
    <div class="mt-2 flex flex-row">
      <span class="font-bold mr-1">{$t('themes')}:</span>
      <ThemesList {themes} />
    </div>
  {/if}
</div>
