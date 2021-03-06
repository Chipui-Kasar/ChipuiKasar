import styles from "./style.module.css";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <nav>
        <ul>
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#about">About Me</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#contact ">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
