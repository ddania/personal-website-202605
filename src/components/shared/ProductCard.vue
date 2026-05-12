<template>
  <div class="product-card" @click="viewDetail">
    <div class="card-image">
      <img :src="product.image" :alt="product.name" class="image" />
    </div>
    <div class="card-info">
      <h3>{{ product.name }}</h3>
      <span class="tag">{{ product.tag }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/product'

const props = defineProps<{ product: Product }>()
const emit = defineEmits<{ 'view-detail': [product: Product] }>()

const viewDetail = () => {
  emit('view-detail', props.product)
}
</script>

<style scoped>
.product-card {
  background: rgba(22, 22, 36, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}
.product-card:hover {
  transform: translateY(-6px);
  border-color: rgba(167, 139, 250, 0.45);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.2);
}
.card-image {
  width: 100%;
  aspect-ratio: 16/10;
  background: linear-gradient(135deg, #1e1b4b, #1a1535);
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-info { padding: 1.2rem 1.5rem; }
h3 { font-size: 1.3rem; color: #e8e8f4; margin-bottom: 0.4rem; }
.tag {
  display: inline-block;
  padding: 0.2rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  background: rgba(139, 92, 246, 0.15);
  color: #b4a6f5;
  border: 1px solid rgba(167, 139, 250, 0.2);
}
</style>
