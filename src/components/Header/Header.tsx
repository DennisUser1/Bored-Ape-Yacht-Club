import { useState } from "react";
import { IHeaderProp } from "../../types";
import cn from "classnames";
import Logo from "../../assets/images/icons/Logo";
import { Link } from "react-scroll";
import styles from "./Header.module.scss";
import Discord from "../../assets/images/icons/Discord";
import OpenseaMark from "../../assets/images/icons/OpenseaMark";
import Twitter from "../../assets/images/icons/Twitter";

const Header: React.FC<IHeaderProp> = ({ isScrolled }) => {
  const menu = ["mint", "arts", "faq", "m-map", "about"];
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);

    if (!isOpenMenu && window.innerWidth < 767) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "hidden auto";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__wrap}>
          <header className={styles.header}>
            <a
              href="./"
              className={styles.header__logo}
              aria-label="Logo, link to the main page"
            >
              <Logo className={styles.header__icon} />
            </a>

            <nav
              className={cn(styles.header__nav, {
                [styles.header__scrolled]: isScrolled,
              })}
            >
              <ul
                className={cn(styles.header__menu, {
                  [styles.open]: isOpenMenu,
                  [styles.header__scrolled]: isScrolled,
                })}
              >
                <li>
                  <button
                    type="button"
                    aria-label="Open or Close the mobile menu"
                    className={cn(styles.header__menu_btn, {
                      [styles.header__scrolled]: isScrolled,
                    })}
                    onClick={toggleMenu}
                  >
                    <span>{isOpenMenu ? "CLOSE" : "MENU"}</span>
                  </button>
                </li>

                {menu.map((id, index) => (
                  <li key={index}>
                    <Link>
                      <span>{id}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <div
            className={cn(styles.media, {
              [styles.header__scrolled]: isScrolled,
            })}
          >
            <ul className={styles.media__links}>
              <li className={styles.media_item}>
                <a
                  href="https://discord.com/"
                  className={cn(styles.media__link, {
                    [styles.header__scrolled]: isScrolled,
                  })}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Link to Discord social network"
                >
                  <Discord className={styles.media__icon} />
                </a>
              </li>
              <li className={styles.media__item}>
                <a
                  href="https://opensea.io/"
                  className={cn(styles.media__link, {
                    [styles.header__scrolled]: isScrolled,
                  })}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Link to collections marketplace OpenSea"
                >
                  <OpenseaMark className={styles.media__icon} />
                </a>
              </li>
              <li className={styles.media__item}>
                <a
                  href="https://twitter.com/"
                  className={cn(styles.media__link, {
                    [styles.header__scrolled]: isScrolled,
                  })}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Link to Twitter(X) social network"
                >
                  <Twitter className={styles.media__icon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
