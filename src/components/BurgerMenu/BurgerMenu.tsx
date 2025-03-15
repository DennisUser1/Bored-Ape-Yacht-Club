import { IBurgerMenuProps } from "../../types/IBurgerMenuProps";
import cn from "classnames";
import styles from "./BurgerMenu.module.scss";
import { Link } from "react-scroll";

const BurgerMenu: React.FC<IBurgerMenuProps> = ({ isOpen, onClick }) => {
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
          >
            <span>Close</span>
          </button>
        </div>

        <nav className={styles.menu__list}>
          <ul className={styles.media_links}>
            <li className={styles.media_item}>
              <a
                href="https://discord.com/"
                className={styles.media_link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Link to Discord social network"
              ></a>
            </li>
            <li className={styles.media_item}>
              <a
                href="https://opensea.io/"
                className={styles.media_link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Link to collections marketplace OpenSea"
              ></a>
            </li>
            <li className={styles.media_item}>
              <a
                href="https://twitter.com/"
                className={styles.media_link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Link to Twitter(X) social network"
              ></a>
            </li>
            <li className={styles.media_item}></li>
          </ul>

          <ul>
            {menu
              .map((id, index) => (
                <li key={index} className={styles.menu__item}>
                  <Link
                    className={styles.menu__link}
                    to={id}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={onClick}
                    aria-label={`Link to the ${id} section`}
                  >
                    {id}
                  </Link>
                </li>
              ))
              .reverse()}
          </ul>
        </nav>

        <p className={styles.copyright}>&copy; Yacht ape 2024 all rights</p>
        <p className={styles.copyright}>reserved</p>
      </div>
    </div>
  );
};

export default BurgerMenu;
