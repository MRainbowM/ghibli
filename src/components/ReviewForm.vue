<template>
    <a name="review"></a>
    <div class="review">
        <form action="">
            <div class="review_form">
                <h2>Оставить отзыв о фильме</h2>
                <label for="film_name">название фильма</label>
                <input type="text" id="film_name">
                <label for="film_comment">комментарий</label>
                <textarea name="" id="film_comment" cols="30" rows="5"></textarea>
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
    margin-bottom: 50px;

    @include max-screen($mixin-tablet-max-width) {
        margin-bottom: 32px;
    }
}

.review_form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 2px solid $main-color;
    border-radius: 15px;
    padding: 50px;
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
    margin-bottom: 50px;
    padding: 10px;
    font-size: 32px;
    color: $main-text-color;

    &:hover {
        border: 1px solid $hover-color;
    }

    @include max-screen($mixin-tablet-max-width) {
        margin-bottom: 20px;
        font-size: 20px;
    }
}

textarea {
    resize: none;
}

input {
    height: 50px;
}

label {
    width: 100%;
    text-align: left;
    font-size: 32px;
    margin-bottom: 10px;

    @include max-screen($mixin-tablet-max-width) {
        font-size: 20px;
    }
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