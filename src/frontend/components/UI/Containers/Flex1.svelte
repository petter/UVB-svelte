<script lang="ts">
    import FlexN from './FlexN.svelte';

    let className: string | undefined;
    export { className as class };
</script>

<FlexN n="1" class={className}>
    <slot />
</FlexN>
