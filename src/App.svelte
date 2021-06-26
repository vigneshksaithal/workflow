<script>
  import router from "page";
  import "tailwindcss/tailwind.css";
  import Head from "./Head.svelte";
  import Homepage from "./Homepage.svelte";

  let page;

  router("/", () => (page = Homepage));

  router.start();
</script>

<!-- <Head /> -->

<div class="container-sm px-3 max-w-3xl mx-auto mt-10">
  <svelte:component this={page} />
</div>
