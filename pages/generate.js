import Link from "next/link";
import styles from 'components/UI.module.css'

export default function GeneratePage() {
    return <div className="container">
      <Link href="/"><span><img className={styles.moduleButton} src="back.svg" /> Back</span></Link> 
      <h1>Generate</h1>
      <form action="/send-data-here" method="post">
      <div>
      <label for="prompt">Image Prompt:</label>
      </div>  
      <div>
      <input type="text" id="prompt" required name="prompt" />
      </div>
      <div>
      <button className={styles.formButton} type="submit">Submit</button>
      </div>
      </form>
    </div>
  }