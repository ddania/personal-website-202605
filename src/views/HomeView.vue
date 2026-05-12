<template>
  <div>
    <HeroSection />
    <ProductSection :products="products" @view-detail="openModal" />
    <ProjectModal 
      v-if="selectedProduct" 
      :product="selectedProduct" 
      :visible="!!selectedProduct" 
      @close="closeModal" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { products } from '@/data/products'
import type { Product } from '@/types/product'
import HeroSection from '@/components/home/HeroSection.vue'
import ProductSection from '@/components/home/ProductSection.vue'
import ProjectModal from '@/components/shared/ProjectModal.vue'

const selectedProduct = ref<Product | null>(null)
const openModal = (product: Product) => { selectedProduct.value = product }
const closeModal = () => { selectedProduct.value = null }
</script>
