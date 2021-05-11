import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMailBulk,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import styles from "./style.module.css";
import PageHeader from "./pageHeader";

const handleUrl = url => {
  return () => window.open(url, "_blank");
};
const Contact = () => {
  return (
    <>
      <div className={styles.contact} id="contact">
        <PageHeader title={"Contact Me"} />
        <div className={styles.contactIcons}>
          <FaWhatsapp
            size="50px"
            style={{ padding: "1%" }}
            onClick={handleUrl("https://wa.me/+918264163783")}
          />
          <FaYoutube
            color="black"
            size="60px"
            style={{ padding: "0.7%" }}
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
            color="black"
            size="50px"
            style={{ padding: "1%" }}
            onClick={handleUrl("https://www.facebook.com/chipui.kasar.3")}
          />
          <FaMailBulk
            size="50px"
            style={{ padding: "1%" }}
            onClick={handleUrl(
              "mailto:chipuikasar@gmail.com?subject=I want a service"
            )}
          />
        </div>
        All Rights Reserved. ©️ 2021
      </div>
    </>
  );
};

export default Contact;
