<script context="module">
  const url = `https://api.sheety.co/76ad47b2d5b6382b8a64c0ad92494661/legoProject/legos`;

  export async function load({fetch}) {
    const res = await fetch(url);
    const data = await res.json();
    return {
      props: {
        legos: data.legos
      }
    }
  }

</script>

<script>
  // import {legos} from '../stores/legoStore';
  import LegoCard from '../components/LegoCard.svelte';
  export let legos;

  let categories = [];
  legos.forEach(lego => {
    if(categories.includes(lego.category)){
      return
    } else {
      categories.push(lego.category)
    }
  });

  let searchValue = '';
  $: searchedLegos = legos.filter((lego) => {
    return lego.name.toLowerCase().includes(searchValue.toLowerCase()) || lego.category.toLowerCase().includes(searchValue.toLowerCase());
  })

 
</script>

<svelte:head>
  <title>Lego Tracker</title>
</svelte:head>

<form class="search">
  <label for="lego-search">Find Lego</label>
  <input type="text" id="lego-search" bind:value={searchValue}>
</form>

{#each categories as category}
  <div class="main-grid-container mb-8">
    <h2 class="col-span-full text-2xl font-semibold">{category}</h2>
    {#each searchedLegos as lego}
      {#if lego.category.includes(category)}
        <LegoCard lego={lego} />
      {/if}
    {/each}
  </div>
{/each}








