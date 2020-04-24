<script>
    import Input from '../components/UI/Input.svelte';
    import H1 from '../components/UI/H1.svelte';
    import P from '../components/UI/P.svelte';
    import Spinner from '../components/UI/Spinner.svelte';
    import Single from '../components/Layouts/Single.svelte';

    import { sendMail } from '../utils/frontend/api/mail';

    let initialFormValues = [
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

    let formValues = [];
    const resetForm = () =>
        (formValues = initialFormValues.map(e => ({ ...e })));
    resetForm();

    let error = '';
    let loading = false;

    $: formValues, (error = '');

    const formSubmit = () => {
        if (formValues.some(e => e.required && e.value === '')) {
            error = 'Ikke alle påkrevde felt har blitt fylt ut.';
        } else {
            loading = true;
            const email = formValues.find(e => e.id === 'email').value;
            const name = formValues.find(e => e.id === 'name').value;
            const message = formValues.find(e => e.id === 'message').value;
            const phone = formValues.find(e => e.id === 'phone').value;
            sendMail(email, name, message, phone)
                .then(() => {
                    resetForm();
                })
                .catch(err => console.error(err))
                .finally(() => (loading = false));
        }
    };
</script>

<svelte:head>
    <title>Kontakt oss</title>
</svelte:head>

<Single>

    <div class="flex flex-col max-w-4xl w-full mx-auto p-6">
        {#if loading}
            <div
                class="fixed left-0 top-0 w-full h-full flex justify-center
                items-center">
                <Spinner />
            </div>
        {:else}
            <H1>For spørsmål eller timebestilling - kontakt oss her</H1>
            <P>
                Klinikken har faste åpningstider mandag-fredag kl 10:00-17:00,
                men vi kan også nås på tlf og email etter åpningstid og i
                helg/helligdager.
            </P>
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
                    class="mt-2 bg-blue-600 hover:bg-blue-700 text-white p-2
                    rounded">
                    Send
                </button>

            </form>
        {/if}
    </div>
</Single>
