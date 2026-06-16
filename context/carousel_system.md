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

## Distribuição Recomendada por Carrossel (7 slides)

| Slide | Categoria |
|-------|-----------|
| 1 | Capa |
| 2 | Caso Real ou Erro Comum |
| 3–5 | Framework, Processo, Checklist ou Comparação |
| 6 | Caso Real ou Comparação |
| 7 | CTA |

---

## Exemplo Completo de Slide com Metadados

```
### SLIDE 3

O que funciona bem com ChatGPT para imagens:

✓ Fundo branco limpo
✓ Infográficos simples
✓ Produto em contexto de uso

**Tipo Visual:** Checklist
**Objetivo:** Mostrar rapidamente as aplicações práticas validadas na operação.
**Hierarquia Visual:**
1. Lista com checkmarks em verde/azul
2. Título do slide
3. Ícones de apoio para cada item
**Elementos Visuais:** checklist, ícones outline, cards
**Nível de Destaque:** Médio
**Emoção:** Clareza
**Observações Visuais:** Usar checkmarks em #2563EB. Espaçamento generoso entre itens. Fundo card #1E293B.
```
