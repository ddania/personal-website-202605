<template>
  <BackgroundAurora />
  <Navbar :is-scrolled="isScrolled" />
  <main class="content-layer">
    <router-view />
  </main>
  <FooterSection />
</template>

<script setup lang="ts">
import { useScroll } from '@/composables/useScroll'
import BackgroundAurora from '@/components/shared/BackgroundAurora.vue'
import Navbar from '@/components/layout/Navbar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'

const { isScrolled } = useScroll()
</script>

<style scoped>
.content-layer {
  position: relative;
  z-index: 1;
}
</style>
