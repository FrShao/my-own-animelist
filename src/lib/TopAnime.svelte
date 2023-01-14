<script>
    import { onMount } from 'svelte';
    import Card from './Card.svelte';

    onMount(() => {
        document.documentElement.style.setProperty('--cardWidth', cardWidth + 'px');
        document.documentElement.style.setProperty('--cardHeight', cardHeight + 'px');
    });

    export let limit = 25;
    export let isSmall = false;
    export let isNoWrap = false;
    export let cardWidth = 225;
    let cardHeight= 308;
    if(isSmall){
        cardWidth = 131;
        cardHeight = 180;
    };

    // https://api.jikan.moe/v4/anime?page=2
    // https://api.jikan.moe/v4/anime?genres=1

    function cutAtLimit(json){
        let newJson = [json[0]];
        for(let i = 1; i<limit; i++){
            newJson.push(json[i]);
        }
        return newJson;
    };
    async function getInfos() { 
        const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=1`);
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

    function getRankColor(rank){
        let color;
        if(rank<3){
            color = 'gold';
        } 
        else{
            color = 'hsl(215,81%,56%)';
        }
        return color;
    }

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
                {#each cutAtLimit(infos.data) as anime, index}
                    <div class="card">
                        <a href="/animes/{anime.mal_id}"><!-- on hover se soulève-->
                            <div class="card-thumbnail">
                                <img src="{anime.images.jpg.image_url}" alt="{anime.title}.jpg">
                                {#if index < 10}
                                    <div class="rank" style="background-color: {getRankColor(index)};"> <!-- à refaire avec anime.rank-->
                                        <p>#{index+1}</p>
                                    </div>
                                {/if}
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
    .card-thumbnail .rank {
        position: absolute;
        background-color: rgb(0, 102, 255);
        height: 40px;
        width: 40px;
        border-radius: 90px;
        top: 8px;
        right: 8px;

        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;
        color: white;
        font-weight: 600;
    }
    .card-desc {
        bottom: 10px;
        color: rgb(116,136,153);
        font-weight: 600;
        font-size: 16px;
    }
</style>