<script lang="ts">
  import ThemesList from './ThemesList.svelte';
  import { t } from 'svelte-i18n';
  import LocalisedContent from './LocalisedContent.svelte';

  export let titre: string;
  export let employeur: string;
  export let duree: string;
  export let themes: string[];
</script>

<div class="flex flex-col">
  <div class="flex flex-col bg-white/20 p-2">
    <span class="font-bold text-base">
      {titre}
    </span>
    <div class="flex flex-row">
      <span>Voila : {employeur}</span>
      <div class="grow"></div>
      <span>{duree}</span>
    </div>
  </div>
  <div class="flex flex-col gap-2 text-justify p-2">
    <LocalisedContent>
      <svelte:fragment slot="englishContent">
        <slot name="englishContent" />
      </svelte:fragment>
      <svelte:fragment slot="frenchContent">
        <slot name="frenchContent" />
      </svelte:fragment>
    </LocalisedContent>
  </div>
  {#if themes.length > 0}
    <div class="mt-2 flex flex-col p-2">
      <span class="font-bold mr-1">{$t('themes')}</span>
      <ThemesList {themes} />
    </div>
  {/if}
</div>
