# Arquitetura Visual

Data: 2026-06-10

Arquivo Base: /content/roteiros/2026-06-10-pesquisa-produto-ia.md

---

## Resumo

Tema: Pesquisar produto com IA antes de comprar estoque

Pilar: Educação

Formato Principal: Carrossel

Mensagem Principal: IA estrutura a análise — você valida os dados na plataforma.

---

## Estratégia Escolhida

**CHECKLIST**

O carrossel ensina o processo (as 5 perguntas). O estático complementar entrega um checklist de validação manual — o que fazer depois que a IA respondeu, antes de decidir comprar.

---

## O Que Já Foi Explicado

- As 5 perguntas para fazer à IA
- O que a IA faz e não faz
- A regra de teste pequeno antes de escalar

## O Que Será Entregue Agora

- Checklist de verificação manual pós-IA (os dados a conferir na plataforma)
- Critério de decisão: quantos itens precisam estar ok para comprar

---

## Blueprint Visual

### Formato
Post estático — 1080x1080px (ativo de referência para salvar)

### Layout
- Barra de título: "Checklist pós-IA — antes de comprar estoque"
- 5 itens de checklist com caixas marcáveis
- Rodapé com critério de decisão

### Itens do Checklist
1. Volume de buscas do termo principal no ML (Ferramentas do Vendedor)
2. Número de vendedores ativos vendendo o mesmo produto
3. Preço praticado pelos top 5 resultados (confirmar, não estimar)
4. O que compradores reclamam nas avaliações negativas
5. Margem calculada com seu custo real + taxas da plataforma

### Rodapé
"4 de 5 verificados → compra. Menos de 4 → próximo produto."

### Especificações
- Fundo: #F8FAFC | Barra título: #1E293B | Texto título: #FFFFFF
- Caixas de checklist: borda #2563EB, 24px, não preenchidas
- Numeração: #F97316 Montserrat ExtraBold
- Rodapé: fundo #2563EB, texto #FFFFFF

---

## Prompt Canva

```
Post estático 1080x1080px — "Checklist pós-IA: o que verificar antes de comprar estoque".

Topo: barra #1E293B, título branco Montserrat ExtraBold.

Corpo: 5 itens de checklist com caixa quadrada (borda #2563EB, sem preenchimento) + número #F97316 + texto Inter Regular.

Rodapé: barra #2563EB com texto branco "4 de 5 verificados = compra | menos de 4 = próximo produto".

Estilo: guia prático para salvar e usar. Funcional, sem decoração.
```

---

## Prompt ChatGPT Images

```
Create a checklist infographic (1080x1080px) for Brazilian Instagram sellers.

Title bar: #1E293B background, white Montserrat Bold text "Checklist pós-IA — antes de comprar"

5 checklist items with empty checkboxes (blue border #2563EB) + orange numbers (#F97316) + Inter Regular text:
1. Volume de buscas no ML
2. Vendedores ativos no nicho
3. Preço real praticado (não estimado)
4. Reclamações nas avaliações negativas
5. Margem com custo real + taxas

Footer bar: #2563EB background, white text "4 de 5 = compra | menos de 4 = próximo produto"

Background: #F8FAFC. Clean, minimal, functional.
```

---

## Auditoria de Complementaridade

- [x] Não repete o carrossel — o carrossel ensina as perguntas para a IA, o estático ensina o que verificar depois
- [x] Entrega informação nova — o checklist de validação manual detalhado
- [x] Fecha o ciclo do carrossel — pergunta à IA → valida → decide
- [x] Alta taxa de salvamento — checklist prático é o tipo de ativo mais salvo no Instagram

---

## Status

Pronto para Produção
