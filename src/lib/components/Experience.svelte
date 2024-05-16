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
    <div class="mt-2 flex flex-row">
      <span class="font-bold mr-1">{$t('themes')}:</span>
      <ThemesList {themes} />
    </div>
  {/if}
</div>
