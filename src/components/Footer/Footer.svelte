<script>
    import Map from '../Map.svelte';
    import Flex1 from '../UI/Containers/Flex1.svelte';
    import H1 from '../UI/H1.svelte';
</script>

<footer class="flex flex-col lg:flex-row p-6 bg-blue-900 text-indigo-100 z-30">
    <Flex1>
        <span class="w-full">UVB AS</span>
    </Flex1>
    <Flex1>
        <Map />
    </Flex1>
</footer>
