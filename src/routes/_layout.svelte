<script>
    import Nav from '../components/Nav/Nav.svelte';
    import Footer from '../components/Footer.svelte';

    export let segment;
</script>

<div class="min-h-screen flex flex-col">
    <Nav {segment} />

    <main class="bg-indigo-300 flex-1">
        <slot />
    </main>

    <Footer />
</div>
