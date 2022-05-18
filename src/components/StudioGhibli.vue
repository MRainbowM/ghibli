<template>
    <div class="ghibli">
        <div class="ghibli_img">
            <div class="ghibli_img_container">
                <img src="@/assets/img/ghibli.png" alt="">
            </div>
        </div>
        <div class="ghibli_text">
            <h1>Studio Ghibli</h1>
            <p class="ghibli_text_description">
                — японская анимационная студия. Её основал в 1985 году режиссёр и
                сценарист Хаяо Миядзаки вместе со своим коллегой и другом Исао Такахатой. Звуковое сопровождение к
                большинству фильмов написал Дзё Хисаиси.
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ghibli {
    display: flex;
    width: 100%;
    padding: 100px;
    align-items: center;

    @include max-screen($mixin-tablet-max-width) {
        padding: 50px;
    }

    @include max-screen($mixin-phone-max-width) {
        padding: 20px;
        flex-direction: column;
        justify-content: center;
    }
}

.ghibli_img {
    width: 50%;
    padding-right: 50px;

    @include max-screen($mixin-phone-max-width) {
        padding-right: 20px;
        padding-right: 0;
        width: 100%;
        max-width: 450px;
    }
}

.ghibli_img_container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100%;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    overflow: hidden;
    position: relative;
}

.ghibli_img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ghibli_text {
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 50%;
    justify-content: space-between;

    @include max-screen($mixin-phone-max-width) {
        padding-top: 20px;
        padding-right: 0;
        width: 100%;
    }
}

h1 {
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 20px;

    @include max-screen($mixin-tablet-max-width) {
        font-size: 32px
    }


}


.ghibli_text_description {
    text-align: center;
}
</style>