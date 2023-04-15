<!-- App.svelte -->
<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./views/Home/Home.svelte";
  import NavBar from "./nav/NavBar.svelte";
  import About from "./views/About/About.svelte";
  import ScanRecipe from "./views/ScanRecipe/ScanRecipe.svelte";

  export let url = "";
</script>

<Router url="{url}">
  <NavBar />
  <Route path="/about" component={About} />
  <Route path="/scanRecipe" component={ScanRecipe} />
  <Route path="/"><Home /></Route>
</Router>