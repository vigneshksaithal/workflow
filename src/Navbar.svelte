<script>
  var mobileMenuOpen = false;
</script>

<header
  class="border-b-2 border-green-400 flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white py-3 px-6 relative"
>
  <a href="/" class="flex">
    <img class="h-6 w-6 mr-2" src="/src/assets/logo.png" alt="logo" />
    <span>Workflow</span>
  </a>
  <button
    on:click={() => {
      mobileMenuOpen = !mobileMenuOpen;
    }}
    class="inline-block md:hidden w-10 h-8 bg-gray-200 text-gray-600 px-2 py-1"
  >
    <svg
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      /></svg
    >
  </button>
  <nav
    class="bg-blend-hard-light text-gray-800 absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-b-lg md:rounded-none md:shadow-none md:bg-transparent px-6 py-4 md:p-0"
    class:flex={mobileMenuOpen}
    class:hidden={!mobileMenuOpen}
    on:keydown={() => {
      mobileMenuOpen = false;
    }}
  >
    <a href="/" class="block py-1 hover:underline">About</a>
    <a href="/" class="block py-1 hover:underline">Contact</a>
  </nav>
</header>
