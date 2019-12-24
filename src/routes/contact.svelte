<script>
    import Input from '../components/UI/Input.svelte';
    import H1 from '../components/UI/H1.svelte';

    let name = '',
        email = 'pettersmoen@gmail.com',
        message = '';
</script>

<div class="flex flex-col max-w-4xl w-full mx-auto p-6">

    <H1>Kontakt oss</H1>
    <form>
        <Input
            label="Navn"
            placeholder="Navn"
            type="text"
            name="name"
            id="name"
            bind:value={name} />
        <Input
            label="Epost"
            type="email"
            name="email"
            id="email"
            bind:value={email} />
    </form>
</div>
