<script>
  let isNavOpen = false;

  function openNav() {
    isNavOpen = !isNavOpen;
    
  }

</script>

<div class="header-wrapper absolute w-full bg-yellow-400 relative">
  <header class="container py-5 flex justify-between items-center">
    <h1 class="text-2xl md:text-4xl">Colin's Lego Tracker</h1>

    <div class="nav-wrapper absolute bg-yellow-400 inset-x-0" class:open={isNavOpen}>
      <nav class="container flex flex-col content-around md:flex-row gap-4">
        <a href="/">Home</a>
        <a href="/login" class="pb-5">Login</a>
      </nav>
    </div>

    <div class="md:hidden w-10 h-8 border border-slate-800 flex flex-col justify-around items-center" on:click={openNav}>
      <div class="h-0.5 w-5/6 bg-slate-800"></div>
      <div class="h-0.5 w-5/6 bg-slate-800"></div>
      <div class="h-0.5 w-5/6 bg-slate-800"></div>
    </div>

  </header>
</div>

<style>
  .nav-wrapper {
    top: 100%;
    transform: scale(1, 0);
  }

  .open {
    transform: scale(1, 1);
  }

  /* .burger-container {
    width: 2rem;
    height: 2rem;
    border: 1px solid #333;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  } */



</style>