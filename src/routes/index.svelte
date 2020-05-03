<script>
    import { onMount } from 'svelte';
    import Section from '../frontend/components/UI/Section.svelte';
    import Single from '../frontend/components/Layouts/Single.svelte';
    import H1 from '../frontend/components/UI/H1.svelte';
    import P from '../frontend/components/UI/P.svelte';
</script>

<svelte:head>
    <title>Surnadal veterinærpraksis</title>
</svelte:head>

<Single>
    <Section id="intro" class="mx-auto max-w-4xl">
        <H1>Om oss</H1>
        <P>
            Surnadal veterinærpraksis drives av Vigdis og Uzi Burger. Klinikken
            er for tiden under renovering, og vi ser frem til å ta i mot våre
            kunder i flotte nye lokaler i løpet av våren 2020.
        </P>
        <P>
            Praksisen består av over 400 kvadratmeter klinikk og dyrepensjonat
            med tilhørende uteareal på over 7 dekar tiltenkt utfoldelse og
            aktivitet for hunder og mennesker på et inngjerdet område. Her vil
            vi kunne ta i mot hund, katt, samt eksotiske dyr av alle slag.
        </P>
        <P>
            Vi ønsker å skape et godt fagmiljø for dyreeiere og dyreentusiaster,
            som oppfordrer til felleskap og samarbeid for å fremme dyrevelferd
            og prestasjon.
        </P>
    </Section>
</Single>
