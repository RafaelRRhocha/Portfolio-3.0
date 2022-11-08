// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function myskills(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    {
      name: 'Git',
      image: 'https://user-images.githubusercontent.com/99758843/178770610-65f7917f-0482-4d0d-9d0a-17b343e29ebc.svg',
      ref: 'https://git-scm.com/'
    },
    {
      name: 'GitHub',
      image: 'https://user-images.githubusercontent.com/99758843/184500877-1d2935b3-91d2-4fc5-baee-cdf9bbf7703b.svg',
      ref: 'https://github.com/'
    },
    {
      name: 'Html',
      image: 'https://user-images.githubusercontent.com/99758843/178770615-f16772a0-20ab-49bd-9518-3c0b54fa06e3.svg',
      ref: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
    },
    {
      name: 'Css',
      image: 'https://user-images.githubusercontent.com/99758843/178770604-a7f60871-e37c-4f76-ac15-40b635f295b7.svg',
      ref: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
    },
    {
      name: 'JavaScript',
      image: 'https://user-images.githubusercontent.com/99758843/178770617-aa9288f6-619d-449d-b6ac-afa89761edf1.svg',
      ref: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
    },
    {
      name: 'TypeScript',
      image: 'https://user-images.githubusercontent.com/99758843/178770630-a6f6c0bc-a718-4cde-b794-46735acd9af7.svg',
      ref: 'https://www.typescriptlang.org/'
    },
    {
      name: 'Tailwind',
      image: 'https://user-images.githubusercontent.com/99758843/178770625-43ca658e-63b3-477d-831a-43c8b7ab5d4d.svg',
      ref: 'https://tailwindcss.com/docs/installation'
    },
    {
      name: 'Styled Components',
      image: 'https://user-images.githubusercontent.com/99758843/184499853-66bc9640-f5fc-42cc-a3b8-73384c4d9471.svg',
      ref: 'https://styled-components.com/'
    },
    {
      name: 'Sass',
      image: 'https://user-images.githubusercontent.com/99758843/184500163-28347fbe-5938-4f7c-9bf2-b712074c7dd5.svg',
      ref: 'https://sass-lang.com/'
    },
    {
      name: 'Bootstrap',
      image: 'https://user-images.githubusercontent.com/99758843/184500119-50905e52-daf5-41cc-b13d-43aaa2822292.svg',
      ref: 'https://getbootstrap.com/'
    },
    {
      name: 'Jest',
      image: 'https://user-images.githubusercontent.com/99758843/178770619-48843414-5e90-4405-b81b-2ec96a4d8827.svg',
      ref: 'https://jestjs.io/pt-BR/docs/getting-started'
    },
    {
      name: 'RTL',
      image: 'https://user-images.githubusercontent.com/99758843/178770624-d723b893-4f6a-41c8-bdee-99ce79946626.png',
      ref: 'https://testing-library.com/docs/react-testing-library/intro/'
    },
    {
      name: 'React',
      image: 'https://user-images.githubusercontent.com/99758843/178770622-34ccb59e-527e-4c2d-9e22-2c29946cf3eb.svg',
      ref: 'https://pt-br.reactjs.org/docs/getting-started.html'
    },
    {
      name: 'Next.js',
      image: 'https://user-images.githubusercontent.com/99758843/184502135-2c372c7d-97ca-4e19-97e1-f0a1f52eaa60.png',
      ref: 'https://nextjs.org/'
    },
    {
      name: 'Redux',
      image: 'https://user-images.githubusercontent.com/99758843/178771208-02115902-024f-4156-bd96-f8eadeadd453.svg',
      ref: 'https://redux.js.org/'
    },
    {
      name: 'Vue.js',
      image: 'https://img.icons8.com/color/512/vue-js.png',
      ref: 'https://vuejs.org'
    }
  ])
}