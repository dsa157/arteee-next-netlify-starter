import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Settings from '@components/Settings'
import Generate from '@components/Generate'
import Favorites from '@components/Favorites'
import Location from '@components/Location'
import LoginForm from '@components/LoginForm'
import styles from 'components/UI.module.css'
import Link from 'next/link';


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
          <img src="arteee-logo.jpg" className={styles.arteeeLogo} />
        </div>
        <div>

        <h1 className="title">
          Read <Link href="/settings">settings!</Link>
        </h1>
        <Generate />
        <Location />
        <Favorites />
        <Link href="/settings"><Settings /></Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
