import styles from './UI.module.css'
import GeneratePage from '@pages/generate'


export default function Generate({}) {
  return <button onClick={GeneratePage} type="button">
  <img src="/microphone.svg" alt="Generate from prompt" className={styles.moduleButton} />
</button>

}
