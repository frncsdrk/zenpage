<script lang="ts">
    import { onMount } from 'svelte';
    
    let bgUrl:string;

    onMount(() => {
        bgUrl = `https://source.unsplash.com/random/${document.body.clientWidth}x${document.body.clientHeight}?zen`;
    });
</script>

<div class="w-screen h-screen bg-[url('{bgUrl}')]">
    <a href="/settings">Settings</a>

    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>
