import styles from "./Footer.module.scss";
import imageApe from "../../assets/images/footer1.png";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__image}>
        <img src={imageApe} alt="Ape" />
      </div>
      <p className={styles.copyright}>&copy; Yacht ape 2025 all rights</p>{" "}
      <p className={styles.copyright}>reserved</p>
    </footer>
  );
};

export default Footer;
