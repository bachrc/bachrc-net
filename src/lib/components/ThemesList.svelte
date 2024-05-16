<script lang="ts">
  export let themes: string[];
</script>

<ul class="themes">
  {#each themes as theme}
    <li>{theme}</li>
  {/each}
</ul>

<style>
  .themes li {
    display: inline-block;
    padding-right: 5px;
  }

  .themes li:not(:first-child)::before {
    content: '🔹';
    padding-right: 5px;
  }
</style>
