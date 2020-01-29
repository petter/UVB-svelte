<script>
    import { onMount } from 'svelte';
    import About from '../components/About/About.svelte';
    import Map from '../components/Map.svelte';
    import Carousel from '../components/Header/Carousel.svelte';

    const carouselImages = [
        '/img/uziwithdogswater.jpg',
        '/img/baileymountain.jpg',
        '/img/uziandbaileywater.jpg'
    ];
</script>

<style>
    h1 {
        text-shadow: 2px 2px 8px black;
    }
</style>

<svelte:head>
    <title>Surnadal veterinærpraksis</title>
</svelte:head>

<header
    id="header"
    class="relative flex flex-grow flex-col -mt-20 h-screen w-full
    justify-center items-center bg-black">
    <Carousel images={carouselImages} />
    <h1
        class="uppercase z-10 font-bold text-white text-3xl md:text-4xl
        lg:text-5xl w-full md:w-auto p-2 text-center overflow-hidden break-words">
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
