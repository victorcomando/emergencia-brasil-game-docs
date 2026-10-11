<script setup>
import { withBase } from 'vitepress'
</script>

# Bases e equipes

Você atende a cidade com suas unidades de emergência. Cada tipo tem uma função e recebe chamados diferentes.

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

O hospital recebe os pacientes transferidos pelo SAMU. Ele não envia viaturas.

## Construção e custos

Escolha uma unidade no catálogo e toque no mapa para posicioná-la. Pague o valor indicado com dinheiro ou ouro. A construção começa nesse momento, e você pode usar ouro para terminá-la sem esperar.

<GameCatalogData section="construction-costs" />

Quartéis e bases do SAMU e da Polícia começam com uma viatura e quatro funcionários. Cada nível comporta até uma viatura e quatro funcionários, até o nível 5.

O hospital começa com quatro profissionais de saúde e recebe pacientes conforme a quantidade de profissionais livres.

Cada viatura tem um identificador numérico aleatório de cinco dígitos e uma placa no formato próprio do jogo, como `A7-58317-4B`, diferente dos padrões usados em veículos reais.

## Evolua suas unidades

Evoluir uma unidade aumenta a capacidade de viaturas e funcionários. A unidade continua atendendo chamados enquanto a melhoria fica pronta. Os custos, prazos e limites por nível são:

<GameCatalogData section="upgrade-levels" />

Você também pode instalar uma carceragem na base da Polícia. A base continua em serviço durante a instalação.

Com a carceragem, a equipe pode levar a pessoa detida para a própria base que atendeu o chamado. Sem essa melhoria, não há essa transferência. Se nenhum funcionário estiver livre para recebê-la, a equipe e a viatura aguardam na base até alguém ficar disponível ou ser contratado.

<GameCatalogData section="detention" />

## Cuide da capacidade

Abra os detalhes da unidade para ver quem está livre e quem está em atendimento. Para enviar uma equipe, a base precisa da viatura certa e de funcionários disponíveis: dois socorristas para chamados do SAMU, três bombeiros para incêndios e dois policiais para ocorrências policiais.

<figure class="game-screenshot">
  <a :href="withBase('/images/jogo-detalhe-base.png')"><img :src="withBase('/images/jogo-detalhe-base.png')" alt="Detalhes de uma Base do SAMU, mostrando status, viatura, socorristas e opções de administração." /></a>
  <figcaption>Os detalhes da base mostram sua equipe, sua viatura e as opções para administrar a unidade. Exemplo do modo de demonstração.</figcaption>
</figure>

Você pode:

- Evoluir a base para comportar mais funcionários e viaturas.
- Adicionar viaturas para atender mais chamados ao mesmo tempo.
- Contratar funcionários para as equipes ou para receber mais pacientes no hospital.
- Tirar a unidade de serviço ou colocá-la de volta em serviço.

Uma unidade fora de serviço não recebe novos atendimentos. Funcionários e viaturas ocupados ficam livres conforme o trabalho termina.
