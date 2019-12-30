<script>
    import Input from '../components/UI/Input.svelte';
    import H1 from '../components/UI/H1.svelte';

    let name = '',
        email = '',
        message = '';
</script>

<svelte:head>
    <title>Kontakt oss</title>
</svelte:head>

<div class="flex flex-col max-w-4xl w-full mx-auto p-6">
    <H1>For spørsmål eller timebestilling - kontakt oss her</H1>
    <form>
        <Input
            label="Ditt navn"
            placeholder="Ola Nordmann"
            type="text"
            name="name"
            id="name"
            bind:value={name} />
        <Input
            label="Din epost"
            placeholder="ola@nordmann.no"
            type="email"
            name="email"
            id="email"
            bind:value={email} />
        <Input
            label="Melding"
            placeholder="Jeg trenger hjelp med..."
            type="textarea"
            name="message"
            id="message"
            bind:value={message} />
    </form>
</div>
