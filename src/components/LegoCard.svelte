<script>
  export let lego;
  // console.log(lego);
</script>


<article class="card bg-white rounded-2xl shadow-md">
  <img src="{lego.image}" alt="{lego.name}" class="object-cover w-full rounded-2xl mb-4 lg:max-h-52">
  <div class="card-content p-5">
    <h2 class="card-title">{lego.name}</h2>
    <p class="card-text">
      <a href="{lego.instructions}" class="text-blue-800">Instructions</a>
    </p>
  </div>
</article>

<style>

</style>