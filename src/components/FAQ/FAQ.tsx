import { useState } from "react";
import FAQItem from "../FAQItem";
import styles from "./FAQ.module.scss";
import FAQData from "./FAQData";

const FAQ: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  return (
    <section className={styles.faq}>
      <h2 className={styles.faq__title}>FAQ</h2>

      <ul className={styles.faq__list}>
        {FAQData.map(({ id, title, description, image }) => (
          <li key={id}  onClick={() => setSelectedCard(id)}>
            <FAQItem
              id={id}
              active={selectedCard === id}
              title={title}
              description={description}
              image={image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
