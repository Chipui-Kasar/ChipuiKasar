import styles from "./style.module.css";
import PageHeader from "./pageHeader";
import developer from "../images/developer.svg";

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
        React. ... js Developers design and implement user interface components
        for JavaScript-based web and mobile applications using the React
        open-source library ecosystem. These skilled front-end developers are
        involved in all stages of interface component design, from conception
        through to final testing.
      </p>
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
