<script>
    let className;
    export { className as class };
</script>

<style>
    ul {
        list-style-type: none;
    }

    ul :global(li::before) {
        content: '-';
        margin-left: -1rem;
        margin-right: 0.65rem;
    }

    ul :global(li) {
        display: block;
    }
</style>

<ul class="px-6 {className}">
    <slot />
</ul>
