import styles from "./style.module.css";
import PageHeader from "./pageHeader";
import myPic from "../images/myPic.jpg";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className={styles.about} id="about">
        <PageHeader title={"About Me"} />
        <div className={styles.aboutContainer}>
          <div className={styles.aboutText}>
            <h2>Hello! I'm Chipui Kasar</h2>
            <p>
              I'm from North-East India and I'm a ReactJs Developer{" "}
              <FaLaptopCode color="grey" />, I love New things & I really enjoy
              working on cutting-edge projects and developing new technologies.
              I also enjoy being surrounded by brilliant people that share the
              vision of “technology for good” and I’m truly humbled by their
              support.
            </p>
            <p>
              I'm quite different from what you think. I hurt people, so don't
              get too close. You'll end up getting hurt Yourself.
            </p>

            <p>
              "For Every Action There is an Equal and Opposite Reaction"
              <br />
              "As You Sow, So Shall You Reap"
            </p>
            <p>
              I have a Crush and she is one in a million. Wanna know her? If you
              happen to know her please don't tell her about this. Thank You
              <br />
              <div>
                Click{" "}
                <a
                  href="https://www.instagram.com/_laedoo__/"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{" "}
                to see her pics
              </div>
            </p>
          </div>
          <div className={styles.aboutPhoto}>
            <img className={styles.myPhoto} src={myPic} alt="MyPhoto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
