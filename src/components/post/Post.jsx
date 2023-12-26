import PropTypes from "prop-types";
import styles from "./post.module.css";
import Message from "../message/message";

function Post({ data }) {
  let classContainer;
  data.readed
    ? (classContainer = styles.container)
    : (classContainer = styles.container_blue);

  return (
    <>
      <div className={classContainer}>
        <img src={data.image} alt="" className={styles.avatar} />
        <div className={styles.text_container}>
          <div>
            <p>
              <a
                href="#"
                className={styles.name}
              >
                {data.name}
              </a>
              {data.info} {data.group && <a className={styles.group} href="#">{data.group}</a>}
              <a  href="#" className={styles.text_post}>{data.post}</a>
              <span>
                {!data.readed && (
                  <img
                    className={styles.circle}
                    src="./images/circle.svg"
                    alt=""
                  />
                )}
              </span>
            </p>
            <p className={styles.time}>{data.time}</p>
            {data.message && <a href="#" className={styles.message}> <Message message={data.message} /></a>  }
          </div>
          {data.picture && (
            <img
              className={styles.picture_post}
              src={data.picture}
              alt="image"
            />
          )}
        </div>
      </div>
    </>
  );
}

Post.propTypes = {
  data: PropTypes.object,
};

export default Post;
