<script>
  let isNavOpen = false;

  const openNav = () => isNavOpen = !isNavOpen;

</script>

<div class="header-wrapper w-full bg-yellow-400 relative">
  <header class="container py-5 flex justify-between items-center">
    <h1 class="text-2xl md:text-4xl">Colin's Lego Tracker</h1>

    <div class="nav-wrapper absolute bg-yellow-400 inset-x-0 md:static" class:open={isNavOpen}>
      <nav class="container flex flex-col content-around gap-4 md:flex-row md:items-center">
        <a href="/" on:click={openNav}>Home</a>
        <a href="/login" class="pb-5 md:pb-0" on:click={openNav}>Login</a>
      </nav>
    </div>

    <div class="w-10 h-6 flex flex-col justify-around items-center md:hidden" on:click={openNav}>
      <div class="h-0.5 w-5/6 bg-neutral-800 rounded-md"></div>
      <div class="h-0.5 w-5/6 bg-neutral-800 rounded-sm"></div>
      <div class="h-0.5 w-5/6 bg-neutral-800 rounded-sm"></div>
    </div>

  </header>
</div>

<style>
  .nav-wrapper {
    top: 100%;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform .3s ease-in-out;
  }

  @media (min-width: 768px) {
    .nav-wrapper {
      transform: scale(1,1);
    }
  }

  .open {
    transform: scale(1, 1);
  }

</style>