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
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
    
    onMount(() => {
        store.set(sortByKey(page.content).filter(item => item.public));
    });
</script>

<Grid fullWidth>
    <Header />
    
    {@render children?.()}

    <Footer />
</Grid>

<style lang="scss" global>
    :root {
        --multiplier: 1;
    }

    :global(.zoom-2x) {
        --multiplier: 2;
    }

    :global(.zoom-4x) {
        --multiplier: 4;
    }

    [data-size="8x8"] {
        --width: 8px;
        --height: 8px;
    }

    [data-size="8x16"] {
        --width: 8px;
        --height: 16px;
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
        height: calc(var(--height) * var(--multiplier));
        image-rendering: pixelated;
        width: calc(var(--width) * var(--multiplier));
        vertical-align: middle;
    }

    $row-1: " ", "!", "\\\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/";
    $row-2: "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?";
    $row-3: "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O";
    $row-4: "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\\\", "]", "^", "_";
    $row-5: "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o";
    $row-6:"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~";
    
    @each $current-glyph in $row-1 {
        $i: index($row-1, $current-glyph);
        
        [data-glyph="#{$current-glyph}"] {
            &[data-size="8x8"] {
                background-position: var(--col-#{$i}) var(--row-1);
            }

            &[data-size="8x16"] {
                background-position: var(--col-#{$i}) calc(var(--row-2) * 2 + 2px);
            }
        }
    }
    
    @each $current-glyph in $row-2 {
        $i: index($row-2, $current-glyph);
        
        [data-glyph="#{$current-glyph}"] {
            &[data-size="8x8"] {
                background-position: var(--col-#{$i}) var(--row-2);
            }

            &[data-size="8x16"] {
                background-position: var(--col-#{$i}) calc(var(--row-2) * 2 + 2px);
            }
        }
    }
    
    @each $current-glyph in $row-3 {
        $i: index($row-3, $current-glyph);
        
        [data-glyph="#{$current-glyph}"] {
            &[data-size="8x8"] {
                background-position: var(--col-#{$i}) var(--row-3);
            }

            &[data-size="8x16"] {
                background-position: var(--col-#{$i}) calc(var(--row-3) * 2 + 2px);
            }
        }
    }
    
    @each $current-glyph in $row-4 {
        $i: index($row-4, $current-glyph);
        
        [data-glyph="#{$current-glyph}"] {
            &[data-size="8x8"] {
                background-position: var(--col-#{$i}) var(--row-4);
            }

            &[data-size="8x16"] {
                background-position: var(--col-#{$i}) calc(var(--row-4) * 2 + 2px);
            }
        }
    }
    
    @each $current-glyph in $row-5 {
        $i: index($row-5, $current-glyph);
        
        [data-glyph="#{$current-glyph}"] {
            &[data-size="8x8"] {
                background-position: var(--col-#{$i}) var(--row-5);
            }

            &[data-size="8x16"] {
                background-position: var(--col-#{$i}) calc(var(--row-5) * 2 + 2px);
            }
        }
    }
    
    @each $current-glyph in $row-6 {
        $i: index($row-6, $current-glyph);
        
        [data-glyph="#{$current-glyph}"] {
            &[data-size="8x8"] {
                background-position: var(--col-#{$i}) var(--row-6);
            }

            &[data-size="8x16"] {
                background-position: var(--col-#{$i}) calc(var(--row-6) * 2 + 2px);
            }
        }
    }
</style>