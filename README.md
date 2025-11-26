## ENG:

Random User List (API Fetch + JavaScript)

A simple front-end project built to practice API consumption, **asynchronous JavaScript**, and **DOM manipulation**.
The application fetches 10 random users from the **RandomUser.me API** and displays their titles and full names inside a **dynamic HTML list**.

## Features

- Fetches 10 random users from an external API
- Uses async/await for asynchronous requests
- Renders user data dynamically in the DOM
- Minimal and responsive UI using Bootstrap 5
- Clean and readable JavaScript structure

## Technologies Used

- HTML5
- CSS3 (Bootstrap CDN)
- JavaScript (ES6+)
- RandomUser API

## How It Works

- When the user clicks Execute, the app triggers the getUsers() function.
- The function makes an asynchronous request to the API.
- Once the data is received, the script iterates through the results.
- Each user’s title + first name + last name is added to a ul.
- The list is rendered dynamically on the page.

## Project Structure

- `index.html` — main UI and Bootstrap setup
- `script.js` — API request logic + DOM rendering

## Future Improvements

- Add a loading indicator during the API request
- Display extra information (email, country, photo)

## APIs & Libraries

- Bootstrap 5: https://getbootstrap.com/
- Random User Generator API : https://randomuser.me/

----------

## PT-BR:

Lista de Usuários Aleatórios (API Fetch + JavaScript)

Projeto front-end simples desenvolvido para praticar consumo de API, **JavaScript assíncrono** e **manipulação do DOM**.
A aplicação busca 10 usuários aleatórios da **RandomUser.me API** e exibe seus títulos e nomes completos em uma lista HTML dinâmica.

## Funcionalidades

- Busca 10 usuários aleatórios de uma API externa
- Uso de async/await para requisições assíncronas
- Renderização dinâmica dos dados no DOM
- Interface simples e responsiva com Bootstrap 5
- Estrutura de código limpa e direta

## Tecnologias utilizadas

- HTML5
- CSS3 (Bootstrap CDN)
- JavaScript (ES6+)
- RandomUser API

## Como funciona

- O usuário clica no botão Executar.
- A função getUsers() faz a requisição assíncrona à API.
- Quando a resposta chega, o script percorre os resultados.
- Cada usuário tem título + nome + sobrenome adicionados à ul.
- A lista é renderizada dinamicamente na página.

## Estrutura do projeto

- `index.html` — interface principal e integração com Bootstrap
- `script.js` — lógica da requisição + renderização no DOM

## Melhorias futuras

- Adicionar indicador de carregamento durante a requisição
- Mostrar mais informações (e-mail, país, foto)
- Permitir escolher quantos usuários buscar

## APIs & Bibliotecas

- Bootstrap 5: https://getbootstrap.com/
- Random User Generator API: https://randomuser.me/


