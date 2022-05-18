<template>
  <header class="header">
    <div class="logo">
      <a href="#ghibli">
        <img src="@/assets/img/logo.png" alt="">
      </a>
    </div>
    <div class="menu_burger" v-on:click="clickBurger">
      <svg>
        <use href="@/assets/img/icons.svg#i-menu"></use>
      </svg>
    </div>
    <div class="menu hide">
      <a href="#founders" class="menu_item">основатели</a>
      <a href="#totoro" class="menu_item">тоторо</a>
      <a href="#films" class="menu_item">фильмы</a>
      <a href="#review" class="menu_item">отзыв</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "SiteHeader",
  methods: {
    clickBurger: function () {
      let burger = document.querySelector('.menu_burger');
      let menu = document.querySelector('.menu');
      let isHide = menu.classList.contains('hide')
      if (isHide) {
        menu.classList.remove('hide')
        menu.classList.add('show')
        burger.classList.add('show_menu')
      } else {
        menu.classList.remove('show')
        menu.classList.add('hide')
        burger.classList.remove('show_menu')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  position: sticky;
  top: 0;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  height: 80px;
  background-color: $main-color;
  padding: 0 50px;
  z-index: 1000;

  @include max-screen($mixin-tablet-max-width) {
    height: 60px;
    padding: 0 25px;
  }
}

.logo {
  width: 50%;
}

.logo img {
  height: 80px;

  @include max-screen($mixin-tablet-max-width) {
    height: 60px
  }
}

.menu {
  display: flex;
  width: 50%;

  @include max-screen($mixin-tablet-max-width) {
    position: fixed;
    top: 59px;
    left: 0;
    flex-direction: column;
    overflow: auto;
    width: 100%;
    height: 100%;
    background-color: $main-color;
    align-items: center;
    transition: .3s;
    justify-content: start;
  }
}

.menu.show {
  @include max-screen($mixin-tablet-max-width) {
    opacity: 1;
    visibility: visible;
  }
}

.menu.hide {

  @include max-screen($mixin-tablet-max-width) {
    height: 0;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
}

.menu_burger {
  margin: auto 0 auto auto;
}

.menu_burger svg {
  height: 30px;
  width: 30px;
  color: white;
  transform: scale(0);

  &:hover {
    color: $hover-color;
  }


  @include max-screen($mixin-tablet-max-width) {
    transform: scale(1);
  }
}

.menu_burger.show_menu svg {
  color: $hover-color;
}

.menu_item {
  display: flex;
  width: calc(100% / 4);
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  &:hover {
    color: $hover-color;
  }

  @include max-screen($mixin-tablet-max-width) {
    font-size: 32px;
    height: 80px;
  }
}
</style>
