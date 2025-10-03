<script>
  import '../app.css';

  import pngIcon from '$lib/assets/coffee-icon.png';
  import Flag from '$lib/components/Flag.svelte';
  import '$lib/i18n';
  import { isLoading, t } from 'svelte-i18n';
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
      <a href="/">{$t('home')}</a>
      <span>-</span>
      <a href="/a-propos">{$t('a-propos')}</a>
      <span>-</span>
      <a href="/cv">{$t('cv')}</a>
      <Flag />
    </nav>
    <main
      class="flex grow"
      id="contenu">
      <slot></slot>
    </main>
    <footer class="sm:container sm:mx-auto no-print my-4 flex gap-4 flex-row">
      <span>Yohann Bacha, 2024</span>
      <a href="/plan">{$t('plan-du-site')}</a>
    </footer>
  </div>
{/if}

<style lang="postcss">
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
