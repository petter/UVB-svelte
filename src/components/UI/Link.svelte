<script>
    export let href;
    let className = '';
    export { className as class };

    export let defaultColor = 'blue-700';
    export let hoverColor = 'blue-900';
</script>

<a
    {href}
    class="{className} text-{defaultColor} border-b border-{defaultColor}
    hover:text-{hoverColor} hover:border-{hoverColor} transition-colors
    transition-borders transition-100">
    <slot />
</a>
