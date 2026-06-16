# Arquitetura Visual

Data: 2026-06-10

Arquivo Base: /content/roteiros/2026-06-10-processo-criacao-anuncio-manual.md

---

## Resumo

Tema: Processo manual de criação de anúncio

Pilar: Educação

Formato Principal: Reels

Mensagem Principal: Criar um anúncio completo no ML leva 30–45 minutos feito na mão — e a maior parte desse tempo é repetitiva.

---

## Estratégia Escolhida

**EXPANSÃO**

O Reels mostra o problema (quanto tempo leva). O estático complementar entrega o mapa visual do processo — cada etapa em sequência, com o tempo estimado de cada uma. Ativo de referência para o seller comparar com o próprio processo.

---

## O Que Já Foi Explicado

- As etapas do processo: foto → título → descrição → ficha técnica → preço
- O tempo total: 30–45 minutos por anúncio
- Que o processo ainda é manual e está sendo automatizado

## O Que Será Entregue Agora

- Quanto tempo cada etapa consome (detalhamento)
- Quais etapas são candidatas à automação (marcadas visualmente)
- O mapa completo para o seller comparar com o próprio processo

---

## Blueprint Visual

### Formato
Post estático — 1080x1080px

### Layout
- Título: "O processo de criar um anúncio do zero"
- Subtítulo: "e quais etapas dá pra automatizar"
- 5 etapas em sequência vertical com tempo estimado e marcação de automação
- Legenda de rodapé

### Etapas
| Etapa | Tempo est. | Pode automatizar? |
|-------|-----------|-------------------|
| Foto e edição | 10–15 min | Parcialmente (IA gera) |
| Título com palavra-chave | 5–10 min | Sim (IA pesquisa e sugere) |
| Descrição | 5–10 min | Sim (IA gera com template) |
| Ficha técnica | 5 min | Parcialmente (campos repetitivos) |
| Preço e margem | 5 min | Não (decisão estratégica) |

### Cores e Tipografia
- Fundo: #F8FAFC
- Barra de título: #1E293B
- Etapas automatizáveis: ícone ⚡ em #F97316
- Etapas não automatizáveis: ícone 🧠 em #2563EB
- Números de tempo: Montserrat ExtraBold #1E293B
- Texto: Inter Regular

---

## Prompt Canva

```
Post estático 1080x1080px — "O processo de criar um anúncio do zero e quais etapas dá pra automatizar".

Topo: barra #1E293B com título branco Montserrat ExtraBold.

Corpo: 5 linhas em tabela simples — etapa | tempo estimado | pode automatizar (ícone ⚡ para sim, 🧠 para não/parcial).

Cores: fundo #F8FAFC, tempo em Montserrat Bold #1E293B, ícones de automação em #F97316.

Rodapé: "#sellersbrasileiros" em texto pequeno.

Estilo: guia de referência visual, como uma tabela de produtividade. Limpo, sem decoração.
```

---

## Prompt ChatGPT Images

```
Create a clean process infographic (1080x1080px) for Brazilian Instagram showing the steps to create a marketplace listing.

Title bar at top: dark navy (#1E293B), white text "O processo de criar um anúncio do zero"

5 rows below, each with:
- Step name (left)
- Time estimate in minutes (center, Montserrat Bold)
- Automation icon: ⚡ orange for "can automate" / 🧠 blue for "manual decision"

Steps:
1. Foto e edição | 10–15 min | ⚡
2. Título com palavra-chave | 5–10 min | ⚡
3. Descrição | 5–10 min | ⚡
4. Ficha técnica | 5 min | ⚡
5. Preço e margem | 5 min | 🧠

Background: #F8FAFC. Clean, minimal, functional. No decorative elements.
```

---

## Auditoria de Complementaridade

- [x] Não repete o Reels — o vídeo descreve o processo, o estático quantifica cada etapa
- [x] Entrega informação nova — tempo por etapa e marcação de automação por candidatura
- [x] Possui valor próprio — funciona como guia de referência para qualquer seller
- [x] Alta taxa de salvamento esperada — dado acionável e visual

---

## Status

Pronto para Produção
