<script>
    import Burger from '../UI/Icons/Burger.svelte';
    import Cross from '../UI/Icons/Cross.svelte';
    export let segment;
    export let routes;

    let menuOpen = false;
</script>

<div class="fixed z-40 top-0 left-0 w-screen flex md:hidden justify-center ">
    <button
        class="bg-blue-800 py-2 px-4 text-blue-200"
        on:click={() => (menuOpen = !menuOpen)}>
        {menuOpen ? 'LUKK' : 'MENY'}
    </button>

</div>

<div class="w-0 md:w-64" />
<nav
    class="{menuOpen ? 'flex' : 'hidden'} md:flex flex-col fixed z-30 h-screen
    w-full md:w-64 bg-blue-900 text-white p-4 pt-16 pointer-events-none">
    <a href="/">
        <img
            src="/img/logo/White.svg"
            alt="logo"
            class="mb-4 w-full max-w-sm mx-auto" />
    </a>
    <div class="flex flex-col">
        {#each routes as route}
            <a>test</a>
        {/each}
    </div>
</nav>
