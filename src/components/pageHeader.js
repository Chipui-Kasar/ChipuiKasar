import styles from "./style.module.css";
const PageHeader = props => {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.pageHeaderContainer}>
        <hr />
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
