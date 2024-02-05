import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the Official British Red Cross fundraising page!" />
        <p className="description">
         We accept Bitcoin and other cryptocurrencies! A link where to make donations will be published soon. Stay tuned!
        </p>
      </main>

      <Footer />
    </div>
  )
}
