<script>
    export let images = []; // array of {img : string, pos : string}
    export let interval = 10000;

    let cur = 0;

    setInterval(() => {
        cur = (cur + 1) % images.length;
    }, interval);
</script>

{#each images as { img, pos }, i}
    <div
        class="absolute left-0 top-0 w-full h-full bg-gray-300 bg-cover
        bg-center transition-opacity transition-1000 {i === cur ? 'opacity-100' : 'opacity-0'}"
        style="background-image: url({img}); background-position: {pos}" />
{/each}
