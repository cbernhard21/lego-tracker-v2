<script>
  import '../app.css'
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>



<div class="content">

  <div class="header-wrapper">
    <Header />
  </div>
  

  <div class="container main-wrapper">
    <slot></slot>
  </div>

  <div class="footer-wrapper">
    <Footer />
  </div>
  
  
</div>


<style>
.content {
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
}
</style>
