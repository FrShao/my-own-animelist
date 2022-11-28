<script lang='ts'>
    import { onMount } from 'svelte';

    onMount(() => {
        document.documentElement.style.setProperty('--cardWidth', cardWidth + 'px');
        document.documentElement.style.setProperty('--cardHeight', cardHeight + 'px');
        document.documentElement.style.setProperty('--recomTextWidth', recomTextWidth + 'px');
    });

    export let limit = 10;
    export let isNoWrap = false;
    let cardWidth = 225;
    let cardHeight= 308;
    let recomTextWidth = 325;

    function cutAtLimit(json){
        let newJson = [json[0]];
        for(let i=1; i<limit-1; i++){
            newJson.push(json[i]);
        }
        return newJson;
    };
    async function getInfos() { 
        const res = await fetch(`https://api.jikan.moe/v4/recommendations/anime?page=1`);
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
    export let elementWidth = (225*2) + 325 + 10; // 2 card + text + text_marge
    export function getElementWidth(){
        return elementWidth;
    }
</script>

<slot>
    <div class="wrap {isNoWrap ? 'nowrap' : ''}">
        {#await infos}
            <div>Waiting for informations ...</div>
            {:then infos}
                {#each cutAtLimit(infos.data) as recommendation}
                    <div class="cover">
                        <div class="card">
                            <div class="card-thumbnail">
                                <img src="{recommendation.entry[0].images.jpg.image_url}" alt="{recommendation.entry[0].title}.jpg">
                            </div>
                    
                            <div class="card-desc">
                                {checkNameLength(recommendation.entry[0].title)}
                            </div>
                        </div>
                        <div class="recommendation-inf">
                            {recommendation.content}
                            <div class="sign">
                                {recommendation.date}
                                {recommendation.user.username}
                                photo profile rond
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-thumbnail">
                                <img src="{recommendation.entry[1].images.jpg.image_url}" alt="{recommendation.entry[1].title}.jpg">
                            </div>
                    
                            <div class="card-desc">
                                {checkNameLength(recommendation.entry[1].title)}
                            </div>
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

    .recommendation-inf {
        width: var(--recomTextWidth);
        margin: 0 5px 0 5px;
        padding-top: 10px;
    }

    .cover {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
</style>