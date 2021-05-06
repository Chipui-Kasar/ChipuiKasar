import styles from "./style.module.css";
import PageHeader from "./pageHeader";
import myPic from "../images/myPic.jpg";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <PageHeader title={"About Me"} />
      <div className={styles.aboutContainer}>
        <div className={styles.aboutText}>
          <h2>Hello! I'm Chipui Kasar</h2>
          <p>
            I'm a ReactJs Developer based in India React is a JavaScript library
            developed by Facebook that has revolutionized the way we think about
            apps. Borrowing ideas from declarative, reactive, and functional
            programming, it makes developing highly interactive user interfaces
            a breeze.
          </p>
        </div>
        <div className={styles.aboutPhoto}>
          <img className={styles.myPhoto} src={myPic} alt="MyPhoto" />
        </div>
      </div>
    </div>
  );
};

export default About;
