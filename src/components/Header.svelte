<script>
     import { Column, Link, Row } from "carbon-components-svelte";
</script>

<Row>
    <Column padding>
        <a href={import.meta.env.VITE_HOMEPAGE || '/'}><h1>Playdate Arcade Fonts</h1></a>
        <p>A collection of bitmap fonts for <Link size="lg" href="https://play.date/">Playdate</Link>, the tiny handheld game system from Panic</p>
    </Column>
    <Column padding class="badge">
        <a href="https://www.buymeacoffee.com/idleberg" target="_blank" rel="noreferrer"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
    </Column>
</Row>

<style>
    a {
        color: inherit;
        text-decoration: none;
    }

    :global(.badge) {
        text-align: left;
    }

    @media screen and (min-width: 481px) {
        :global(.badge) {
            text-align: right;
        }
    }
</style>
