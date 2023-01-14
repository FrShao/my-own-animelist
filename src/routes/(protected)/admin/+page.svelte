<script lang="ts">
    import { page } from '$app/stores'
</script>

<h1>Admin</h1>

<p>Welcome {$page.data.user.name}!</p>


<a data-sveltekit-preload-code="eager" href="/admin/user-management">Manage Users</a>
<form action="/logout" method="POST">
    <button type="submit">Log out</button>
</form>

  