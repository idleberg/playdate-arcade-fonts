<script lang="ts">
    import "carbon-components-svelte/css/white.css";
    import { onMount } from 'svelte';
    import { sortByKey } from '$lib/util';
    import page from '$meta';
    import store from '$lib/store';

    // Components
    import { Grid } from "carbon-components-svelte";
    import Header from '$components/Header.svelte';
    import Footer from '$components/Footer.svelte';
    
    onMount(() => {
        store.set(sortByKey(page.content).filter(item => item.public));
    });
</script>

<Grid fullWidth>
    <Header />
    
    <slot></slot>

    <Footer />
</Grid>

<style lang="scss" global>
    :root {
        --size: 8px;
        --multiplier: 1;
    }

    :global(.zoom-2x) {
        --multiplier: 2;
    }

    :global(.zoom-4x) {
        --multiplier: 4;
    }

    [data-glyph] {
        --row-1: calc(-2px * var(--multiplier));
        --row-2: calc(-10px * var(--multiplier));
        --row-3: calc(-18px * var(--multiplier));
        --row-4: calc(-26px * var(--multiplier));
        --row-5: calc(-34px * var(--multiplier));
        --row-6: calc(-42px * var(--multiplier));

        --col-1: calc(-2px * var(--multiplier));
        --col-2: calc(-11px * var(--multiplier));
        --col-3: calc(-20px * var(--multiplier));
        --col-4: calc(-29px * var(--multiplier));
        --col-5: calc(-38px * var(--multiplier));
        --col-6: calc(-47px * var(--multiplier));
        --col-7: calc(-56px * var(--multiplier));
        --col-8: calc(-65px * var(--multiplier));
        --col-9: calc(-74px * var(--multiplier));
        --col-10: calc(-83px * var(--multiplier));
        --col-11: calc(-92px * var(--multiplier));
        --col-12: calc(-101px * var(--multiplier));
        --col-13: calc(-110px * var(--multiplier));
        --col-14: calc(-119px * var(--multiplier));
        --col-15: calc(-128px * var(--multiplier));
        --col-16: calc(-137px * var(--multiplier));

        background-image: var(--backgroundImage);
        background-repeat: no-repeat;
        background-size: calc(var(--multiplier) * 148px);
        content-visibility: hidden;
        display: inline-block;
        height: calc(var(--size) * var(--multiplier));
        image-rendering: pixelated;
        width: calc(var(--size) * var(--multiplier));
    }

    /* Row 1 */
    [data-glyph=" "] {
        background-position: var(--col-1) var(--row-1);
    }

    [data-glyph="!"] {
        background-position: var(--col-2) var(--row-1);
    }

    [data-glyph="\""] {
        background-position: var(--col-3) var(--row-1);
    }

    [data-glyph="#"] {
        background-position: var(--col-4) var(--row-1);
    }

    [data-glyph="$"] {
        background-position: var(--col-5) var(--row-1);
    }

    [data-glyph="%"] {
        background-position: var(--col-6) var(--row-1);
    }

    [data-glyph="&"] {
        background-position: var(--col-7) var(--row-1);
    }

    [data-glyph="'"] {
        background-position: var(--col-8) var(--row-1);
    }

    [data-glyph="("] {
        background-position: var(--col-9) var(--row-1);
    }

    [data-glyph=")"] {
        background-position: var(--col-10) var(--row-1);
    }

    [data-glyph="*"] {
        background-position: var(--col-11) var(--row-1);
    }

    [data-glyph="+"] {
        background-position:var(--col-12) var(--row-1);
    }

    [data-glyph=","] {
        background-position: var(--col-13) var(--row-1);
    }

    [data-glyph="-"] {
        background-position: var(--col-14) var(--row-1);
    }

    [data-glyph="."] {
        background-position: var(--col-15) var(--row-1);
    }

    [data-glyph="/"] {
        background-position: var(--col-16) var(--row-1);
    }

    /* Row 2 */
    [data-glyph="0"] {
        background-position: var(--col-1) var(--row-2);
    }

    [data-glyph="1"] {
        background-position: var(--col-2) var(--row-2);
    }

    [data-glyph="2"] {
        background-position: var(--col-3) var(--row-2);
    }

    [data-glyph="3"] {
        background-position: var(--col-4) var(--row-2);
    }

    [data-glyph="4"] {
        background-position: var(--col-5) var(--row-2);
    }

    [data-glyph="5"] {
        background-position: var(--col-6) var(--row-2);
    }

    [data-glyph="6"] {
        background-position: var(--col-7) var(--row-2);
    }

    [data-glyph="7"] {
        background-position: var(--col-8) var(--row-2);
    }

    [data-glyph="8"] {
        background-position: var(--col-9) var(--row-2);
    }

    [data-glyph="9"] {
        background-position: var(--col-10) var(--row-2);
    }

    [data-glyph=":"] {
        background-position: var(--col-11) var(--row-2);
    }

    [data-glyph=";"] {
        background-position: var(--col-12) var(--row-2);
    }

    [data-glyph="<"] {
        background-position: var(--col-13) var(--row-2);
    }

    [data-glyph="="] {
        background-position: var(--col-14) var(--row-2);
    }

    [data-glyph=">"] {
        background-position: var(--col-15) var(--row-2);
    }

    [data-glyph="?"] {
        background-position: var(--col-16) var(--row-2);
    }

    /* Row 3 */
    [data-glyph="@"] {
        background-position: var(--col-1) var(--row-3);
    }

    [data-glyph="A"] {
        background-position: var(--col-2) var(--row-3);
    }

    [data-glyph="B"] {
        background-position: var(--col-3) var(--row-3);
    }

    [data-glyph="C"] {
        background-position: var(--col-4) var(--row-3);
    }

    [data-glyph="D"] {
        background-position: var(--col-5) var(--row-3);
    }

    [data-glyph="E"] {
        background-position: var(--col-6) var(--row-3);
    }

    [data-glyph="F"] {
        background-position: var(--col-7) var(--row-3);
    }

    [data-glyph="G"] {
        background-position: var(--col-8) var(--row-3);
    }

    [data-glyph="H"] {
        background-position: var(--col-9) var(--row-3);
    }

    [data-glyph="I"] {
        background-position: var(--col-10) var(--row-3);
    }

    [data-glyph="J"] {
        background-position: var(--col-11) var(--row-3);
    }

    [data-glyph="K"] {
        background-position: var(--col-12) var(--row-3);
    }

    [data-glyph="L"] {
        background-position: var(--col-13) var(--row-3);
    }

    [data-glyph="M"] {
        background-position: var(--col-14) var(--row-3);
    }

    [data-glyph="N"] {
        background-position: var(--col-15) var(--row-3);
    }

    [data-glyph="O"] {
        background-position: var(--col-16) var(--row-3);
    }

    /* Row 4 */
    [data-glyph="P"] {
        background-position: var(--col-1) var(--row-4);
    }

    [data-glyph="Q"] {
        background-position: var(--col-2) var(--row-4);
    }

    [data-glyph="R"] {
        background-position: var(--col-3) var(--row-4);
    }

    [data-glyph="S"] {
        background-position: var(--col-4) var(--row-4);
    }

    [data-glyph="T"] {
        background-position: var(--col-5) var(--row-4);
    }

    [data-glyph="U"] {
        background-position: var(--col-6) var(--row-4);
    }

    [data-glyph="V"] {
        background-position: var(--col-7) var(--row-4);
    }

    [data-glyph="W"] {
        background-position: var(--col-8) var(--row-4);
    }

    [data-glyph="X"] {
        background-position: var(--col-9) var(--row-4);
    }

    [data-glyph="Y"] {
        background-position: var(--col-10) var(--row-4);
    }

    [data-glyph="Z"] {
        background-position: var(--col-11) var(--row-4);
    }

    [data-glyph="["] {
        background-position: var(--col-12) var(--row-4);
    }

    [data-glyph="\\"] {
        background-position: var(--col-13) var(--row-4);
    }

    [data-glyph="]"] {
        background-position: var(--col-14) var(--row-4);
    }

    [data-glyph="^"] {
        background-position: var(--col-15) var(--row-4);
    }

    [data-glyph="_"] {
        background-position: var(--col-16) var(--row-4);
    }

    /* Row 5 */
    [data-glyph="`"] {
        background-position: var(--col-1) var(--row-5);
    }

    [data-glyph="a"] {
        background-position: var(--col-2) var(--row-5);
    }

    [data-glyph="b"] {
        background-position: var(--col-3) var(--row-5);
    }

    [data-glyph="c"] {
        background-position: var(--col-4) var(--row-5);
    }

    [data-glyph="d"] {
        background-position: var(--col-5) var(--row-5);
    }

    [data-glyph="e"] {
        background-position: var(--col-6) var(--row-5);
    }

    [data-glyph="f"] {
        background-position: var(--col-7) var(--row-5);
    }

    [data-glyph="g"] {
        background-position: var(--col-8) var(--row-5);
    }

    [data-glyph="h"] {
        background-position: var(--col-9) var(--row-5);
    }

    [data-glyph="i"] {
        background-position: var(--col-10) var(--row-5);
    }

    [data-glyph="j"] {
        background-position: var(--col-11) var(--row-5);
    }

    [data-glyph="k"] {
        background-position: var(--col-12) var(--row-5);
    }

    [data-glyph="l"] {
        background-position: var(--col-13) var(--row-5);
    }

    [data-glyph="m"] {
        background-position: var(--col-14) var(--row-5);
    }

    [data-glyph="n"] {
        background-position: var(--col-15) var(--row-5);
    }

    [data-glyph="o"] {
        background-position: var(--col-16) var(--row-5);
    }

    /* Row 6 */
    [data-glyph="p"] {
        background-position: var(--col-1) var(--row-6);
    }

    [data-glyph="q"] {
        background-position: var(--col-2) var(--row-6);
    }

    [data-glyph="r"] {
        background-position: var(--col-3) var(--row-6);
    }

    [data-glyph="s"] {
        background-position: var(--col-4) var(--row-6);
    }

    [data-glyph="t"] {
        background-position: var(--col-5) var(--row-6);
    }

    [data-glyph="u"] {
        background-position: var(--col-6) var(--row-6);
    }

    [data-glyph="v"] {
        background-position: var(--col-7) var(--row-6);
    }

    [data-glyph="w"] {
        background-position: var(--col-8) var(--row-6);
    }

    [data-glyph="x"] {
        background-position: var(--col-9) var(--row-6);
    }

    [data-glyph="y"] {
        background-position: var(--col-10) var(--row-6);
    }

    [data-glyph="z"] {
        background-position: var(--col-11) var(--row-6);
    }

    [data-glyph="{"] {
        background-position: var(--col-12) var(--row-6);
    }

    [data-glyph="|"] {
        background-position: var(--col-13) var(--row-6);
    }

    [data-glyph="}"] {
        background-position: var(--col-13) var(--row-6);
    }

    [data-glyph="~"] {
        background-position: var(--col-14) var(--row-6);
    }
</style>