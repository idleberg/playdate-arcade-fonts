<script>
     import { Column, Link, Row } from "carbon-components-svelte";
</script>

<Row>
    <Column class="center" padding>
        <ul>
            <li>
                <Link inline href="https://github.com/idleberg/playdate-arcade-fonts" target="_blank">Code on GitHub</Link>
            </li>
            <li>
                <Link inline href="/faq">FAQ</Link>
            </li>
            <li>
                <Link inline href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">License</Link>
            </li>
            <li>
                <Link inline href="https://www.buymeacoffee.com/idleberg" target="_blank">Buy me a coffee</Link>
            </li>
        </ul>
    </Column>
</Row>

<style lang="scss">
    :global(.center) {
        text-align: center;
    }

    ul {
        display: inline-flex;

        li {
            padding: 0.25em;
        }
    }
</style>