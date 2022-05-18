<template>
    <footer class="footer">
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 100px;
    background-color: $main-color;

    @include max-screen($mixin-tablet-max-width) {
        height: 60px;
    }
}
</style>