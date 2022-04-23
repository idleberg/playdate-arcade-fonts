<script lang="ts">
    import store from '$lib/store';
    import { onMount } from 'svelte';

    // Components
    import { Button, Column, Loading, Row, Tag, Search } from "carbon-components-svelte";
    import Download from "carbon-icons-svelte/lib/Download.svelte";

    let value: string = '';
    let isLoading = true;
    let publicFonts: Record<string, any>[] = [];

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
        <Search placeholder="Search by name..." bind:value on:input={changeHandler} on:clear={clearHandler} />
    </Column>
</Row>

<Row class="high-row">
    {#if publicFonts?.length}
        {#each publicFonts as font, index}
            <Column padding>
                <Row>
                    <Column>
                        <div>
                            <h2>{font.name}</h2>
                            {#if (font.features.missing.length)}
                                <Tag type="red">Incomplete</Tag>
                            {/if}
                            
                            <Tag type="cool-gray">{font.category}</Tag>
                            
                            {#if (font.features.uppercase)}
                                <Tag type="outline">uppercase</Tag>
                            {/if}
                            
                            {#if (font.features.lowercase)}
                                <Tag type="outline">lowercase</Tag>
                            {/if}
                            
                            {#if (font.features.digits)}
                                <Tag type="outline">digits</Tag>
                            {/if}
                        </div>
                            
                        <!-- <a href={`/font/${font.name}`}> -->
                        <img
                            src={`${import.meta.env.VITE_HOMEPAGE}/previews/${font.category}/${font.name}.png`}
                            alt={`Preview showing characters of the ${font.name} bitmap font.`}
                            loading="lazy"
                            fetchpriority={index < 10 ? 'high' : 'auto'}
                        />
                        <!-- </a> -->
                    </Column>
                </Row>

                <Row>
                    <Column padding>
                        <!-- <Button href={`/font/${font.name}`} size="small" kind="ghost">Try</Button> -->
                        {#if (font.features.variants)}
                            <Button href={`${import.meta.env.VITE_HOMEPAGE}/fonts/${font.category}/${font.name} (auto-sized).fnt`} download={`${font.name} (auto-sized).fnt`} size="small" kind="ghost" icon={Download}>Auto-sized</Button>
                            <Button href={`${import.meta.env.VITE_HOMEPAGE}/fonts/${font.category}/${font.name} (fixed width).fnt`} download={`${font.name} (fixed width).fnt`} size="small" kind="ghost" icon={Download}>Fixed width</Button>
                        {:else}
                            <Button href={`${import.meta.env.VITE_HOMEPAGE}/fonts/${font.category}/${font.name}.fnt`} download={`${font.name}.fnt`} size="small" kind="ghost" icon={Download}>Download</Button>
                        {/if}
                        <!-- <Button href={`https://github.com/idleberg/playdate-arcade-fonts/tree/main/static/fonts/${encodeURIComponent(font.category)}/${encodeURIComponent(font.name)}.fnt`} size="small" kind="ghost">Source</Button> -->
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
    img {
        height: 108px;
        image-rendering: pixelated;
        width: auto;
    }

    :global(.center) {
        display: flex;
        justify-content: center;
    }
</style>