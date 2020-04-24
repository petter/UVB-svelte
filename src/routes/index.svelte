<script>
    import { onMount } from 'svelte';
    import About from '../components/About/About.svelte';
    import Map from '../components/Map.svelte';
    import Section from '../components/UI/Section.svelte';
    import Single from '../components/Layouts/Single.svelte';
</script>

<svelte:head>
    <title>Surnadal veterinærpraksis</title>
</svelte:head>

<Single>
    <Section>introduksjon</Section>
    <Map />
</Single>
