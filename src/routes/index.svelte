<script lang="ts">
    import store from '$lib/store';
    import { onMount } from 'svelte';

    // Components
    import { Button, Checkbox, Column, Link, Loading, Row, Search, TextInput } from "carbon-components-svelte";
    import Code from "carbon-icons-svelte/lib/Code.svelte";
    import Tags from '$components/Tags.svelte';
    import View from "carbon-icons-svelte/lib/View.svelte";

    let searchValue: string = '';
    let showCustomText: boolean = false;
    $: customText = '';
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
        if (searchValue?.length) {
            publicFonts = $store.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()) || item.category.toLowerCase().includes(searchValue.toLowerCase()) || item.year.startsWith(searchValue));
        } else {
            clearHandler();
        }
    }

    const clearHandler = () => {
        publicFonts = $store;
    }

    const customtextHandler = e => {
        customText = e.detail;
    }
</script>

<Row>
    <Column padding lg={6} md={4} sm={8}>
        <Search placeholder={`Search ${publicFonts.length} fonts by name or category…`} bind:value={searchValue} on:input={changeHandler} on:clear={clearHandler} autofocus />
    </Column>

    <Column padding lg={6} md={4} sm={8}>
        <Checkbox labelText="Custom Text" bind:checked={showCustomText} />
    </Column>
</Row>

<Row>
    {#if showCustomText}
        <Column padding lg={6} md={4} sm={8}>
             <TextInput placeholder="Enter your custom text…" on:input={customtextHandler} autofocus />
         </Column>
    {/if}
</Row>

<Row class="high-row">
    {#if publicFonts?.length}
        {#each publicFonts as font}
            <Column padding>
                <Row>
                    <Column lg={16}>
                        <Tags {font} />

                        <Link href={`${import.meta.env.VITE_HOMEPAGE}/try/${encodeURIComponent(font.name)}`} aria-label={`Preview the ${font.name} bitmap font`}>
                            <div class="preview zoom-4x" style={`--backgroundImage: url("${import.meta.env.VITE_HOMEPAGE}/sprites/${encodeURIComponent(font.name)}.png")`}>
                                {#if showCustomText && customText?.length}
                                    {#each customText.split('') as character}
                                        <span data-glyph={character} data-size={font.size} arial-label={character}></span>
                                    {/each}
                                {:else}
                                    {#if font.features.uppercase}
                                        {#each letters as character}
                                            <span data-glyph={character} data-size={font.size} arial-label={character}></span>
                                        {/each}
                                    {/if}
                                    
                                    <!-- {#if font.features.lowercase}
                                        <br />
                                        {#each letters as character}
                                            <span data-glyph={character.toLowerCase()} data-size={font.size} arial-label={character.toLowerCase()}></span>
                                        {/each}
                                    {/if} -->
                                    
                                    {#if font.features.digits}
                                        <br />
                                        {#each numbers as character}
                                            <span data-glyph={character} data-size={font.size} arial-label={character}></span>
                                        {/each}
                                    {/if}
                                {/if}
                            </div>
                        </Link>
                    </Column>
                </Row>

                <Row>
                    <Column padding>
                        <Button
                            href={`${import.meta.env.VITE_HOMEPAGE}/try/${encodeURIComponent(font.name)}`}
                            size="small"
                            icon={View}
                            title={`Preview the ${font.name} font`}
                        >Try</Button>
                        <Button
                            href={`https://github.com/idleberg/playdate-arcade-fonts/tree/main/static/fonts/${encodeURIComponent(font.category)}/${font.name}.fnt`}
                            size="small"
                            kind="tertiary"
                            icon={Code}
                            title={`View source of the ${font.name} font`}
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