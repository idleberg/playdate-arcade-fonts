<script lang="ts">
    import store from '$lib/store';
    import { onMount } from 'svelte';

    // Components
    import { Button, Column, Link, Loading, Row,  Search } from "carbon-components-svelte";
    import Tags from '../components/Tags.svelte';

    let value: string = '';
    let isLoading = true;
    let publicFonts: Record<string, any>[] = [];
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let numbers = "0123456789".split("")

    onMount(() => {
        isLoading = false;
    });

    store.subscribe(value => {
        publicFonts = value;
    });

    const changeHandler = () => {
        if (value?.length) {
            publicFonts = $store.filter(item => item.name.toLowerCase().includes(value.toLowerCase()) || item.category.toLowerCase().includes(value.toLowerCase()));
        } else {
            clearHandler();
        }
    }

    const clearHandler = () => {
        publicFonts = $store;
    }
</script>

<Row>
    <Column padding lg={6} md={4} sm={8}>
        <Search placeholder={`Search ${publicFonts.length} fonts by name...`} bind:value on:input={changeHandler} on:clear={clearHandler} autofocus />
    </Column>
</Row>

<Row class="high-row">
    {#if publicFonts?.length}
        {#each publicFonts as font}
            <Column padding>
                <Row>
                    <Column lg={16}>
                        <Tags {font} />

                        <Link href={`${import.meta.env.VITE_HOMEPAGE}/try/${encodeURIComponent(font.name)}`}>
                            <div class="preview zoom-4x" style={`--backgroundImage: url("${import.meta.env.VITE_HOMEPAGE}/sprites/${encodeURIComponent(font.name)}.png")`}>
                                {#each letters as character}
                                    <span data-glyph={character} arial-label={character}></span>
                                {/each}
                                <br />
                                {#each numbers as character}
                                    <span data-glyph={character} arial-label={character}></span>
                                {/each}
                            </div>
                        </Link>
                    </Column>
                </Row>

                <Row>
                    <Column padding>
                        <Button
                            href={`${import.meta.env.VITE_HOMEPAGE}/try/${encodeURIComponent(font.name)}`}
                            size="small"
                        >Try</Button>
                        <Button
                            href={`https://github.com/idleberg/playdate-arcade-fonts/tree/main/static/fonts/${encodeURIComponent(font.category)}/${font.name} (fixed width).fnt`}
                            size="small"
                            kind="tertiary"
                        >Source</Button>
                    </Column>
                </Row>
            </Column>

        {/each}
    {:else}
        <Column class="center" padding>
            {#if isLoading}
                <Loading withOverlay={false} small />
            {:else}
                No Results
            {/if}
        </Column>
    {/if}
</Row>

<style>
    .preview {
        padding: 1rem 0;
        width: 320px;
        height: 100%;
    }
    :global(.center) {
        display: flex;
        justify-content: center;
    }
</style>