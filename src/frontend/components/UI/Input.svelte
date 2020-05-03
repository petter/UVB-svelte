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
    export let required = false;

    const classes = `p-2 text-gray-900 placeholder-gray-600 bg-gray-100 text-lg
        rounded border-2 border-gray-600 focus:bg-white focus:border-gray-900
        outline-none ${className}`;

    let textareaRef;

    onMount(() => {
        if (type === 'textarea') {
            const height = `${textareaRef.scrollHeight}px`;
            textareaRef.style.minHeight = height;
            textareaRef.style.height = height;
        }
    });

    const handleInput = event => {
        if (type !== 'textarea') {
            value = event.target.value;
        } else {
            event.target.style.height = '0px';
            event.target.style.height = `${event.target.scrollHeight}px`;
        }
    };
</script>

<div class="flex flex-col">
    <label for={id} class="text-sm text-indigo-900">
        {label}
        {#if required}
            <span class="text-red-600 font-bold">*</span>
        {/if}
    </label>
    {#if type === 'textarea'}
        <textarea
            bind:this={textareaRef}
            class="{classes} overflow-hidden resize-none"
            rows="5"
            {id}
            {name}
            {placeholder}
            on:input={handleInput}
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
