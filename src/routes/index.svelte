<script lang="ts">
    import visi from "$assets/isi.jpg";
    import Page from "$components/page.svelte";
</script>

<Page>
    <div>
        <img src={visi} alt="" />
    </div>
</Page>

<style>
    div {
        @apply flex justify-center items-center py-6;
    }
    img {
        @apply border-4 border-orange-300 drop-shadow-2xl shadow-black w-3/4;
    }
</style>
