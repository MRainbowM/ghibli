<template>
    <a name="films"></a>
    <div class="films">
        <h2>Фильмы студии</h2>
        <div class="films_grid">
            <div v-for="film in films" class="films_grid_item" :key="film.id">
                <div class="films_grid_item_img">
                    <img :src="film.image" alt="">
                </div>
                <span>{{ film.title }}</span>
            </div>
        </div>
    </div>
</template>

<script>
const filmURL = "https://ghibliapi.herokuapp.com/films?limit=20";
export default {
    name: "FilmsGrid",
    data() {
        return {
            films: []
        }
    },
    async created() {
        try {
            const res = await fetch(filmURL);

            if (!res.ok) {
                const message = `An error has occured: ${res.status} - ${res.statusText}`;
                throw new Error(message);
            }
            this.films = await res.json();
        } catch (err) {
            this.films = err.message;
        }
    }
}
</script>

<style lang="scss" scoped>
.films {
    width: 100%;
    padding: 100px 100px 0 80px;

    @include max-screen($mixin-tablet-max-width) {
        padding: 50px 50px 0 30px;
    }

    @include max-screen($mixin-phone-max-width) {
        padding: 20px 20px 0 0;
    }
}

.films_grid {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: start;
}

.films_grid_item {
    width: calc(100% / 4 - 20px);
    margin-left: 20px;
    margin-bottom: 40px;
    text-align: center;

    @include max-screen($mixin-tablet-max-width) {
        width: calc(100% / 2 - 20px);
    }
}

.films_grid_item_img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 400px;
    overflow: hidden;
    position: relative;
    margin-bottom: 10px;
    border-radius: 20px;
}

.films_grid_item_img img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>