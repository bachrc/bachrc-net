<script>
  import '../app.css';

  import '$lib/i18n';
  import { isLoading } from 'svelte-i18n';
  import { t } from 'svelte-i18n';
  import Flag from '$lib/components/Flag.svelte';

  let { children } = $props();
</script>

{#if !$isLoading}
  <div class="flex flex-col mx-2 min-h-screen">
    <nav class="px-4 flex flex-row py-2 gap-2 sm:gap-4 h-12 no-print">
      <div class="grow"></div>
      <a href="/">{$t('home')}</a>
      <span>-</span>
      <a href="/about">{$t('a-propos')}</a>
      <span>-</span>
      <a href="/cv">{$t('cv')}</a>
      <span>-</span>
      <a href="https://cyberendroit.net">{$t('blog')}</a>
      <Flag />
    </nav>
    {@render children()}
    <footer class="no-print">
      <span>Yohann Bacha, 2024</span>
    </footer>
  </div>
{/if}

<style lang="postcss">
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
