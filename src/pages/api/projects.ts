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
      ref: 'https://rafaelrocha-portfolio.vercel.app'
    },
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
      stacks: 'React, Context API, Tailwind e RTL para testes unitários',
      ref: 'https://recipes-app-rafaelrrhocha.vercel.app/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/180787757-108c0f58-e8e4-484d-a495-76b4864b2c57.png',
      name: 'Carteira de Gastos',
      stacks: 'React, Redux, Sass e RTL para testes unitários',
      ref: 'https://carteira-de-gastos-rafaelrrhocha.vercel.app'
    },
  ])
}
