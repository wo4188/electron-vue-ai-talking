import { createI18n } from 'vue-i18n';
import * as _ from 'lodash-es';

// 导入 所有语言文件(/locales/**/*.json)
const modules = import.meta.glob<{ default: Record<string, any> }>('@locales/**/*.json', { eager: true });

const availableLocales = [
  'zh-CN', //
  'en-US',
];

// 构建 语言字典
const langDicts: Record<string, any> = {};

for (const [filePath, module] of Object.entries(modules)) {
  // filePath 如 '/locales/app/zh-CN.json'

  // 路径拆分
  const [, ...dirsAndLang] = filePath
    .replace(/\.json$/, '')
    .split('/')
    .filter(Boolean); // 如 ['locales', 'app', zh-CN]

  const lang = dirsAndLang.pop();
  const dirs = dirsAndLang;

  if (!lang || !availableLocales.includes(lang)) continue;

  if (!langDicts[lang]) {
    langDicts[lang] = {};
  }

  let currDictDir = langDicts[lang];
  if (dirs.length > 0) {
    _.set(currDictDir, dirs.join('.'), module.default);
  } else {
    Object.assign(currDictDir, module.default);
  }
}

// console.log('langDicts', langDicts);

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'zh-CN',
  fallbackLocale: 'en-US',
  availableLocales,
  messages: langDicts,
});

export default i18n;
