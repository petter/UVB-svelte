<script>
    import Nav from '../components/Nav/Nav.svelte';
    import Footer from '../components/Footer.svelte';

    export let segment;
</script>

<style>
    .layout {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
    }
</style>

<div class="layout">
    <Nav {segment} />

    <main class="bg-indigo-300">
        <slot />
    </main>

    <Footer />
</div>
