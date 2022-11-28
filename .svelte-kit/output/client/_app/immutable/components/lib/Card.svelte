<script>
    
    async function getInfos() { 
        const res = await fetch("hhttps://api.jikan.moe/v4/top/anime");
        if (!res.ok || res.status === 404) return [];
        const json = await res.json();
        return json;
    }
    let infos = getInfos()
</script>


<slot>
    {#await infos}
        <div>Waiting for informations ...</div>
        {:then infos}
            <a href="{infos.data.url}">
                <div class="wrap">

                    <div class="card">
                        <div class="card-thumbnail">
                            <img src="{infos.data.images.jpg.small_image_url}" alt="{infos.data.title}.jpg">
                        </div>
                
                        <div class="card-desc">
                            {infos.data.title}
                        </div>
                    </div>

                </div>
            </a>
        {:catch error}
            <div>Error: {error.message}</div>
    {/await}
</slot>