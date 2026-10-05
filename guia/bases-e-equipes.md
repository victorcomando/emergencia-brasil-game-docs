<script setup>
import { withBase } from 'vitepress'
</script>

# Bases e equipes

Suas unidades são a estrutura que permite atender a cidade. Cada tipo tem uma função e recebe chamados diferentes.

<figure class="game-screenshot">
  <a :href="withBase('/images/jogo-bases.png')"><img :src="withBase('/images/jogo-bases.png')" alt="Lista de bases do jogo com Base do SAMU e Hospital, incluindo equipes disponíveis e status." /></a>
  <figcaption>Na área Bases, você consulta suas unidades e verifica equipes e viaturas disponíveis. Exemplo do modo de demonstração.</figcaption>
</figure>

## Unidades disponíveis

| Unidade | O que faz |
| --- | --- |
| Quartel do Corpo de Bombeiros | Envia bombeiros para incêndios em residências e veículos. |
| Base do SAMU | Envia ambulâncias para acidentes e emergências médicas. |
| Base da Polícia | Envia viaturas para ocorrências policiais. |
| Hospital | Recebe pacientes transportados pelo SAMU e mantém profissionais ocupados durante os cuidados. |

O hospital não envia viaturas. Ele complementa o atendimento do SAMU quando uma ocorrência precisa de transferência.

## Construção e custos

Escolha a unidade no catálogo e posicione-a no mapa. Você pode pagar o custo indicado com dinheiro ou ouro. A construção começa assim que a unidade é colocada; se quiser, pode usar ouro para terminá-la imediatamente.

<GameCatalogData section="construction-costs" />

Cada unidade operacional de resposta começa com uma viatura e quatro funcionários. O hospital começa com quatro profissionais de saúde. Uma base de nível maior comporta mais viaturas e funcionários: até uma viatura e quatro funcionários por nível, até o nível 5. O hospital recebe pacientes conforme seus profissionais disponíveis.

## Evolua suas unidades

Evoluir uma unidade aumenta a capacidade de viaturas e funcionários. A unidade continua atendendo chamados enquanto a melhoria fica pronta. Os custos, prazos e limites por nível são:

<GameCatalogData section="upgrade-levels" />

Em uma unidade policial, você também pode instalar uma **carceragem**. A unidade continua em serviço. Chamados com prisão podem então levar a pessoa detida até uma carceragem disponível; sem essa melhoria, não há condução para outra unidade.

<GameCatalogData section="detention" />

## Cuide da capacidade

Abra os detalhes de uma unidade para ver quem está disponível e quem está em atendimento. Cada base de resposta precisa ter uma viatura compatível e funcionários livres para enviar uma equipe. Por exemplo, um chamado do SAMU precisa de dois socorristas; incêndios precisam de três bombeiros e ocorrências policiais precisam de dois policiais.

<figure class="game-screenshot">
  <a :href="withBase('/images/jogo-detalhe-base.png')"><img :src="withBase('/images/jogo-detalhe-base.png')" alt="Detalhes de uma Base do SAMU, mostrando status, viatura, socorristas e opções de administração." /></a>
  <figcaption>Os detalhes da base mostram sua equipe, sua viatura e as opções para administrar a unidade. Exemplo do modo de demonstração.</figcaption>
</figure>

Você pode:

- **Evoluir a base:** aumenta sua capacidade de equipe e viaturas.
- **Adicionar uma viatura:** amplia o número de chamados que a base pode atender ao mesmo tempo.
- **Contratar funcionários:** reforça suas equipes ou a capacidade de recepção do hospital.
- **Interromper ou retomar o serviço:** controla se uma unidade participa dos atendimentos.

Uma unidade fora de serviço deixa de ser opção para novos atendimentos. Funcionários e viaturas ocupados voltam a ficar disponíveis conforme o trabalho termina.
