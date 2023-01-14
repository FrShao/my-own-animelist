<script>
	import { enhance } from '$app/forms';
    import { page } from '$app/stores';
	import Grid from 'svelte-grid-extended';
 // => change object assigne
    //https://svelte.dev/repl/6f3685b564d74eb0812cfe10e41f3186?version=3.55.0
    //https://github.com/cuire/svelte-grid-extended
    let animes = $page.data.post.animes;
    let items = Array.from(animes);
    items.forEach((anime, index) => {
        anime.id = index;
        anime.x = 0;
        anime.y = index;
        anime.w = 1;
        anime.h = 2;
        items.push(anime);
    });
    const itemSize = { width: 100, height: 400 }

    const remove = (item) => {
        items = items.filter((value) => value.id !== item.id);

        if (adjustAfterRemove) {
            items = gridHelp.adjust(items, 1);
        }
    };
</script>
<main>
    <h1>Liste de {$page.data.user.name}</h1>
    {#await animes}
        wait
    {:then animes}
    <Grid {itemSize} cols={0} rows={0} class="grid-container" {items} let:item readOnly>
        <div class="grid-item">
            <div class="wrap">
                <img src="{item.images.jpg.image_url}" alt="{item.title}">
            </div>
            <form method="post"><!--use:enhance-->
                <input name="anime-id" type="hidden" value={item.mal_id} />
                <button formaction="?/delList"><!--on:click={()=>remove(item)}-->
                    <span>Supprimer de la liste</span>
                </button>
            </form>
        </div>
    </Grid>
            
        <!--{#each animes as anime}
        {console.log(anime)}
            <div class="wrap" id="anime-{anime.mal_id}">
                <img src="" alt="{anime.title}">{console.log(anime.images)}
            </div>
            <form method="post" use:enhance>
                <input name="anime-id" type="hidden" value="{anime.mal_id}" />
                <button formaction="?/delList">
                    <span>Supprimer de la liste</span>
                </button>
            </form>
            
        {/each}-->
        => animes
        list favorite
        list anime
    {/await}
</main>
<style>
    :global(.grid-container) {
        display: block;
    }
</style>