<template>
  <SiteHeader />
  <StudioGhibli />
  <StudioFounders />
  <TotoroLogo />
  <FilmsGrid />
  <ReviewForm />
</template>

<script>

import SiteHeader from '@/components/SiteHeader.vue'
import StudioGhibli from '@/components/StudioGhibli.vue'
import StudioFounders from '@/components/StudioFounders.vue'
import TotoroLogo from '@/components/TotoroLogo.vue'
import FilmsGrid from '@/components/FilmsGrid.vue'
import ReviewForm from '@/components/ReviewForm.vue'

export default {
  name: "App",
  components: {
    SiteHeader,
    StudioGhibli,
    StudioFounders,
    TotoroLogo,
    FilmsGrid,
    ReviewForm
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */

}
</style>
