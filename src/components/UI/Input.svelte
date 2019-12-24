<script>
    import { onMount } from 'svelte';

    let className = '';
    export { className as class };
    export let type = 'text';
    export let name = undefined;
    export let label = '';
    export let placeholder = '';
    export let id;
    export let value;

    const classes = `p-2 text-gray-900 placeholder-gray-600 bg-gray-100 text-lg
        rounded border-2 border-gray-600 focus:bg-white focus:border-gray-900
        outline-none ${className}`;

    let minHeight = '0px';
    let height = 'auto';
    let textareaRef;

    onMount(() => {
        if (type === 'textarea') {
            minHeight = `${textareaRef.scrollHeight}px`;
            height = minHeight;
        }
    });

    const handleInput = event => {
        if (type !== 'textarea') {
            value = event.target.value;
        } else {
            event.target.height = '0px';
            height = '0px';
            requestAnimationFrame(
                () => (height = `${event.target.scrollHeight}px`)
            );
        }
    };
</script>

<div class="flex flex-col">
    <label for={id} class="text-sm text-indigo-900">{label}</label>
    {#if type === 'textarea'}
        <textarea
            bind:this={textareaRef}
            class="{classes} overflow-hidden resize-none"
            rows="5"
            {id}
            {name}
            {placeholder}
            on:input|preventDefault={handleInput}
            style="min-height: {minHeight}; height: {height}"
            bind:value />
    {:else}
        <input
            class={classes}
            {id}
            {type}
            {name}
            {placeholder}
            {value}
            on:input={event => (value = event.target.value)} />
    {/if}
</div>
