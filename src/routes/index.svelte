<script lang="typescript">
    import page from '../meta.json';
</script>

<main>
    <h1>{page.title}</h1>
    
    {#each page.content as font, index}
        <section>
            <h1>{font.name}</h1>
    
            <a href={`/fonts/${font.name}`} {font}>
              <img
                src={`/preview/${font.category}/${font.name}.png`}
                alt={`Preview showing characters of the ${font.name} bitmap font.`}
                loading="lazy"
                fetchpriority={index < 10 ? 'high' : 'auto'}
              />
            </a>
        </section>
    {/each}
</main>

<style>
    img {
        width: 400px;
        height: auto;
        image-rendering: pixelated;
    }
</style>