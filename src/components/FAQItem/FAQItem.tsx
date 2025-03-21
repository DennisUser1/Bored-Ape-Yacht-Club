import { IFAQItemProps } from "../../types/IFAQItemProps";
import styles from "./FAQItem.module.scss";
import cn from "classnames";

const FAQItem: React.FC<IFAQItemProps> = ({
  active,
  id,
  title,
  description,
  image,
}) => {
  return (
    <div className={cn(styles.card, { [styles.card__active]: active })}>
      <div className={styles.card__head}>
        <p
          className={cn(styles.card__position, {
            [styles.card__active]: active
          })}
        >
          [ {id} ]
        </p>
        <h3
          className={cn(styles.card__title, { [styles.card__active]: active })}
        >
          {title}
        </h3>
      </div>

      {active && (
        <picture>
          <source
            type="image/png"
            media="(min-width: 768px)"
            srcSet={`${image?.[0]} 1x, ${image?.[1]} 2x`}
          />
          <img
            src={`${image?.[0]}`}
            alt={title}
            width={216}
            height={292}
            className={styles.card__image}
            loading="lazy"
          />
        </picture>
      )}
      {active && <p className={styles.card__text}>{description}</p>}
    </div>
  );
};

export default FAQItem;
