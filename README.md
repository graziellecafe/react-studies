# React Studies
Um repositório com projetos de estudo em React

## Visão geral
React é uma biblioteca Javascript para construir interfaces de usuário.

Algumas propriedades:
- **Declarativo**: o React facilita a criação de UIs interativas. Projete exibições simples para cada estado em seu aplicativo e o React atualizará e renderizará com eficiência apenas os componentes certos quando seus dados mudarem.
- **Baseado em componente**: crie componentes encapsulados que gerenciam seu próprio estado e, em seguida, componha-os para criar interfaces de usuário complexas.

## Pré-Requisitos
No [site da Tania Rascia](https://www.taniarascia.com/getting-started-with-react/) podemos ver alguns pré-requisitos para estudar React.

Há algumas coisas que você deve saber com antecedência antes de começar a brincar com o React. Se você nunca usou JavaScript ou DOM antes, por exemplo, eu ficaria mais familiarizado com eles antes de tentar lidar com o React.

- Familiaridade básica com [HTML e CSS](https://www.internetingishard.com/).
- Conhecimento básico de [JavaScript e programação](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript).
Compreensão básica do [DOM](https://www.taniarascia.com/introduction-to-the-dom/).
Familiaridade com [sintaxe e recursos do ES6](https://www.taniarascia.com/es6-syntax-and-feature-overview/).
- [Node.js e npm](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/) instalado globalmente.


## Seção 1: Introdução
### O que é React? 
- React é uma biblioteca Javascript para desenvolvimento de aplicações front-end 
- Estas aplicações são chamadas de SPA (Single Page Application)
- A arquitetura do React é baseada em componentes 
- Pode ser inserido em uma aplicação ou podemos criar a aplicação apenas com React 
- É mantido pelo Meta (Facebook)


### Como criar um aplicativo react
```javascript
     npx create-react-app nome-app
     npm start 
```

### Implantação
Para fazer o deploy do seu projeto você pode dar uma olhada nesse passo a passo no [site create-react-app.dev](https://create-react-app.dev/docs/deployment/).

### Ferramentas
#### Node.js
- O Node.js é uma runtime de Javascript
- Ou seja, uma biblioteca utilizada por um compilador durante a execução do programa 
- Que está construída na V8 engine (escrita em C++) do Google 
- Possibilita criar softwares em JS no lado do servidor 
- Temos então um código JS rodando em C++ para garantir alta performance 

#### npm 
- O **npm** é um gerenciador de pacotes do Node
- Vamos poder utilizar bibliotecas de terceiros, baixando elas pelo npm 
- E também executar determinados scripts no nosso programa 
- Dificilmente um software em Node.js não utiliza o npm 
- Os módulos devem ser descartável, ou seja, a cada instalação do projeto baixamos todos os pacotes novamente 
- Para criar as nossas aplicações em React vamos utilizar um executor de scripts do Node que é o **npx**
- Com o comando: `npx create-react-app <nome>` temos uma nova aplicação sendo gerada 
- Podemos iniciar a aplicação com `npm start` 

### Estrutura base do React 
Há algumas pastas e arquivos chaves para o desenvolvimento em React: 
- `node_modules`: onde as dependências do projeto ficam 
- `public`: assets estáticos e HTML de inicialização 
- `src`: onde vamos programar as nossas aplicações 
- `src/index.js`: arquivo de inicialização do React 
- `src/App.js`: componente principal da aplicação 

#### Extensão para o React 
- `rafce` cria o padrão de um componente React 

## Seção 2 - Fundamentos do React 
- Na maioria dos projetos, os componentes ficam em uma pasta chamada `components` que devemos criar 
- Geralmente são nomeados com a `Pascal Case`: `FirstComponent.js`
- No arquivo criamos uma função que contém o código deste componente ( a lógica e o template )
- Também precisamos exportar esta função, para reutilizá-lo 

### JSX 
- JSX é o "HTML do React"
- Onde vamos declarar as tags de HTML que serão exibidas no navegador 
- Ficam no return do component 
- Temos algumas diferenças do HTML, por exemplo: `class` será `className`
- Isso se dá pelas instruções semelhantes de JS e HTML, pois o JSX é Javascript então algumas terão nomes diferentes 
- O JSX pode ter apenas um elemento pai
- Comentário no JSX: `{ /* Algum comentário */ }`

### Template Expressions
- Template Expressions é o recurso que nos permite executar JS no JSX e também interpolar variáveis 
- A sintaxe é `{ algumCodigoEmJs } ``
- Tudo que está entre chaves é processado em Javascript e nos retorna um resultado

### Eventos 
#### Evento de click
- Os eventos para o front-end são essenciais 
- Em várias situações vamos precisar do click, como ao enviar formulários 
- No React os eventos estão "prontos", como podemos utilizar o `OnClick`para ativar uma função ao clicar em um elemento 
- Esta função é criada na própria função do componente 
- As funções geralmente tem o padrão `handleAlgumaCoisa`

### Funções de renderização 
- Podemos criar funções que retornam JSX 
- Isso serve para criar situações que dependam de outras condições 
- Ou seja, o JSX a ser renderizado pode variar por alguma variável, por exemplo 