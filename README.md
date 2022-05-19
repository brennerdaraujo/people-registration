<h1 align="center">Cadastro de Pessoas</h1>

<p align="center">
    <img src="https://img.shields.io/badge/version-1.0.0-green" title="Versão 1.0.0"/>
</p>

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades da Aplicação](#funcionalidades-da-aplicação)
- [Instalação e execução](#instalação-e-execução)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras-do-projeto)
- [Licença](#licença)

## Descrição do Projeto

Cadastro de pessoas é um projeto simples de front-end desenvolvido em Angular e Angular Material, que, como o próprio nome diz, tem como objetivo cadastrar pessoas e adicioná-las em uma lista.
<br><br>

## Funcionalidades da Aplicação

- `Cadastrar pessoa`: Para cadastrar uma pessoa, deve-se preencher o nome e o telefone, e em seguida, teclar Enter ou clicar em "Salvar".
<div align="center">
    <img src="./resources/cadastro-pessoa.gif" width="500"/>
</div>
<br>

- `Remover pessoa`: Para remover uma pessoa, deve-se, na listagem de pessoas, clicar no botão vermelho com o símbolo de uma lixeira, e em seguida, clicar em "Sim", na caixa de diálogo que aparecerá, para confirmar a remoção.
<div align="center">
    <img src="./resources/remocao-pessoa.gif" width="500"/>
</div>
<br>

- `Pesquisar por pessoas`: Para pesquisar por pessoas, deve-se, na barra de pesquisa, digitar o filtro desejado, podendo ser pesquisado por ID, nome ou telefone. A barra de pesquisa funciona em tempo real, então não há necessidade de teclar Enter.
<div align="center">
    <img src="./resources/pesquisa-pessoas.gif" width="500"/>
</div>
<br>

- `Ordenar lista de pessoas`: Para ordenar a lista de pessoas, deve-se, no cabeçalho da listagem de produtos, clicar sobre a seta que aparecerá ao passar o mouse sobre o campo de ordenação desejado. Ao clicar, a seta ficará apontada para cima, o que indica ordenação crescente. Clicando novamente, a seta ficará apontada para baixo, o que indica ordenação decrescente. E ao clicar mais uma vez, a seta sumirá e a listagem não terá ordenação.
<div align="center">
    <img src="./resources/ordenacao-pessoas.gif" width="500"/>
</div>
<br><br>

## Instalação e execução

- Instala as dependências do projeto
    ```bash
    npm install
    ```
- Inicia o projeto em modo de desenvolvimento para demonstração
    ```bash
    npm start
    ```

## Tecnologias utilizadas

- ``Angular``
- ``Angular Material``

## Pessoas Desenvolvedoras do Projeto

<a href="https://www.linkedin.com/in/brenner-de-ara%C3%BAjo-rodrigues-barbosa-b96a086b/">
    <img src="./resources/dev.jpg" title="Brenner de Araújo" width="150"/>
</a>
<br><br>

## Licença

MIT License

Copyright (c) 2022 Brenner de Araújo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
