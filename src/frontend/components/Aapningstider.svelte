<script>
    import H2 from './UI/H2.svelte';

    export let expandOnDesktop = true;
</script>

<H2>Åpningstider</H2>
<div class="flex flex-col {expandOnDesktop && 'sm:flex-row'}">
    <div class="flex flex-col mb-4 {expandOnDesktop && 'sm:mr-10 sm:mb-0'}">
        <span class="font-bold">Hverdager</span>
        <span>
            <time>08:00</time>
            -
            <time>09:30</time>
        </span>
        <span>
            <time>16:00</time>
            -
            <time>19:00</time>
        </span>
    </div>
    <div class="flex flex-col">
        <span class="font-bold">Helg og ferier</span>
        <span>Etter avtale</span>
    </div>
</div>
