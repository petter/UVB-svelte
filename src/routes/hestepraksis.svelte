<script>
    import WithImageCarousel from '../components/Layouts/WithImageCarousel.svelte';

    const carouselImages = [
        { img: '/img/horse2.jpg', pos: '21% 43%' },
        { img: '/img/horsewinter.jpg', pos: '40% 30%' },
        { img: '/img/horse1.jpg', pos: '47% 46%' },
        { img: '/img/horseflehmenresponse.jpg', pos: '47% 46%' }
    ];
</script>

<svelte:head>
    <title>Vårt team</title>
</svelte:head>

<WithImageCarousel images={carouselImages} />
