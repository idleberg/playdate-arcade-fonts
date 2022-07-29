<script lang="ts">
    import { Accordion, AccordionItem, Column, OutboundLink,  Row } from "carbon-components-svelte";

    const isDev = import.meta.env.MODE === "development";
</script>

<svelte:head>
  <title>Frequently Asked Questions | Playdate Arcade Fonts</title>
</svelte:head>

<h2>Frequently Asked Questions</h2>

<Row>
<Column padding>
    <Accordion>
        <AccordionItem open={isDev}>
            <svelte:fragment slot="title">
              <strong>Where are these fonts taken from?</strong>
            </svelte:fragment>

            <p>
                All included fonts where hand-drawn from Toshi Omagari's magnificent book
                <OutboundLink inline href="https://readonlymemory.vg/shop/book/arcade-game-typography/">Arcade Game Typography</OutboundLink>
                as reference. It's a lovely hommage to the hey-day of arcade games and to me it's been one of my favourite videogame related books.
            </p>
        </AccordionItem>

        <AccordionItem open={isDev}>
            <svelte:fragment slot="title">
              <strong>Who are these fonts for?</strong>
            </svelte:fragment>

            <p>
                The fonts have created with Panic's
                <OutboundLink inline href="https://readonlymemory.vg/shop/book/arcade-game-typography/">Playdate</OutboundLink>
                in mind, a tiny handheld game system with a monochrome display. If you find these useful for other purposes, please go ahead and make use of them!
            </p>
        </AccordionItem>

        <AccordionItem open={isDev}>
            <svelte:fragment slot="title">
              <strong>Why are some fonts incomplete?</strong>
            </svelte:fragment>

            <p>
                This question can only be answered by the original designers of these fonts. Drawing only the characters used by a game, saving diskspace,
                limited knowledge of Western typography. My guess is as good as your's. However, it <em>seems</em> to me that the maker of the book left out
                some characters on purpose, e.g. some spread page highlight the quality of a font at the cost of completeness.
            </p>
        </AccordionItem>

        <AccordionItem open={isDev}>
            <svelte:fragment slot="title">
              <strong>When is a font tagged as incomplete?</strong>
            </svelte:fragment>

            <p>
                Fonts are tagged as incomplete, when they lack one or more characters in their supported character range. So when a font supports uppercase letters,
                but misses single ones, it's incomplete. Font are <em>not</em> tagged as incomplete, when they support the full range of uppercase characters,
                but have no lowercase characters.
            </p>
        </AccordionItem>

        <AccordionItem open={isDev}>
            <svelte:fragment slot="title">
              <strong>Why are some fonts missing?</strong>
            </svelte:fragment>

            <p>
                If you know the book these fonts were taken from, you might wonder why some fonts are missing entirely. That's mostly the case when a font makes
                use of multiple colours, be it for aesthetic reasons or to make the font more legible through anti-aliasing. Since this mostly doesn't work for the
                <OutboundLink inline href="https://readonlymemory.vg/shop/book/arcade-game-typography/">Playdate's</OutboundLink>
                monochrome display, most of these fonts were omitted while others were adapted.
            </p>
        </AccordionItem>

        <AccordionItem open={isDev}>
            <svelte:fragment slot="title">
              <strong>What's an unused font?</strong>
            </svelte:fragment>

            <p>
                A font considered for a game that didn't make it into the final product. Presumably, they ended
                in the ROM and have later been discovered by the author of the
                <OutboundLink inline href="https://readonlymemory.vg/shop/book/arcade-game-typography/">Arcade Game Typography</OutboundLink>
                book.
            </p>
        </AccordionItem>

        <AccordionItem open={isDev}>
            <svelte:fragment slot="title">
              <strong>How are these fonts licensed?</strong>
            </svelte:fragment>

            <p>
                All included fonts are part of the public domain and as such they are available under the terms of the
                <OutboundLink inline href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</OutboundLink>
                license.
            </p>
        </AccordionItem>
    </Accordion>
</Column>
</Row>