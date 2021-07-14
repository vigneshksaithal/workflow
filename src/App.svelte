<script>
  import router from 'page';
  import 'tailwindcss/tailwind.css';
  import Head from './Head.svelte';
  import Homepage from './Homepage.svelte';

  let page;

  router('/', () => (page = Homepage));

  router.start();
</script>

<Head />

<div class="container px-4 max-w-xl mx-auto mt-6">
  <svelte:component this={page} />
</div>
