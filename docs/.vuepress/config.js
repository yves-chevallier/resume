import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  port: 4000,
  title: 'Yves Chevallier',
  description: 'Have a look at my resumé and my projects',
  theme: defaultTheme({
    //logo: 'https://vuejs.press/images/hero.png',
    navbar: false, //['/', '/get-started'],
  }),
  bundler: viteBundler(),
  base: /resume/
})
