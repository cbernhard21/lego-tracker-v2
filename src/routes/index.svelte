<script>
  import {legos} from '../stores/legoStore';
</script>

<svelte:head>
  <title>Lego Tracker</title>
</svelte:head>


{#each $legos as lego }
  <p>{lego.name}</p>
  <p>{lego.legoId}</p>
{/each}  




<style>

</style>
