<script>
    import Card from './Card.svelte';
    import NewCard from './NewCard.svelte';
    import H1 from '../UI/H1.svelte';
    import Section from '../UI/Section.svelte';

    // const cardClasses = 'w-full';
</script>

<Section id="about">
    <!-- <div class="flex flex-col">
        <H1>Vårt team</H1>
        <div
            class="flex w-full flex-col lg:flex-row flex-1 justify-between py-6">
            <Card
                name="Vigdis Sæther Moen Burger"
                title="Daglig leder"
                phone="916 43 977"
                image="/img/headshots/vigdis1.jpg"
                description="Sisteårs veterinærstudent med fordypning i hest,
                produksjonsdyr og eksotiske dyr."
                descriptionList={['Sisteårs veterinærstudent ved University of veterinary and pharmaceutical sciences Brno', 'Spesiell interesse for hest og produksjonsdyr, med fokus på skadeforebygging og reproduksjon ', 'Hestemenneske med mange år som aktiv konkurranse rytter']}
                class={cardClasses} />

            <Card
                name="Uzi Burger DVM"
                title="Veterinær"
                phone="929 88 307"
                image="/img/headshots/uzi.jpg"
                description="Veterinær med fordypning i eksotiske dyr og smådyr."
                descriptionList={['Veterinær fra University of veterinary and pharmaceutical sciences Brno', 'Spesiell interesse for hund, katt og eksotiske dyr', '10 års erfaring i drift av veterinærklinikker i Israel', 'Lidenskapelig hundemenneske og fisker']}
                class={cardClasses} />
        </div>

        <H1>Våre samarbeidspartnere</H1>

        <div class="flex w-full flex-col flex-1 justify-between py-6">
            <Card
                name="Anders Sæther Moen DVM"
                title="Veterinær"
                phone="905 29 219"
                image="/img/headshots/uzi.jpg"
                descriptionList={['Veterinær fra Universitetet i Gent, Belgia', 'Produksjonsdyr og hesteveterinær', 'Dyrekiropraktor', 'Biomekanikk på hest']}
                class={cardClasses} />
        </div>
    </div> -->
    <div class="flex flex-col">
        <H1>Vårt team</H1>
        <NewCard
            name="Vigdis Sæther Moen Burger"
            title="Daglig leder"
            phone="916 43 977"
            image="/img/headshots/vigdis1.jpg"
            description="Sisteårs veterinærstudent med fordypning i hest,
            produksjonsdyr og eksotiske dyr."
            descriptionList={['Sisteårs veterinærstudent ved University of veterinary and pharmaceutical sciences Brno', 'Spesiell interesse for hest og produksjonsdyr, med fokus på skadeforebygging og reproduksjon ', 'Hestemenneske med mange år som aktiv konkurranse rytter']} />
        <NewCard
            name="Uzi Burger DVM"
            title="Veterinær"
            phone="929 88 307"
            image="/img/headshots/uzi.jpg"
            description="Veterinær med fordypning i eksotiske dyr og smådyr."
            descriptionList={['Veterinær fra University of veterinary and pharmaceutical sciences Brno', 'Spesiell interesse for hund, katt og eksotiske dyr', '10 års erfaring i drift av veterinærklinikker i Israel', 'Lidenskapelig hundemenneske og fisker']} />

        <H1>Våre samarbeidspartnere</H1>
        <NewCard
            name="Anders Sæther Moen DVM"
            title="Veterinær"
            phone="905 29 219"
            image="/img/headshots/uzi.jpg"
            descriptionList={['Veterinær fra Universitetet i Gent, Belgia', 'Produksjonsdyr og hesteveterinær', 'Dyrekiropraktor', 'Biomekanikk på hest']} />
    </div>
</Section>
