<template>
  <SiteHeader />
  <StudioGhibli />
  <StudioFounders />
  <TotoroLogo />
  <FilmsGrid />
  <ReviewForm />
  <SiteFooter />
</template>

<script>

import SiteHeader from '@/components/SiteHeader.vue'
import StudioGhibli from '@/components/StudioGhibli.vue'
import StudioFounders from '@/components/StudioFounders.vue'
import TotoroLogo from '@/components/TotoroLogo.vue'
import FilmsGrid from '@/components/FilmsGrid.vue'
import ReviewForm from '@/components/ReviewForm.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  name: "App",
  components: {
    SiteHeader,
    StudioGhibli,
    StudioFounders,
    TotoroLogo,
    FilmsGrid,
    ReviewForm,
    SiteFooter
  },
};
</script>

<style>
#app {}
</style>
