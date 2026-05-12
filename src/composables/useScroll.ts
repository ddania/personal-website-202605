import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
  const isScrolled = ref(false)
  const onScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
  return { isScrolled }
}
