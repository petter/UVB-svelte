<script>
    import Card from './Card.svelte';
    import H1 from '../UI/H1.svelte';
    import Section from '../UI/Section.svelte';

    const team = [
        {
            name: 'Vigdis Sæther Moen Burger',
            title: 'Daglig leder',
            phone: '916 43 977',
            images: [
                { img: '/img/vigdispig.jpg', pos: '32% 13%' },
                { img: '/img/vigdishorse.jpg', pos: '43% 10%' }
            ],
            descriptionList: [
                'Sisteårs veterinærstudent ved University of veterinary and pharmaceutical sciences Brno',
                'Spesiell interesse for hest og produksjonsdyr, med fokus på skadeforebygging og reproduksjon ',
                'Hestemenneske med mange år som aktiv konkurranserytter'
            ]
        },
        {
            name: 'Uzi Burger DVM',
            title: 'Veterinær',
            phone: '929 88 307',
            images: [
                { img: '/img/uziandbaileywater.jpg', pos: '48% 44%' },
                { img: '/img/uzidogsandcow.jpg', pos: '52% 62%' }
                // { img: '/img/uzikissingbelle.jpg', pos: '39% 37%' },
                // { img: '/img/uziinnature.jpg', pos: '46% 40%' },
                // { img: '/img/uzidogsandcow2.jpg', pos: '57% 38%' }
            ],
            descriptionList: [
                'Veterinær fra University of veterinary and pharmaceutical sciences Brno',
                'Spesiell interesse for hund, katt og eksotiske dyr',
                '10 års erfaring i drift av veterinærklinikker i Israel',
                'Lidenskapelig hundemenneske og fisker'
            ]
        }
    ];

    const samarbeidspartnere = [
        {
            name: 'Anders Sæther Moen DVM',
            title: 'Veterinær',
            phone: '905 29 219',
            images: [{ img: '/img/anders.jpg', pos: '35% 25%' }],
            descriptionList: [
                'Veterinær fra Universitetet i Gent, Belgia',
                'Produksjonsdyr og hesteveterinær',
                'Dyrekiropraktor',
                'Biomekanikk på hest'
            ]
        }
    ];

    const sections = [
        { title: 'Vårt team', cards: team },
        { title: 'Våre samarbeidspartnere', cards: samarbeidspartnere }
    ];
</script>

<Section id="about">
    <div class="flex flex-col w-full max-w-4xl mx-auto">
        {#each sections as { title, cards }}
            <H1>{title}</H1>
            {#each cards as card}
                <Card {...card} />
            {/each}
        {/each}
    </div>
</Section>
