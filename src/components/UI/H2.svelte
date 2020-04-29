<script>
    let className = '';
    export { className as class };
</script>

<h2
    class="text-2xl {!className.includes('text-') ? 'text-gray-900' : ''}
    {className}">
    <slot />
</h2>
