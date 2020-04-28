<script>
    // import Link from '../UI/Link.svelte';

    export let name;
    export let title;
    export let phone;
    // export let email;
    export let image;
    export let description;
    export let descriptionList;

    let className;
    export { className as class };
</script>

<style>
    ul {
        list-style-type: '- ';
    }
</style>

<div class="p-2 w-full lg:w-1/2 h-auto">
    <div
        class="flex flex-col relative lg:flex-row bg-indigo-200 items-center
        lg:items-start rounded-lg rounded-b-none p-6 {className}">
        <img
            src={image}
            alt="Bilde av {name}"
            class="h-24 w-24 rounded-full lg:mr-4" />
        <div class="text-center lg:text-left self-center">
            <h2 class="text-lg font-semibold">{name}</h2>
            <div class="font-hairline text-indigo-800">{title}</div>
            <div>{phone}</div>
            <!-- <Link href="mailto:{email}">{email}</Link> -->
        </div>
    </div>
    <div class="flex flex-col bg-indigo-300 rounded-lg rounded-t-none p-6">
        <!-- <div>{description}</div> -->
        <ul>
            {#each descriptionList as desc}
                <li class="text-left">{desc}</li>
            {/each}
        </ul>
    </div>

</div>
