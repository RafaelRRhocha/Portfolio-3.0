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
        <meta name='description' content='Olá! Bem vindos ao meu Portfólio!' />
        <title>Rafael Rocha Souza</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
