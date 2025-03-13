import styles from "./Hero.module.scss";

import heroMob from "../../assets/images/nft/hero/hero_mobile.png";
import heroMob2x from "../../assets/images/nft/hero/hero_mobile@2x.png";
import heroTab from "../../assets/images/nft/hero/hero_tablet.png";
import heroTab2x from "../../assets/images/nft/hero/hero_tablet@2x.png";
import heroDesk from "../../assets/images/nft/hero/hero_desktop.png";
import heroDesk2x from "../../assets/images/nft/hero/hero_desktop@2x.png";
import { Link } from "react-scroll";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero__main}>
      <p className={styles.hero__subtitle}>diD yOu seE iT ?</p>
      <h1 className={styles.hero__title}>
        YACHT <span>APES</span>
      </h1>
      <p className={styles.hero__description}>Apes aRe eveRywhere</p>

      <div className={styles.hero__container}>
        <picture>
          <source
            type="image/png"
            media="(min-width: 1280px)"
            srcSet={`${heroDesk} 1x, ${heroDesk2x} 2x`}
          />
          <source
            type="image/png"
            media="(min-width: 768px)"
            srcSet={`${heroTab} 1x, ${heroTab2x} 2x`}
          />
          <source
            type="image/png"
            media="(max-width: 767px)"
            srcSet={`${heroMob} 1x, ${heroMob2x} 2x`}
          />
          <img
            src={`${heroMob}`}
            alt="Yacht Ape is a collection of unique digital apes"
            width={216}
            height={284}
            className={styles.hero__image}
          />
        </picture>

        <Link
          className={styles.hero__link_meet}
          to="mint"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          aria-label="Link to the mint section"
        >
          MEET APES
        </Link>
      </div>

      <p className={styles.hero__text}>
        Yacht Ape is a collection of unique digital apes that you can own in NFT
        format
      </p>
    </section>
  );
};

export default Hero;
