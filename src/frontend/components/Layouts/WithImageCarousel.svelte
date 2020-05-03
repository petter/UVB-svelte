<script>
    import Row from '../UI/Containers/Row.svelte';
    import Flex1 from '../UI/Containers/Flex1.svelte';
    import FlexN from '../UI/Containers/FlexN.svelte';
    import VerticalCardCarousel from '../UI/VerticalCardCarousel.svelte';

    export let images;
    export let hideOnMobile = true;
</script>

<Row class="min-h-1/2">
    <Flex1
        class="{hideOnMobile && 'hidden lg:flex'} min-h-1/2 max-h-1/2 h-screen
        my-auto">
        <VerticalCardCarousel {images} />
    </Flex1>
    <FlexN n="2" class="flex-col">
        <slot />
    </FlexN>
</Row>
