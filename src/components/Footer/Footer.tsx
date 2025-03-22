import styles from "./Footer.module.scss";
import imageApe1 from "../../assets/images/footer1.png";
import imageApe2 from "../../assets/images/footer4.png";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__image}>
        <img src={imageApe1} alt="Ape 1" />
      </div>
      <div className={styles.footer__image_right}>
        <img src={imageApe2} alt="Ape 2" />
      </div>
      <p className={styles.copyright}>&copy; Yacht ape 2025 all rights</p>{" "}
      <p className={styles.copyright}>reserved</p>
    </footer>
  );
};

export default Footer;
