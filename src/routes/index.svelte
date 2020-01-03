<script>
    import About from '../components/About/About.svelte';
    import Map from '../components/Map.svelte';
    import { navHeight } from '../shared/constants';
</script>

<style>
    header {
        background-image: url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80);
        background-size: cover;
        background-position: center;
    }
</style>

<svelte:head>
    <title>Surnadal veterinærpraksis</title>
</svelte:head>

<header
    id="header"
    class="flex flex-grow flex-col -mt-{navHeight} h-screen w-full
    justify-center md:justify-end items-center bg-black opacity-75 p-12">
    <img
        src="/img/logo/White.svg"
        class="w-full md:w-1/2 opacity-75"
        alt="Surnadal Veterinærpraksis logo" />
</header>

<About />

<Map />
