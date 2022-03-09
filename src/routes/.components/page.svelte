<script lang="ts">
    import { fade } from "svelte/transition";
</script>

<page transition:fade>
    <slot />
</page>
