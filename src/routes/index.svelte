<script lang="typescript">
    import page from '../meta.json';

    const publicFonts = sortByKey(page.content.filter(item => item.public), 'name');

    function sortByKey(arr) {
        return arr.sort((a, b) =>  {
            let x = a['name'];
            let y = b['name'];

            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
</script>

<h1>{page.title}</h1>

{#each publicFonts as font, index}
    <section>
        <h1>{font.name}</h1>

        <a href={`${process.env.GH_PAGES_URL}/fonts/${encodeURIComponent(font.category)}/${encodeURIComponent(font.name)}.fnt`} download>
          <img
            src={`${process.env.GH_PAGES_URL}/previews/${font.category}/${font.name}.png`}
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