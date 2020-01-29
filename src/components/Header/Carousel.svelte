<script>
    export let images; // array of {img : string, pos : string}

    let cur = 0;

    setInterval(() => {
        cur = (cur + 1) % images.length;
    }, 5000);
</script>

{#each images as { img, pos }, i}
    <div
        class="absolute left-0 top-0 w-full h-full bg-cover bg-center
        transition-opacity transition-1000 {i === cur ? 'opacity-100' : 'opacity-0'}"
        style="background-image: url({img}); background-position: {pos}" />
{/each}
