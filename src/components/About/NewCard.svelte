<script>
    import Carousel from '../UI/Carousel.svelte';
    import Flex1 from '../UI/Containers/Flex1.svelte';
    import FlexN from '../UI/Containers/FlexN.svelte';

    export let name;
    export let title;
    export let phone;
    // export let email;
    export let images;
    // export let description;
    export let descriptionList;
</script>

<style>
    li {
        list-style-type: '– ';
    }
</style>

<div
    class="w-full max-w-3xl m-2 flex flex-col sm:flex-row rounded-md
    overflow-hidden">
    <Flex1 class="relative min-h-1/4 sm:max-w-xs">
        <Carousel {images} />
    </Flex1>
    <FlexN n="2" class="flex-col bg-indigo-200">
        <div
            class="w-full px-4 py-1 bg-indigo-300 text-blue-900
            border-indigo-400">
            <h2 class="text-xl font-bold">{name}</h2>
            <div class="text-lg font-hairline text-indigo-800">{title}</div>
            <div class="text-lg">{phone}</div>
        </div>
        <ul class="ml-2 px-4 py-2">
            {#each descriptionList as desc}
                <li class="my-2">{desc}</li>
            {/each}
        </ul>
    </FlexN>
</div>
