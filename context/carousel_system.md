# Sistema de Carrosséis — Regras Visuais

> Arquivo lido obrigatoriamente por Nova e Clio antes de gerar qualquer carrossel.
> Define identidade visual, categorias e estrutura de metadados visuais por slide.

---

## Identidade Visual

| Elemento | Valor |
|----------|-------|
| Background | #0F172A |
| Cards / superfícies | #1E293B |
| Primária (azul) | #2563EB |
| Destaque (laranja) | #F97316 |
| Texto principal | #F1F5F9 |
| Texto secundário | #94A3B8 |
| Borda | #334155 |

---

## Tipografia

| Uso | Fonte |
|-----|-------|
| Títulos e números | Montserrat ExtraBold |
| Corpo e subtítulos | Inter |
| Código e prompts | JetBrains Mono |

---

## Referências de Estilo

Inspirado em: Vercel, Stripe, Linear, Notion, OpenAI.

Características obrigatórias:
- Minimalista — menos é mais
- Premium — parece caro sem ser exagerado
- Tecnológico — transmite competência técnica
- Operacional — focado em resultado, não em estética
- Alto contraste — legível no mobile sem zoom
- Mobile first — tudo deve funcionar em 375px de largura

---

## Proibido

- Stock photos genéricos
- Pessoas ou rostos
- Emojis decorativos (emojis funcionais são permitidos com moderação)
- Visual de coach ou marketing motivacional
- Excesso de gradientes
- Excesso de efeitos (sombras pesadas, brilhos, texturas)
- Elementos decorativos sem função
- Paleta de cores fora da identidade visual

---

## Categorias Visuais

Cada slide deve ser classificado em exatamente uma categoria:

| Categoria | Quando usar |
|-----------|-------------|
| **Capa** | Slide 1 — título principal, para o scroll |
| **Checklist** | Lista de itens com marcação visual |
| **Framework** | Modelo mental, passos numerados, processo |
| **Processo** | Sequência de etapas com setas ou números |
| **Caso Real** | Dado ou situação concreta da operação |
| **Comparação** | Antes vs. depois, certo vs. errado |
| **Erro Comum** | Destaque de equívoco frequente |
| **CTA** | Último slide — chamada para ação única |

---

## Estrutura de Metadados Visuais por Slide

Após o conteúdo de cada slide, adicionar obrigatoriamente:

```
**Tipo Visual:** [categoria da tabela acima]
**Objetivo:** [uma frase — o que este slide deve fazer no leitor]
**Hierarquia Visual:**
1. [elemento principal — o que o olho vê primeiro]
2. [elemento secundário]
3. [elemento de apoio]
**Elementos Visuais:** [lista dos elementos aplicáveis: números, cards, ícones, métricas, setas, checklist, diagramas, comparações, código]
**Nível de Destaque:** [Baixo | Médio | Alto]
**Emoção:** [Curiosidade | Clareza | Descoberta | Autoridade | Prova]
**Observações Visuais:** [instruções específicas opcionais]
```

---

## Regras de Uso dos Metadados

- Os metadados ficam abaixo do conteúdo do slide, separados por linha em branco
- Não alteram o conteúdo principal
- São usados pelo portal para gerar prompts de imagem mais precisos
- Devem ser consistentes com o conteúdo do slide — não inventar elementos que não têm base no texto

---

## Assets Visuais Disponíveis

| Asset | Quando usar |
|-------|-------------|
| **Dashboard** | Dados, métricas, painéis de controle |
| **Screenshot** | Interface real de ferramenta (ML, ChatGPT, etc.) |
| **Produto** | Item físico sendo vendido |
| **Mockup SaaS** | Tela fictícia de software/ferramenta |
| **Fluxograma** | Processo com etapas e setas |
| **Timeline** | Sequência cronológica |
| **Checklist Visual** | Lista de itens com marcação |
| **Comparação** | Dois estados lado a lado (antes/depois, certo/errado) |
| **Infográfico** | Dado visual com números e contexto |
| **Diagrama** | Estrutura relacional, mapa mental |
| **Interface** | Tela de app ou plataforma estilizada |
| **Métrica** | Número grande em destaque como elemento central |
| **Card de Destaque** | Elemento único em evidência, sem estrutura complexa |

---

## Estrutura de Asset por Slide (obrigatório)

Adicionar após os metadados visuais:

```
**Asset Visual Principal:** [tipo da tabela acima]
**Descrição do Asset:** [o que aparece visualmente — específico e contextualizado para e-commerce/marketplace]
**Papel do Asset:** [Explicar | Reforçar | Comparar | Demonstrar | Provar | Guiar]
**Prioridade Visual:** [Asset dominante | Texto dominante | Equilibrado]
```

---

## Regras de Composição

Todo slide deve conter:
1. 1 asset visual principal
2. 1 elemento de apoio (tipografia, ícone, número)
3. Texto

Exceção: slides propositalmente minimalistas (ex: slide de métrica isolada, CTA limpo).

---

## Regra de Variação

Nunca usar o mesmo tipo de asset em slides consecutivos.

Exemplo de sequência correta:
```
Slide 1 → Dashboard
Slide 2 → Checklist Visual
Slide 3 → Fluxograma
Slide 4 → Mockup SaaS
Slide 5 → Comparação
Slide 6 → Métrica
Slide 7 → Card de Destaque (CTA)
```

---

## Contexto dos Assets

Sempre contextualizar para o universo do projeto:
- Mercado Livre, Shopee, Amazon
- Anúncios, catálogo, estoque, atendimento
- ChatGPT, automação, IA aplicada
- Operação solo, seller individual

Evitar elementos genéricos sem contexto de marketplace.

---

## Distribuição Recomendada por Carrossel (7 slides)

| Slide | Categoria | Asset Sugerido |
|-------|-----------|----------------|
| 1 | Capa | Card de Destaque ou Dashboard |
| 2 | Caso Real ou Erro Comum | Métrica ou Comparação |
| 3 | Framework ou Processo | Fluxograma ou Timeline |
| 4 | Checklist | Checklist Visual |
| 5 | Processo ou Comparação | Diagrama ou Comparação |
| 6 | Caso Real | Screenshot ou Mockup SaaS |
| 7 | CTA | Card de Destaque |

---

## Exemplo Completo de Slide com Metadados e Asset

```
### SLIDE 3

O que funciona bem com ChatGPT para imagens:

✓ Fundo branco limpo
✓ Infográficos simples
✓ Produto em contexto de uso

**Tipo Visual:** Checklist
**Objetivo:** Mostrar rapidamente as aplicações práticas validadas na operação.
**Hierarquia Visual:**
1. Lista com checkmarks em azul
2. Título do slide
3. Ícones de apoio para cada item
**Elementos Visuais:** checklist, ícones outline, cards
**Nível de Destaque:** Médio
**Emoção:** Clareza
**Observações Visuais:** Checkmarks em #2563EB. Espaçamento generoso. Fundo card #1E293B.

**Asset Visual Principal:** Checklist Visual
**Descrição do Asset:** Checklist vertical com 3 itens marcados, cada um em card escuro (#1E293B), checkmark em azul (#2563EB) à esquerda de cada linha. Fundo geral #0F172A.
**Papel do Asset:** Demonstrar
**Prioridade Visual:** Equilibrado
```
