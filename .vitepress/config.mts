import { defineConfig } from 'vitepress'

const apiProxyTarget = process.env.API_PROXY_TARGET ?? 'http://127.0.0.1:3000'

export default defineConfig({
  lang: 'pt-BR',
  title: 'Emergência Brasil',
  description: 'Documentação do jogo Emergência Brasil',
  cleanUrls: true,
  vite: {
    server: {
      host: '127.0.0.1',
      port: 5175,
      strictPort: true,
      proxy: {
        '^/api(?:/|$)': { target: apiProxyTarget, changeOrigin: true, xfwd: true },
      },
    },
  },
  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Guia do jogo', link: '/guia/como-jogar' },
      { text: 'Novidades', link: '/novidades' },
    ],
    sidebar: [
      {
        text: 'Guia do jogo',
        items: [
          { text: 'Como jogar', link: '/guia/como-jogar' },
          { text: 'Mapa e região', link: '/guia/mapa-e-regiao' },
          { text: 'Bases e equipes', link: '/guia/bases-e-equipes' },
          { text: 'Ocorrências e atendimentos', link: '/guia/ocorrencias-e-atendimentos' },
          { text: 'Economia e recursos', link: '/guia/economia-e-recursos' },
          { text: 'Perguntas frequentes', link: '/guia/perguntas-frequentes' },
        ],
      },
      {
        text: 'Novidades',
        items: [{ text: 'Histórico de atualizações', link: '/novidades' }],
      },
    ],
    outline: { label: 'Nesta página' },
    docFooter: { prev: 'Página anterior', next: 'Próxima página' },
    sidebarMenuLabel: 'Abrir menu',
    darkModeSwitchLabel: 'Aparência',
    darkModeSwitchTitle: 'Alternar tema escuro',
    socialLinks: [],
  },
})
