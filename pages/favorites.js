import Link from "next/link";
import styles from 'components/UI.module.css'

export default function FavoritesPage() {
    return <div className="container">
      <Link href="/"><span><img className={styles.moduleButton} src="back.svg" /> Back</span></Link> 
      <h1>Favorites</h1>
      <ul>
        <li>fav1</li>
        <li>fav2</li>
        <li>fav3</li>
        <li>fav4</li>
        <li>fav5</li>
      </ul>
    </div>
  }