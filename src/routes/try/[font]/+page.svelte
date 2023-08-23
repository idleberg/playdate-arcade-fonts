<script lang="ts">
    import { onMount } from "svelte";
    import { page as pageStore } from '$app/stores';
    import page from '$meta';
    
    // Components
    import { Button, Checkbox, Column, Loading, Row, TextInput } from "carbon-components-svelte";
    import Code from "carbon-icons-svelte/lib/Code.svelte";
    import Download from "carbon-icons-svelte/lib/Download.svelte";
    import Tags from '../../../components/Tags.svelte';

    let defaultText = 'SPHINX OF BLACK QUARTZ JUDGE MY VOW';

    let previewArea: HTMLElement;
    let previewArea2x: HTMLElement;
    let previewArea4x: HTMLElement;

    const font = page.content.find(font => font.name === $pageStore.params.font);    
    const isUppercase = !font?.features.lowercase && font?.features.uppercase;

    let transformCasing = {
        checked: !(font?.features.lowercase && font?.features.uppercase),
        label: `Convert ${isUppercase ? ' lowercase' : 'uppercase'} characters ${isUppercase ? ' to uppercase' : ' to lowercase'}`
    }
    let textArea: string = defaultText;

    onMount(() => {
        handleChange();
    });
    
    const validCharacters = ' !"#$&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

    function handleChange() {
        const characters = textArea.split('');
        const html: string[] = [];

        characters.forEach((character: string) => {
            if ([...validCharacters].includes(character)) {
                const transformedCharacter = transformCasing.checked ? transform(character) : character;

                html.push(`<span data-glyph="${transformedCharacter}" data-size="${font.size}" arial-label=${transformedCharacter}></span>`);
            }
        });

        previewArea.innerHTML = html.join('');
        previewArea2x.innerHTML = html.join('');    
        previewArea4x.innerHTML = html.join('');
    }

    function transform(input: string) {
        if (!/[A-Za-z]/.test(input)) {
            console.warn(`'${input}' is not an alphabetic character`);
            return input;
        }

        switch (true) {
            case font?.features?.lowercase && !font?.features?.uppercase:
                return input.toLowerCase();

            case !font?.features?.lowercase && font?.features?.uppercase:
                return input.toUpperCase();
        
            default:
                break;
        }
    }
</script>

<svelte:head>
  <title>{font?.name ? `${font.name} | Playdate Arcade Fonts` : 'Playdate Arcade Fonts'}</title>
  <meta property="og:title" content="{font?.name ? `${font.name} | Playdate Arcade Fonts` : 'Playdate Arcade Fonts'}" />
  <meta property="og:description" content="A collection of bitmap fonts for the Playdate, the tiny handheld game system from Panic." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={font?.name ? `${import.meta.env.VITE_HOMEPAGE}/sprites/${encodeURIComponent(font.name)}.png` : ''} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@idleberg" />
  <meta name="twitter:title" content={font?.name ? `${font.name} | Playdate Arcade Fonts` : 'Playdate Arcade Fonts'} />
  <meta name="twitter:description" content="A collection of bitmap fonts for the Playdate, the tiny handheld game system from Panic." />
  <meta name="twitter:image" content={font?.name ? `${import.meta.env.VITE_HOMEPAGE}/sprites/${encodeURIComponent(font.name)}.png` : ''} />
</svelte:head>

{#if font?.name}
    <div style={font?.name && `--backgroundImage: url("${import.meta.env.VITE_HOMEPAGE}/sprites/${encodeURIComponent(font.name)}.png")`}>
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
                    on:input={() => handleChange()}
                    bind:value={textArea}
                />
            </Column>                
        </Row>

        {#if !(font.features.lowercase && font.features.uppercase)}
            <Row>
                <Column padding>
                    <Checkbox labelText={transformCasing.label} bind:checked={transformCasing.checked} on:change={() => handleChange()} />
                </Column>
            </Row>
        {/if}

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
                <Button
                    href={`${import.meta.env.VITE_HOMEPAGE}/fonts/${font.category}/${font.name}.fnt`}
                    download={`${font.name}.fnt`}
                    icon={Download}
                >Download</Button>
                <Button
                    href={`https://github.com/idleberg/playdate-arcade-fonts/tree/main/static/fonts/${encodeURIComponent(font.category)}/${font.name}.fnt`}
                    kind="tertiary"
                    icon={Code}
                >Source</Button>
            </Column>
        </Row>
    </div>
{:else}
    <Loading withOverlay={false} small />
{/if}

<style lang="scss">
    ul {
        align-items: center;
        background-color: #f4f4f4;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 155px;
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