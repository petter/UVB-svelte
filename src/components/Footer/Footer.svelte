<script>
    import Map from '../Map.svelte';
    import H1 from '../UI/H1.svelte';
    import H2 from '../UI/H2.svelte';
    import Link from '../UI/Link.svelte';
    import Aapningstider from '../Aapningstider.svelte';

    import Icon from 'svelte-awesome';
    import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
    import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
    import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons/faPhoneSquare';
    import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons/faEnvelopeSquare';
    import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';

    const iconGroups = [
        {
            title: 'Kontaktinfo',
            icons: [
                {
                    icon: faPhoneSquare,
                    text: '+47 916 43 977'
                },
                {
                    icon: faEnvelopeSquare,
                    href: 'mailto:uvbvets@gmail.com',
                    text: 'uvbvets@gmail.com'
                },
                {
                    icon: faMapMarkerAlt,
                    text: '<address>Hamnesveien 210<br/>6650 Surnadal</address>'
                }
            ]
        },
        {
            title: 'Sosiale medier',
            icons: [
                {
                    icon: faFacebook,
                    href: 'https://www.facebook.com/UVBvets/',
                    text: 'Facebook'
                }
            ]
        }
    ];
</script>

<style>
    footer {
        display: grid;
        grid-gap: 1em;
        grid-template-rows: auto auto auto;
    }

    @media (min-width: 768px) {
        footer {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>

<footer class="p-6 bg-blue-900 text-indigo-100 z-30">
    <div class="text-xl">
        <Aapningstider expandOnDesktop={false} />
    </div>
    <div class="flex-col">
        {#each iconGroups as { title, icons }}
            <div class="mb-6">
                <H2>{title}</H2>
                {#each icons as { icon, href, text }}
                    <div class="flex flex-row my-1 items-center text-xl">
                        <Icon {icon} class="mr-2 text-2xl" />
                        {#if href}
                            <Link
                                defaultColor="white"
                                hoverColor="blue-300"
                                {href}>
                                {text}
                            </Link>
                        {:else}
                            <span>
                                {@html text}
                            </span>
                        {/if}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
    <div>
        <H2>Her finner du oss</H2>
        <Map />
    </div>
</footer>
