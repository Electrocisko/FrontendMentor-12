import PropTypes from 'prop-types';
import styles from "./post.module.css";
import Message from '../message/message';



function Post({data}) {
  return (
    <>
      <div className={styles.container}>
        <img src={data.image} alt=""  className={styles.avatar}/>
        <div className={styles.text_container}>
          <p>
            <span className={styles.name}>{data.name}</span>{data.info}<span className={styles.text_post}>{data.post && data.post}</span>
            <span >{!data.readed && <img className={styles.circle} src="./images/circle.svg" alt="" /> }</span>
          </p>
          <p className={styles.time}>{data.time}</p>
          <Message/>
        </div>
      </div>
    </>
  );
}

Post.propTypes = {
  data: PropTypes.object
}

export default Post;
