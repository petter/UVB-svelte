<script>
    import { cur } from './carouselStore';
    export let images = []; // array of {img : string, pos : string}
</script>

{#each images as { img, pos }, i}
    <div
        class="{i === $cur % images.length ? 'opacity-100' : 'opacity-0'}
        absolute left-0 top-0 w-full h-full bg-gray-300 bg-cover bg-center
        transition-opacity transition-1000"
        style="background-image: url({img}); background-position: {pos}" />
{/each}
