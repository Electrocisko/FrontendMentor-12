import styles from './message.module.css'

function message({message}) {
  return (
        <p className={styles.message}>{message}</p>
  )
}

export default message