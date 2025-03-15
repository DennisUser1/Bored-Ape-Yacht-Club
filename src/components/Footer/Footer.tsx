import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy; Yacht ape 2024 all rights</p>{" "}
      <p className={styles.copyright}>reserved</p>
    </footer>
  );
};

export default Footer;
