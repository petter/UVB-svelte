<script>
    import { onMount } from 'svelte';
    import About from '../components/About/About.svelte';
    import Map from '../components/Map.svelte';
    import { navHeight } from '../shared/constants';

    let animStart = false;
    onMount(() => setTimeout(() => (animStart = true), 250));
</script>

<style>
    header {
        background-image: url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80);
        background-size: cover;
        background-position: center;
    }

    h1 {
        text-shadow: 2px 2px 8px black;
    }
</style>

<svelte:head>
    <title>Surnadal veterinærpraksis</title>
</svelte:head>

<header
    id="header"
    class="flex flex-grow flex-col -mt-{navHeight} h-screen w-full
    justify-center items-center bg-black">
    <h1
        class="uppercase font-bold text-white text-3xl md:text-4xl lg:text-5xl
        w-full md:w-auto p-2 text-center overflow-hidden break-words">
        Surnadal veterinærpraksis
    </h1>

    <!-- <img
        src="/img/logo/Original.svg"
        class="w-full md:w-1/2 {animStart ? 'opacity-75' : 'opacity-0'}
        transition-opacity transition-1000 transition-ease-in-out"
        alt="Surnadal Veterinærpraksis logo" /> -->
</header>

<About />

<Map />
