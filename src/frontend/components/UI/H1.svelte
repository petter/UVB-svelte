<script>
    let className = '';
    export { className as class };
</script>

<h1
    class="text-3xl {!className.includes('text-') ? 'text-gray-900' : ''}
    {className}">
    <slot />
</h1>
