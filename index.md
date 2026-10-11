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

Em Emergência Brasil, você constrói bases em uma região real e envia equipes para atender chamados. A localização das bases e a preparação das equipes ajudam você a decidir qual viatura enviar.

Você pode começar sem conhecer termos técnicos. Escolha onde construir e distribua equipes e recursos para atender a cidade.

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

1. Encontre sua cidade ou outra região onde queira jogar.
2. Construa quartéis, bases do SAMU, bases da Polícia e hospitais.
3. Contrate funcionários e adicione viaturas conforme precisar.
4. Escolha uma equipe disponível para cada chamado e acompanhe o atendimento até o fim.

<div class="guide-links">
  <a :href="withBase('/guia/ocorrencias-e-atendimentos')"><span>JOGADAS</span><strong>Ocorrências e atendimentos</strong><small>Veja como escolher equipes e acompanhar cada chamado.</small><b aria-hidden="true">↗</b></a>
  <a :href="withBase('/guia/economia-e-recursos')"><span>PLANEJAMENTO</span><strong>Economia e recursos</strong><small>Veja como usar dinheiro e ouro para construir e melhorar suas unidades.</small><b aria-hidden="true">↗</b></a>
  <a :href="withBase('/guia/perguntas-frequentes')"><span>AJUDA</span><strong>Perguntas frequentes</strong><small>Encontre respostas para as dúvidas mais comuns.</small><b aria-hidden="true">↗</b></a>
</div>

::: tip Sobre este guia
Este guia explica os recursos disponíveis no jogo. Consulte as novidades para acompanhar as atualizações.
:::
