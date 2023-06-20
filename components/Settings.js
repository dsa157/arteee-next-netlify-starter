import styles from './UI.module.css'
import SettingsPage from '@pages/settings'

export default function Settings({}) {
  return <button onClick={SettingsPage} type="button">
    <img src="/settings.svg" alt="Settings" className={styles.moduleButton} />
  </button>
}
