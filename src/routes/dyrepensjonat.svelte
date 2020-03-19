<script>
    import H1 from '../components/UI/H1.svelte';
    import P from '../components/UI/P.svelte';
    import Section from '../components/UI/Section.svelte';
    import ContainedCarousel from '../components/Header/ContainedCarousel.svelte';

    const carouselImages = [
        { img: '/img/tinkerstick.jpg', pos: '17% 92%' },
        { img: '/img/tinkerinnature.jpg', pos: '62% 61%' },
        { img: '/img/baileyinthesun.jpg', pos: '14% 30%' },
        { img: '/img/uziwithdogswater.jpg', pos: '58% 16%' },
        { img: '/img/horseflehmenresponse.jpg', pos: '38% 51%' },
        { img: '/img/tinkerbaileygate.jpg', pos: '44% 71%' },
        { img: '/img/cows.jpg', pos: '30% 44%' },
        { img: '/img/vigdispig.jpg', pos: '32% 63%' },
        { img: '/img/uzicuddlingbailey.jpg', pos: '58% 23%' },
        { img: '/img/horse1.jpg', pos: '47% 46%' },
        { img: '/img/horse2.jpg', pos: '21% 43%' },
        { img: '/img/dogs.jpg', pos: '50% 0%' },
        { img: '/img/baileymountain.jpg', pos: 'center' },
        { img: '/img/uziandbaileywater.jpg', pos: '29% 49%' }
    ];
</script>

<svelte:head>
    <title>Dyrepensjonat</title>
</svelte:head>

<ContainedCarousel images={carouselImages} />

<Section id="pensjonat">
    <H1>Dyrepensjonat</H1>

    <P>
        I nær fremtid ønsker vi å åpne vårt dyrepensjonat, hvor vi vil kunne ta
        i mot dyr på daglig basis mens eier er på jobb/borte, eller i lengre
        perioder i forbindelse med reise eller sykdom hos eier.
    </P>

    <P>
        Dyrene vil der få et privat rom tilknyttet en utendørs innhegning for at
        de skal ha mulighet til fri bevegelse, samt mulighet til å gjøre fra
        seg. De vil også få regelmessig sosial kontakt, aktivitet og mosjon.
    </P>

    <P>
        På den gamle fotballbanen ved klinikken vil det settes opp en større
        inhegning som vil bli tilrettelagt for fysisk aktivitet og lek for flere
        hunder sammen. Den vil være åpen og tilgjenelig for bruk av vaksinerte
        og parasittbehandlede hunder.
    </P>

</Section>
