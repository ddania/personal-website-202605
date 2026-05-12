<template>
  <div class="bg-aurora">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
    <div class="orb orb-4"></div>
    <div class="orb orb-5"></div>
  </div>
</template>

<style scoped>
.bg-aurora {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.55;
  will-change: transform;
}
.orb-1 { width: 70vw; height: 70vw; max-width: 900px; max-height: 900px; background: radial-gradient(circle at 40% 40%, #7c3aed 0%, #6d28d9 30%, #4c1d95 60%, transparent 80%); animation: float1 18s infinite; top: -15%; left: -10%; }
.orb-2 { width: 55vw; height: 55vw; max-width: 700px; max-height: 700px; background: radial-gradient(circle at 50% 50%, #ec4899 0%, #db2777 25%, #9d174d 55%, transparent 78%); animation: float2 22s infinite; top: 30%; right: -12%; }
.orb-3 { width: 50vw; height: 50vw; max-width: 600px; max-height: 600px; background: radial-gradient(circle at 55% 45%, #3b82f6 0%, #2563eb 28%, #1e40af 58%, transparent 80%); animation: float3 20s infinite; bottom: -18%; left: 20%; }
.orb-4 { width: 40vw; height: 40vw; max-width: 500px; max-height: 500px; background: radial-gradient(circle at 45% 50%, #f59e0b 0%, #d97706 20%, #92400e 50%, transparent 75%); animation: float4 25s infinite; top: 50%; left: 45%; opacity: 0.28; }
.orb-5 { width: 35vw; height: 35vw; max-width: 400px; max-height: 400px; background: radial-gradient(circle at 50% 50%, #14b8a6 0%, #0d9488 25%, #0f766e 55%, transparent 78%); animation: float5 16s infinite; top: 10%; left: 55%; opacity: 0.35; }

@keyframes float1 {
  0%,100% { transform:translate(0,0) scale(1); }
  25% { transform:translate(8vw,6vh) scale(1.12); }
  50% { transform:translate(-3vw,12vh) scale(0.92); }
  75% { transform:translate(-6vw,-2vh) scale(1.06); }
}
@keyframes float2 {
  0%,100% { transform:translate(0,0) scale(1); }
  30% { transform:translate(-7vw,-8vh) scale(1.15); }
  55% { transform:translate(5vw,-14vh) scale(0.88); }
  80% { transform:translate(8vw,3vh) scale(1.08); }
}
@keyframes float3 {
  0%,100% { transform:translate(0,0) scale(1); }
  20% { transform:translate(-10vw,-5vh) scale(1.1); }
  45% { transform:translate(6vw,-10vh) scale(0.9); }
  70% { transform:translate(-4vw,8vh) scale(1.05); }
}
@keyframes float4 {
  0%,100% { transform:translate(0,0) scale(1); }
  35% { transform:translate(5vw,-9vh) scale(1.18); }
  60% { transform:translate(-8vw,4vh) scale(0.85); }
  85% { transform:translate(3vw,6vh) scale(1.1); }
}
@keyframes float5 {
  0%,100% { transform:translate(0,0) scale(1); }
  28% { transform:translate(-4vw,7vh) scale(1.13); }
  52% { transform:translate(9vw,-6vh) scale(0.87); }
  78% { transform:translate(-7vw,-8vh) scale(1.07); }
}
</style>
