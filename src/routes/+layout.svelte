<script lang="ts">
  import { base } from '$app/paths';
  import '../app.css';

  import pngIcon from '$lib/assets/coffee-icon.png';
  import Flag from '$lib/components/Flag.svelte';
  import '$lib/i18n';
  import { isLoading, t } from 'svelte-i18n';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>bachrc</title>
  <link
    rel="icon"
    sizes="96x96"
    type="image/png"
    href={pngIcon} />

  <script
    async
    defer
    src="https://analytics.eu.umami.is/script.js"
    data-website-id="23383369-9ca0-40c6-a63a-c28aec503cfb"></script>
</svelte:head>
{#if !$isLoading}
  <ul id="evitement">
    <li>
      <a
        class="evitement"
        href="#contenu">Aller au contenu</a>
    </li>
  </ul>
  <div class="flex flex-col mx-2 min-h-screen">
    <nav
      class="px-4 flex flex-row py-2 gap-2 sm:gap-4 h-12 no-print justify-end sm:container sm:mx-auto">
      <a href="{base}/">{$t('home')}</a>
      <span>-</span>
      <a href="{base}/a-propos">{$t('a-propos')}</a>
      <span>-</span>
      <a href="{base}/cv">{$t('cv')}</a>
      <Flag />
    </nav>
    <main
      class="flex grow"
      id="contenu">
      {@render children?.()}
    </main>
    <footer class="sm:container sm:mx-auto no-print my-4 flex gap-4 flex-row">
      <span>Yohann Bacha, 2024</span>
      <a href="{base}/plan">{$t('plan-du-site')}</a>
    </footer>
  </div>
{/if}

<style lang="postcss">
  @reference "tailwindcss";
  
  a.evitement {
    position: absolute;
    left: -99999px;
  }
  a.evitement:focus {
    position: static;
  }
  :global(html) {
    background-color: theme(colors.indigo.200);
    font-family: 'Lato';
  }
  @media print {
    .no-print,
    .no-print * {
      display: none !important;
    }
  }
</style>
