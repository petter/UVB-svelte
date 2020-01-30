<script>
    import Nav from '../components/Nav/Nav.svelte';
    import Footer from '../components/Footer/Footer.svelte';

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
</script>

<div class="min-h-screen w-full flex flex-row">
    <Nav {segment} {routes} />
    <div class="flex flex-col flex-1">
        <main class="flex relative bg-indigo-100 flex-grow flex-col">
            <slot />
        </main>

        <Footer />
    </div>

</div>
