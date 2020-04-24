<script>
    import Nav from '../components/Nav/Nav.svelte';
    import Footer from '../components/Footer/Footer.svelte';
    import ContainedCarousel from '../components/Header/ContainedCarousel.svelte';

    export let segment;

    const routes = [
        {
            href: '.',
            segment: undefined,
            text: 'Hjem'
        },
        {
            href: 'team',
            segment: 'team',
            text: 'Vårt team'
        },
        {
            href: 'klinikk',
            segment: 'klinikk',
            text: 'Klinikk'
        },
        {
            href: 'dyrepensjonat',
            segment: 'dyrepensjonat',
            text: 'Dyrepensjonat'
        },
        {
            href: 'kontakt',
            segment: 'kontakt',
            text: 'Kontakt'
        }
    ];

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

<div class="min-h-screen w-full flex flex-row">
    <Nav {segment} {routes} />
    <div class="flex flex-col flex-1">
        <ContainedCarousel images={carouselImages} />
        <main class="flex relative bg-indigo-100 flex-grow flex-col">
            <slot />
        </main>
        <Footer />
    </div>
</div>
