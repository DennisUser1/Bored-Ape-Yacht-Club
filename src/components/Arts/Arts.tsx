import artsData from "./artsData";
import styles from "./Arts.module.scss";

const Arts: React.FC = () => {
  return (
    <section className={styles.arts} id="arts">
      <h2 className={styles.arts__title}>COLLECTION</h2>

      <div className={styles.arts__slick}>
        {artsData.map(({ id, image, imageTab }) => (
          <div key={id} className={styles.arts__slide}>
            <picture>
              <source
                type="image/png"
                media="(min-width: 768px)"
                srcSet={`${imageTab[0]} 1x, ${imageTab[1]} 2x`}
              />
              <source
                type="image/png"
                media="(max-width: 767px)"
                srcSet={`${image[0]} 1x, ${image[1]} 2x`}
              />
              <img
                src={`${image[0]}`}
                alt="Ape collection"
                width={216}
                height={256}
                className={styles.arts__image}
                loading="lazy"
              />
            </picture>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Arts;
