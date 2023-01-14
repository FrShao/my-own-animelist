<script>
    
    async function getInfos() { 
        const res = await fetch("https://api.jikan.moe/v4/genres/anime");
        if (!res.ok || res.status === 404) return [];
        const json = await res.json();
        return json;
    }
    let infos = getInfos()
</script>


<section>
    {#await infos}
        <div>Waiting for informations ...</div>
        {:then infos}
            <a href="">
                <div class="wrap">
                    {#each infos.data as anime}
                        <div class="card">
                            <div class="card-thumbnail">

                            </div>
                    
                            <div class="card-desc">
                                {anime.name}
                            </div>
                        </div>
                    {/each}
                </div>
            </a>
        {:catch error}
            <div>Error: {error.message}</div>
    {/await}
</section>