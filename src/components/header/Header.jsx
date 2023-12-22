import styles from "./header.module.css";

function Header() {
  return (
    <>
    <div className={styles.header_container}>
    <p>
        Notifications <span className={styles.span}>3</span>
      </p>
      <button className={styles.button}>Mark all as read</button>
    </div>

    </>
  );
}

export default Header;
