<script>
    import { page } from '$app/stores';
    export let id = $page.params.id;
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
                    <img src="{infos.data.images.jpg.large_image_url}" alt="{infos.data.title}-banner.jpg">
                </div>
                <div class="thumbnail-card">
                    <div class="thumbnail">    
                        <img src="" alt="">
                    </div>
                    <div class="thumbnail-buttons">
                        <div>Add to list</div>
                        <div>favorite</div>
                    </div>
                </div>
            </div>
    {:catch error}
        <div>Error: {error.message}</div>
    {/await}
</main>