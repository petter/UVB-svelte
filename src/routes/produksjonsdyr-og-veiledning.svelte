<script>
    import WithImageCarousel from '../components/Layouts/WithImageCarousel.svelte';

    const carouselImages = [
        { img: '/img/vigdispig.jpg', pos: '32% 63%' },
        { img: '/img/cows.jpg', pos: '30% 44%' },
        { img: '/img/goats.jpg', pos: '0% 50%' }
    ];
</script>

<svelte:head>
    <title>Vårt team</title>
</svelte:head>

<WithImageCarousel images={carouselImages} />
