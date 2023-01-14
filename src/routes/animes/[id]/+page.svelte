<script>
    import star from '$lib/img/score-star-light.svg';
    import { page } from '$app/stores';
    import ActionButton from '$lib/ActionButton.svelte';

    export let id = $page.params.id;
    async function getInfos(precision="") { 
        let res;
        do{
            setTimeout(()=> {10})
            res = await fetch(`https://api.jikan.moe/v4/anime/${id + precision}`);
        }while(res == undefined)

        if (!res.ok || res.status === 404) return [];
        let json = await res.json();

        return json.data;
    };
    let infos = getInfos();
    let relations = getInfos('/relations');

    function formatNumber(number){
        let formatedNumber = new Intl.NumberFormat('fr-CH', { maximumSignificantDigits: 3 }).format(number).replace(' ',"'");
        return formatedNumber;
    }

    //https://codepen.io/dziul/pen/zYGayyO
</script>

<main>
    {#await infos}
        <div>Waiting for informations ...</div>
        {:then infos} 
            <div class="poster">
                <div class="poster-back">
                    <div class="banner">
                        <img src="{infos.images.webp.large_image_url}" alt="{infos.title}-banner.jpg">
                    </div>
                    <div class="anime-informations">
                        <div class="anime-desc">
                            <div class="anime-title">
                                {infos.title}
                            </div>
                            genre
                            <div class="anime-synopsis">
                                {infos.synopsis}
                            </div>
                            more...  background
                        </div>
                        <div class="anime-informations-menu"> 
                            menu 
                        </div> 
                    </div>
                </div>

                <div class="poster-left-space"></div>
                <div class="overlap">
                    <div class="overlap-informations"> 
                        <div class="anime-thumbnail">
                            <img src="{infos.images.jpg.image_url}" alt="{infos.title}.jpg">
                        </div>
                    </div>
                    <div class="overlap-buttons">
                        <div>Add to list</div>
                        {#if $page.data.user}
                            {#if $page.data.post.exist}
                                <ActionButton text="Remove from list" action="?/delList" color="purple"/>
                            {:else}
                                <ActionButton text="Add to list" action="?/addList" color="red"/>
                            {/if}
                        {/if}
                        <div>favorite</div>
                    </div>
                </div>
                <div class="poster-right-space"></div>
            </div>
            <div class="lower-wrap centered-content">
                <div class="left-space"></div>
                <div class="left-informations">
                    <div class="statistics tile">
                        <div class="score stat-info">
                            <div class="score-text-1 stat-text-1">score</div>
                            <div class="score-text-2 stat-text-2">
                                <img src={star} alt="rank-star.svg"> 
                                <div>{infos.score}</div>
                            </div>
                        </div>
                        <div class="rank stat-info">
                            <div class="rank-text-1 stat-text-1">rank</div>
                            <div class="rank-text-2 stat-text-2">
                                <div>{formatNumber(infos.rank)}#</div>
                            </div>
                        </div>
                        <div class="popularity stat-info">
                            <div class="popularity-text-1 stat-text-1">popularity</div>
                            <div class="popularity-text-2 stat-text-2">
                                <div>{formatNumber(infos.popularity)}#</div>
                            </div>
                        </div>
                        <div class="members stat-info">
                            <div class="members-text-1 stat-text-1">members</div>
                            <div class="members-text-2 stat-text-2">
                                <div>{formatNumber(infos.members)}#</div>
                            </div>
                        </div>
                    </div>
                    <div class="external-link"></div>
                </div>
                <div class="center-informations">
                    <div class="anime-type-infos tile">
                        <div>{infos.type}</div>
                        <div>
                            <div>{infos.status}</div>
                            <div>{infos.season} {infos.year}</div>
                        </div>
                        <div>
                            <div>{infos.episodes} episode(s) </div>
                            <div>{infos.duration}</div>
                        </div>
                    </div>
                    <div class="tile">
                        <div class="related-animes">
                            {#await relations}
                            s
                                {:then relations}
                                    {#each relations as relation}
                                        <div class="relation-type">{relation.relation}</div>
                                        {#each relation.entry as related}
                                            {related.name} card
                                        {/each}
                                    {/each}
                                {:catch error}
                                    <div>Error: {error.message}</div>
                            {/await}
                        </div>
                        <div class="characters"></div>
                    </div>
                    <div class="tile">
                        <div class="recommendations"></div>
                        <div class="staff"></div>
                    </div>

                    <div class="reviews tile"></div>
                </div>
                <div class="right-space"></div>
            </div>
        {:catch error}
            <div>Error: {error.message}</div>
    {/await}
</main>

<style>
    .poster {
        position: relative;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

        margin-bottom: 20px;
    }
    .banner {
        width: 100%;
        height: 400px;
    }
    .banner img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        image-rendering: pixelated;
        filter: blur(5px)
    }
    .anime-informations {
        position: relative;
        background-color: white;
        box-shadow: 0 -120px 150px black;
        min-height: 250px;
        height: min-content;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow: hidden;
    }
    .anime-informations .anime-desc {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 430px;
        width: auto;
        margin-right: 150px;
    }

    .anime-title {
        margin: 20px 0 20px 0;
        font-weight: 600;
        font-size: large;
    }
    .anime-synopsis {
        font-size: 14px;
    }

    .overlap {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 40%;
        left: 150px;
    }
    .overlap-informations {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 20px;
    }
    .anime-thumbnail {
        width: 230px;
        height: 340px;
    }
    .anime-thumbnail img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        object-fit: cover;
    }

    /* Space */
    .lower-wrap {
        display: flex;
        flex-direction: row;
    }
    .left-space, .right-space {
        width: 150px;
    }
    .right-space {
        align-self: flex-end;
    }
    
    /* Left Panel */
    .tile {
        display: flex;
        background-color: white;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    .tile>* {
        padding: 10px;
    }

    .left-informations {
        margin-right: 50px;
    }
    /* Left Panel - Statistics */
    .statistics {
        width: 230px;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
    }
    .statistics .stat-info {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .stat-text-1 {
        font-size: 18px;
    }
    .stat-text-2 {
        font-size: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .stat-text-2 img {
        width: 30px;
        margin-right: 5px;
    }

    /* Center Panel */
</style>