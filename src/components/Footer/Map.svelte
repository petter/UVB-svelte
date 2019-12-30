<script>
    import { onMount } from 'svelte';
    onMount(async () => {
        const mapboxModule = await import('mapbox-gl');
        const mapboxgl = mapboxModule.default;

        mapboxgl.accessToken =
            'pk.eyJ1IjoicGV0dGVyc21vZW4iLCJhIjoiY2s0c3FvYmtlMDk5dzNscnNtNncyYjY2eiJ9.VZ7nRifBlRyCGBEUZ6F5bQ';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [8.677655, 62.987516],
            zoom: 11
        });
    });
</script>

<style>
    div {
        height: 20vh;
        width: 100%;
    }
</style>

<svelte:head>
    <link
        href="https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css"
        rel="stylesheet" />
</svelte:head>

<div id="map" />
