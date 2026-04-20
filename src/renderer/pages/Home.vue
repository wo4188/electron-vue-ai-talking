<template>
  <div class="home-page">
    <h1 class="text-center page-title">{{ t('main.welcome-helloMessage') }}</h1>
    <n-space>
      <n-button
        class="lang-btn"
        :type="locale === 'zh-CN' ? 'primary' : 'default'"
        @click="doSetLang('zh-CN')"
      >
        {{ t('app.zhCN') }}
      </n-button>
      <n-button
        class="lang-btn"
        :type="locale === 'en-US' ? 'primary' : 'default'"
        @click="doSetLang('en-US')"
      >
        {{ t('app.enUS') }}
      </n-button>
      <n-date-picker />
    </n-space>
    <button :class="btnCls" @click="doClickCount">count: {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import clsx from 'clsx';
import { NSpace, NButton, NDatePicker } from 'naive-ui';

const { t, locale } = useI18n();

const count = ref(0);
function doClickCount() {
  count.value++;
  console.log('🚩 count', count.value);
}

function doSetLang(val: string) {
  locale.value = val;
  localStorage.setItem('locale', val);
}

watchEffect(() => {
  console.log('🌏 当前语言 locale', locale.value);
});

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

  .lang-btn {
    min-width: 100px;
    margin-bottom: 20px;
  }

  .count-btn {
    width: 200px;
    margin: 0 auto;
  }
}
</style>
