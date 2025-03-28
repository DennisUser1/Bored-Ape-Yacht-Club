import ReactPlayer from "react-player";
import styles from "./Metaverse.module.scss";
import imagesMetaverse from '../../assets/images/metaverse1.png';

const Metaverse: React.FC = () => {
  return (
    <div className={styles.metaverse} id="meta">
      <h2 className={styles.meta__title}>Metaverse Overview</h2>
      <div className={styles.meta__video}>
        <ReactPlayer
          url="https://youtu.be/wcOyqZtZs8g?si=725nxDKgaUBOVWny"
          width="100%"
          height="100%"
          controls
          config={{
            youtube: {
              playerVars: {
                rel: 0,
                modestbranding: 1,
                origin: window.location.origin,
                enablePrivacyEnhancedMode: true,
              },
            },
          }}
        />
      </div>
      <div className={styles.meta__image}>
        <img src={imagesMetaverse} alt="Metaverse Preview" loading="lazy"/>
      </div>
    </div>
  );
};
export default Metaverse;
