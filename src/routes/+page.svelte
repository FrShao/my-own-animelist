<script>
    import { applyAction, enhance } from '$app/forms'
    import { invalidateAll } from '$app/navigation'

    import ScrollList from '$lib/ScrollList.svelte';
    import SingleScrollList from '$lib/SingleScrollList.svelte';

    import { page } from '$app/stores'
</script>

<main class="centered-content">
    search bar avec filter<br>

    saison anime
    <ScrollList lib='SeasonAnime'/>
    next season
    <ScrollList lib='SeasonAnime' extraInformations={['upcoming', '']}/>
    top
    <!--<ScrollList lib='TopAnime'/>-->
    RECO
    <!--<ScrollList lib='AnimeRecommendations' isFittingSingleElement={true}/>-->
    <!--<SingleScrollList></SingleScrollList>-->
</main>