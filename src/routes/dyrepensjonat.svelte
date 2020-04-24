<script>
    import H1 from '../components/UI/H1.svelte';
    import P from '../components/UI/P.svelte';
    import Section from '../components/UI/Section.svelte';
    import WithImageCarousel from '../components/Layouts/WithImageCarousel.svelte';

    const carouselImages = [
        { img: '/img/dogs.jpg', pos: '50% 0%' },
        { img: '/img/babytinker.jpg', pos: '50% 50%' }
    ];
</script>

<svelte:head>
    <title>Dyrepensjonat</title>
</svelte:head>

<WithImageCarousel images={carouselImages}>
    <Section id="pensjonat">
        <H1>Dyrepensjonat</H1>

        <P>
            I nær fremtid ønsker vi å åpne vårt dyrepensjonat, hvor vi vil kunne
            ta i mot dyr på daglig basis mens eier er på jobb/borte, eller i
            lengre perioder i forbindelse med reise eller sykdom hos eier.
        </P>

        <P>
            Dyrene vil der få et privat rom tilknyttet en utendørs innhegning
            for at de skal ha mulighet til fri bevegelse, samt mulighet til å
            gjøre fra seg. De vil også få regelmessig sosial kontakt, aktivitet
            og mosjon.
        </P>

        <P>
            På den gamle fotballbanen ved klinikken vil det settes opp en større
            inhegning som vil bli tilrettelagt for fysisk aktivitet og lek for
            flere hunder sammen. Den vil være åpen og tilgjenelig for bruk av
            vaksinerte og parasittbehandlede hunder.
        </P>

    </Section>
</WithImageCarousel>
