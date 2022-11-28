<script>
    import TopAnime from '$lib/TopAnime.svelte';    
    import ScrollList from '$lib/ScrollList.svelte';
    import Navbar from '$lib/Navbar.svelte';

</script>

<Navbar />
<main>
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

    search bar avec filter

    saison anime
    <ScrollList lib='SeasonAnime'/>
    next season

    <ScrollList lib='SeasonAnime' extraInformations={['upcoming', '']}/>
    <ScrollList lib='TopAnime'/>
    <ScrollList lib='AnimeRecommendations' isFittingSingleElement={true}/>
</main>