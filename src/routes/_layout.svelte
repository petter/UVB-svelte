<script>
    import Nav from '../components/Nav/Nav.svelte';
    import Footer from '../components/Footer/Footer.svelte';
    import { navHeight } from '../utils/frontend/constants';

    export let segment;
</script>

<div class="min-h-screen flex flex-col flex-grow">
    <Nav {segment} />

    <main class="flex relative bg-indigo-100 flex-grow flex-col pt-{navHeight}">
        <slot />
    </main>

    <Footer />
</div>
