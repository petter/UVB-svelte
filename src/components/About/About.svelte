<script>
    import Card from './Card.svelte';
    import H1 from '../UI/H1.svelte';

    const cardClasses = 'w-full';
</script>

<section class="p-6" id="about">
    <div class="flex flex-col">
        <H1 class="self-center">Vårt team</H1>
        <div
            class="flex w-full flex-col sm:flex-row flex-1 justify-between py-6">
            <Card
                name="Vigdis Burger"
                title="Daglig leder"
                phone="916 43 977"
                image="/img/headshots/vigdis1.jpg"
                class={cardClasses} />
            <Card
                name="MVDr. Uzi Burger"
                title="Veterinær"
                phone="916 43 977"
                image="/img/headshots/uzi.jpg"
                class={cardClasses} />
        </div>
    </div>
</section>
