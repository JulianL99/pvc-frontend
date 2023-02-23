<script>
  import Loader from "../components/Loader.svelte";
  import { API_URL } from "../constants";

  let recipeURL = "";
  let recipeData = null;
  let loading = false;

  const handleSubmitUrl = () => {
    loading = true;
    console.log(recipeURL);
    fetch(`${API_URL}/parse_recipe?url=${recipeURL}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    })
      .then((res) => {
        console.log(
          res.json().then((data) => {
            recipeData = data;
            console.log(data);
          })
        );
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => (loading = false));
  };
</script>

<div class="recipe-parser-container">
  <input
    class="recipe-url-input"
    type="text"
    bind:value={recipeURL}
    placeholder="Enter a recipe URL"
  />
  {#if loading}
    <Loader />
  {:else}
    <button on:click={handleSubmitUrl} disabled={loading}>Submit</button>
  {/if}
  {#if recipeData}
    <div>{JSON.stringify(recipeData)}</div>
  {/if}
</div>

<style>
  .recipe-parser-container {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 40px;
    overflow: auto;
  }

  .recipe-url-input {
    min-width: 400px;
  }
</style>
