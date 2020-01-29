<script>
    export let images; // array of image urls

    let cur = 0;

    setInterval(() => {
        cur = (cur + 1) % images.length;
    }, 10000);
</script>

{#each images as image, i}
    <div
        class="absolute left-0 top-0 w-full h-full bg-cover bg-center
        transition-opacity transition-1000 {i === cur ? 'opacity-100' : 'opacity-0'}"
        style="background-image: url({image})" />
{/each}
