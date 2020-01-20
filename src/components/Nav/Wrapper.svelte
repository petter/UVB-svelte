<script>
    import { navHeight } from '../../utils/frontend/constants';
    import { onMount } from 'svelte';

    let additionalClassNames = '';
    export { additionalClassNames as class };
    export let isHome = false;

    let navBg = 'bg-transparent';
    const scrollEventHandler = () => {
        if (!process.browser) return;
        if (isHome)
            navBg = window.scrollY < 50 ? 'bg-transparent' : 'bg-blue-900';
        else navBg = 'bg-blue-900';
    };
    $: isHome, scrollEventHandler();

    onMount(() => {
        scrollEventHandler();
        window.addEventListener('scroll', scrollEventHandler);
        return () => window.removeEventListener('scroll', scrollEventHandler);
    });
</script>

<style>
    .gradient {
        background-image: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(255, 255, 255, 0) 100%
        );
    }
</style>

<div class="fixed top-0 left-0 w-full h-{navHeight} gradient z-40" />
<nav
    class="fixed z-40 w-full h-{navHeight} flex items-center flex-wrap
    justify-between px-6 transition-bg transition-250 {navBg}
    {additionalClassNames}">
    <slot />
</nav>
