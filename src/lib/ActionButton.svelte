<script lang="ts">
    import { enhance } from '$app/forms'
    
    export let action:string = "";
    export let color:string = "red";
    export let text:string = "ULTIMATE BUTTON made by Shao";
    export let actions:string[] = [];
    export let colors:string[] = [];
    export let texts:string[] = []
</script>

<section>
    <form method="post" use:enhance>
        {#if actions.length > 0}
            {#each actions as action, index}
                <button formaction="{action}" class="action-button" style="--button-color: {colors[index]};">
                    <span>{texts[index]}</span>
                </button>
            {/each}
        {:else}
            <button formaction="{action}" class="action-button" style="--button-color: {color};">
                <span>{text}</span>
            </button>
        {/if}
    </form>
</section>
<style>
    .action-button {
        height: 50px;
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        border: 0;
        border-radius: 8px;
        
        box-sizing: border-box;
        color: #FFFFFF;
        background-color: var(--button-color);
        border: 2px solid var(--button-color);

        padding: 3px;

        user-select: none;
        touch-action: manipulation;
        cursor: pointer;

        appearance: none;
        transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);

        overflow: hidden;
        outline: none;
    }
    .action-button:hover {
        background-color: yellow;
    }

    .action-button span {
        background-color: rgb(5, 6, 45);
        padding: 0;
        border-radius: 6px;
        width: fit-content;
        height: fit-content;
        transition: 300ms;
        background: none;
    }
    .action-button:hover span {
        background: none;
    }
    .action-button:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
        transform: translateY(-2px);
    }
    .action-button:active {
        box-shadow: none;
        transform: translateY(0);
    }

</style>