---
layout: home
hero:
  name: Emergência Brasil
  text: Sua cidade, sua central de emergência.
  tagline: Monte suas bases, organize suas equipes e responda aos chamados em um mapa inspirado em cidades reais.
  image:
    src: /images/jogo-mapa.png
    alt: Mapa do jogo mostrando chamados e uma região do Brasil.
  actions:
    - theme: brand
      text: Conheça o jogo
      link: /guia/como-jogar
    - theme: alt
      text: Ver as unidades
      link: /guia/bases-e-equipes
features:
  - title: Construa sua rede
    details: Escolha onde ficam seus quartéis, bases do SAMU, bases policiais e hospitais.
    link: /guia/bases-e-equipes
    linkText: Entenda as unidades
  - title: Atenda chamados
    details: Acompanhe ocorrências no mapa e envie a equipe certa para cada situação.
    link: /guia/ocorrencias-e-atendimentos
    linkText: Como funcionam os atendimentos
  - title: Pense na sua cidade
    details: Organize suas instalações em lugares que você conhece e planeje a cobertura da região.
    link: /guia/mapa-e-regiao
    linkText: Explorar o mapa
---

<script setup>
import { withBase } from 'vitepress'
</script>

## Um jogo de estratégia sobre cuidar da cidade

Em **Emergência Brasil**, você administra serviços de emergência em uma região real. Cada base que você posiciona ajuda a formar sua rede de atendimento; cada chamado pede uma equipe preparada e uma decisão rápida.

Não é preciso conhecer termos técnicos: o desafio é equilibrar localização, equipe e recursos para manter a cidade atendida.

<div class="guide-start">
  <div>
    <span class="guide-kicker">PRIMEIROS PASSOS</span>
    <h2>Comece montando sua primeira base</h2>
    <p>Escolha uma região, posicione uma unidade e acompanhe os chamados que surgirem por perto. Com o tempo, amplie sua estrutura para atender novos tipos de ocorrência.</p>
    <a :href="withBase('/guia/como-jogar')">Veja como começar <span aria-hidden="true">→</span></a>
  </div>
  <div class="guide-stat"><strong>4</strong><span>tipos de unidade para construir</span></div>
</div>

## O que você vai fazer

1. **Escolher onde atuar** — encontre sua cidade ou uma região de sua preferência no mapa.
2. **Montar sua estrutura** — crie quartéis, bases do SAMU, bases da Polícia e hospitais.
3. **Preparar as equipes** — amplie as equipes e viaturas conforme sua rede cresce.
4. **Responder aos chamados** — escolha uma equipe disponível e acompanhe o atendimento até o fim.

<div class="guide-links">
  <a :href="withBase('/guia/ocorrencias-e-atendimentos')"><span>JOGADAS</span><strong>Ocorrências e atendimentos</strong><small>Veja como escolher equipes e acompanhar cada chamado.</small><b aria-hidden="true">↗</b></a>
  <a :href="withBase('/guia/economia-e-recursos')"><span>PLANEJAMENTO</span><strong>Economia e recursos</strong><small>Saiba como usar dinheiro e ouro para expandir sua operação.</small><b aria-hidden="true">↗</b></a>
  <a :href="withBase('/guia/perguntas-frequentes')"><span>AJUDA</span><strong>Perguntas frequentes</strong><small>Encontre respostas para as dúvidas mais comuns.</small><b aria-hidden="true">↗</b></a>
</div>

::: tip Uma experiência em evolução
Os recursos descritos aqui correspondem ao que está disponível no jogo hoje. Novas possibilidades podem chegar conforme o Emergência Brasil continuar crescendo.
:::
