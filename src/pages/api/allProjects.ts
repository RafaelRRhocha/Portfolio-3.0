// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772396-7737bcce-9276-4a20-9dbd-8c1d5afb62b0.svg',
      name: 'Pokedex',
      technologies: 'Html, Css, Js',
      ref: 'https://rafaelrrhocha.github.io/Projetos/Pokedex/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772393-562c6fb6-c582-4c40-bc6f-bd8c6013fa03.svg',
      name: 'Quadro de Pixels',
      technologies: 'Html, Css, Js',
      ref: 'https://rafaelrrhocha.github.io/Projetos/02-PixelArt/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772402-3a6be876-cc90-4e89-b60e-0bdb70401b30.svg',
      name: 'Lista de Tarefas',
      technologies: 'Html, Css, Js',
      ref: 'https://rafaelrrhocha.github.io/Projetos/03-listaDeTarefas/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772380-b06f5cdf-f36c-48c1-9995-e49d6dbdc87b.svg',
      name: 'Adivinhe a Cor',
      technologies: 'Html, Css, Js, Bootstrap',
      ref: 'https://rafaelrrhocha.github.io/Projetos/04-ColorGuess/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772398-be9e0edf-0239-414d-9dba-8d87a2fb11a9.svg',
      name: 'TechWarts',
      technologies: 'Html, Css, Js, Bootstrap',
      ref: 'https://rafaelrrhocha.github.io/Projetos/05-Trybewarts/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772409-140ee5fa-2f94-4421-95ee-d8c3994bd5be.svg',
      name: 'Carrinho de Compras',
      technologies: 'Html, Css, Js e Jest para Testes Unitários',
      ref: 'https://rafaelrrhocha.github.io/Projetos/shoppingCart/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772407-6d19772c-a353-4015-b359-26109fb4523c.svg',
      name: 'Gerador De Cartas',
      technologies: 'React, Sass e Jest para Testes Unitários',
      ref: 'https://card-generator-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772388-c24eabdc-f97a-4723-8631-ad7ddfa1a264.svg',
      name: 'Preview Songs',
      technologies: 'React, Tailwind e Jest para Testes Unitários',
      ref: 'https://preview-songs-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772411-339f49d0-9ae7-4618-bcc4-4d9834b7dce8.svg',
      name: 'Loja Online',
      technologies: 'React, Tailwind e Jest para Testes Unitários',
      ref: 'https://online-store-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/180787757-108c0f58-e8e4-484d-a495-76b4864b2c57.png',
      name: 'Carteira de Gastos',
      technologies: 'React, Redux, Sass, e RTL para testes unitários',
      ref: 'https://carteira-de-gastos-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/180788642-925e62b1-d9a6-4a18-b6df-493e0870e13a.png',
      name: 'Jogo de Trivia',
      technologies: 'React, Redux, Tailwind, e RTL para testes unitários',
      ref: 'https://trivia-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://img.icons8.com/color/288/star-wars.png',
      name: 'Star Wars Planets',
      technologies: 'React, Context API, Tailwind, e RTL para testes unitários',
      ref: 'https://star-wars-planets-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://img.icons8.com/color/344/netflix-desktop-app--v1.png',
      name: 'Clone Netflix',
        technologies: 'React, Tailwind',
      ref: 'https://clone-netflix-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/344/external-notepad-shopping-and-commerce-smashingstocks-outline-color-smashing-stocks.png',
      name: 'Bloco de Notas',
      technologies: 'Next.js, TypeScript, Tailwind',
      ref: 'https://bloco-de-notas-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-recipes-foodies-flaticons-lineal-color-flat-icons-3.png',
      name: 'Livro de Receitas',
      technologies: 'React, Context API, Tailwind, e RTL para testes unitários',
      ref: 'https://recipes-app-rafaelrrhocha.vercel.app/'
    },
    {
      image: 'https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/344/external-quiz-online-learning-vitaliy-gorbachev-blue-vitaly-gorbachev.png',
      name: 'Quiz Conhecimentos Gerais',
      technologies: 'Next.Js, TypeScript, Tailwind',
      ref: 'https://quiz-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://img.icons8.com/external-flaticons-flat-circular-flat-icons/344/external-clients-media-agency-flaticons-flat-circular-flat-icons.png',
      name: 'Cadastro de Clientes',
      technologies: 'Next.Js, TypeScript, Tailwind, Firebase',
      ref: 'https://register-app-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://img.icons8.com/clouds/344/smartphone-chat-male.png',
      name: 'Chat Online',
      technologies: 'Next.Js, TypeScript, Tailwind, Firebase',
      ref: 'https://online-chat-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772385-b1885cd7-46b1-4024-bd20-eacd1a467be3.svg',
      name: 'Super Mario',
      technologies: 'Kaboom.js',
      ref: 'https://rafaelrrhocha.github.io/Projetos/superMario/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772405-0c4b68e5-6a0f-49e8-8309-37be6a4845d2.png',
      name: 'Bomberman',
      technologies: 'Kaboom.js',
      ref: 'https://rafaelrrhocha.github.io/Projetos/bomberman/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772399-62f96376-a998-44b2-8928-4afad18dedcc.png',
      name: 'Zelda 1986',
      technologies: 'Kaboom.js',
      ref: 'https://rafaelrrhocha.github.io/Projetos/zelda-1986/'
    },
  ])
}