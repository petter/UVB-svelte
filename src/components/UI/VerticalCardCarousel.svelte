<script>
    import VerticalCardContainer from './VerticalCardContainer.svelte';
    import Carousel from './Carousel.svelte';

    export let images;
</script>

<VerticalCardContainer>
    <Carousel {images} />
</VerticalCardContainer>
