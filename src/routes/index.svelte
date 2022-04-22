<<<<<<< HEAD
<script lang="typescript">
    import page from '../meta.json';

    const publicFonts = sortByKey(page.content.filter(item => item.public), 'name');

    function sortByKey(arr) {
        return arr.sort((a, b) =>  {
            let x = a['name'];
            let y = b['name'];

            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
=======
<script lang="ts">
    import store from '$lib/store';
    import { onMount } from 'svelte';
    import { Button, Column, Loading, Row, Tag, Search } from "carbon-components-svelte";

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
>>>>>>> feature/website-next
    }
</script>

<Row>
    <Column padding lg={6} md={4} sm={8}>
        <Search placeholder="Search by name..." bind:value on:input={changeHandler} on:clear={clearHandler} />
    </Column>
</Row>

<<<<<<< HEAD
{#each publicFonts as font, index}
    <section>
        <h1>{font.name}</h1>

        <a href={`${import.meta.env.VITE_HOMEPAGE}/fonts/${encodeURIComponent(font.category)}/${encodeURIComponent(font.name)}.fnt`} download>
          <img
            src={`${import.meta.env.VITE_HOMEPAGE}/previews/${font.category}/${font.name}.png`}
            alt={`Preview showing characters of the ${font.name} bitmap font.`}
            loading="lazy"
            fetchpriority={index < 10 ? 'high' : 'auto'}
          />
        </a>
    </section>
{/each}

<p><a href="https://github.com/idleberg/playdate-arcade-fonts">Code on GitHub</a></p>

<style>
    img {
        width: auto;
=======
<Row class="high-row">
    {#if publicFonts?.length}
        {#each publicFonts as font, index}
            <Column padding>
                <Row>
                    <Column>
                        <div>
                            <h2>{font.name}</h2>
                            <Tag type="outline">{font.category}</Tag>
                        </div>
                            
                        <!-- <a href={`/font/${font.name}`}> -->
                        <img
                            src={`/preview/${font.category}/${font.name}.png`}
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
                        <Button href={`/font/${font.category}/${font.name}.fnt`} download={`${font.name}.fnt`} size="small" kind="ghost">Download</Button>
                        <Button href={`https://github.com/idleberg/playdate-arcade-fonts/tree/main/static/fonts/${encodeURIComponent(font.category)}/${encodeURIComponent(font.name)}.fnt`} size="small" kind="ghost">Source</Button>
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
>>>>>>> feature/website-next
        height: 72px;
        image-rendering: pixelated;
        width: auto;
    }

    :global(.center) {
        display: flex;
        justify-content: center;
    }
</style>