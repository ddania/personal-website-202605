<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <img src="/images/hero-img.jpg" alt="Hero" class="hero-img fade-in" />
      <h1 class="hero-title fade-in" style="animation-delay: 0.2s">Soft Maker</h1>
      <p class="hero-subtitle fade-in" style="animation-delay: 0.4s">Aim to make the most interesting game in the world</p>
      <div class="hero-buttons fade-in" style="animation-delay: 0.6s">
        <a href="#products" class="btn-primary" @click.prevent="smoothScroll('#products')">探索作品</a>
        <a href="#contact" class="btn-outline" @click.prevent="smoothScroll('#contact')">contact us</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const smoothScroll = (hash: string) => {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem 4rem;
}
.hero-content { max-width: 800px; }
.hero-img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 24px;
  margin: 0 auto 2rem;
  display: block;
  box-shadow: 0 0 40px rgba(139, 92, 246, 0.2);
}
.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  background: linear-gradient(160deg, #f5f3ff, #c4b5fd, #a5b4fc, #e9d5ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
}
.hero-subtitle {
  font-size: 1.2rem;
  color: #b0b0c8;
  max-width: 600px;
  margin: 0 auto 2.5rem;
}
.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primary {
  padding: 0.8rem 2.2rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, #7c3aed, #8b5cf6);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 8px 30px rgba(124, 58, 237, 0.35);
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(124, 58, 237, 0.5); }
.btn-outline {
  padding: 0.8rem 2.2rem;
  border-radius: 9999px;
  border: 1.5px solid rgba(167, 139, 250, 0.5);
  background: rgba(167, 139, 250, 0.08);
  color: #ddd;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
}
.btn-outline:hover { background: rgba(167, 139, 250, 0.2); }

/* 淡入动画 */
.fade-in {
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
