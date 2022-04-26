<script>
     import { Column, Row } from "carbon-components-svelte";
import { MeterAlt } from "carbon-icons-svelte";
</script>

<Row>
    <Column padding>
        <a href={import.meta.env.VITE_HOMEPAGE}><h1>Playdate Arcade Fonts</h1></a>
        <p>A collection of bitmap fonts for the Playdate</p>
    </Column>
</Row>

<style>
    a {
        color: inherit;
        text-decoration: none;
    }
</style>