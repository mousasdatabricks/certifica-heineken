# HEINEKEN Brasil · LNA Databricks

Site standalone que apresenta a **lista de participantes do LNA** (Levantamento de
Necessidades de Aprendizagem) do programa de certificação Databricks da HEINEKEN.
Visual baseado no design system do Certifica, com marca HEINEKEN (verde + estrela
vermelha) e interface 100% em português.

## O que mostra

- KPIs: total de participantes, % de alto interesse, novos no Databricks, países.
- Lista pesquisável/filtrável dos colaboradores que responderam ao LNA, com nível de
  interesse em certificação, nuvens em uso e experiência prévia.
- Dados em `src/data.ts`, gerados a partir de `User Summary-2026-06-23.csv`
  (30 participantes únicos; e-mail duplicado consolidado).

## Stack

React + TypeScript + Vite. Sem backend — dados estáticos embutidos.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build / Deploy

```bash
npm run build    # gera dist/
```

Deploy na Vercel: importar o repositório (framework detectado: Vite) ou
`vercel --prod` com a Vercel CLI. Config em `vercel.json`.

## Atualizar a lista

Regerar `src/data.ts` a partir de um novo CSV mantém o mesmo schema
(`Participant`). Campos esperados no CSV: `user_email`, `country`,
`certification_interest`, `clouds`, `new_to_databricks`, `process_date`,
`source_url`.
