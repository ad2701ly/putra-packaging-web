<script>
    import logo from "$assets/logo.png";
</script>

<header>
    <flex-1>
        <img src={logo} alt="logo" />
        <span>Putra Packaging Magelang</span>
    </flex-1>
    <flex-2>
        <a href="/">Home</a>
    </flex-2>
</header>

<style>
    header {
        @apply bg-white grid grid-cols-2 w-screen top-0 fixed items-center justify-between z-10 shadow-on shadow-gray-600 p-3;
    }
    flex-1 {
        @apply flex items-center gap-3;
    }
    img {
        @apply h-8 object-contain;
    }
    span {
        @apply font-bebas text-xl;
    }
    flex-2 {
        @apply flex gap-4 justify-end;
    }
    a {
        @apply underline-offset-4 underline decoration-4 font-semibold transition-all;
    }
    a:hover {
        @apply decoration-orange-400 text-orange-400 translate-y-1;
    }
</style>
