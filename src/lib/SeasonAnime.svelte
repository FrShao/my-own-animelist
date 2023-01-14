<script>
	import Card from './Card.svelte';

    export let extraInformations = ['now', ''];
    let year = extraInformations[0];
    let season = extraInformations[1];

    export let limit = 25;
    export let isSmall = false;
    export let isNoWrap = false;
    export let cardWidth = 225;
    export let page = 1;
    let cardHeight= 308;
    if(isSmall){
        cardWidth = 131;
        cardHeight = 180;
    };

    function cutAtLimit(json){
        let newJson;
        if (limit==0){
            newJson = json;
        }else{
            newJson = [json[0]];
            for(let i = 1; i<limit; i++){
                newJson.push(json[i]);
            }
        }
        return newJson;
    };
    async function getInfos(nopage=1) {
        let dynamicPart;
        if(season == ''){
            dynamicPart = `${year}?page=${nopage}`
        } else {
            dynamicPart = `${year}/${season}?page=${nopage}`
        }
        let path = `https://api.jikan.moe/v4/seasons/${dynamicPart}`;

        let res = await fetch(path);

        if (!res.ok || res.status === 404) return [];

        let json = await res.json();

        if (limit==0 && nopage < json.pagination.last_visible_page){
            let tmpJson = await getInfos(nopage+1);
            json.data = json.data.concat(tmpJson);
        }
        return json.data;
    };
    let infos = getInfos(page);

// TO-DO if at the end of the page and infos.pagination.has_next_page; getInfos page suivante
</script>
<script context="module" lang='ts'>
    export let elementWidth = 225+10;
</script>

<section>
    <div class="wrap {isNoWrap ? 'nowrap' : ''}">
        {#await infos}
            <div>Waiting for informations ...</div>
            {:then infos}
                {#each cutAtLimit(infos) as anime}
                    <Card cardUrl="/animes/{anime.mal_id}" cardImg="{anime.images.jpg.image_url}" cardName="{anime.title}" />
                {/each}
            {:catch error}
                <div>Error: {error.message}</div>
        {/await}
    </div>
</section>

<style>
    .wrap {
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
    }
    .nowrap {
        flex-wrap: nowrap;
    }
</style>