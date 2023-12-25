import PropTypes from "prop-types";
import styles from "./post.module.css";
import Message from "../message/message";

function Post({ data }) {

  let classContainer;
  data.readed ? classContainer=styles.container : classContainer=styles.container_blue;

  return (
    <>
      <div className={classContainer}>
        <img src={data.image} alt="" className={styles.avatar} />
        <div className={styles.text_container}>
          <div>
            <p>
              <span className={styles.name}>{data.name}</span>
              {data.info}
              <span className={styles.text_post}>{data.post && data.post}</span>
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
            {data.message && <Message message={data.message} />}
          </div>
          {data.picture && <img className={styles.picture_post} src={data.picture} alt="image" />}
        </div>
      </div>
    </>
  );
}

Post.propTypes = {
  data: PropTypes.object,
};

export default Post;
