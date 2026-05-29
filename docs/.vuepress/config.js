import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  port: 4000,
  title: 'Yves Chevallier',
  description: 'Have a look at my resumé',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],
  theme: defaultTheme({
    //logo: 'https://vuejs.press/images/hero.png',
    navbar: false, //['/', '/get-started'],
    contributors: false, // pas de liste de contributeurs
  }),
  bundler: viteBundler(),
  base: '/'
})
