<script setup>
import { withBase } from 'vitepress'
</script>

# Ocorrências e atendimentos

As ocorrências são chamados que aparecem perto das suas unidades. Elas trazem o tipo de situação, o endereço, o que será necessário e o estado atual do atendimento.

<figure class="game-screenshot">
  <a :href="withBase('/images/jogo-ocorrencias.png')"><img :src="withBase('/images/jogo-ocorrencias.png')" alt="Lista de ocorrências mostrando um acidente de trânsito e um chamado que precisa de transferência para hospital." /></a>
  <figcaption>A lista reúne os chamados da região e indica quando um deles pede transferência. Exemplo do modo de demonstração.</figcaption>
</figure>

## Tipos de chamado

- **Incêndios:** residencial ou em veículo; atendidos pelo Corpo de Bombeiros.
- **Acidente de trânsito:** atendido pelo SAMU e, em alguns casos, com transporte de paciente.
- **Pessoa inconsciente:** atendida pelo SAMU e, em alguns casos, com transporte.
- **Emergência médica:** atendimento do SAMU no próprio local.
- **Ocorrência policial:** atendida pela Polícia; se houver prisão, uma unidade com carceragem pode receber a pessoa detida.

## Despache uma equipe

Abra um chamado para consultar os recursos necessários e as equipes disponíveis. O jogo mostra as opções que podem atendê-lo. Uma equipe precisa estar livre na mesma base que a viatura compatível.

Depois do despacho, a viatura segue pelo trajeto, atende no local e retorna à sua base. Chamados de saúde que pedem transferência seguem até o hospital indicado. Em ocorrências policiais com prisão, a viatura pode levar a pessoa detida a uma carceragem disponível. Ao chegar ao destino, a equipe é liberada para novos serviços.

<figure class="game-screenshot">
  <a :href="withBase('/images/jogo-detalhe-ocorrencia.png')"><img :src="withBase('/images/jogo-detalhe-ocorrencia.png')" alt="Detalhes de um acidente de trânsito, com recursos necessários e seleção de equipe para despacho." /></a>
  <figcaption>Ao abrir um chamado, você confere o local, os recursos necessários e escolhe a viatura. Exemplo do modo de demonstração.</figcaption>
</figure>

A lista de ocorrências ajuda a encontrar chamados pelo nome, categoria, situação e necessidade de transferência. Você também pode abrir qualquer chamado no mapa.

## Acompanhe cada etapa

O estado do chamado informa se ele está aguardando equipe, a caminho, no local, em transporte, em atendimento ou registro na unidade de destino, ou concluído. A viatura pode voltar enquanto a unidade finaliza o atendimento ou o registro da pessoa detida.

Uma viatura que já está voltando pode receber um novo chamado compatível. A nova rota parte de onde ela estiver, então sua equipe pode voltar ao trabalho sem esperar chegar à base.

## Recompensas e conclusão imediata

Atender chamados rende dinheiro quando o atendimento é concluído. O valor depende do trabalho necessário e da distância percorrida. A recompensa é creditada uma única vez.

Se preferir não aguardar, você pode gastar ouro para concluir imediatamente a etapa atual: deslocamento, atendimento, transferência ou retorno. O custo aparece no botão antes de confirmar.
