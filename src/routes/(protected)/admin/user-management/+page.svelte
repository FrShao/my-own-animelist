<script lang="ts">
    import { Disclosure, DisclosureButton, DisclosurePanel, Dialog, DialogOverlay, DialogTitle, DialogDescription } from "@rgossiaux/svelte-headlessui";
    import { fade } from "svelte/transition";
    import { page } from '$app/stores';
    import Tag from 'svelma/src/components/Tag/Tag.svelte';

    import Badge from '@svelteuidev/core/components/Badge/Badge.svelte';
    import NativeSelect from '@svelteuidev/core/components/NativeSelect/NativeSelect.svelte';
    import TextInput from '@svelteuidev/core/components/TextInput/TextInput.svelte';
    import Divider from '@svelteuidev/core/components/Divider/Divider.svelte';
    
    import Fab, { Icon } from '@smui/fab';
    import Button, { Label } from '@smui/button';
	import { enhance } from "$app/forms";

    let users = $page.data.users;
    let roles = $page.data.roles;
    let currentUser;
    let currentPP = $page.data.default_pp_url[0].url;
    let fileInput;

    let isCreateDialogOpened = false;
    let isEditDialogOpened = false;
    let isDeleteDialogOpened = false;

    let isTag1Active = true;
    import type { ActionData } from './$types'
	import Box from "@svelteuidev/core/components/Box/Box.svelte";

    export let form: ActionData
    let toto = false
</script>

<main class="centered-content">
    {#await $page.data}
        ss
    {:then page}
    <button on:click={()=>toto=true}>True</button>
    <button on:click={()=>toto=false}>False</button>
        <h1>User Management</h1>
        <div class="list-user-wrapper">
            <Button on:click={() => (isCreateDialogOpened = true, currentPP = page.default_pp_url[0].url)} variant="unelevated" color="secondary">
                <Label>Add</Label>
                <Icon class="material-icons">add</Icon>
            </Button>
            {#each users as user}
                <Disclosure let:open class="list-user-element">
                    <DisclosureButton class="list-user-element-content">
                        {user.username}
                        <Badge color="{user.role.color}" size="md" radius="md" variant="filled">
                            {user.role.name}
                        </Badge>
                        <Icon style={open ? "transform: rotate(90deg); transition-duration: 500ms, 500ms;" : "transition-duration: 500ms;"} class="material-icons list-user-element-content-icon">chevron_right</Icon>
                    </DisclosureButton>
                    {#if open}
                        <div transition:fade class="list-user-element-hidden-content-transition">
                            <DisclosurePanel static class="list-user-element-hidden-content">
                                <div class="user-profile-picture" style="--profile-picture: url({user.profilePicture.url});"></div>
                                <div class="list-user-element-hidden-content-user-informations">
                                    <div class="list-user-element-hidden-content-user-id">ID : {user.id}</div>
                                    <div  class="list-user-element-hidden-content-user-informations-lower">
                                        <div>
                                            {user.username}
                                            <Badge color="{user.role.color}" size="lg" radius="md" variant="filled">
                                                {user.role.name}
                                            </Badge>
                                        </div>
                                        <div>
                                            <Button on:click={() => (isEditDialogOpened = true, currentUser = user, currentPP = user.profilePicture.url)} variant="outlined" color="secondary">
                                                <Label>Edit</Label>
                                                <Icon class="material-icons">settings</Icon>
                                            </Button>
                                            <Button on:click={() => (isDeleteDialogOpened = true, currentUser = user)} variant="unelevated">
                                                <Label>Delete</Label>
                                                <Icon class="material-icons">delete</Icon>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </DisclosurePanel>
                        </div>
                    {/if}
                </Disclosure>
            {/each}
        </div>
        {#if isCreateDialogOpened}
            <div transition:fade>
                <div class="dialog-back"></div>
                <Dialog open={isCreateDialogOpened} on:close={() => (isCreateDialogOpened = false)} static class="dialog-create-user dialog">
                    <DialogOverlay
                        style={"position: fixed; top: 0; left: 0; background-color: rgb(0, 0, 0); opacity: 0.3"}
                    />
                
                    <DialogTitle class="dialog-title">Create User</DialogTitle>
                    <Divider />
                    <form class="dialog-create-user-form"  enctype="multipart/form-data" method="post" action="?/createUser" use:enhance>
                        <div class="edit-user-profile-picture" style="--profile-picture: url({currentPP}); position: relative;">
                            <Fab color="primary" on:click={()=> document.getElementById("input-file-create-user").click()} style="position: absolute; right:0; bottom: 0;" type="button">
                                <Icon class="material-icons">sync</Icon>
                                <input accept="image/*" type="file" name="profile-picture" id="input-file-create-user" bind:files={fileInput} on:change={() => currentPP = URL.createObjectURL(fileInput[0])} style="display: none;">
                            </Fab>
                        </div>

                        <div class="create-user-information">
                            <TextInput label="Username :" name="username" placeholder="Username" required error="{form?.user ? 'Username is taken.' : ''}"/>
                            <TextInput label="Password :" type="password" name="password" required/>

                            <NativeSelect data={roles.map((role) => role.name)} 
                            placeholder="Pick one"
                            label="Role :"
                            value="USER"
                            name="role"
                            />
                            <div>
                                <Button type="reset" on:click={()=> isCreateDialogOpened=false} variant="outlined" color="secondary">
                                    <Label>Cancel</Label>
                                    <Icon class="material-icons">close</Icon>
                                </Button>
                                <Button type="submit" color="primary" variant="unelevated">
                                    <Label>Save</Label>
                                    <Icon class="material-icons">save</Icon>
                                </Button>
                            </div>
                        </div>
                    </form>
                    {#if form?.user}
                    <p class="error">Username is taken.</p>
                    {/if}
                </Dialog>
            </div>
        {/if}
        {#if isEditDialogOpened}
            <div transition:fade>
                <div class="dialog-back"></div>
                <Dialog open={isEditDialogOpened} on:close={() => (isEditDialogOpened = false)} static class="dialog-edit-user dialog">
                    <DialogOverlay
                        style={"position: fixed; top: 0; left: 0; background-color: rgb(0, 0, 0); opacity: 0.3"}
                    />
                
                    <DialogTitle class="dialog-title">Edit user's informations</DialogTitle>
                    <Divider />
                    <form class="dialog-edit-user-form"  enctype="multipart/form-data" method="post" action="?/editUser" autocomplete="off" use:enhance>
                        <div class="edit-user-profile-picture" style="--profile-picture: url({currentPP}); position: relative;">
                            <Fab color="primary" on:click={()=> document.getElementById("input-file-edit-user").click()} style="position: absolute; right:0; bottom: 0;" type="button">
                                <Icon class="material-icons">sync</Icon>
                                <input accept="image/*" type="file" name="profile-picture" id="input-file-edit-user" bind:files={fileInput} on:change={() => currentPP = URL.createObjectURL(fileInput[0])} style="display: none;">
                            </Fab>
                        </div>
                        <div class="edit-user-information">
                            <TextInput label="Username :" name="username" placeholder="{currentUser.username}" value="{currentUser.username}"/>
                            <TextInput label="Password :" type="password" name="password"/>

                            <NativeSelect data={roles.map((role) => role.name)} 
                            placeholder="Pick one"
                            label="Role :"
                            value="{currentUser.role.name}"
                            name="role"
                            />
                            <input type="hidden" name="user" value="{JSON.stringify(currentUser)}">
                            <div>
                                <Button type="reset" on:click={()=> isEditDialogOpened=false} variant="outlined" color="secondary">
                                    <Label>Cancel</Label>
                                    <Icon class="material-icons">close</Icon>
                                </Button>
                                <Button type="submit" color="primary" variant="unelevated">
                                    <Label>Save</Label>
                                    <Icon class="material-icons">save</Icon>
                                </Button>
                            </div>
                        </div>
                    </form>
                </Dialog>
            </div>
        {/if}
        {#if isDeleteDialogOpened}
            <div transition:fade>
                <div class="dialog-back"></div>
                <Dialog open={isDeleteDialogOpened} on:close={() => (isDeleteDialogOpened = false)} static class="dialog">            
                    <DialogTitle class="dialog-title">Edit user's informations</DialogTitle>
                    <Divider />
                    <div class="dialog-delete-user-content">
                        <Icon class="material-icons" style="font-size: 150px;">warning</Icon>
                        <p>Are you sure to delete this user ? <br>This action can't be canceled.</p>
                        <form method="post" action="?/deleteUser">
                            <input type="hidden" name="user-id" value={currentUser.id}>
                            <Button type="reset" on:click={()=> isDeleteDialogOpened=false} variant="outlined" color="secondary">
                                <Label>Cancel</Label>
                                <Icon class="material-icons">close</Icon>
                            </Button>
                            <Button type="submit" color="primary" variant="unelevated">
                                <Label>Delete</Label>
                                <Icon class="material-icons">delete</Icon>
                            </Button>
                        </form>
                    </div>
                </Dialog>
            </div>
        {/if}
    {/await}
    <div class="field">
        {#if isTag1Active}
            <Tag  type="is-primary"
                closable 
                on:close={e => isTag1Active = false}
                rounded>
            Colored closable tag label
            </Tag>
        {/if}
    </div>
    <a href="/" class="button is-orange">Primary</a>
</main>

<style>
    .list-user-wrapper {
        background-color: white;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 5px;
    }
    :global(.list-user-element) {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        border-radius: 5px;
        min-height: 50px;
        width: 100%;
    }
    :global(.list-user-element-content) {
        z-index: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0;
        background-color: #31527C;
        border: none;
        border-radius: 20px;
        width: 100%;
        height: 50px;
        color: white;
    }
    :global(.list-user-element-content-icon) {
        margin: 0;
        object-fit: cover;
        width: 40px;

    }
    .list-user-element-hidden-content-transition {
        width: 100%;
    }
    :global(.list-user-element-hidden-content) {
        padding: 35px 20px 10px 20px;
        margin-top: -2%;
        border-radius: 0 0 20px 20px;
        border: #31527C solid 2px;
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
    }
    .list-user-element-hidden-content-user-informations {
        display: flex;
        flex-direction: column;
    }
    .list-user-element-hidden-content-user-id {
        margin: 20px 0 10px 0;
        font-size: 1.5em;
        font-weight: 500;
    }
    .list-user-element-hidden-content-user-informations-lower {
        display: flex;
        justify-content: space-between;
    }
    .user-profile-picture, .edit-user-profile-picture {
        width: 300px;
        height: 300px;
        background-image: var(--profile-picture);
        background-size: cover;
        border-radius: 50%;
    }

    .dialog-back {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(3px);
    }
    .dialog-edit-user-form, .dialog-create-user-form {
        align-self: center;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 50px;
    }
    .edit-user-information, .create-user-information {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .dialog-delete-user-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .dialog-delete-user-content form {
        align-self: flex-end;
    }
    :global(.dialog) {
        position: fixed;
        /*
        // CENTER VERTICALLY AND HORIZONTALLY
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        */
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        width: 50%;
        margin: auto;
        background-color: white;
        border-radius: 5px;
        padding: 20px;

        box-sizing: border-box;
        box-shadow: 0 0 1000px 100vw rgb(0, 0, 0, 0.5);

        display: flex;
        flex-direction: column;
    }
    :global(.dialog-title) {
        margin: 0;
    }
</style>