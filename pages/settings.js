import Link from "next/link";
import styles from 'components/UI.module.css'

export default function SettingsPage() {
  return <div className="container">
      <Link href="/"><span><img className={styles.moduleButton} src="back.svg" /> Back</span></Link> 
      <h1>Settings</h1>
      <form action="/send-data-here" method="post">
      <div>
      <label for="displayTime">Image Display Time:</label>
      </div>  
      <div>
      <input type="text" id="displayTime" type="number" required name="displayTime" />
      </div>
      <div>
      <label for="mode">Mode:</label>
      </div>
      <div>
      <select type="text" id="mode" name="mode">
        <option defaultChecked>Generate from prompt</option>
        <option>Generate from location</option>
        <option>My Favorites</option>
        <option>Community Favorites</option>
        <option>Custom1</option>
        <option>Custom2</option>
        <option>Custom3</option>
      </select>
      </div>
      <div>
      <button className={styles.formButton} type="submit">Submit</button>
      </div>
      </form>
    </div>
}