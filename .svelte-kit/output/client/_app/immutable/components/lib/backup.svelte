<script lang='ts'>
    function leftScroll() {
        const left = document.querySelector(".scroll-images");
        left.scrollBy(-200, 0);
    }
    function rightScroll() {
        const right = document.querySelector(".scroll-images");
        right.scrollBy(200, 0);
    }
</script>


<main>

<div class="cover">
    <button class="left" on:click={() => leftScroll()}>
        <i class="fas fa-angle-double-left"></i>
    </button>
    <div class="scroll-images">
        <div class="child">
        <img class="child-img" src="img.jpeg" alt="image" />
        </div>
        <div class="child">
        <img class="child-img" src="img.jpeg" alt="image" />
        </div>
        <div class="child">
        <img class="child-img" src="img.jpeg" alt="image" />
        </div>
        <div class="child">
        <img class="child-img" src="img.jpeg" alt="image" />
        </div>
        <div class="child">
        <img class="child-img" src="img.jpeg" alt="image" />
        </div>
        <div class="child">
        <img class="child-img" src="img.jpeg" alt="image" />
        </div>
    </div>
    <button class="right" on:click={() => rightScroll()}>
        <i class="fas fa-angle-double-right"></i>
    </button>
    </div>
</main>

<style>
    .cover {
        padding: 0px 30px;
        position: relative;
        margin-top: 100px;
    }
    .left {
        background-color: aqua;
        height: 100px;
        width: 100px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .right {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
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
    .child img {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
    .scroll-images::-webkit-scrollbar {
        width: 5px;
        height: 8px;
        background-color: #aaa;
    }

    .scroll-images::-webkit-scrollbar-thumb {
        background-color: black;
    }

    .child {
        min-width: 120px;
        height: 100px;
        margin: 1px 10px;
        overflow: hidden;
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

</style>