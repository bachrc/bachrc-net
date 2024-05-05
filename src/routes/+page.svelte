<script>
  import { t } from 'svelte-i18n';
  import githubLogo from '$lib/assets/github.svg';
  import linkedinLogo from '$lib/assets/linkedin.svg';
  import photoAvif from '$lib/assets/photo.avif';
  import photoWebp from '$lib/assets/photo.webp';
  import photoPng from '$lib/assets/photo.png';
</script>

<svelte:head>
  <title>bachrc</title>
</svelte:head>

<div class="items-center flex flex-col grow justify-center">
  <picture>
    <source
      type="image/avif"
      srcset={photoAvif} />
    <source
      type="image/webp"
      srcset={photoWebp} />
    <img
      src={photoPng}
      alt={$t('mon-visage')}
      class=" rounded-full h-48" />
  </picture>
  <hr class="h-8" />
  <h1 class="text-3xl font-bold">Yohann Bacha</h1>
  <h2>{$t('job_title')}</h2>
  <div class="flex flex-row gap-2 pt-4 items-center">
    <a href="https://github.com/bachrc">
      <img
        class="h-16"
        src={githubLogo}
        alt="Github Logo" />
    </a>
    <a href="https://www.linkedin.com/in/yohannbacha/">
      <img
        class="h-20"
        src={linkedinLogo}
        alt="Linkedin Logo" />
    </a>
  </div>
</div>
