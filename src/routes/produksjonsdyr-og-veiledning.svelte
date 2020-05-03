<script>
    import WithImageCarousel from '../frontend/components/Layouts/WithImageCarousel.svelte';
    import H1 from '../frontend/components/UI/H1.svelte';
    import Ul from '../frontend/components/UI/Ul.svelte';
    import Section from '../frontend/components/UI/Section.svelte';

    const carouselImages = [
        { img: '/img/cows.jpg', pos: '30% 44%' },
        { img: '/img/goats.jpg', pos: '0% 50%' }
    ];

    const lis = [
        'Har som mål å ta del i produksjonsdyrpraksis og vaktgruppe i Surnadal fra høsten 2020.',
        'Tilbyr besetningsveiledning med fokus på reproduksjon, kalvehelse og dyrevelferd',
        'Har tatt kusignal kurs hos Tine veileder og er veldig fokusert på forebygende og produksjonsfremmende helsearbeid hvor miljø og drift er sentralt.'
    ];
</script>

<svelte:head>
    <title>Vårt team</title>
</svelte:head>

<WithImageCarousel images={carouselImages}>
    <Section id="produksjonsdyr-og-veiledning">
        <H1>Produksjonsdyr og veiledning</H1>
        <Ul>
            {#each lis as text}
                <li>{text}</li>
            {/each}
        </Ul>
    </Section>
</WithImageCarousel>
