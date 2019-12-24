<script>
    import Card from '../components/About/Card.svelte';
    import H1 from '../components/UI/H1.svelte';

    const cardClasses = 'w-full sm:w-5/12 lg:w-full';
</script>

<style>
    @media (min-width: 1024px) {
        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2rem;
        }
    }
</style>

<svelte:head>
    <title>Om oss</title>
</svelte:head>

<div class="grid p-6">
    <img
        src="https://images.unsplash.com/photo-1514328525431-eac296c01d82?ixlib=rb-1.2.1&auto=format&fit=crop&w=2197&q=80"
        alt=""
        class="hidden lg:block object-cover object-center h-full w-full" />
    <div class="flex flex-col">
        <H1 class="self-center">Vårt team</H1>
        <div class="flex flex-wrap lg:flex-col flex-1 justify-start py-6">
            <Card
                name="Vigdis Burger"
                title="Daglig leder"
                phone="916 43 977"
                email="vigdis@uvb.no"
                image="http://www.racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png"
                class={cardClasses} />
            <Card
                name="MVDr. Uzi Burger"
                title="Veterinær"
                phone="916 43 977"
                email="uzi@uvb.no"
                image="http://www.racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png"
                class={cardClasses} />
        </div>
    </div>
</div>
