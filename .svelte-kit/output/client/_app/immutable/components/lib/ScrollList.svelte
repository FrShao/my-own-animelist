<script>
    import { onMount } from 'svelte';
    import newUniqueId from 'locally-unique-id-generator';
    // Dynamic Import
    let Thing;
    let uniqId;
    let timeOut;
    export let lib;
    export let extraInformations;


    let elementWidth;
    onMount(async () => {
        Thing = (await import(`../lib/${lib}.svelte`)).default;
        elementWidth = (await import(`../lib/${lib}.svelte`)).elementWidth;
        //JS variables to CSS variables 
        if(isFittingSingleElement){
            noSkippedCard = 1;
        }else{
            noSkippedCard = Math.floor(screen.width / elementWidth * (3/4)); 
        }
        document.documentElement.style.setProperty('--buttonWidth', buttonWidth + 'px');
        document.documentElement.style.setProperty('--buttonHeight', buttonHeight + 'px');
        document.documentElement.style.setProperty('--buttonWidthMinus', buttonWidth*-1 + 'px');
        document.documentElement.style.setProperty('--elementWidth', elementWidth + 'px');
        uniqId = newUniqueId();
        timeOut = noSkippedCard*elementWidth * 0.63
        const selector = document.querySelector(`.scroll-images-${lib}-${uniqId}`);
    });

    let buttonWidth = 40;
    let buttonHeight = 80;
    let noSkippedCard = 0;
    let isScrollStarted = false
    export let isFittingSingleElement = false;
    /*
    async function leftScroll() {
        if(isFittingSingleElement){
            isScrollStarted=true;
        }

        const left = document.querySelector(`.scroll-images-${lib}-${uniqId}`);
        left.scrollBy(-noSkippedCard*elementWidth, 0);
        setTimeout(()=> {isScrollStarted = false}, timeOut);

        if(isFittingSingleElement){
            setTimeout(()=> {isScrollStarted = false}, timeOut);
        }
    }
    async function rightScroll() {
        if(isFittingSingleElement){
            isScrollStarted=true;
        }
        const right = document.querySelector(`.scroll-images-${lib}-${uniqId}`);
        right.scrollBy(noSkippedCard*elementWidth, 0);
        if(isFittingSingleElement){
            setTimeout(()=> {isScrollStarted = false}, timeOut);
        }
    }
    */

    async function scroll(direction=1) {
        const selector = document.querySelector(`.scroll-images-${lib}-${uniqId}`);
       
        if(isFittingSingleElement){
            isScrollStarted=true;
            setTimeout(()=> {isScrollStarted = false}, timeOut);
            selector.scrollBy(elementWidth, 0);
        } else {
            const selector = document.querySelector(`.scroll-images-${lib}-${uniqId}`);
            selector.scrollBy(noSkippedCard*elementWidth*direction, 0);
        }
    }
</script>



<slot>
    <div class="cover" class:fit-element={isFittingSingleElement}>
        <div class='scroll-images-{lib}-{uniqId} scroll-images'>
            {#if extraInformations == undefined}
                <svelte:component this={Thing} isNoWrap={true}/>
            {:else}
            <svelte:component this={Thing} isNoWrap=true extraInformations={extraInformations}/>
            {/if}
        </div>

        <button class="left" on:click={() => scroll(-1)}>
            <i class="fas fa-angle-double-left"></i>
        </button>
        <button class="right" on:click={() => scroll(1)} disabled={isScrollStarted}>
            <i class="fas fa-angle-double-right"></i>
        </button>
    </div>
</slot>

<style>
    .cover {
        position: relative;
        overflow: hidden;
    }
    .fit-element {
        width: var(--elementWidth);
    }
    .left {
        background-position: right;
        height: var(--buttonHeight);
        width: var(--buttonWidth);
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .right, .left {
        height: var(--buttonHeight);
        width: var(--buttonWidth);
        position: absolute;
        top: 50%;
        transition-duration: 0.5s;
    }

    .left {
        background-position: right;
        left: 0;
        transform: translate(var(--buttonWidthMinus), -50%)
    }

    .right {
        background-position: left;
        right: 0;
        transform: translate(var(--buttonWidth), -50%);
    }
    
    button {
        background-image: url(https://cdn.myanimelist.net/images/btn_handle.png?v=1634263200);
        background-repeat: no-repeat;
        background-size: 80px auto;

        background-color: transparent;

        border: none;
        outline: none;
        cursor: pointer;
    }
    .scroll-images {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        flex-direction: row;
    }

    .scroll-images::-webkit-scrollbar {
        display: none;
    }

    /*
    .scroll-images::-webkit-scrollbar {
        display: none;
        width: 5px;
        height: 8px;
        background-color: #aaa;
    }

    .scroll-images::-webkit-scrollbar-thumb {
        background-color: black;
    }
    */

    .cover:hover .right, .cover:hover .left {
        transition-duration: 0.5s;
        transform: translate(0, -50%);
    }
</style>