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
      description: 'Pokedex made by consuming pokeapi, this pokedex list of kantos 151 pokemon',
      technologies: 'Html, Css, Js',
      ref: 'https://rafaelrrhocha.github.io/Projetos/Pokedex/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772393-562c6fb6-c582-4c40-bc6f-bd8c6013fa03.svg',
      name: 'Pixel Board',
      description: 'This project is a dynamic board to draw pixel arts',
      technologies: 'Html, Css, Js',
      ref: 'https://rafaelrrhocha.github.io/Projetos/02-PixelArt/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772402-3a6be876-cc90-4e89-b60e-0bdb70401b30.svg',
      name: 'To-Do List',
      description: 'This project is summarized in a simple task list where the user can create a task, edit and remove the task',
      technologies: 'Html, Css, Js',
      ref: 'https://rafaelrrhocha.github.io/Projetos/03-listaDeTarefas/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772380-b06f5cdf-f36c-48c1-9995-e49d6dbdc87b.svg',
      name: 'Color Guess',
      description: `Project that simulates a game of colors, in which the aim is to
        hit the color in the corresponding frame to the RGB name`,
      technologies: 'Html, Css, Js, Bootstrap',
      ref: 'https://rafaelrrhocha.github.io/Projetos/04-ColorGuess/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772398-be9e0edf-0239-414d-9dba-8d87a2fb11a9.svg',
      name: 'TechWarts',
      description: `A simple form where the user enters his data and sends it to the database`,
      technologies: 'Html, Css, Js, Bootstrap',
      ref: 'https://rafaelrrhocha.github.io/Projetos/05-Trybewarts/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772409-140ee5fa-2f94-4421-95ee-d8c3994bd5be.svg',
      name: 'Shopping Cart',
      description: `This project is a shopping cart where the user selects items from the API and finalizes the purchase`,
      technologies: 'Html, Css, Js and Jest for Unitary Tests',
      ref: 'https://rafaelrrhocha.github.io/Projetos/shoppingCart/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772407-6d19772c-a353-4015-b359-26109fb4523c.svg',
      name: 'Card Generator',
      description: `A project that the user can define name, description, properties,
        image and set as a favorite, all with a preview of what he is
        doing, after which it can be added and filtered`,
      technologies: 'React, Sass and Jest for Unitary Tests',
      ref: 'https://card-generator-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772388-c24eabdc-f97a-4723-8631-ad7ddfa1a264.svg',
      name: 'Preview Songs',
      description: `A project that the user can enter in the application, interact
        between routes, listen to previews of songs by their favorite
        artists and listen at will, favorite the songs and edit the profile`,
      technologies: 'React, Tailwind and Jest for Unitary Tests',
      ref: 'https://preview-songs-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772411-339f49d0-9ae7-4618-bcc4-4d9834b7dce8.svg',
      name: 'Online Store',
      description: `An online store where the user can interact, select the product,
        see which ones have free shipping, select by category and search
        for products, as well as view details, cart and checkout`,
      technologies: 'React, Tailwind and Jest for Unitary Tests',
      ref: 'https://online-store-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/180787757-108c0f58-e8e4-484d-a495-76b4864b2c57.png',
      name: 'Portfolio of Expenses',
      description: `A spreadsheet of expenses so you can create columns for the month,
        description of the expense or income, in short, its a CRUD-based application`,
      technologies: 'React, Redux, Sass, and React Testing Library for Unitary Tests',
      ref: 'https://carteira-de-gastos-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/180788642-925e62b1-d9a6-4a18-b6df-493e0870e13a.png',
      name: 'Trivia Game',
      description: `Quiz trivia games: the ultimate quiz website!
        Here you will find a selection of quizzes including trivia, multiple choice!`,
      technologies: 'React, Redux, Tailwind, and React Testing Library for Unitary Tests',
      ref: 'https://trivia-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://img.icons8.com/color/288/star-wars.png',
      name: 'Star Wars Planets',
      description: `This is a list of planets.
        Where in the galaxy are the worlds of Star Wars we can filter and choose different planets`,
      technologies: 'React, Context API, Tailwind, and React Testing Library for Unitary Tests',
      ref: 'https://star-wars-planets-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://img.icons8.com/color/344/netflix-desktop-app--v1.png',
      name: 'Netflix Clone',
      description: `What is Netflix Clone? Netflix Clone is an online video entertainment
        website similar to Netflix`,
        technologies: 'React, Tailwind',
      ref: 'https://clone-netflix-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/344/external-notepad-shopping-and-commerce-smashingstocks-outline-color-smashing-stocks.png',
      name: 'NotePad',
      description: `A simple notepad :)`,
      technologies: 'Next.js, TypeScript, Tailwind',
      ref: 'https://bloco-de-notas-rafaelrrhocha.vercel.app'
    },
    {
      image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-recipes-foodies-flaticons-lineal-color-flat-icons-3.png',
      name: 'Recipe Website/App',
      description: `This is a recipe app, where the user can browse different recipes,
        favorite, finish, edit the profile and much more!!`,
      technologies: 'React, Context API, Tailwind, and React Testing Library for Unitary Tests',
      ref: 'https://recipes-app-rafaelrrhocha.vercel.app/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772385-b1885cd7-46b1-4024-bd20-eacd1a467be3.svg',
      name: 'Super Mario',
      description: `A little retelling of the first mario game made with kaboom.js`,
      technologies: 'Kaboom.js',
      ref: 'https://rafaelrrhocha.github.io/Projetos/superMario/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772405-0c4b68e5-6a0f-49e8-8309-37be6a4845d2.png',
      name: 'Bomberman',
      description: `A little retelling of one of the Bomberman franchise games made with kaboom.js.`,
      technologies: 'Kaboom.js',
      ref: 'https://rafaelrrhocha.github.io/Projetos/bomberman/'
    },
    {
      image: 'https://user-images.githubusercontent.com/99758843/178772399-62f96376-a998-44b2-8928-4afad18dedcc.png',
      name: 'Zelda 1986',
      description: `Game based minigame 1986 Zelda, Made with kaboom.js`,
      technologies: 'Kaboom.js',
      ref: 'https://rafaelrrhocha.github.io/Projetos/zelda-1986/'
    },
  ])
}
