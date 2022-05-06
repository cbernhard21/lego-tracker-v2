<script>
  import {legos} from '../stores/legoStore';
  import LegoCard from '../components/LegoCard.svelte';

  let categories = ['Super Mario', 'Star Wars', 'Disney', 'City', 'Dinosaur', '3-1 Creator', 'Minecraft'];

 
</script>

<svelte:head>
  <title>Lego Tracker</title>
</svelte:head>

<div class="main-grid-container">
  {#each categories as category}
  <h2 class="col-span-full">{category}</h2>
  {#each $legos as lego}
    {#if lego.category.includes(category)}
      <LegoCard lego={lego} />
    {/if}
  {/each}
{/each}
</div>



<!-- <div class="main-grid-container">
  
  {#each $legos as lego }
    <LegoCard lego={lego} />
  {/each}  

</div> -->




