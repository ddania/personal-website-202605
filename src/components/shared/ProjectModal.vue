<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="visible" class="modal-overlay" @click.self="close">
        <div class="modal-card">
          <button class="close-btn" @click="close" aria-label="关闭">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div class="modal-content">
            <!-- 新增：顶部图片 -->
            <img
              v-if="product.image"
              :src="product.image"
              :alt="product.name"
              class="modal-image"
            />
            <h2>{{ product.name }}</h2>
            <span class="modal-tag">{{ product.tag }}</span>
            <p class="modal-desc">{{ product.description }}</p>
            <ul v-if="product.features?.length">
              <li v-for="feat in product.features" :key="feat">{{ feat }}</li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { toRef, onBeforeUnmount } from 'vue'
import type { Product } from '@/types/product'
import { useBodyScrollLock } from '@/composables/useBodyScrollLock'

const props = defineProps<{ product: Product; visible: boolean }>()
const emit = defineEmits<{ close: [] }>()
const close = () => emit('close')

useBodyScrollLock(toRef(props, 'visible'))

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
}
.modal-card {
  position: relative;
  width: 50vw;
  max-height: 80vh;
  overflow-y: auto;
  background: rgba(22, 22, 36, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(167, 139, 250, 0.3);
  border-radius: 20px;
  padding: 2rem;
  color: #e8e8f0;
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
}
.close-btn {
  position: absolute;
  top: 1rem; right: 1rem;
  background: none; border: none;
  color: #aaa; cursor: pointer;
  transition: color 0.3s;
}
.close-btn:hover { color: #fff; }
.modal-content h2 { font-size: 2rem; margin-top: 0.5rem; margin-bottom: 0.5rem; }
.modal-tag {
  display: inline-block;
  padding: 0.2rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  background: rgba(139,92,246,0.2);
  color: #b4a6f5;
  margin-bottom: 1rem;
}
.modal-desc { line-height: 1.7; color: #ccc; }
ul { margin-top: 1rem; padding-left: 1.2rem; color: #bbb; }
li { margin-bottom: 0.3rem; }

/* 图片样式 */
.modal-image {
  width: 100%;
  max-height: 40vh;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.3s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .modal-card { width: 90vw !important; padding: 1.5rem; }
  .modal-image { max-height: 30vh; }
}
</style>
