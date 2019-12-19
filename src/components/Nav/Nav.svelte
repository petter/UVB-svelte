<script>
    import Burger from './Burger.svelte';
    // export let segment;

    let menuOpen = false;

    let routes = [
        {
            href: '.',
            text: 'Hjem'
        },
        {
            href: 'about',
            text: 'Om oss'
        },
        {
            href: 'contact',
            text: 'Kontakt'
        }
    ];
</script>

<nav
    class="flex items-center flex-wrap justify-between p-6 bg-blue-800
    text-blue-100">
    <div class="flex items-center w-10/12 lg:w-auto">
        <span class="font-semibold text-l sm:text-xl tracking-tight uppercase">
            Surnadal Veterinærpraksis
        </span>
    </div>
    <Burger class="lg:hidden" on:click={() => (menuOpen = !menuOpen)} />
    <div
        class:hidden={!menuOpen}
        class="w-full block lg:flex lg:visible lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
            {#each routes as route}
                <a
                    class="block mt-4 text-blue-200 hover:text-blue-100
                    lg:inline-block lg:mt-0 mr-4 transition-colors
                    transition-100"
                    href={route.href}
                    on:click={() => (menuOpen = false)}>
                    {route.text}
                </a>
            {/each}
        </div>
    </div>
</nav>
