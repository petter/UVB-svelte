<script>
    import Nav from '../components/Nav/Nav.svelte';
    import Footer from '../components/Footer/Footer.svelte';

    export let segment;
</script>

<div class="min-h-screen flex flex-col">
    <Nav {segment} />

    <main class="flex relative bg-indigo-100 flex-grow flex-col">
        <slot />
    </main>

    <Footer />
</div>
