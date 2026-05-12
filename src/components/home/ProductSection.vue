<template>
  <section id="products" class="product-section">
    <p class="section-label">Production</p>
    <h2>精选作品</h2>
    <div class="grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @view-detail="handleViewDetail"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Product } from '@/types/product'
import ProductCard from '@/components/shared/ProductCard.vue'

defineProps<{ products: Product[] }>()
const emit = defineEmits<{ 'view-detail': [product: Product] }>()

const handleViewDetail = (product: Product) => { emit('view-detail', product) }
</script>

<style scoped>
.product-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 2rem 6rem;
}
.section-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #a78bfa;
  margin-bottom: 0.5rem;
}
h2 { font-size: 2.5rem; font-weight: 900; color: #f0f0f8; margin-bottom: 3rem; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
