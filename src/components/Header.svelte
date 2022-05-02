<script>
  let isNavOpen = false;

  function openNav() {
    isNavOpen = !isNavOpen;
    
  }

</script>

<header class="container py-5 flex justify-between items-center relative">
  <h1 class="text-2xl md:text-4xl">Colin's Lego Tracker</h1>
  <nav class="bg-yellow-400 absolute flex flex-col md:flex-row gap-4 inset-x-0" class:open={isNavOpen}>
    <a href="/">Home</a>
    <a href="/login">Login</a>
  </nav>
  <p class="md:hidden" on:click={openNav}>Burger Menu</p>
</header>

<style>
  /* header {
    position: relative;
    z-index: 100;
  } */

  nav {
    position: absolute;
    top: 100%;
    transform: scale(1, 0);
  }

  .open {
    transform: scale(1, 1);
  }

</style>