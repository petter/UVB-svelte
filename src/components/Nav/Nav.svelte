<script>
    export let segment;
    export let routes;

    let menuOpen = false;
</script>

<style>
    nav {
        box-shadow: rgba(0, 0, 0, 0.5) 1px 0px 5px 5px;
    }
</style>

<div class="fixed z-40 top-0 left-0 w-screen flex md:hidden justify-center ">
    <button
        class="bg-blue-800 py-2 px-4 text-blue-200"
        on:click={() => (menuOpen = !menuOpen)}>
        {menuOpen ? 'LUKK' : 'MENY'}
    </button>

</div>

<div class="w-0 md:w-64" />
<nav
    class="{menuOpen ? 'flex' : 'hidden'} md:flex flex-col fixed z-20
    min-h-screen w-full md:w-64 bg-blue-900 text-white p-4 pt-16">
    <img
        src="/img/logo/White.svg"
        alt="logo"
        class="mb-4 w-full max-w-sm mx-auto" />
    <div class="flex flex-col">
        {#each routes as { href, text, segment: routeSegment }}
            <a {href} on:click={() => (menuOpen = false)} class="mt-1">
                <span
                    class="font-bold border-b {segment === routeSegment ? 'border-b text-blue-100 border-blue-100' : 'text-blue-200 border-transparent hover:border-blue-200'}
                    inline-flex transition-all transition-100">
                    {text}
                </span>
            </a>
        {/each}
    </div>
</nav>
