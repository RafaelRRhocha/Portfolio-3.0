import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/cards.css';
import '../styles/carousel.css';
import '../styles/gadget.css';
import '../styles/globals.css';
import '../styles/main.css';
import '../styles/menu.css';
import '../styles/planet.css';
import '../styles/projects.css';
import '../styles/whatIDo.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Rafael Rocha Souza" />
        <meta property="og:description" content="Olá! Bem vindos ao meu Portfólio!" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/99758843?v=4"
        />

        <title>Rafael Rocha Souza</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
