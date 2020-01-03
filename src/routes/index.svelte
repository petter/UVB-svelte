<script>
    import About from '../components/About/About.svelte';
    import Map from '../components/Map.svelte';
    import { navHeight } from '../shared/constants';
</script>

<svelte:head>
    <title>Surnadal veterinærpraksis</title>
</svelte:head>

<header
    id="header"
    class="flex flex-grow -mt-{navHeight} h-screen w-full justify-center
    items-center bg-gray-400">
    <img src="logo.jpg" alt="Surnadal Veterinærpraksis logo" />
</header>

<About />

<Map />
