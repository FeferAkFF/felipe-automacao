# STATE.md — Felipe Automação Sellers

> Estado atual do projeto. Atualizado ao final de cada sessão.
> Última atualização: 2026-06-16

---

# STATUS GERAL

**Fase:** Ciclo 02 produzido e aprovado — aguardando publicação
**Prioridade imediata:** Felipe gravar e publicar os 5 posts do Ciclo 02 esta semana

---

# MÉTRICAS ATUAIS

| Métrica | Valor |
|---------|-------|
| Seguidores Instagram | 0 (perfil ainda não publicou) |
| Posts publicados | 0 |
| Roteiros prontos | 5 (Ciclo 02) |
| Leads capturados | 0 |

---

# CONTEXTO REAL DA OPERAÇÃO

- Operação Tulele com ~1 ano de existência
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
- Ciclo 02 completo executado:
  - Íris → 5 temas aprovados por Felipe
  - Nova → 5 roteiros gerados
  - Vero → 5 roteiros APROVADOS (scores: 66, 67, 63, 64, 61)
  - Mira → 5 creative directions
  - Atlas → 5 visual prompts
  - Saga → calendário semanal 16–21 Jun gerado
  - content_history.json atualizado
  - publishing_queue.json atualizado

## 2026-06-16 — PORTAL WEB ✓
- Portal de conteúdo criado em `/portal/`
- Deploy no Vercel: https://felipe-automacao-portal-gcfl61mrh.vercel.app/
- Funcionalidades: Kanban roteiros (Em Análise/Aprovado/No Ar), Quadros, Agentes
- Sync automático com GitHub: portal lê `/content/roteiros/` direto do repo ao abrir
- PR #1 mergeado em main — portal em produção com sync ativo

---

# CICLOS

## Ciclo 01 — INVALIDADO
Descartado. Roteiros assumiam automações fictícias.

## Ciclo 02 — APROVADO, AGUARDANDO PUBLICAÇÃO

| Post | Formato | Pilar | Score | Data |
|------|---------|-------|-------|------|
| 3 erros no meu catálogo | Reels | Autoridade | 66/70 | 16 Jun (hoje) |
| ChatGPT para imagens de produto | Carrossel | Educação | 67/70 | 17 Jun |
| Como crio um anúncio do zero | Reels | Educação | 63/70 | 19 Jun |
| IA para pesquisar produto | Carrossel | Educação | 64/70 | 20 Jun |
| O que automatizar numa operação solo | Carrossel | Educação | 61/70 | 21 Jun |

Arquivos em: `/content/roteiros/2026-06-10-*.md`

---

# PORTAL WEB

URL: https://felipe-automacao-portal-gcfl61mrh.vercel.app/
Stack: HTML/CSS/JS + Vercel serverless + Gemini AI
Sync: automático via GitHub API ao abrir — busca `/content/roteiros/` do branch `main`
Dados locais: status dos roteiros e feedbacks salvos no localStorage do navegador

Para ativar geração de versão melhorada por IA: configurar `GOOGLE_AI_API_KEY` no Vercel.

---

# ESTRUTURA DE AGENTES

| # | Nome | Função | Output |
|---|------|--------|--------|
| 1 | Íris | Radar de tendências / pauta | weekly_topics.md |
| 2 | Nova | Roteirista | roteiros/*.md |
| 3 | Saga | Programação editorial | weekly_calendar.md + content_history.json |
| 4 | Clio | Documentador da operação | roteiros/*-[categoria]-*.md |
| 5 | Vero | Auditor editorial (score 0–70) | reviews/*.md + publishing_queue.json |
| 6 | Mira | Diretor criativo | creative_direction/*.md |
| 7 | Atlas | Arquiteto visual | visual_prompts/*.md |
| 8 | Memo | Knowledge manager | knowledge/*.json + weekly_knowledge_report.md |

Comandos rápidos: `roda o ciclo` / `registrar:` / `conteúdo:` / `ideia:` / `mostra os roteiros`

---

# PRÓXIMOS PASSOS

- [ ] Felipe gravar e publicar os 5 posts do Ciclo 02 (16–21 Jun)
- [ ] Configurar `GOOGLE_AI_API_KEY` no Vercel para ativar IA no portal
- [ ] Ciclo 03: rodar após publicação dos primeiros posts
- [ ] Criar template Canva com identidade visual (#2563EB / #1E293B / #F97316)

---

# CASES DISPONÍVEIS

Nenhum case documentado ainda.
A operação da Tulele pode ser usada como contexto mas não tem resultados de automação para apresentar.

---

# DECISÕES TOMADAS

- Conteúdo: mistura de exploração + experimentos reais + processo manual atual
- Instagram como canal prioritário na fase 1 (TikTok fase 2, YouTube fase 3)
- Não oferecer mentoria sem ter cases reais
- Frequência: 3–4x/semana considerando agenda de Felipe
- Roadmap de produto: conteúdo → templates gratuitos (500+ seguidores) → infoproduto → mentoria
- Portal web independente no Vercel para gerenciar roteiros (não misturar com outros projetos)
