<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }
  main {
    position: relative;
    width: 100%;
    background-color: #ccc;
    padding: 2em;
    margin: 0 auto;
    flex: 1;
  }
</style>

<div>
  <Nav {segment} />

  <main>
    <slot />
  </main>
  <Footer />
</div>
