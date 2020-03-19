<script>
    import Carousel from './Carousel.svelte';
    export let images;
</script>

<header
    id="header"
    class="relative flex flex-grow flex-col max-h-1/2 h-screen w-full
    justify-center items-center bg-black">
    <Carousel {images} />
</header>
