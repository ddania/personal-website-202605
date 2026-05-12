<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="brand" @click="scrollToTop">Game</div>
    
    <!-- 桌面导航 -->
    <ul class="nav-links desktop-nav">
      <li v-for="link in navLinks" :key="link.id">
        <a :href="link.href" @click.prevent="smoothScroll(link.href)">{{ link.label }}</a>
      </li>
      <li>
        <a href="#contact" class="nav-cta" @click.prevent="smoothScroll('#contact')">contact us</a>
      </li>
    </ul>

    <!-- 移动端汉堡按钮 -->
    <button class="mobile-btn" :class="{ active: mobileOpen }" @click="toggleMobile" aria-label="菜单">
      <span></span><span></span><span></span>
    </button>

    <!-- 移动端菜单遮罩 -->
    <div v-if="mobileOpen" class="mobile-overlay" @click="closeMobile"></div>

    <!-- 移动端菜单 -->
    <ul class="mobile-menu" :class="{ open: mobileOpen }">
      <li v-for="link in navLinks" :key="link.id">
        <a :href="link.href" @click.prevent="handleMobileLink(link.href)">{{ link.label }}</a>
      </li>
      <li>
        <a href="#contact" class="nav-cta" @click.prevent="handleMobileLink('#contact')">contact us</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { navLinks } from '@/data/navigation'

defineProps<{ isScrolled?: boolean }>()

const mobileOpen = ref(false)
const toggleMobile = () => { mobileOpen.value = !mobileOpen.value }
const closeMobile = () => { mobileOpen.value = false }

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
const smoothScroll = (hash: string) => {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
const handleMobileLink = (hash: string) => {
  closeMobile()
  smoothScroll(hash)
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(20px);
  background: rgba(13, 13, 22, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: background 0.3s, box-shadow 0.3s;
}
.navbar.scrolled {
  background: rgba(13, 13, 22, 0.85);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
}
.brand {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #c084fc, #a78bfa, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
}
.desktop-nav {
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;
}
.desktop-nav a {
  color: #c4c4d4;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}
.desktop-nav a:hover { color: #fff; }
.nav-cta {
  padding: 0.5rem 1.4rem;
  border-radius: 9999px;
  border: 1px solid rgba(167, 139, 250, 0.5);
  background: rgba(167, 139, 250, 0.1);
}
.nav-cta:hover { background: rgba(167, 139, 250, 0.25); }

/* 移动端按钮 */
.mobile-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 101;
}
.mobile-btn span {
  display: block;
  width: 26px;
  height: 2.5px;
  background: #d0d0dc;
  border-radius: 4px;
  margin: 6px 0;
  transition: all 0.3s;
}
.mobile-btn.active span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
.mobile-btn.active span:nth-child(2) { opacity: 0; }
.mobile-btn.active span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }

/* 移动菜单 */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 99;
}
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 280px;
  height: 100vh;
  padding: 6rem 2rem 2rem;
  list-style: none;
  background: rgba(13, 13, 24, 0.95);
  backdrop-filter: blur(30px);
  border-left: 1px solid rgba(255, 255, 255, 0.06);
  z-index: 100;
  transition: right 0.4s ease;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}
.mobile-menu.open { right: 0; }
.mobile-menu a {
  color: #c4c4d4;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
}
.mobile-menu a:hover { color: #fff; }

@media (max-width: 768px) {
  .desktop-nav { display: none; }
  .mobile-btn { display: block; }
}
</style>
