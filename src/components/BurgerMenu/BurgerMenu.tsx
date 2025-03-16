import { IBurgerMenuProps } from "../../types/IBurgerMenuProps";
import cn from "classnames";
import styles from "./BurgerMenu.module.scss";
import { Link } from "react-scroll";
import Logo from "../../assets/images/icons/Logo";
import Discord from "../../assets/images/icons/Discord";
import OpenseaMark from "../../assets/images/icons/OpenseaMark";
import Twitter from "../../assets/images/icons/Twitter";
import SoundOn from "../../assets/images/icons/SoundOn";
import SoundOff from "../../assets/images/icons/SoundOff";

const BurgerMenu: React.FC<IBurgerMenuProps> = ({
  isOpen,
  onClick,
  isPlaying,
  toggleAudio,
}) => {
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
          >
            <Logo className={styles.logo__icon} />
          </a>
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
              >
                <Discord className={styles.media_icon} />
              </a>
            </li>
            <li className={styles.media_item}>
              <a
                href="https://opensea.io/collection/boredapeyachtclub"
                className={styles.media_link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Link to collections marketplace OpenSea"
              >
                <OpenseaMark className={styles.media_icon} />
              </a>
            </li>
            <li className={styles.media_item}>
              <a
                href="https://twitter.com/BoredApeYC?t=PTAZxWP3-AssmzNaf8DKkQ&s=35"
                className={styles.media_link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Link to Twitter(X) social network"
              >
                <Twitter className={styles.media_icon} />
              </a>
            </li>
            <li className={styles.media_item}>
              <button
                className={cn(styles.media_link, {
                  [styles.soundOff]: !isPlaying,
                })}
                onClick={toggleAudio}
                aria-label={isPlaying ? "Mute music" : "Unmute music"}
              >
                {isPlaying ? (
                  <SoundOn className={styles.media_icon} />
                ) : (
                  <SoundOff className={styles.media_icon} />
                )}
              </button>
            </li>
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
