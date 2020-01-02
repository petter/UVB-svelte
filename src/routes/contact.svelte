<script>
    import Input from '../components/UI/Input.svelte';
    import H1 from '../components/UI/H1.svelte';

    let name = '',
        email = '',
        phone = '',
        message = '';
</script>

<svelte:head>
    <title>Kontakt oss</title>
</svelte:head>

<div class="flex flex-col max-w-4xl w-full mx-auto p-6">
    <H1>For spørsmål eller timebestilling - kontakt oss her</H1>
    <p>
        Felt markert med
        <span class="text-red-600 font-bold">*</span>
        er påkrevd
    </p>
    <form>
        <Input
            label="Ditt navn"
            placeholder="Ola Nordmann"
            type="text"
            name="name"
            id="name"
            bind:value={name}
            required />
        <Input
            label="Din epost"
            placeholder="ola@nordmann.no"
            type="email"
            name="email"
            id="email"
            bind:value={email}
            required />
        <Input
            label="Ditt telefonnummer"
            placeholder="123 45 678"
            type="tel"
            name="phone"
            id="phone"
            bind:value={phone} />
        <Input
            label="Melding"
            placeholder="Jeg trenger hjelp med..."
            type="textarea"
            name="message"
            id="message"
            bind:value={message}
            required />
    </form>
</div>
