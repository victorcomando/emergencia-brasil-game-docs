<script setup>
import { withBase } from 'vitepress'
</script>

# Ocorrências e atendimentos

As ocorrências são chamados que aparecem perto das suas unidades. Cada chamado mostra a situação, o endereço, os recursos necessários e a etapa do atendimento.

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

Novos chamados aparecem enquanto você está ativo e tem viaturas em bases em serviço. Com uma viatura nessas condições, o intervalo é o indicado abaixo. Quanto mais viaturas, menor a espera, até o limite de um chamado por minuto. As viaturas ocupadas também contam.

Se o jogo não encontrar um endereço válido, ele tenta novamente na próxima verificação, sem reiniciar o tempo de espera.

<GameCatalogData section="incident-cadence" />

## Despache uma equipe

Abra o chamado para ver os recursos necessários e escolher uma das equipes disponíveis. A equipe precisa estar livre na mesma base que a viatura do tipo exigido.

Depois do despacho, a viatura vai até o chamado e atende no local pelo tempo definido para aquela situação. Ao terminar, o jogo informa se será preciso transferir alguém.

O SAMU só leva pacientes para hospitais disponíveis. Se nenhum hospital puder recebê-los, o atendimento termina no local.

Em chamados policiais com prisão, a equipe leva a pessoa detida para a própria base, se ela tiver carceragem. A transferência acontece mesmo que não haja um funcionário livre para recebê-la. Nesse caso, a equipe e a viatura aguardam na base até alguém ficar disponível ou ser contratado. Quando o funcionário recebe a pessoa e assume o registro, a equipe fica livre.

<figure class="game-screenshot">
  <a :href="withBase('/images/jogo-detalhe-ocorrencia.png')"><img :src="withBase('/images/jogo-detalhe-ocorrencia.png')" alt="Detalhes de um acidente de trânsito, com recursos necessários e seleção de equipe para despacho." /></a>
  <figcaption>Ao abrir um chamado, você confere o local, os recursos necessários e escolhe a viatura. Exemplo do modo de demonstração.</figcaption>
</figure>

A lista de ocorrências ajuda a encontrar chamados pelo nome, categoria, situação e necessidade de transferência. Você também pode abrir qualquer chamado no mapa.

## Acompanhe cada etapa

A situação do chamado mostra a etapa atual:

- Aguardando equipe.
- Viatura a caminho ou atendendo no local.
- Em transferência.
- Aguardando um funcionário para receber a pessoa detida na base.
- Em atendimento ou registro na unidade de destino.
- Concluído.

O jogo só informa se haverá transferência e qual será o destino depois do atendimento no local. Quando um profissional está disponível para receber a pessoa, a viatura e a equipe podem voltar enquanto a unidade termina o registro.

Uma viatura que está voltando pode atender outro chamado do tipo compatível. O novo trajeto começa onde ela estiver, sem precisar chegar à base primeiro.

Enquanto a viatura ainda estiver a caminho do chamado, você pode cancelar o deslocamento. A ocorrência volta para a lista de chamadas novas, e a viatura retorna à base a partir da posição atual. A equipe e a viatura continuam ocupadas até chegar à base. O deslocamento cancelado não rende recompensa.

## Recompensas e conclusão imediata

Atender chamados rende dinheiro quando o atendimento é concluído. O valor depende do trabalho necessário e da distância percorrida. Você recebe essa recompensa uma única vez.

Se preferir não aguardar, você pode gastar ouro para concluir imediatamente a etapa atual: deslocamento, atendimento, transferência ou retorno. O custo aparece no botão antes de confirmar.
