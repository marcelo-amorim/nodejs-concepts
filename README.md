# nodejs-concepts
Conceitos do Node.js. Desafio da Bootcamp GoStack da Rocketseat.

Este aplication utiliza o framework Express para construção de uma API a fim de demonstrar os conceitos de requisições HTTP e a manipulação de dados sem a necessidade de um banco de dados.

## :information_source: Sobre a API

Esta API é um aplicativo para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".

## :white_check_mark: Requisitos

 - Yarn - gerenciador de pacotes;
 - Node.js - versão 10 ou superior;

## Como rodar o projeto

Esta aplicação é apenas uma demonstração dos conceitos básicos do Node.js. Para rodar o projeto basta clona-lo em um diretório de sua preferência e em seguida, executar o comando `yarn` no seu terminal.
Após a instalação das dependências, você pode rodar a API com o comando shell`yarn dev`.
Todas as funcionalidades foram testadas, mas se quiser conferir o relatório de testes, execute o comando `yarn test` no terminal.

## Funcionalidades

Esta API possui 5 rotas disponíveis para chamadas:

- **`POST /repositories`**: A rota deve receber `title`, `url` e `techs` dentro do corpo da requisição (em formato JSON):
```
{ 
  title: 'Desafio Node.js',
  url: 'http://github.com/...', 
  techs: ["Node.js", "..."]
}
```

- **`GET /repositories`**: Lista todos os repositórios cadastrados;

- **`PUT /repositories/:id`**: Esta rota permite a alteração do `title`, `url` e `techs` do registro encontrado pelo parâmetro `id` da URL;

- **`DELETE /repositories/:id`**: Deleta o registro com `id` da URL informado;

- **`POST /repositories/:id/like`**: Esta rota permite aumentar o número de likes do repositório encontrado pelo `id` informado na URL;

## Recomendações

Recomenda-se a utilização de uma interface de chamadas de API como **[Insomnia](https://insomnia.rest/download/)** ou **[Postman](https://www.postman.com/)**.

É isso!

