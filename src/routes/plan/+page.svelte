<script>
  import { t } from 'svelte-i18n';
  import { base } from '$app/paths';
</script>

<div class="w-full mx-auto container sm:w-1/2 p-4 bg-indigo-100/50 rounded-xl">
  <h1 class="text-2xl pb-2 mb-2 border-b border-b-indigo-300">
    {$t('plan-du-site')}
  </h1>

  <ul class=" list-disc list-inside text-lg">
    <li><a href="{base}/">{$t('home')}</a></li>
    <li><a href="{base}/a-propos">{$t('a-propos')}</a></li>
    <li><a href="{base}/cv">{$t('cv')}</a></li>
    <li><a href="https://cyberendroit.net">{$t('blog')}</a></li>
    <li><a href="{base}/plan">{$t('plan-du-site')}</a></li>
  </ul>
</div>
