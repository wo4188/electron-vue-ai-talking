<template>
  <div class="home-page">
    <h1 class="text-center page-title">💖 你好，世界！</h1>
    <button :class="btnCls" @click="doClickCount">count: {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import clsx from 'clsx';

const count = ref(0);
function doClickCount() {
  count.value++;
  console.log('🚩 count', count.value);
}

const btnCls = computed(() =>
  clsx(
    'bg-blue-500', //
    'hover:bg-blue-700',
    'text-white',
    'font-bold',
    'py-2',
    'px-4',
    'rounded',
    'cursor-pointer',
    'count-btn'
  )
);

onMounted(() => {
  console.log('👋 Home路由组件已挂载 count', count.value);
});
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;

  .page-title {
    border: 2px dashed var(--abc-color);
    margin-bottom: 20px;
  }

  .count-btn {
    width: 200px;
    margin: 0 auto;
  }
}
</style>
