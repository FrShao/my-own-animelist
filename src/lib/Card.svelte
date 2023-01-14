<script lang="ts">
    import { PUBLIC_CARD_WIDTH, PUBLIC_CARD_HEIGHT } from "$env/static/public";
    export let cardUrl = "/";
    export let cardImg = "";
    export let cardName = "N/A";

    function checkNameLength(name:string){
        let string:string;
        const maxChar = 40;
        if(name.length>maxChar){
            let counter = 0;
            let splittedName = name.split(" ");
            string = '';
            splittedName.forEach(word => {
                counter += word.length+1;
                if(counter<=(maxChar+1)){
                    string += word + ' ';
                }
            });
            string += '...'
        }else{
            string = name;
        }
        return string;
    };
</script>

<div class="card">
    <a href="{cardUrl}"><!-- on hover se soulève-->
        <div class="card-thumbnail" style="background-image: url({cardImg}); width: {PUBLIC_CARD_WIDTH}; height: {PUBLIC_CARD_HEIGHT};"></div>
        <div class="card-desc">
            {checkNameLength(cardName)}
        </div>
    </a>
</div>


<style>
    .card {
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        width: var(--cardWidth);
        height: fit-content;
    }
    .card a {
        text-decoration: none;
    }
    .card-thumbnail {
        position: relative;
        border-radius: 5px;
        width: var(--cardWidth);
        height: var(--cardHeight);
    }
    .card-desc {
        bottom: 10px;
        color: rgb(116,136,153);
        font-weight: 600;
        font-size: 16px;
        height: 50px;
    }
</style>
