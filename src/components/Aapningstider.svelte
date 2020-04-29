<script>
    import H2 from './UI/H2.svelte';

    export let expandOnDesktop = true;
</script>

<H2>Åpningstider</H2>
<div class="flex flex-col {expandOnDesktop && 'sm:flex-row'}">
    <div class="flex flex-col mb-4 {expandOnDesktop && 'sm:mr-10 sm:mb-0'}">
        <span class="font-bold">Hverdager</span>
        <span>08:00 - 09:30</span>
        <span>16:00 - 19:00</span>
    </div>
    <div class="flex flex-col">
        <span class="font-bold">Helg og ferier</span>
        <span>Etter avtale</span>
    </div>
</div>
