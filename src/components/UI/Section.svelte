<script>
    export let id;

    let className = '';
    export { className as class };
</script>

<section class="flex flex-col p-6 w-full {className}" {id}>
    <slot />
</section>
