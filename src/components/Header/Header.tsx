import { useEffect, useState } from "react";
import { IHeaderProp } from "../../types";
import cn from "classnames";
import Logo from "../../assets/images/icons/Logo";
import { Link } from "react-scroll";
import styles from "./Header.module.scss";
import Discord from "../../assets/images/icons/Discord";
import OpenseaMark from "../../assets/images/icons/OpenseaMark";
import Twitter from "../../assets/images/icons/Twitter";
import Hero from "../Hero";
import BurgerMenu from "../BurgerMenu";
// import backgroundMusic from "../../assets/audio/clubhouse.mp3";
import SoundOn from "../../assets/images/icons/SoundOn";
import SoundOff from "../../assets/images/icons/SoundOff";

const Header: React.FC<IHeaderProp> = ({ isScrolled }) => {
  const menu = ["mint", "arts", "faq", "meta", "m-map", "about"];
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [audio] = useState(new Audio('/audio/clubhouse.mp3'));

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);

    if (!isOpenMenu && window.innerWidth < 767) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'hidden auto';
    }
  };

  useEffect(() => {
    audio.loop = true;
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }
    return () => audio.pause();
  }, [audio, isPlaying]);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__wrap_box}>
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
                    <Link
                      className={cn(styles.header__menu_link, {
                        [styles.open]: isOpenMenu,
                        [styles.header__scrolled]: isScrolled,
                      })}
                      to={id}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={() => setIsOpenMenu((prev) => !prev)}
                      aria-label={`Link to the ${id} section`}
                    >
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
              <li className={styles.media__item}>
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
                  href="https://opensea.io/collection/boredapeyachtclub"
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
                  href="https://twitter.com/BoredApeYC?t=PTAZxWP3-AssmzNaf8DKkQ&s=35"
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
              <li className={styles.media__item}>
                <button
                  className={cn(styles.media__link, {
                    [styles.header__scrolled]: isScrolled,
                    [styles.soundOff]: !isPlaying,
                  })}
                  onClick={toggleAudio}
                  aria-label={isPlaying ? "Mute music" : "Unmute music"}
                >
                  {isPlaying ? (
                    <SoundOn className={styles.media__icon} />
                  ) : (
                    <SoundOff className={styles.media__icon} />
                  )}
                </button>
              </li>
            </ul>
          </div>
          <Hero />
          {window.innerWidth <= 767 && (
            <BurgerMenu
              isOpen={isOpenMenu}
              onClick={toggleMenu}
              isPlaying={isPlaying}
              toggleAudio={toggleAudio}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
