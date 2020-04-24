<script>
    import H1 from '../components/UI/H1.svelte';
    import P from '../components/UI/P.svelte';
    import Section from '../components/UI/Section.svelte';
    import WithImageCarousel from '../components/Layouts/WithImageCarousel.svelte';

    const carouselImages = [
        { img: '/img/bunny.jpg', pos: '50% 30%' },
        { img: '/img/tinkerwinterwoods.jpg', pos: '40% 40%' },
        { img: '/img/tinkerbaileygate.jpg', pos: '44% 71%' },
        { img: '/img/baileyinthesun.jpg', pos: '14% 30%' },
        { img: '/img/tinkerstick.jpg', pos: '17% 92%' }
    ];
</script>

<svelte:head>
    <title>Klinikk</title>
</svelte:head>

<WithImageCarousel images={carouselImages}>
    <Section id="klinikk">
        <H1>Klinikk</H1>

        <P>
            Våren 2020 åpner Surnadal veterinærpraksis opp sin nye, velutsyrte
            smådyr klinikk i det tidligere forsamlingshuset
            <i>Folkets hus.</i>
            Her vil vi ta imot hunder, gnagere, reptiler og fugler.
        </P>

        <P>
            Klinikken vil ha faste åpningstider man-fre kl 10:00-17:00 hvor man
            kan bestille time hos veterinær eller stoppe innom butikken hvor det
            vil være utsalg av veterinære resept-dietter og andre produkter.
        </P>

        <P>
            Utenfor faste åpningstider kan vi nås på tlf, og vil kunne tilby
            akutt hjelp døgnet rundt på klinikken.
        </P>
    </Section>
</WithImageCarousel>
