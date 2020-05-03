<script>
    let className = '';
    export { className as class };
    export let n = 1;
</script>

<div class="flex flex-grow {className}">
    <slot />
</div>
