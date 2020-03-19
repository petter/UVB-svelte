<script>
    import Card from './Card.svelte';
    import H1 from '../UI/H1.svelte';
    import Section from '../UI/Section.svelte';

    const cardClasses = 'w-full';
</script>

<Section id="about">
    <div class="flex flex-col">
        <H1 class="self-center">Vårt team</H1>
        <div
            class="flex w-full flex-col sm:flex-row flex-1 justify-between py-6">
            <Card
                name="Vigdis Sæther Moen Burger"
                title="Daglig leder"
                phone="916 43 977"
                image="/img/headshots/vigdis1.jpg"
                description="Sisteårs veterinærstudent med fordypning i hest,
                produksjonsdyr og eksotiske dyr."
                class={cardClasses} />
            <Card
                name="MVDr. Uzi Burger"
                title="Veterinær"
                phone="929 88 307"
                image="/img/headshots/uzi.jpg"
                description="Veterinær med fordypning i eksotiske dyr og smådyr."
                class={cardClasses} />
        </div>
    </div>
</Section>
