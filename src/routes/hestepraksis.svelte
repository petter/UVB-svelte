<script>
    import WithImageCarousel from '../components/Layouts/WithImageCarousel.svelte';
    import H1 from '../components/UI/H1.svelte';
    import H2 from '../components/UI/H2.svelte';
    import Ul from '../components/UI/Ul.svelte';
    import Section from '../components/UI/Section.svelte';

    const carouselImages = [
        { img: '/img/horse2.jpg', pos: '21% 43%' },
        { img: '/img/horsewinter.jpg', pos: '40% 30%' },
        { img: '/img/horse1.jpg', pos: '47% 46%' },
        { img: '/img/horseflehmenresponse.jpg', pos: '47% 46%' }
    ];

    const lis = [
        'Helsesjekk ved kjøp/salg/forsikring',
        'Munnhuleundersøkelse og behandling',
        'Halthetsutredelse',
        'Enkelte ståede kirurgiske ingrep',
        'Akkuttmedisin',
        'Rehabilitering ',
        'Treningsveiledning etter skade og forebyggende'
    ];
</script>

<svelte:head>
    <title>Vårt team</title>
</svelte:head>

<WithImageCarousel images={carouselImages}>
    <Section id="hestepraksis">
        <H1>Hestepraksis</H1>
        <H2>Konsept/visjon: skadefri hest og prestasjon</H2>
        <Ul>
            {#each lis as text}
                <li>{text}</li>
            {/each}
        </Ul>
    </Section>
</WithImageCarousel>
