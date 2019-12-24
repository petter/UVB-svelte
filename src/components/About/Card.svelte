<script>
    import Link from '../UI/Link.svelte';

    export let name;
    export let title;
    export let phone;
    export let email;
    export let image;

    let className;
    export { className as class };
</script>

<div
    class="flex flex-col md:flex-row bg-indigo-100 items-center rounded-lg my-2
    p-6 {className}">
    <img
        src={image}
        alt="Bilde av {name}"
        class="h-20 w-20 rounded-full md:mr-4" />
    <div class="text-center md:text-left">
        <h2 class="text-lg font-semibold">{name}</h2>
        <div class="font-hairline text-indigo-800">{title}</div>
        <div class="">{phone}</div>
        <Link href="mailto:{email}">{email}</Link>
    </div>
</div>
