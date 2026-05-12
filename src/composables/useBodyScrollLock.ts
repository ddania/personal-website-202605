import { watch, type Ref } from 'vue'

export function useBodyScrollLock(visible: Ref<boolean>) {
  watch(visible, (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, { immediate: true })
}
