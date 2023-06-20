import Link from "next/link";
import styles from 'components/UI.module.css'

export default function CommunityFavoritesPage() {
    return <div className="container">
      <Link href="/"><span><img className={styles.moduleButton} src="back.svg" /> Back</span></Link> 
      <h1>Favorites</h1>
      <ul>
        <li>community fav1</li>
        <li>community fav2</li>
        <li>community fav3</li>
        <li>community fav4</li>
        <li>community fav5</li>
      </ul>
    </div>
  }