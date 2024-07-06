// uno.config.js
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(), // 添加 UnoCSS 的默认样式预设
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      success: 'var(--color-success)',
      warning: 'var(--color-warning)',
      danger: 'var(--color-danger)',
      info: 'var(--color-info)',
    },
  },
  preflights: [
    {
      getCSS: () => `
        :root {
          --color-primary: #c7000b;
          --color-success: #50d4ab;
          --color-warning: #fbb175;
          --color-danger: #f66f6a;
          --color-info: #526ecc;
        }
      `,
    },
  ],
  rules: [
    ['button-base', {
      cursor: 'pointer',
      display: 'inline-flex',
      padding: '6px 12px',
    }],
  ],
  shortcuts: [
    ['button', `
      'button-base text-14px c-primary bg-success'
      hover:bg-warning
      before:text-14px
      [&.button-danger]:bg-danger
      [&.button-info]:bg-info
    `],
    ['button-danger', 'c-danger'],
    ['button-info', 'c-info'],
  ],
  safelist: [
    'button',
    'button-danger',
    'button-info',
  ],
});
