import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Settings from '@components/Settings'
import Generate from '@components/Generate'
import Favorites from '@components/Favorites'
import Location from '@components/Location'
import styles from 'components/UI.module.css'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Arteee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        { /* <<Header title="Welcome to my DSA157 app!" /> */ }
        <p className="description">
          Welcome to Arteee        
        </p>
        <div>
          <img src="arteee-logo.png" className={styles.arteeeLogo} />
        </div>
        <div>
        <Generate />
        <Location />
        <Favorites />
        <Settings />
        </div>
      </main>

      <Footer />
    </div>
  )
}
