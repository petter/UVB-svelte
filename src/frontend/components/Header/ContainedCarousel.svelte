<script>
    import Carousel from '../UI/Carousel.svelte';
    export let images;
</script>

<header id="header" class="flex max-h-1/2 h-screen w-full">
    <div class="relative w-full h-full">
        <Carousel {images} />
    </div>
</header>
