<script lang="ts" context="module">
    /** @type {import('@sveltejs/kit').ErrorLoad} */
    export function load({ error, status }) {
        return {
            props: {
                title: `${status}: ${error.message}`,
            },
        };
    }
</script>

<script lang="ts">
    import Page from "$components/page.svelte";

    export let title;
</script>

<Page>
    <box>
        <span>{title} </span>
    </box>
</Page>

<style>
    box {
        @apply flex justify-center items-center min-h-full;
    }
    span {
        @apply text-2xl p-10 bg-white;
    }
</style>
