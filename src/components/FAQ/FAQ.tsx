import FAQItem from "../FAQItem";
import styles from "./FAQ.module.scss";

const FAQ: React.FC = () => {
  return (
    <section className={styles.faq}>
      <h2 className={styles.faq__title}>FAQ</h2>

      <ul className={styles.faq__list}>
        <li>
          <FAQItem />
        </li>
      </ul>
    </section>
  );
};

export default FAQ;