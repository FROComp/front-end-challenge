![Project Logo](src/assets/logo.svg)

Este projeto é o resultado do [desafio](https://github.com/uhuutech/teste-frontend) da Uhuu de frontend e foi desenvolvido por [Fábio Oliveira](https://www.linkedin.com/in/f%C3%A1bio-oliveira-12351016a/).

Trata-se de um projeto voltado para o streaming de filmes, provendo informações gerais das obras cinematográficas mais populares da atualidade, além de oferecer a funcionalidade de filtra-los por gênero.

Para melhor compreender as funcionadades do projeto, segue a URL do sistema em produção:

[TMDB Filmes](https://uhuu-front-end-challenge-fabio.onrender.com/)

## Instalação

Inicialmente é necessário realizar o clone do projeto e instalar as dependências necessárias.

```bash
# Clonar repositório
git https://github.com/FROComp/front-end-challenge.git

# Navegar para o diretório
cd front-end-challenge

# Install dependencies
npm install ou yarn
```

## Variáveis de ambiente

Uma vez na raiz do projeto, execute o comando a seguir para criar o arquivo .env

```bash
  cat .env-sample > .env
```

As seguintes variáveis devem ser preenchidas

```bash
  VITE_API_URL=https://api.themoviedb.org/3
  VITE_IMAGE_API_URL=http://image.tmdb.org/t/p/w500
  VITE_API_TOKEN=TMDB_API_KEY
  VITE_API_LANGUAGE="pt-BR"
```

É válido ressaltar que a chave VITE_API_TOKEN é a chave para a comunicação com a API do TMDB. Para adquirir uma chave, consulte o [guia do TMDB](https://developer.themoviedb.org/docs/authentication-application).

Por fim, para rodar o projeto execute o comando:

```bash
  yarn run dev
```

## Tecnologias utilizadas

Para a construção do projeto, foram utilizadas algumas ferramentas. Abaixo será listado algumas delas organizadas por escopo.

### Construção

Foi utilizado a biblioteca [ReactJs](https://react.dev/) e seu ecossistema na criação e estruturação do projeto.

## Estilização

Para os estilos, a ferramenta [styled-components](https://styled-components.com/) foi adotada. O motivo de sua escolha foi com base em sua elegância no quisito parâmetros para o CSS, e também, por ser uma das mais utilizadas no ecossistema ReactJs.

### SEO

Para as otimização de mecanismo de busca foi utilizado a tecnologia [react-helmet](https://www.npmjs.com/package/react-helmet). O motivo de sua escolha foi baseado em sua forma de simples de definir as tags do head do HTML em qualquer lugar da aplicação.

## Formatação de data

Na formatação de data foi utilizada a biblioteca [date-fns](https://date-fns.org/), uma vez que atualmente é a mais famosa para lidar com datas no front-end.

## Reprodução de videos

Para a reprodução do trailer dos filmes, foi adotado o pacote [react-youtube](https://www.npmjs.com/package/react-youtube). A mesma provê uma forma fácil de integrar os IDs dos vídeos com o player de vídeo do Youtube.
