<script lang="ts">
  import { page } from '$app/stores'
  import { applyAction, enhance } from '$app/forms'
  import { invalidateAll } from '$app/navigation'
  import sticky from '$lib/sticky.js';
  let isStuck = false;
  function handleStuck(e) {
      isStuck = e.detail.isStuck;
  }
</script>

<svelte:head>
  <title>SvelteKit Auth</title>
</svelte:head>

<section>
    <nav id="nav" class="sticky" class:isStuck use:sticky on:stuck={handleStuck}>
        <div class="logo">
            <img src="" alt="">
        </div>
        <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/animes">Animes</a>
        </li>
        <li>
            <a href="/mangas">Mangas</a>
        </li>
        </ul>

        {#if !$page.data.user}
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        {/if}

        {#if $page.data.user}
            {#if $page.data.user.role === "ADMIN"}
                <a href="/admin">Admin</a>
            {:else}
                <a href="/profile">Profile</a>
            {/if}
            
            <form
            action="/logout"
            method="POST"
            use:enhance={() => {
                return async ({ result }) => {
                invalidateAll()
                await applyAction(result)
                }}
            }>
            <button type="submit">Log out</button>
            </form>
        {/if}
    </nav>

  <slot />
</section>
<style>
    nav {
        margin: 0;
        background-color: #2F4858;
    }

    .sticky {
        position: sticky;
        padding: 0;
        z-index: 1;
        transition: all 0.3s;
        top: 0;
    }

    .sticky.isStuck {
        background: mintcream;
        box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2),
            0px 0px 6px 0px rgba(0, 0, 0, 0.3);
    }

    .logo {
        background-color: red;
    }
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        padding: 0;
        margin: 0;
    }
</style>