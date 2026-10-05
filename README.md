# Emergência Brasil — Guia do jogador

Documentação do jogo Emergência Brasil: aprenda a jogar, conheça o mapa, gerencie bases e equipes, atenda ocorrências e acompanhe as novidades.

Os valores de saldo inicial, construção, evolução, carceragem e intervalo de novos chamados são carregados no navegador pelo endpoint público `/api/v1/game/catalog`. Em desenvolvimento standalone, o VitePress encaminha `/api` ao backend local; configure `API_PROXY_TARGET` se ele estiver em outro endereço. Para hospedar os arquivos estáticos em uma origem diferente da API, defina `VITE_GAME_API_BASE` durante o build e permita a origem da documentação no CORS do backend.

## Guia

- [Como jogar](guia/como-jogar.md)
- [Mapa e região](guia/mapa-e-regiao.md)
- [Bases e equipes](guia/bases-e-equipes.md)
- [Ocorrências e atendimentos](guia/ocorrencias-e-atendimentos.md)
- [Economia e recursos](guia/economia-e-recursos.md)
- [Perguntas frequentes](guia/perguntas-frequentes.md)
- [Novidades](novidades.md)
