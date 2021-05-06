import styles from "./style.module.css";
import thinking from "../images/thinking.svg";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <h1 className={styles.homeHello}> Hello</h1>
        <p>Welcome to my Personal Website</p>
      </div>
      <img className={styles.homeImg} src={thinking} />
    </div>
  );
};

export default Home;
