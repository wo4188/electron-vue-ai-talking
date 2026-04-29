<template>
  <div class="h-screen flex flex-col bg-gray-100 app-root">
    <n-config-provider abstract :locale="naiveLocale.locale" :date-locale="naiveLocale.dateLocale">
      <router-view />
    </n-config-provider>
  </div>
</template>

<script setup lang="ts">
import { NConfigProvider } from 'naive-ui';
import {
  zhCN, //
  dateZhCN,
  enUS,
  dateEnUS,
} from 'naive-ui';

const { locale, t } = useI18n();

const zhCNLang = {
  locale: zhCN,
  dateLocale: dateZhCN,
};

const enUSLang = {
  locale: enUS,
  dateLocale: dateEnUS,
};

const naiveLocale = computed<Record<string, any>>(() => {
  const localeConfig = setNaiveLocale(locale.value);
  return localeConfig;
});

function setNaiveLocale(val: string) {
  switch (val) {
    case 'zh-CN':
      return zhCNLang;
    case 'en-US':
    default:
      return enUSLang;
  }
}

onMounted(() => {
  console.log('👋 App根组件已挂载');
});

watchEffect(() => {
  console.log('🌏 当前语言 locale', locale.value);

  document.title = t('app.title');
});
</script>

<style lang="scss" scoped>
.app-root {
  height: 100vh;

  > * {
    min-height: 100%;
    flex: 1;
  }
}
</style>
