<script>
  import { t } from 'svelte-i18n';
</script>

<div class="sm:container sm:mx-auto p-4 bg-indigo-100/50 rounded-xl">
  <h1 class="text-2xl">{$t('plan-du-site')}</h1>
  <ul class=" list-disc list-inside text-lg">
    <li><a href="/">{$t('home')}</a></li>
    <li><a href="/a-propos">{$t('a-propos')}</a></li>
    <li><a href="/cv">{$t('cv')}</a></li>
    <li><a href="https://cyberendroit.net">{$t('blog')}</a></li>
    <li><a href="/plan">{$t('plan-du-site')}</a></li>
  </ul>
</div>
