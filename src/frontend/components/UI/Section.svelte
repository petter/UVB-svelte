<script lang="ts">
    export let id: string;

    let className = '';
    export { className as class };
</script>

<section class="flex flex-col p-6 w-full {className}" {id}>
    <slot />
</section>
