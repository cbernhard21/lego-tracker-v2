<script>
  import {legos} from '../stores/legoStore';
  import LegoCard from '../components/LegoCard.svelte';
</script>

<svelte:head>
  <title>Lego Tracker</title>
</svelte:head>


{#each $legos as lego }
  <LegoCard lego={lego} />
{/each}  



