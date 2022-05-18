<template>
    <a name="founders"></a>
    <div class="founders">
        <h2>Основатели студии</h2>
        <div class="founders_row">
            <div class="founders_col">
                <div class="founders_col_img">
                    <img src="@/assets/img/hayao.png" alt="">
                </div>
                <span>Хаяо Миядзаки</span>
            </div>
            <div class="founders_col">
                <div class="founders_col_img">
                    <img src="@/assets/img/isao.png" alt="">
                </div>
                <span>Исао Такахата</span>
            </div>
            <div class="founders_col">
                <div class="founders_col_img">
                    <img src="@/assets/img/tosio.png" alt="">
                </div>
                <span>Тосио Судзуки</span>
            </div>
            <div class="founders_col">
                <div class="founders_col_img">
                    <img src="@/assets/img/yasuyoshi.png" alt="">
                </div>
                <span>Ясуёси Токума</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.founders {
    width: 100%;
    padding: 100px 100px 0 100px;

    @include max-screen($mixin-tablet-max-width) {
        padding: 50px 50px 0 50px;
    }

    @include max-screen($mixin-phone-max-width) {
        padding: 20px 20px 0 20px;
    }
}

h2 {
    width: 100%;
}

.founders_row {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @include max-screen($mixin-phone-max-width) {
        flex-wrap: wrap;
    }
}

.founders_col {
    display: flex;
    flex-direction: column;
    width: calc(100% / 4 - 20px);

    @include max-screen($mixin-phone-max-width) {
        width: calc(100% / 2 - 10px);
        margin-bottom: 25px;
    }

}

.founders_col_img {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    overflow: hidden;
    position: relative;
    padding-top: 100%;
}

.founders_col img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.founders_col span {
    text-align: center;
    margin-top: 15px;
}
</style>
