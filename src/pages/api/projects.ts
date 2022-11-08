// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    {
      image: 'https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/344/external-quiz-online-learning-vitaliy-gorbachev-blue-vitaly-gorbachev.png',
      name: 'Quiz Conhecimentos Gerais',
      stacks: 'Next.Js, TypeScript, Tailwind',
      ref: 'https://quiz-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://img.icons8.com/color/344/netflix-desktop-app--v1.png',
      name: 'Clone Netflix',
      stacks: 'React, Tailwind',
      ref: 'https://clone-netflix-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-recipes-foodies-flaticons-lineal-color-flat-icons-3.png',
      name: 'App de Receitas',
      stacks: 'React, Context API, Tailwind, and React Testing Library for Unitary Tests',
      ref: 'https://recipes-app-rafaelrrhocha.vercel.app/'
    },
    {
      image: 'https://img.icons8.com/external-flaticons-flat-circular-flat-icons/344/external-clients-media-agency-flaticons-flat-circular-flat-icons.png',
      name: 'Registro de Usuários (CRUD)',
      stacks: 'Next.Js, TypeScript, Tailwind, Firebase',
      ref: 'https://register-app-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://img.icons8.com/clouds/344/smartphone-chat-male.png',
      name: 'Chat Online',
      stacks: 'Next.Js, TypeScript, Tailwind, Firebase',
      ref: 'https://online-chat-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/180787757-108c0f58-e8e4-484d-a495-76b4864b2c57.png',
      name: 'Carteira de Gastos',
      stacks: 'React, Redux, Sass, and React Testing Library for Unitary Tests',
      ref: 'https://carteira-de-gastos-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772402-3a6be876-cc90-4e89-b60e-0bdb70401b30.svg',
      name: 'Lista de Tarefas',
      stacks: 'Html, Css, Js',
      ref: 'https://rafaelrrhocha.github.io/Projetos/03-listaDeTarefas/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772380-b06f5cdf-f36c-48c1-9995-e49d6dbdc87b.svg',
      name: 'Adivinhe a Cor',
      stacks: 'Html, Css, Js, Bootstrap',
      ref: 'https://rafaelrrhocha.github.io/Projetos/04-ColorGuess/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772398-be9e0edf-0239-414d-9dba-8d87a2fb11a9.svg',
      name: 'TechWarts',
      stacks: 'Html, Css, Js, Bootstrap',
      ref: 'https://rafaelrrhocha.github.io/Projetos/05-Trybewarts/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772409-140ee5fa-2f94-4421-95ee-d8c3994bd5be.svg',
      name: 'Carrinho de Compras',
      stacks: 'Html, Css, Js and Jest for Unitary Tests',
      ref: 'https://rafaelrrhocha.github.io/Projetos/shoppingCart/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772388-c24eabdc-f97a-4723-8631-ad7ddfa1a264.svg',
      name: 'SpotSongs',
      stacks: 'React, Tailwind and Jest for Unitary Tests',
      ref: 'https://preview-songs-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/180788642-925e62b1-d9a6-4a18-b6df-493e0870e13a.png',
      name: 'Jogo de Trivia',
      stacks: 'React, Redux, Tailwind, and React Testing Library for Unitary Tests',
      ref: 'https://trivia-rafaelrrhocha.vercel.app'
    },
  ])
}
