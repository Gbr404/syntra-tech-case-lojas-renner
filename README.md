# SYNTRA TECH | Case Lojas Renner

<p align="center">
  <strong>Sob medida, em escala.</strong>
  <br />
  Solução demonstrativa de hiperpersonalização para o varejo de moda utilizando inteligência artificial e análise de comportamento.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-7-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

---

## Sobre o projeto

A **Syntra Tech** é uma proposta de solução tecnológica desenvolvida para o Case Lojas Renner, no contexto do Instituto Percorre.

O projeto aborda um desafio recorrente no varejo: a utilização de comunicações genéricas para consumidores com diferentes preferências, comportamentos e interesses.

Nossa proposta é utilizar inteligência artificial e análise de dados para transformar informações de comportamento em experiências de compra personalizadas, conectando cada consumidor a produtos e conteúdos mais relevantes.

O resultado é um protótipo interativo que demonstra como a hiperpersonalização pode ser aplicada em diferentes pontos da jornada de compra.


## Nossa solução

A Syntra Tech propõe uma camada de inteligência para segmentação comportamental e geração de recomendações personalizadas.

A solução demonstra três frentes principais:

- **Segmentação inteligente:** organização dos consumidores em microssegmentos de acordo com suas preferências e estilos.
- **Recomendações personalizadas:** identificação de produtos alinhados ao comportamento e às escolhas de cada consumidor.
- **Comunicação sob medida:** geração de conteúdos personalizados para e-mail marketing e redes sociais.


## Como funciona o motor de recomendações?

O protótipo utiliza um mecanismo demonstrativo de recomendação baseado em regras de negócio e classificação de estilos.

O fluxo de funcionamento é dividido em etapas:

1. O visitante seleciona os produtos de sua preferência.
2. O sistema contabiliza os estilos associados aos produtos.
3. Identifica o estilo predominante e o secundário.
4. Constrói um perfil personalizado com base nas combinações identificadas.
5. Gera recomendações e conteúdos de marketing relacionados ao perfil.

A implementação atual realiza esse processamento no frontend, utilizando dados de demonstração e regras programadas em TypeScript.

## Tecnologias utilizadas

| Tecnologia | Aplicação no projeto |
|---|---|
| React 19 | Construção da interface e componentes reutilizáveis |
| TypeScript | Tipagem e organização da lógica da aplicação |
| Vite 8 | Ambiente de desenvolvimento e build |
| Tailwind CSS 4 | Estilização e responsividade |
| Lucide React | Ícones da interface |
| LocalStorage | Persistência local de informações |
| Node.js / npm | Ambiente e gerenciamento de dependências |


## Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) — versão 22 recomendada para o ambiente atual do projeto.
- npm.
- Git (opcional, para clonar o repositório).

### 1. Instalar as dependências

```bash
npm install
```

### 2. Iniciar o ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível no endereço indicado pelo Vite, normalmente:

```text
http://localhost:3000
```

### 3. Gerar a versão de produção

```bash
npm run build
```

Os arquivos otimizados para publicação serão gerados na pasta `dist/`.

Para visualizar localmente a versão de produção:

```bash
npm run preview
```

## Configuração de ambiente

O projeto possui um arquivo `.env.example` para documentar variáveis de ambiente.

Caso alguma funcionalidade de integração com serviços externos utilize uma chave de API, configure-a no ambiente apropriado, mantendo credenciais privadas fora do repositório público.

**Importante:** o motor demonstrativo de recomendações descrito neste README funciona no frontend por meio de regras de negócio e não exige uma chave Gemini para esse processamento.


## Equipe

**Syntra Tech — Case Lojas Renner**

Projeto desenvolvido por uma equipe multidisciplinar, reunindo conhecimentos de tecnologia, análise de dados, inteligência artificial e marketing.

## Objetivo do projeto

Demonstrar como a combinação entre dados, tecnologia e inteligência artificial pode contribuir para experiências de compra mais relevantes, comunicação personalizada e estratégias de hiperpersonalização no varejo.

<p align="center">
  <strong>SYNTRA TECH</strong>
  <br />
  <em>Sob medida, em escala.</em>
</p>