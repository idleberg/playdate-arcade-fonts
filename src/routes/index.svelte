<script language="typescript">
    import page from '../meta.json';

    const publicFonts = page.content.filter(item => item.public);
</script>

<h1>{page.title}</h1>

{#each publicFonts as font, index}
    <section>
        <h1>{font.name}</h1>

        <a href={`/fonts/${encodeURIComponent(font.category)}/${encodeURIComponent(font.name)}.fnt`} download>
          <img
            src={`/previews/${font.category}/${font.name}.png`}
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
        width: 400px;
        height: auto;
        image-rendering: pixelated;
    }
</style>