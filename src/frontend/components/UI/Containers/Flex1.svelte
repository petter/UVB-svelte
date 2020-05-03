<script>
    import FlexN from './FlexN.svelte';

    let className;
    export { className as class };
</script>

<FlexN n="1" class={className}>
    <slot />
</FlexN>
