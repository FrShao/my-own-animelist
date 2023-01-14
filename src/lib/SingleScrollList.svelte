<script>
    //https://dev.to/joostkiens/creating-practical-instagram-like-galleries-and-horizontal-lists-with-css-scroll-snapping-580e
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
        document.documentElement.style.setProperty(`--elementWidth`, elementWidth + 'px');
        uniqId = newUniqueId();
        timeOut = noSkippedCard*elementWidth * 0.63
        const selector = document.querySelector(`.scroll-images-${lib}-${uniqId}`);
    });

    let buttonWidth = 40;
    let buttonHeight = 80;
    let noSkippedCard = 0;
    let isScrollStarted = false
    export let isFittingSingleElement = false;

    async function scroll(direction=1) {
        const selector = document.querySelector(`.scroll-images-${lib}-${uniqId}`);
       
        if(isFittingSingleElement){
            isScrollStarted=true;
            setTimeout(()=> {isScrollStarted = false}, timeOut);
            selector.scrollBy(elementWidth*direction, 0);
        } else {
            const selector = document.querySelector(`.scroll-images-${lib}-${uniqId}`);
            selector.scrollBy(noSkippedCard*elementWidth*direction, 0);
        }
    }
</script>

<section>
    <div class="viewport">
        <ul class="list">
        <li class="item">1</li>
        <li class="item">2</li>
        <li class="item">3</li>
        <li class="item">4</li>
        <li class="item">5</li>
        </ul>
    </div>
</section>

<style>
    .list {
        display: flex;
        overflow-x: scroll;

        /* prevent accidentally going back or triggering other swipe events */
        overscroll-behavior: contain;

        /* scroll snapping */
        scroll-snap-type: x mandatory;
    }

    .list::-webkit-scrollbar {
        display: none;
    }

    .item {
        height: 240px;
        width: 100%;
        flex-shrink: 0;
        scroll-snap-align: start;
    }

</style>