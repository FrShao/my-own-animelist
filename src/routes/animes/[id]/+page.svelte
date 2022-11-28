<script>
    import { page } from '$app/stores';
    let id = $page.params.id;
    async function getInfos() { 
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
        if (!res.ok || res.status === 404) return [];
        let json = await res.json();
        return json;
    };
    let infos = getInfos();
</script>

<main>
    {#await infos}
        <div>Waiting for informations ...</div>
        {:then infos} 
            <div class="poster">
                <div class="banner">
                    <img src="{infos.data.images.webp.large_image_url}" alt="{infos.data.title}-banner.jpg">
                </div>
                <div class="anime-informations">
                    <div class="anime-desc">
                        <div class="anime-title">
                            {infos.data.title}
                        </div>
                        <div class="anime-synopsis">
                            {infos.data.synopsis}
                        </div>
                    </div>
                    <div class="anime-informations-menu"> 
                        menu 
                    </div> 
                </div>

                <div class="overlap">
                    <div class="overlap-informations"> 
                        <div class="anime-thumbnail">
                            <img src="{infos.data.images.jpg.image_url}" alt="{infos.data.title}.jpg">
                        </div>
                    </div>
                    <div class="overlap-buttons">
                        <div>Add to list</div>
                        <div>favorite</div>
                    </div>
                </div>
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
        box-shadow: 0 -120px 150px;
        height: 250px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .anime-informations .anime-desc {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 430px;
        width: calc(100vw - 545px);
    }

    .anime-title {
        margin: 20px 0 20px 0;
        font-weight: 600;
        font-size: large;
    }
    .anime-synopsis {
        font-size: 11pt;
    }

    .overlap {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 270px;
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
</style>