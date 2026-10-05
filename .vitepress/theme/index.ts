import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import GameCatalogData from './GameCatalogData.vue'
import './custom.css'

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('GameCatalogData', GameCatalogData)
  },
}

export default theme
