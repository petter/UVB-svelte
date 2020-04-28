<script>
    import About from '../components/About/About.svelte';
    import WithImageCarousel from '../components/Layouts/WithImageCarousel.svelte';

    const carouselImages = [
        { img: '/img/vigdispig.jpg', pos: '32% 63%' },
        { img: '/img/uziandbaileywater.jpg', pos: '48% 44%' },
        { img: '/img/uzidogsandcow.jpg', pos: '52% 62%' },
        { img: '/img/uziinnature.jpg', pos: '46% 40%' },
        { img: '/img/uzikissingbelle.jpg', pos: '39% 37%' },
        { img: '/img/vigdisandwit.jpg', pos: '64% 46%' },
        { img: '/img/uzidogsandcow2.jpg', pos: '57% 38%' },
        { img: '/img/vigdishorse.jpg', pos: '43% 10%' }
        // { img: '/img/tinkerinnature.jpg', pos: '62% 61%' },
        // { img: '/img/uziwithdogswater.jpg', pos: '58% 16%' },
        // { img: '/img/horseflehmenresponse.jpg', pos: '38% 51%' },
        // { img: '/img/tinkerbaileygate.jpg', pos: '44% 71%' },
        // { img: '/img/cows.jpg', pos: '30% 44%' },
        // { img: '/img/uzicuddlingbailey.jpg', pos: '58% 23%' },
        // { img: '/img/horse1.jpg', pos: '47% 46%' },
        // { img: '/img/horse2.jpg', pos: '21% 43%' },
        // { img: '/img/dogs.jpg', pos: '50% 0%' },
        // { img: '/img/baileymountain.jpg', pos: 'center' },
        // { img: '/img/uziandbaileywater.jpg', pos: '29% 49%' }
    ];
</script>

<svelte:head>
    <title>Vårt team</title>
</svelte:head>

<WithImageCarousel images={carouselImages}>
    <About />
</WithImageCarousel>
