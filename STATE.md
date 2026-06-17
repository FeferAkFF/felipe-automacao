# STATE.md — Felipe Automação Sellers

> Estado atual do projeto. Atualizado ao final de cada sessão.
> Última atualização: 2026-06-17

---

# STATUS GERAL

**Fase:** Ciclo 02 + Ciclo 03 prontos — sistema de carrosséis HTML em construção
**Prioridade imediata:** Integrar geração de slides HTML no portal via Anthropic API

---

# MÉTRICAS ATUAIS

| Métrica | Valor |
|---------|-------|
| Seguidores Instagram | 0 (perfil ainda não publicou) |
| Posts publicados | 0 |
| Roteiros prontos para gravar | 10 (Ciclo 02 + Ciclo 03) |
| Roteiros Reels | 7 |
| Roteiros Carrossel | 3 |
| Leads capturados | 0 |

---

# CONTEXTO REAL DA OPERAÇÃO

- Operação Tulele com ~15 meses de existência
- Opera sozinho: fornecedor, embalagem, atendimento, anúncios, estoque, financeiro
- Trabalha na loja seg-qua / outro emprego qui-sab
- Usa ChatGPT para imagens e descrições (manual, um por um)
- ~500 anúncios existentes — qualidade varia, precisam de revisão
- Nenhuma automação implementada ainda — em fase de planejamento e aprendizado
- Não tem volume de mensagens que justifique automação de atendimento no momento

---

# HISTÓRICO DE SESSÕES

## 2026-06-08
- Criação do repositório `felipe-automacao`
- Criação do `CLAUDE.md` e `STATE.md` iniciais

## 2026-06-10 (parte 1)
- Criação dos agentes 7 (Atlas) e 8 (Memo)
- Auditoria completa da arquitetura v1.0
- Atualização do visual_guidelines.md com identidade definitiva

## 2026-06-10 (parte 2) — CICLO 01 INVALIDADO
- Ciclo 01 executado com contexto incorreto (cases fictícios)
- CLAUDE.md reescrito com contexto real de Felipe
- Ciclo 01 descartado integralmente

## 2026-06-10 (parte 3) — CICLO 02 ✓
- Agente 4 (Clio) evoluído para "Documentador da Operação"
- Sistema operation_journal criado com comandos simples (`registrar:`, `conteúdo:`, `ideia:`)
- Ciclo 02 completo: 5 roteiros APROVADOS pela Vero (scores: 66, 67, 63, 64, 61)

## 2026-06-16 (parte 1) — PORTAL WEB ✓
- Portal criado em `/portal/` e deployado no Vercel
- Funcionalidades: Kanban (Em Análise/Aprovado/No Ar), Quadros, Agentes
- Sync automático com GitHub ao abrir o portal
- Session-start hook criado (.claude/hooks/session-start.sh)
- GitHub Actions workflow criado para atualizar STATE.md diariamente à meia-noite

## 2026-06-16 (parte 2) — CICLO 03 + MELHORIAS PORTAL ✓
- Ciclo 03: 5 roteiros gerados no novo formato time-coded
- Agente Nova atualizado: formato [Xs–Ys] obrigatório para Reels com falas completas
- Portal: aba Carrosséis (slides separados, copiar por slide, gerar prompt de imagem)
- Portal: botão Imprimir em cada roteiro (versão limpa para papel)
- PRs #1, #2 mergeados em main — tudo em produção

## 2026-06-17 — SISTEMA DE CARROSSÉIS HTML ✓ (em andamento)
- Carrossel teste criado: "Como uso IA para criar descrição de produto em 3 passos" (7 slides)
- Sistema completo de metadados visuais por slide (Tipo Visual, Hierarquia, Emoção, Asset)
- context/carousel_system.md criado com identidade visual e regras
- Claude Project "Carrosséis FF" criado no claude.ai com prompt de sistema calibrado
- Slides 2 e 3 testados e aprovados visualmente — qualidade equivalente ao brandsdecoded
- Decisão: integrar geração de slides HTML direto no portal via Anthropic API
- Fluxo futuro: portal → Gerar Slide → iframe renderizado → Imprimir PNG

---

# CICLOS

## Ciclo 01 — INVALIDADO
Descartado. Roteiros assumiam automações fictícias.

## Ciclo 02 — PRONTO PARA GRAVAR

| Post | Formato | Pilar | Score | Data prevista |
|------|---------|-------|-------|---------------|
| 3 erros no meu catálogo | Reels | Autoridade | 66/70 | A definir |
| ChatGPT para imagens de produto | Carrossel | Educação | 67/70 | A definir |
| Como crio um anúncio do zero | Reels | Educação | 63/70 | A definir |
| IA para pesquisar produto | Carrossel | Educação | 64/70 | A definir |
| O que automatizar numa operação solo | Carrossel | Educação | 61/70 | A definir |

## Ciclo 03 — PRONTO PARA GRAVAR (novo formato time-coded)

| Post | Formato | Pilar | Data prevista |
|------|---------|-------|---------------|
| Quanto tempo sua operação te toma por semana? | Reels | Autoridade | 23 Jun |
| Como escrevo um título com IA em 2 minutos | Reels | Educação | 24 Jun |
| Testei criar uma descrição com IA — antes e depois | Reels | Educação | 26 Jun |
| Por que refazer 500 anúncios do zero | Reels | Autoridade | 28 Jun |
| 5 prompts prontos para sellers | Carrossel | Educação | 27 Jun |

Arquivos em: `/content/roteiros/2026-06-16-*.md`

---

# PORTAL WEB

URL: https://felipe-automacao-portal-gcfl61mrh.vercel.app/
Stack: HTML/CSS/JS + Vercel serverless + Anthropic API (planejado)
Abas: Roteiros (Kanban) | Carrosséis | Quadros | Agentes
Sync: automático via GitHub API ao abrir — busca `/content/roteiros/` do branch `main`
Dados locais: status dos roteiros e feedbacks salvos no localStorage do navegador
Imprimir: botão 🖨️ em cada roteiro para versão limpa em papel

Para ativar geração de slides HTML: configurar `ANTHROPIC_API_KEY` no Vercel.

## Claude Project — Carrosséis FF
Sistema paralelo no claude.ai para geração manual de slides HTML.
Prompt de sistema calibrado com identidade visual completa.
Usar enquanto integração do portal não está pronta.

---

# ESTRUTURA DE AGENTES

| # | Nome | Função | Output |
|---|------|--------|--------|
| 1 | Íris | Radar de tendências / pauta | weekly_topics.md |
| 2 | Nova | Roteirista (formato time-coded) | roteiros/*.md |
| 3 | Saga | Programação editorial | weekly_calendar.md + content_history.json |
| 4 | Clio | Documentador da operação | roteiros/*-[categoria]-*.md |
| 5 | Vero | Auditor editorial (score 0–70) | reviews/*.md + publishing_queue.json |
| 6 | Mira | Diretor criativo | creative_direction/*.md |
| 7 | Atlas | Arquiteto visual | visual_prompts/*.md |
| 8 | Memo | Knowledge manager | knowledge/*.json + weekly_knowledge_report.md |

Comandos rápidos: `roda o ciclo` / `registrar:` / `conteúdo:` / `ideia:` / `mostra os roteiros`

---

# PRÓXIMOS PASSOS

- [ ] Configurar `ANTHROPIC_API_KEY` no Vercel (console.anthropic.com → API Keys)
- [ ] Integrar geração de slides HTML no portal (botão "Gerar Slide" na aba Carrosséis)
- [ ] Felipe gravar os Reels do Ciclo 02 e Ciclo 03 em sessão única
- [ ] Publicar os Carrosséis (via Claude Project "Carrosséis FF" → screenshot → Instagram)
- [ ] Quando publicar os primeiros posts: marcar como "No Ar" no portal e rodar Ciclo 04

---

# CASES DISPONÍVEIS

Nenhum case documentado ainda.
A operação da Tulele pode ser usada como contexto mas não tem resultados de automação para apresentar.

---

# DECISÕES TOMADAS

- Conteúdo: mistura de exploração + experimentos reais + processo manual atual
- Formato Reels: time-coded [Xs–Ys] com falas completas e cenas específicas (padrão desde Ciclo 03)
- Carrosséis: produzir via Claude Project "Carrosséis FF" (HTML renderizado → screenshot) — substituindo Canva
- Carrosséis: migrar para geração direto no portal quando ANTHROPIC_API_KEY estiver configurada
- Instagram como canal prioritário na fase 1 (TikTok fase 2, YouTube fase 3)
- Não oferecer mentoria sem ter cases reais
- Frequência: 3–4x/semana considerando agenda de Felipe
- Roadmap: conteúdo → templates gratuitos (500+ seguidores) → infoproduto → mentoria
- Portal web independente no Vercel — voltar ao Claude Code só para criar coisas novas
