<script>
    // import Link from '../UI/Link.svelte';

    export let name;
    export let title;
    export let phone;
    // export let email;
    export let image;

    let className;
    export { className as class };
</script>

<div
    class="flex flex-col lg:flex-row bg-indigo-200 items-center rounded-lg m-2
    p-6 {className}">
    <img
        src={image}
        alt="Bilde av {name}"
        class="h-24 w-24 rounded-full lg:mr-4" />
    <div class="text-center lg:text-left">
        <h2 class="text-lg font-semibold">{name}</h2>
        <div class="font-hairline text-indigo-800">{title}</div>
        <div class="">{phone}</div>
        <!-- <Link href="mailto:{email}">{email}</Link> -->
    </div>
</div>
