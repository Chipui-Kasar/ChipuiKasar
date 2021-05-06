import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./style.module.css";

const handleUrl = url => {
  return () => window.open(url, "_blank");
};
const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.contactIcons}>
        <FaYoutube
          color="white"
          size="60px"
          style={{ padding: "1%" }}
          onClick={handleUrl("https://www.youtube.com/c/chipuikasar")}
        />
        <FaInstagram
          color="dark red"
          size="50px"
          style={{ padding: "1%" }}
          onClick={handleUrl("https://www.instagram.com/chipui_ks")}
        />
        <FaGithub
          color="black"
          size="50px"
          style={{ padding: "1%" }}
          onClick={handleUrl("https://github.com/Chipui-Kasar")}
        />
        <FaFacebook
          color="blue"
          size="50px"
          style={{ padding: "1%" }}
          onClick={handleUrl("https://www.facebook.com/chipui.kasar.3")}
        />
      </div>
    </div>
  );
};

export default Contact;
