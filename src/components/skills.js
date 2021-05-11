import styles from "./style.module.css";
import PageHeader from "./pageHeader";
import developer from "../images/developer.svg";
import resume from "../images/Resume.png";
import { FaDownload } from "react-icons/fa";

const frontendSkills = (
  <ul>
    <li>
      HTML <br />
      60%
    </li>
    <li>
      CSS
      <br />
      50%
    </li>
    <li>
      JavaScript
      <br />
      75%
    </li>
    <li>
      Bootstrap
      <br />
      70%
    </li>
    <li>
      ReactJs
      <br />
      80%
    </li>
    <li>
      Angular 7, 8<br />
      40%
    </li>
  </ul>
);
const totalSkills = [frontendSkills];

const Skills = () => {
  return (
    <div className={styles.skills} id="skills">
      <PageHeader title={"What about My skills?"} />
      <p>
        I have done 4 months of Ui development training with Framework (Angular
        7 & 8) from InfoCampus, Marathahalli, Bangalore. <br />
        Using Angular 7 & 8 there I have created how to handle a website by the
        HR. But I really don't like Angular, so I choose ReactJS
      </p>
      <p>I really like ReactJs, I will play with it like a girlfriend</p>
      <button src={resume}>
        <FaDownload /> Resume
      </button>
      <div className={styles.skillsContainer}>
        <img className={styles.skillsImg} src={developer} alt="SkillsPic" />
        {totalSkills.map(skills => {
          return <div className={styles.skillLists}>{skills}</div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
