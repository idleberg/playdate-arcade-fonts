<script lang="ts">
    import "carbon-components-svelte/css/white.css";
    import { onMount } from 'svelte';
    import { sortByKey } from '$lib/util';
    import page from '../meta.json';
    import store from '$lib/store';

    // Components
    import { Grid } from "carbon-components-svelte";
    import Footer from '../components/Footer.svelte';
    import Header from '../components/Header.svelte';
    
    onMount(() => {
        store.set(sortByKey(page.content).filter(item => item.public));
    });
</script>

<Grid fullWidth>
    <Header />

    <slot></slot>

    <Footer />
</Grid>