<script lang="ts">
    import { enhance } from '$app/forms'
    import type { ActionData } from './$types'
    import { page } from '$app/stores'

    export let form: ActionData
</script>

<h1>Profile</h1>

{#if $page.data.user}
    <p>Welcome {$page.data.user.name}!</p>
{/if}

{#if $page.data.user.role === 'ADMIN'}
    <form action="/logout" method="POST">
        <button type="submit">Log out</button>
    </form>
{/if}

<form action="?/editUser" method="POST" use:enhance>
    <div>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" required value="{$page.data.user.name}"/>
    </div>

    <div>
        <label for="password">Password</label>
        <input id="password" name="password" type="password"/>
    </div>

    {#if form?.user}
        <p class="error">Username is taken.</p>
    {/if}

    <button type="submit">Change</button>
</form>

<form action="?/uploadFile" method="POST" use:enhance>
    <input type="file" />

    <button type="submit">Change</button>
</form>