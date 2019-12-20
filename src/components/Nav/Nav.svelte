<script>
    import Burger from './Burger.svelte';
    // export let segment;

    let menuOpen = true;

    const routes = [
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

    const navBg = 'bg-blue-900';
    const activeText = 'text-indigo-100';
    const linkClasses = `text-indigo-200 hover:${activeText} transition-colors transition-100`;
</script>

<nav
    class="relative w-full flex items-center flex-wrap justify-between p-6 {navBg}
    {activeText}">
    <div class="flex items-center w-10/12 lg:w-auto">
        <span class="font-semibold text-l sm:text-xl tracking-tight uppercase">
            Surnadal Veterinærpraksis
        </span>
    </div>
    <Burger
        class="{linkClasses} w-6 lg:hidden"
        on:click={() => (menuOpen = !menuOpen)} />
    <div
        class:hidden={!menuOpen}
        class="absolute z-10 top-1 left-0 right-0 p-6 pt-0 lg:static lg:p-0
        block {navBg} lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
            {#each routes as route}
                <a
                    class="{linkClasses} block mt-4 lg:inline-block lg:mt-0 mr-4"
                    href={route.href}
                    on:click={() => (menuOpen = false)}>
                    {route.text}
                </a>
            {/each}
        </div>
    </div>
</nav>
