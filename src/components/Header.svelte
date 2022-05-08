<script>
  let isNavOpen = false;
  const openNav = () => isNavOpen = !isNavOpen;
</script>

<div class="header-wrapper w-full bg-yellow-300 relative">
  <header class="container py-5 flex justify-between items-center">
    <h1 class="text-3xl md:text-4xl">Colin's Lego Tracker</h1>

    <!-- MAIN NAV -->
    <div class="nav-wrapper absolute bg-yellow-300 inset-x-0 md:static" class:open={isNavOpen}>
      <nav class="container flex flex-col content-around gap-4 md:flex-row md:items-center">
        <a href="/" on:click={openNav}>Home</a>
        <a href="/login" class="pb-5 md:pb-0" on:click={openNav}>Login</a>
      </nav>
    </div>

    <!-- BURGER MENU -->
    <div class="w-10 flex flex-col justify-around items-center md:hidden" on:click={openNav}>
      <div class="bg-slate-800 w-8 h-0.5 transition-all duration-200" class:move-top-bar={isNavOpen}></div>
      <div class="bg-slate-800 w-8 h-0.5 my-1.5 transition-all duration-200" class:opacity-0={isNavOpen}></div>
      <div class="bg-slate-800 w-8 h-0.5 transition-all duration-200" class:move-bottom-bar={isNavOpen}></div>
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

  .move-top-bar{
    transform: translateY(8px) rotate(45deg);
  }

  .move-bottom-bar {
    transform: translateY(-8px) rotate(-45deg);
  }

</style>