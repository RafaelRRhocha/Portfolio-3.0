// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function myskills(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    // front end
    {
      name: 'Html',
      image:
        'https://user-images.githubusercontent.com/99758843/178770615-f16772a0-20ab-49bd-9518-3c0b54fa06e3.svg',
      ref: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    },
    {
      name: 'Css',
      image:
        'https://user-images.githubusercontent.com/99758843/178770604-a7f60871-e37c-4f76-ac15-40b635f295b7.svg',
      ref: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    },
    {
      name: 'TypeScript',
      image:
        'https://user-images.githubusercontent.com/99758843/178770630-a6f6c0bc-a718-4cde-b794-46735acd9af7.svg',
      ref: 'https://www.typescriptlang.org/',
    },
    {
      name: 'Vue.js',
      image: 'https://img.icons8.com/color/512/vue-js.png',
      ref: 'https://vuejs.org',
    },
    {
      name: 'Quasar',
      image: 'https://cdn.quasar.dev/logo/svg/quasar-logo.svg',
      ref: 'https://quasar.dev/',
    },
    {
      name: 'React',
      image:
        'https://user-images.githubusercontent.com/99758843/178770622-34ccb59e-527e-4c2d-9e22-2c29946cf3eb.svg',
      ref: 'https://pt-br.reactjs.org/docs/getting-started.html',
    },
    {
      name: 'Next.js',
      image:
        'https://user-images.githubusercontent.com/99758843/184502135-2c372c7d-97ca-4e19-97e1-f0a1f52eaa60.png',
      ref: 'https://nextjs.org/',
    },
    {
      name: 'Redux',
      image:
        'https://user-images.githubusercontent.com/99758843/178771208-02115902-024f-4156-bd96-f8eadeadd453.svg',
      ref: 'https://redux.js.org/',
    },
    {
      name: 'Sass',
      image:
        'https://user-images.githubusercontent.com/99758843/184500163-28347fbe-5938-4f7c-9bf2-b712074c7dd5.svg',
      ref: 'https://sass-lang.com/',
    },
    {
      name: 'Tailwind',
      image:
        'https://user-images.githubusercontent.com/99758843/178770625-43ca658e-63b3-477d-831a-43c8b7ab5d4d.svg',
      ref: 'https://tailwindcss.com/docs/installation',
    },

    // backend
    {
      name: 'Node.js',
      image:
        'https://github.com/URafaelRocha/URafaelRocha/assets/123375924/b099ed1a-74a3-4252-8b0b-aae45141bc13',
      ref: 'https://nodejs.org/en',
    },
    {
      name: 'Express.js',
      image:
        'https://github.com/URafaelRocha/URafaelRocha/assets/123375924/46f2e9c0-2a2b-42fb-a5f5-8075e746e42a',
      ref: 'https://expressjs.com/pt-br/',
    },
    {
      name: 'Nest.js',
      image:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg',
      ref: 'https://nestjs.com',
    },
    {
      name: 'Sails.js',
      image:
        'https://github.com/URafaelRocha/URafaelRocha/assets/123375924/146f15a8-1135-4683-a016-4bc24c007dd2',
      ref: 'https://sailsjs.com',
    },
    {
      name: 'Ruby',
      image:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg',
      ref: 'https://www.ruby-lang.org/en/',
    },
    {
      name: 'Ruby on Rails',
      image:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg',
      ref: 'https://rubyonrails.org',
    },
    {
      name: 'Python',
      image:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      ref: 'https://www.python.org',
    },
    {
      name: 'Docker',
      image:
        'https://github.com/URafaelRocha/URafaelRocha/assets/123375924/0a1c460b-0795-455a-884c-a2a772ea232c',
      ref: 'https://www.docker.com/',
    },

    // Banco de Dados
    {
      name: 'MySQL',
      image:
        'https://github.com/URafaelRocha/URafaelRocha/assets/123375924/b3e2960f-9f1c-4ca9-923c-286a41a5b564',
      ref: 'https://www.mysql.com/',
    },
    {
      name: 'PostgreSQL',
      image:
        'https://github.com/URafaelRocha/URafaelRocha/assets/123375924/a1de400a-439c-4d10-b667-c48240f2c4b2',
      ref: 'https://www.postgresql.org',
    },
    {
      name: 'AWS',
      image:
        'https://github.com/URafaelRocha/URafaelRocha/assets/123375924/a311b73e-14c3-4c8f-b3c5-5b233279283f',
      ref: 'https://aws.amazon.com',
    },
    {
      name: 'Google Cloud',
      image:
        'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
      ref: 'https://cloud.google.com',
    },
    {
      name: 'Redis',
      image:
        'https://github.com/URafaelRocha/URafaelRocha/assets/123375924/2187e9da-fbb2-440a-8a7b-364a84fea934',
      ref: 'https://redis.io',
    },

    // Testes
    {
      name: 'Cypress',
      image:
        'https://github.com/URafaelRocha/URafaelRocha/assets/123375924/6e1efb44-6ed2-4681-8d53-1fed794d14ba',
      ref: 'https://www.cypress.io',
    },
    {
      name: 'Jest',
      image: 'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg',
      ref: 'https://jestjs.io',
    },
    {
      name: 'Mocha',
      image: 'https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg',
      ref: 'https://mochajs.org',
    },
  ]);
}
