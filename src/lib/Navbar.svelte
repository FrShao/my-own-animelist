<script>
    //https://svelte.dev/repl/4ad71e00c86c47d29806e17f09ff0869?version=3.54.0
    import sticky from './sticky.js';

    let isStuck = false;

    function handleStuck(e) {
        isStuck = e.detail.isStuck;
    }
</script>

<style>
    nav {
        margin: 0;
        background-color: #2e51a2;
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
    </nav>

    <slot />
</section>
