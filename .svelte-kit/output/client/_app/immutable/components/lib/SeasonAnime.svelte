<script>
    import { onMount } from 'svelte';

    onMount(() => {
        document.documentElement.style.setProperty('--cardWidth', cardWidth + 'px');
        document.documentElement.style.setProperty('--cardHeight', cardHeight + 'px');
    });

    export let extraInformations = ['now', ''];
    let year = extraInformations[0];
    let season = extraInformations[1];

    export let limit = 25;
    export let isSmall = false;
    export let isNoWrap = false;
    export let cardWidth = 225;
    let cardHeight= 308;
    if(isSmall){
        cardWidth = 131;
        cardHeight = 180;
    };

    function cutAtLimit(json){
        let newJson = [json[0]];
        for(let i = 1; i<limit; i++){
            newJson.push(json[i]);
        }
        return newJson;
    };
    async function getInfos() { 
        let dynamicPart;
        if(season == ''){
            dynamicPart = `${year}?page=1`
        } else {
            dynamicPart = `${year}/${season}?page=1`
        }
        const res = await fetch(`https://api.jikan.moe/v4/seasons/${dynamicPart}`);
        if (!res.ok || res.status === 404) return [];
        let json = await res.json();
        return json;
    };
    let infos = getInfos();

    function checkNameLength(name){
        let string;
        const maxChar = 40;
        if(name.length>maxChar){
            let counter = 0;
            let splittedName = name.split(" ");
            string = '';
            splittedName.forEach(word => {
                counter += word.length+1;
                if(counter<=(maxChar+1)){
                    string += word + ' '
                }
            });
            string += '...'
        }else{
            string = name;
        }
        return string;
    };

    // TO-DO if at the end of the page and infos.pagination.has_next_page; getInfos page suivante
</script>
<script context="module" lang='ts'>
    export let elementWidth = 225+10;
</script>

<slot>
    <div class="wrap {isNoWrap ? 'nowrap' : ''}">
        {#await infos}
            <div>Waiting for informations ...</div>
            {:then infos}
                {#each cutAtLimit(infos.data) as anime, index}
                    <div class="card">
                        <a href="/animes/{anime.mal_id}"><!-- on hover se soulève-->
                            <div class="card-thumbnail">
                                <img src="{anime.images.jpg.image_url}" alt="{anime.title}.jpg">
                            </div>
                        </a>
                
                        <div class="card-desc">
                            {checkNameLength(anime.title)}
                        </div>
                    </div>
                {/each}
            {:catch error}
                <div>Error: {error.message}</div>
        {/await}
    </div>
</slot>

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
    .card {
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        width: var(--cardWidth);
        height: fit-content;
    }
    .card-thumbnail {
        position: relative;
        width: var(--cardWidth);
        height: var(--cardHeight);
    }
    .card-thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
    .card-desc {
        bottom: 10px;
        color: rgb(116,136,153);
        font-weight: 600;
        font-size: 16px;
    }
</style>