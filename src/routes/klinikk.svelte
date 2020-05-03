<script>
    import H1 from '../frontend/components/UI/H1.svelte';
    import H2 from '../frontend/components/UI/H2.svelte';
    import P from '../frontend/components/UI/P.svelte';
    import Ul from '../frontend/components/UI/Ul.svelte';
    import Section from '../frontend/components/UI/Section.svelte';
    import Aapningstider from '../frontend/components/Aapningstider.svelte';
    import WithImageCarousel from '../frontend/components/Layouts/WithImageCarousel.svelte';

    const carouselImages = [
        { img: '/img/bunny.jpg', pos: '50% 30%' },
        { img: '/img/tinkerwinterwoods.jpg', pos: '55% 40%' },
        { img: '/img/tinkerbaileygate.jpg', pos: '44% 71%' },
        { img: '/img/baileyinthesun.jpg', pos: '14% 30%' },
        { img: '/img/tinkerstick.jpg', pos: '17% 92%' }
    ];

    const tjenester = [
        'Forebyggende helsetjenester',
        'Diagnosere',
        'Behandle',
        'Akutthjelp',
        'Kirurgi',
        'Intensivbehandling',
        'Rehabilitering'
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
            Her vil vi ta imot hunder, katter, gnagere, reptiler og fugler.
        </P>

        <P>
            Vi praktiserer ambulerende stordyrpraksis på formiddag, og er
            tilgjengelige på klinikken på morgen og ettermiddag.
        </P>
        <P>
            Det er mulighet for drop-in i de faste åpningstidene, utenom disse
            tidene kan det gjøres timesavtale på tlf, email, facebook eller ved
            bruk av kontaktskjema på vår nettside. Vi er fleksible og
            behjelpelige med å finne en tid som passer for deg og dine behov.
            For akutte behov døgnet rundt og på helg er vi tilgjengelig på tlf:
            <i>916 43 977</i>
        </P>

    </Section>
    <Section id="åpningstider">
        <Aapningstider />
    </Section>

    <Section id="tjenester">
        <H2>Tjenester</H2>
        <Ul>
            {#each tjenester as tjeneste}
                <li>{tjeneste}</li>
            {/each}
        </Ul>
    </Section>
</WithImageCarousel>
