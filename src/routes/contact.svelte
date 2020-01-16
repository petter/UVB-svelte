<script>
    import Input from '../components/UI/Input.svelte';
    import H1 from '../components/UI/H1.svelte';

    let formValues = [
        {
            id: 'name',
            type: 'text',
            label: 'Ditt navn',
            placeholder: 'Ola Nordmann',
            required: true,
            value: ''
        },
        {
            id: 'email',
            type: 'email',
            label: 'Din epost',
            placeholder: 'ola@nordmann.no',
            required: true,
            value: ''
        },
        {
            id: 'phone',
            type: 'tel',
            label: 'Ditt telefonnummer',
            placeholder: '123 45 678',
            required: false,
            value: ''
        },
        {
            id: 'message',
            type: 'textarea',
            label: 'Melding',
            placeholder: 'Jeg trenger hjelp med...',
            required: true,
            value: ''
        }
    ];

    let error = '';

    $: formValues, (error = '');

    const formSubmit = () => {
        if (formValues.some(e => e.required && e.value === '')) {
            error = 'Ikke alle påkrevde felt har blitt fylt ut.';
        }
    };
</script>

<svelte:head>
    <title>Kontakt oss</title>
</svelte:head>

<div class="flex flex-col max-w-4xl w-full mx-auto p-6">
    <H1>For spørsmål eller timebestilling - kontakt oss her</H1>
    <div class="text-red-700">{error}</div>
    <p>
        Felt markert med
        <span class="text-red-600 font-bold">*</span>
        er påkrevd
    </p>
    <form on:submit|preventDefault={formSubmit}>
        {#each formValues as formVal}
            <Input
                label={formVal.label}
                placeholder={formVal.placeholder}
                type={formVal.type}
                name={formVal.id}
                id={formVal.id}
                bind:value={formVal.value}
                required={formVal.required} />
        {/each}
        <button
            type="submit"
            class="mt-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
            Send
        </button>
    </form>
</div>
