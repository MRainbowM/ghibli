<template>
    <div class="totoro">
        <div class="totoro_text">
            <h2>Тоторо</h2>
            <p>
                На логотипе студии изображён Тоторо,
                персонаж из фильма «Мой сосед Тоторо»,
                выпущенного Studio Ghibli в 1988 году
            </p>
        </div>
        <div class="totoro_img">
            <div class="totoro_img_container">
                <img src="@/assets/img/totoro.png" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.totoro {
    display: flex;
    width: 100%;
    padding: 0 100px 100px 100px;
    align-items: center;

    @include max-screen($mixin-tablet-max-width) {
        padding: 0 50px 50px 50px;
    }

    @include max-screen($mixin-phone-max-width) {
        padding: 0 20px 20px 20px;
        flex-direction: column-reverse;
    }
}

.totoro_text {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: space-between;

    @include max-screen($mixin-phone-max-width) {
        width: 100%;
    }
}

.totoro_text p {
    text-align: center;
}

.totoro_img {
    display: flex;
    width: 50%;
    padding-left: 50px;

    @include max-screen($mixin-phone-max-width) {
        width: 100%;
        padding-left: 0;
        padding-bottom: 20px;
    }
}

.totoro_img_container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100%;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
}

.totoro_img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>