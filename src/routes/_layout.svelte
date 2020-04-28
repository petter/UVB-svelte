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
            href: 'hestepraksis',
            segment: 'hestepraksis',
            text: 'Hestepraksis'
        },
        {
            href: 'produksjonsdyr-og-veiledning',
            segment: 'produksjonsdyr-og-veiledning',
            text: 'Produksjonsdyr og veiledning'
        },
        {
            href: 'kontakt',
            segment: 'kontakt',
            text: 'Kontakt'
        }
    ];

    const carouselImages = [
        { img: '/img/tinkerinnature.jpg', pos: '65% 35%' },
        { img: '/img/uziwithdogswater.jpg', pos: '58% 16%' },
        { img: '/img/uzicuddlingbailey.jpg', pos: '58% 23%' },
        { img: '/img/horse1.jpg', pos: '47% 46%' }, // Fix focal point
        { img: '/img/baileymountain.jpg', pos: 'center' }
        // { img: '/img/uziandbaileywater.jpg', pos: '29% 49%' }
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
