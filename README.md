### Hi there! 👋

## What is inside?
- [Next](https://nextjs.org/docs)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind Css](https://tailwindcss.com/docs/installation)
- [Daisy UI](https://daisyui.com)
- [Eslint](https://eslint.org)
- [Docker] (https://www.docker.com)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Getting Started

```bash
git clone git@github.com:RafaelRRhocha/Onesight.git
```

```bash
cd Onesight
```

### Install dependencies:

#### With Docker:

```bash
docker build -t <image-name> .
```

```bash
docker container run --name <container-name> -p 3001:3000 <image-name>
```

#### Without Docker:

```bash
yarn run dev
```

or 

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

```
├── components
├── pages
├── styles
```

| Folder         | Description                                          |
| ----------     | -------------------------------------------          |
| **components** | Folder with application components                   |
| **pages**      | Pages Routes                                         |
| **styles**     | Application styles                                   |

## Commands

- `dev`: run development server
- `build`: creates the production build version
- `lint`: runs the linter in all components and pages