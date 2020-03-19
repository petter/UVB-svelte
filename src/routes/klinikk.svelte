<script>
    import H1 from '../components/UI/H1.svelte';
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
    <title>Klinikk</title>
</svelte:head>

<ContainedCarousel images={carouselImages} />

<Section id="klinikk">
    <H1>Klinikk</H1>

    <p>
        Våren 2020 åpner Surnadal veterinærpraksis opp sin nye, velutsyrte
        smådyr klinikk i det tidligere forsamlingshuset
        <i>Folkets hus</i>
        . Her vil vi ta imot hunder, gnagere, reptiler og fugler.
    </p>

    <p>
        Klinikken vil ha faste åpningstider man-fre kl 10:00-17:00 hvor man kan
        bestille time hos veterinær eller stoppe innom butikken hvor det vil
        være utsalg av veterinære resept-dietter og andre produkter.
    </p>

    <p>
        Utenfor faste åpningstider kan vi nås på tlf, og vil kunne tilby akutt
        hjelp døgent rundt på klinikken.
    </p>
</Section>
