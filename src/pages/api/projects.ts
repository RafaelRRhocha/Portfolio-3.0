// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    {
      image: 'https://img.icons8.com/office/512/planet.png',
      name: 'Portfólio Antigo',
      stacks: 'Next.Js, TypeScript, Tailwind',
      ref: 'https://rafaelrocha-portfolio.vercel.app',
      projectImage: 'https://user-images.githubusercontent.com/99758843/200904079-14cf6a0f-2efc-433f-881a-33693972c1dd.jpg',
    },
    {
      image: 'https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/344/external-quiz-online-learning-vitaliy-gorbachev-blue-vitaly-gorbachev.png',
      name: 'Quiz Conhecimentos Gerais',
      stacks: 'Next.Js, TypeScript, Tailwind',
      ref: 'https://quiz-rafaelrrhocha.vercel.app',
      projectImage: 'https://user-images.githubusercontent.com/99758843/200903639-fd7a9099-a71f-45dc-8df3-c2765af055da.jpg',
    },
    {
      image: 'https://img.icons8.com/color/344/netflix-desktop-app--v1.png',
      name: 'Clone Netflix',
      stacks: 'React, Tailwind',
      ref: 'https://clone-netflix-rafaelrrhocha.vercel.app',
      projectImage: 'https://user-images.githubusercontent.com/99758843/200904484-ec63be0f-5359-4da4-92d5-3d44ed27f4a6.jpeg',
    },
    {
      image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-recipes-foodies-flaticons-lineal-color-flat-icons-3.png',
      name: 'App de Receitas',
      stacks: 'React, Context API, Tailwind e RTL para testes unitários',
      ref: 'https://recipes-app-rafaelrrhocha.vercel.app/',
      projectImage: 'https://user-images.githubusercontent.com/99758843/200903188-459b7e9d-213c-4180-8446-bda860b6e4ea.jpg',
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/180787757-108c0f58-e8e4-484d-a495-76b4864b2c57.png',
      name: 'Carteira de Gastos',
      stacks: 'React, Redux, Sass e RTL para testes unitários',
      ref: 'https://carteira-de-gastos-rafaelrrhocha.vercel.app',
      projectImage: 'https://user-images.githubusercontent.com/99758843/200902939-247eede0-e742-4caa-8f4a-6dafbeec22d8.jpg',
    },
  ])
}
