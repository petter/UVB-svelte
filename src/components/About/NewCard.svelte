<script>
    import Carousel from '../UI/Carousel.svelte';

    export let name;
    export let title;
    export let phone;
    // export let email;
    export let images;
    // export let description;
    export let descriptionList;
</script>

<div class="w-full flex flex-row">
    <Carousel {images} />
    <div class="bg-indigo-300">
        <div>{name}</div>
        <div>{title}</div>
        <div>{phone}</div>
    </div>
</div>
