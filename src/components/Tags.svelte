<script>
    import { Tag } from "carbon-components-svelte";

    export let font;
</script>

<div>
    <h2>{font.displayName || font.name}</h2>
    
    <Tag type="gray">{font.category}</Tag>

    {#if (font.year.length)}
        <Tag type="gray">{font.year.slice(0, 3)}0s</Tag>
    {/if}

    {#if (font.features.missing.length)}
        <Tag type="red">incomplete</Tag>
    {/if}

    
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