import cn from "classnames";

import styles from "./MindMapItem.module.scss";
import { IMapProps } from "../../types";
import Arrow from "../../assets/images/icons/Arrow";

const MindMapItem: React.FC<IMapProps> = ({ title, text, link }) => {
  return link ? (
    <a
      href={link}
      rel="noopener noreferrer nofollow"
      target="_blank"
      className={cn(styles.map__content)}
    >
      <Arrow className={styles.map__icon} />
      <h3
        className={styles.map__title}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
    </a>
  ) : (
    <div className={styles.map__content}>
      <p className={styles.map__text}>{text}</p>
      <h3 className={styles.map__title}>{title}</h3>
    </div>
  );
};

export default MindMapItem;
