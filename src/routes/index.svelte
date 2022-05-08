<!-- uncomment this section when ready to launch -->

<!-- <script context="module">
  // const url = `https://api.sheety.co/76ad47b2d5b6382b8a64c0ad92494661/legoProject/legos`;
  // const url = `../test.json`;

  export async function load({fetch}) {

    const res = await fetch('test.json');
    const data = await res.json();
    console.log(data)
    return {
      props: {
        legos: data.legos
      }
    }
  }

</script> -->

<script>
  // import {legos} from '../stores/legoStore';
  import json from '../db/db.json'; //get rid of this
  import LegoCard from '../components/LegoCard.svelte';

  export let legos = json.legos //change this to just legos

  let categories = [];

  legos.forEach(lego => {
    if(categories.includes(lego.category)){
      return
    } else {
      categories.push(lego.category)
    }
  });

  let searchValue = '';

  //search by individaul lego
  $: searchedLegos = legos.filter((lego) => {
    return lego.name.toLowerCase().includes(searchValue.toLowerCase()) || lego.category.toLowerCase().includes(searchValue.toLowerCase());
  });

  //search by category
  $: searchedCategories = categories.filter((category) => {
      return category.toLowerCase().includes(searchValue.toLowerCase());
    });

 </script>

<svelte:head>
  <title>Lego Tracker</title>
</svelte:head>

<form class="search w-full border flex mt-4 rounded-lg overflow-hidden md:w-3/4">
  <label for="lego-search" class="self-center p-4 bg-yellow-200">Search By Category</label>
  <input type="text" id="lego-search" class="grow p-2" placeholder="ex. Star Wars" bind:value={searchValue}>
</form>

{#each searchedCategories as category}
  <div class="main-grid-container mb-8">
    <h2 class="col-span-full text-2xl font-semibold">{category}</h2>
    {#each legos as lego}
      {#if lego.category.includes(category)}
        <LegoCard lego={lego} />
      {/if}
    {/each}
  </div>
{/each}








