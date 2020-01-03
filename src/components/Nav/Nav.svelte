<script>
    import Burger from './Burger.svelte';
    import { navHeight } from '../../shared/constants';

    export let segment;

    let menuOpen = false;
    const routes = [
        {
            href: '.',
            segment: undefined,
            text: 'Hjem'
        },
        {
            href: 'about',
            segment: 'about',
            text: 'Om oss'
        },
        {
            href: 'contact',
            segment: 'contact',
            text: 'Kontakt'
        }
    ];

    const navBg = 'bg-blue-900';
    const activeColor = 'indigo-100';
    const activeText = `text-${activeColor}`;
    const transitionDuration = 'transition-100';
    const linkClasses = (textActive = false) =>
        `${
            textActive ? activeText : 'text-indigo-300'
        } hover:${activeText} transition-colors ${transitionDuration}`;
</script>

<nav
    class="fixed z-40 w-full h-{navHeight} flex items-center flex-wrap
    justify-between px-6 {navBg}
    {activeText}">
    <div class="flex items-center w-10/12 lg:w-auto">
        <span class="font-semibold text-l sm:text-xl tracking-tight uppercase">
            Surnadal Veterinærpraksis
        </span>
    </div>
    <Burger
        class="{linkClasses()} w-6 lg:hidden"
        on:click={() => (menuOpen = !menuOpen)} />
    <div
        class:hidden={!menuOpen}
        class="absolute z-10 top-1 left-0 right-0 p-6 pt-0 lg:static lg:p-0
        block {navBg} lg:flex lg:items-center lg:w-auto">
        <div
            class="flex text-sm justify-start items-start flex-col lg:flex-row
            lg:flex-grow">
            {#each routes as route}
                <a
                    class="{linkClasses(segment === route.segment)} border-solid
                    hover:border-solid hover:border-{activeColor} mt-4 lg:mt-0
                    border-b mr-4 transition-border {transitionDuration} py-1 {segment === route.segment ? `border-${activeColor}` : 'border-indigo-300'}
                    "
                    href={route.href}
                    on:click={() => (menuOpen = false)}>
                    {route.text}
                </a>
            {/each}
        </div>
    </div>
</nav>
