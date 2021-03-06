import { defineConfig } from 'umi'

export default defineConfig({
  title: '乌鸦文化',
  theme: {
    'primary-color': '#00a870',
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: './index',
        },
        {
          component: './404',
        },
      ],
    },
  ],
  antd: {},
  dva: false,
  hash: true,
  history: { type: 'hash' },
  dynamicImport: {},
  manifest: {},
  publicPath: '/',
  outputPath: 'dist'
})
