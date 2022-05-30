<script>
     import { Column, Link, Row } from "carbon-components-svelte";
</script>

<Row>
    <Column padding>
        <a href={import.meta.env.VITE_HOMEPAGE || '/'}><h1>Playdate Arcade Fonts</h1></a>
        <p>A collection of bitmap fonts for <Link size="lg" href="https://play.date/">Playdate</Link>, the tiny handheld game system from Panic</p>
    </Column>
</Row>

<style>
    a {
        color: inherit;
        text-decoration: none;
    }
</style>
