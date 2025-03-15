import MindMapItem from "../MindMapItem";
import SliderWrapper from "../SliderWrapper";
import mindData from "./mindData";
import styles from "./MindMap.module.scss";

const MindMap: React.FC = () => {
  return (
    <section className={styles.map} id="m-map">
      <h2 className={styles.map__title}>Mind Map</h2>

      <div className={styles.map__list_slider}>
        <SliderWrapper>
          {mindData.map(({ title, text, link }, index) => (
            <div key={index}>
              <MindMapItem title={title} text={text} link={link} />
            </div>
          ))}
        </SliderWrapper>
      </div>

      <ul className={styles.map__list}>
        {mindData.map(({ title, text, link }, index) => (
          <li key={index}>
            <MindMapItem title={title} text={text} link={link} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MindMap;
