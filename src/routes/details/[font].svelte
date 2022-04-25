<script lang="ts">
    import { onMount } from "svelte";
    import { page as pageStore } from '$app/stores';
    import page from '../../meta.json';
    
    // Components
    import { Button, Column, Row, TextInput } from "carbon-components-svelte";
    import Code from "carbon-icons-svelte/lib/Code.svelte";
    import Download from "carbon-icons-svelte/lib/Download.svelte";
    import Tags from '../../components/Tags.svelte';

    let previewArea: HTMLElement;
    let previewArea2x: HTMLElement;
    let previewArea4x: HTMLElement;
    let defaultText = 'SPHINX OF BLACK QUARTZ JUDGE MY VOW';

    onMount(() => {
        handleChange({
            detail: defaultText
        })
    })
    
    const font = page.content.find(font => font.name === $pageStore.params.font);
    const validCharacters = ' !"#$&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

    function handleChange(e) {
        const characters = e.detail.split('');
        const html: string[] = [];

        characters.forEach((character: string) => {
            if ([...validCharacters, '\n'].includes(character)) {
                if (character === '\n') {
                    html.push('<br>');
                } else {
                    html.push(`<span data-glyph="${character}">${character}</span>`);
                }
            }
        });

        previewArea.innerHTML = html.join('');
        previewArea2x.innerHTML = html.join('');
        previewArea4x.innerHTML = html.join('');
    }
</script>

<div style={`--backgroundImage: url("${import.meta.env.VITE_HOMEPAGE}/sprites/${encodeURIComponent(font.name)}.png")`}>
    <!-- <Row>
        <Column padding>
            <Breadcrumb noTrailingSlash>
                <BreadcrumbItem href="../">All Fonts</BreadcrumbItem>
                <BreadcrumbItem href={`/category/${font.category}`}>{font.category}</BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>{font.name}</BreadcrumbItem>
            </Breadcrumb>
        </Column>
    </Row> -->
    
    <Row>
        <Column padding>
            <Tags {font} />
        </Column>
    </Row>

    <Row>
        <Column padding md={16} lg={8}>
            <TextInput
                style={`max-height:400px`}
                placeholder="Enter your text..."
                labelText="Input"
                on:input={handleChange}
                value={defaultText}
            />
        </Column>
    </Row>

    <Row>
        <Column padding md={16} lg={8}>
            <label for="preview-area" class="false bx--label">Output</label>
            <ul id="preview-area">
                <li bind:this={previewArea}></li>
                <li class="zoom-2x" bind:this={previewArea2x}></li>
                <li class="zoom-4x" bind:this={previewArea4x}></li>
            </ul>
        </Column>
    </Row>

    <Row>
        <Column padding>
            {#if (font.features.variants)}
                <Button
                    href={`${import.meta.env.VITE_HOMEPAGE}/fonts/${font.category}/${font.name} (fixed width).fnt`}
                    download={`${font.name} (fixed width).fnt`}
                    icon={Download}
                >Fixed width</Button>
                <Button
                    href={`${import.meta.env.VITE_HOMEPAGE}/fonts/${font.category}/${font.name} (auto-sized).fnt`}
                    download={`${font.name} (auto-sized).fnt`}
                    kind="tertiary"
                    icon={Download}
                >Auto-sized</Button>
            {:else}
                <Button
                    href={`${import.meta.env.VITE_HOMEPAGE}/fonts/${font.category}/${font.name}.fnt`}
                    download={`${font.name} (fixed width).fnt`}
                    icon={Download}
                >Fixed width</Button>
                <Button
                    icon={Download}
                    disabled
                >Auto-sized</Button>
            {/if}
            <Button
                href={`https://github.com/idleberg/playdate-arcade-fonts/tree/main/static/fonts/${encodeURIComponent(font.category)}/${encodeURIComponent(font.name)}.fnt`}
                kind="tertiary"
                icon={Code}
            >Source</Button>
        </Column>
    </Row>
</div>

<style lang="scss">
    ul {
        align-items: center;
        background-color: #f4f4f4;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        line-height: var(--size);
        overflow: hidden;
        white-space: nowrap;
        
        li {
            padding: 1rem;
            width: 100%;
            overflow: hidden;
        }
    }
</style>