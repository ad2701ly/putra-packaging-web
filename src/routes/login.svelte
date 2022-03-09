<script>
    import Page from "$components/page.svelte";
</script>

<Page>
    <login-box>
        <form action="">
            <p>Login</p>
            <label for="">User</label>
            <input />
        </form>
    </login-box>
</Page>

<style>
    login-box {
        @apply flex items-center justify-center min-h-full;
    }
    p {
        @apply text-center uppercase text-xl;
    }
    form {
        @apply p-3 bg-white shadow-on;
    }
</style>
