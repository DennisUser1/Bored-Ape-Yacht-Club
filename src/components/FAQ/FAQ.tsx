import { useState } from "react";
import FAQItem from "../FAQItem";
import styles from "./FAQ.module.scss";
import FAQData from "./FAQData";

const FAQ: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(1);

  const handleClick = (id: number) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.faq} id="faq">
      <h2 className={styles.faq__title}>FAQ</h2>

      <ul className={styles.faq__list}>
        {FAQData.map(({ id, title, description, image }) => (
          <li key={id} onClick={() => handleClick(id)}>
            <FAQItem
              active={selectedCard === id}
              id={id}
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
