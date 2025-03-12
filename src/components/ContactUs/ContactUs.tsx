import Cross from "../../assets/images/icons/Сross";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./ContactUs.module.scss";

const ContactUs: React.FC = () => {
  return (
    <section className={styles.contact} id="mint">
      <h2 className={styles.contact_title}>Are you in?</h2>

      <div className={styles.contact__text_container}>
        <Cross className={styles.contact__icon} />
        <p className={styles.contact__text}>
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </p>
      </div>
      <ContactForm />
    </section>
  );
};
export default ContactUs;
