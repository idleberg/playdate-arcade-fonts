<script language="typescript">
    import page from '../meta.json';
</script>

<h1>{page.title}</h1>

{#each page.content as font}
    <section>
        <h1>{font.name}</h1>

        <a href={`https://github.com/idleberg/playdate-arcade-fonts/blob/main/fonts/${encodeURIComponent(font.category)}/${encodeURIComponent(font.name)}.fnt`} target="_blank">
          <img
            src={`https://raw.githubusercontent.com/idleberg/playdate-arcade-fonts/main/preview/${encodeURIComponent(font.category)}/${encodeURIComponent(font.name)}.png`}
            alt={`Preview showing characters of the ${font.name} bitmap font.`}
            loading="lazy"
            fetchpriority={font.index < 10 ? 'high' : 'auto'}
          />
        </a>
    </section>
{/each}

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
    img {
        width: 400px;
        height: auto;
        image-rendering: pixelated;
    }
</style>