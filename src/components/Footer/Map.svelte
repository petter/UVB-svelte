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

        map.on('load', () => {
            map.loadImage('https://i.imgur.com/MK4NUzI.png', function(
                error,
                image
            ) {
                if (error) throw error;
                map.addImage('custom-marker', image);
                /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
                map.addLayer({
                    id: 'markers',
                    type: 'symbol',
                    /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
                    source: {
                        type: 'geojson',
                        data: {
                            type: 'FeatureCollection',
                            features: [
                                {
                                    type: 'Feature',
                                    properties: {},
                                    geometry: {
                                        type: 'Point',
                                        coordinates: [8.677655, 62.98765]
                                    }
                                }
                            ]
                        }
                    },
                    layout: {
                        'icon-image': 'custom-marker'
                    }
                });
            });
        });
    });
</script>

<svelte:head>
    <link
        href="https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css"
        rel="stylesheet" />
</svelte:head>

<div class="flex flex-col w-full">
    <h2>Klinikken</h2>
    <div id="map" class="w-full h-56" />

</div>
