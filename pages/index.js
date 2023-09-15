import Head from 'next/head';
import Main from '@/components/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>A.I. Nihonga</title>
        <meta name="description" content="An AI art gallery inspired by traditional Japanese paintings and drawings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Main />
    </div>
  )
}
