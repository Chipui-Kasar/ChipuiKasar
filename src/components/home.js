import styles from "./style.module.css";
import thinking from "../images/thinking.svg";

const Home = () => {
  return (
    <div className={styles.home} id="home">
      <div className={styles.homeContainer}>
        <h1 className={styles.homeHello}>Hello</h1>
        <p>Welcome to my Personal Website</p>
      </div>
      <img className={styles.homeImg} src={thinking} alt="HomePic" />
    </div>
  );
};

export default Home;
