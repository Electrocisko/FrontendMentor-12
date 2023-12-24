import styles from "./header.module.css";
import PropTypes from "prop-types";


function Header({handler}) {

  return (
    <>
    <div className={styles.header_container}>
    <p className={styles.notifications}>
        Notifications <span className={styles.span}>3</span>
      </p>
      <button onClick={handler} className={styles.button}>Mark all as read</button>
    </div>

    </>
  );
}

Header.propTypes = {
  handler: PropTypes.func,
};

export default Header;
