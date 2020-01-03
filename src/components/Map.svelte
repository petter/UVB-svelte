<script>
    import { onMount } from 'svelte';
    onMount(async () => {
        const mapboxModule = await import('mapbox-gl');
        const mapboxgl = mapboxModule.default;

        mapboxgl.accessToken =
            'pk.eyJ1IjoicGV0dGVyc21vZW4iLCJhIjoiY2s0c3FvYmtlMDk5dzNscnNtNncyYjY2eiJ9.VZ7nRifBlRyCGBEUZ6F5bQ';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [8.677655, 62.987516],
            zoom: 11
        });

        const geojson = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [8.677655, 62.987516]
                    },
                    properties: {
                        title: 'Surnadal Veterinærpraksis',
                        description:
                            'Ved folketshus i Surnadal ligger klinikken vår. Kom innom!'
                    }
                }
            ]
        };

        geojson.features.forEach(marker => {
            const el = document.createElement('div');
            el.className = 'marker';

            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML(
                            '<h3>' +
                                marker.properties.title +
                                '</h3><p>' +
                                marker.properties.description +
                                '</p>'
                        )
                )
                .addTo(map);
        });
    });
</script>

<style>
    :global(.marker) {
        background-image: url('/img/mapbox-icon.png');
        background-size: cover;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;
    }

    :global(.mapboxgl-popup) {
        max-width: 200px;
    }

    :global(.mapboxgl-popup-content) {
        text-align: center;
        color: black;
        font-family: 'Open Sans', sans-serif;
    }

    :global(.mapboxgl-popup-content h3) {
        font-weight: bold;
        font-size: 1.125rem;
    }
</style>

<svelte:head>
    <link
        href="https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css"
        rel="stylesheet" />
</svelte:head>

<div class="flex flex-col w-full">
    <div id="map" class="w-full max-h-1/2 h-screen" />

</div>
