<template>
    <a name="review"></a>
    <div class="review">
        <form action="">
            <div class="review_form">
                <h2>Оставить отзыв о фильме</h2>
                <input type="text" placeholder="название фильма">
                <textarea name="" id="" cols="30" rows="10" placeholder="комментарий"></textarea>
                <button type="submit"><span>отправить</span></button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.review {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 100px;

    @include max-screen($mixin-tablet-max-width) {
        padding: 50px;
    }

    @include max-screen($mixin-phone-max-width) {
        padding: 20px;
    }
}

form {
    width: 100%;
    max-width: 700px;
}

h2 {
    font-weight: normal;

    @include max-screen($mixin-tablet-max-width) {
        margin-bottom: 20px;
    }
}

.review_form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid $main-color;
    border-radius: 15px;
    padding: 30px;
    align-items: center;

    @include max-screen($mixin-tablet-max-width) {
        padding: 20px;
    }
}

input,
textarea {
    width: 100%;
    border: 1px solid $main-color;
    border-radius: 15px;
    margin-bottom: 30px;
    padding: 10px;
    font-size: 20px;

    &:hover {
        border: 1px solid $hover-color;
    }

    @include max-screen($mixin-tablet-max-width) {
        margin-bottom: 20px;
    }
}

input::placeholder {
    font-size: 20px;
    text-align: center;
}

textarea::placeholder {
    font-size: 20px;
    text-align: center;
}

input {
    height: 50px;
}

button {
    background-color: $main-color;
    border: none;
    max-width: 200px;
    color: white;
    border-radius: 15px;
    padding: 10px 20px;
}
</style>