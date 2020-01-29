<script>
    import { onMount } from 'svelte';
    import About from '../components/About/About.svelte';
    import Map from '../components/Map.svelte';
    import Carousel from '../components/Header/Carousel.svelte';

    const carouselImages = [
        { img: '/img/tinkerstick.jpg', pos: '17% 92%' },
        { img: '/img/tinkerinnature.jpg', pos: '62% 61%' },
        { img: '/img/baileyinthesun.jpg', pos: '14% 30%' },
        { img: '/img/uziwithdogswater.jpg', pos: '58% 16%' },
        { img: '/img/horseflehmenresponse.jpg', pos: '38% 51%' },
        { img: '/img/tinkerbaileygate.jpg', pos: '44% 71%' },
        { img: '/img/cows.jpg', pos: '30% 44%' },
        { img: '/img/vigdispig.jpg', pos: '32% 63%' },
        { img: '/img/uzicuddlingbailey.jpg', pos: '58% 23%' },
        { img: '/img/horse1.jpg', pos: '47% 46%' },
        { img: '/img/horse2.jpg', pos: '21% 43%' },
        { img: '/img/dogs.jpg', pos: '50% 0%' },
        { img: '/img/baileymountain.jpg', pos: 'center' },
        { img: '/img/uziandbaileywater.jpg', pos: '29% 49%' }
    ];
</script>

<style>
    h1 {
        text-shadow: 2px 2px 8px black;
        opacity: 90%;
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
        class="uppercase z-10 font-bold text-blue-100 text-3xl md:text-4xl
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
