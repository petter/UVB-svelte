<script>
    let className = '';
    export { className as class };
    export let type = 'text';
    export let name = undefined;
    export let label = '';
    export let placeholder = '';
    export let id;
    export let value;
</script>

<div class="flex flex-col">
    <label for={id} class="text-sm text-indigo-900">{label}</label>
    <input
        {id}
        {type}
        {name}
        {placeholder}
        {value}
        on:input={event => (value = event.target.value)}
        class="p-2 text-gray-900 placeholder-gray-600 bg-gray-100 text-lg
        rounded border-2 border-gray-600 focus:bg-white focus:border-gray-900
        outline-none {className}" />
</div>
