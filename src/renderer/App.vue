<template>
  <div class="h-screen flex flex-col bg-gray-100 app-root">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log('👋 App根组件已挂载');
});
</script>

<style lang="scss" scoped>
.app-root {
  height: 100vh;

  > * {
    min-height: 100%;
    flex: 1;
  }

  .app-root-view {
  }
}
</style>
