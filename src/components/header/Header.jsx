import styles from "./header.module.css";
import PropTypes from "prop-types";


function Header({handler, newNotif}) {

  return (
    <>
    <div className={styles.header_container}>
    <p className={styles.notifications}>
        Notifications <span className={styles.span}>{newNotif}</span>
      </p>
      <button onClick={handler} className={styles.button}>Mark all as read</button>
    </div>

    </>
  );
}

Header.propTypes = {
  handler: PropTypes.func,
  newNotif: PropTypes.number
};

export default Header;
