<script lang="ts">
  import RecipeParser from "./views/RecipeParser.svelte";
</script>

<main>
  <RecipeParser />
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }

  :global(input) {
    border: none;
    border-bottom: 1px solid #000000;
    padding-bottom: 1px;
    outline-width: 0;
  }

  :global(input):focus {
    border-bottom: 2px solid #000000;
    padding-bottom: 0;
  }
</style>
