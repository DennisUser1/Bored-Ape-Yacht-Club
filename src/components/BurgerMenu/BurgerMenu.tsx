import { IBurgerMenuProps } from "../../types/IBurgerMenuProps";
import cn from "classnames";
import styles from "./BurgerMenu.module.scss";
import { Link } from "react-scroll";

const BurgerMenu: Raect.FC<IBurgerMenuProps> = ({ isOpen, onClick }) => {
  const menu = ["mint", "arts", "faq", "m-map", "about"];

  return (
    <div className={cn(styles.container, { [styles.open]: isOpen })}>
      <div className={cn(styles.content)}>
        <div className={styles.menu}>
          <a
            href="./"
            className={styles.logo}
            aria-label="Logo, link to the main page"
            onClick={onClick}
          ></a>
          <button
            type="button"
            aria-label="Close the mobile menu"
            className={styles.menu__btn}
            onClick={onClick}
          ></button>
        </div>
      </div>
    </div>
  );
};
