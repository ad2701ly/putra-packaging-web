<script>
  import "../app.css";
  import Footer from "./.components/footer.svelte";
  import Header from "./.components/header.svelte";
</script>

<div class=" ">
  <Header />
  <div
    class=" overflow-y-scroll scrollbar-hide from-purple-400 to-orange-300 bg-gradient-to-br via-purple-500 h-screen pt-16"
  >
    <slot />
    <Footer />
  </div>
</div>
