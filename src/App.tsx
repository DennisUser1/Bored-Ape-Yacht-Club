import Header from "./components/Header";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import { useEffect, useRef, useState } from "react";
import About from "./components/About";
import Arts from "./components/Arts";
import Footer from "./components/Footer";
import MindMap from "./components/MindMap";
import Metaverse from "./components/Metaverse";

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const aboutTop = aboutRef.current.getBoundingClientRect().top;
        setIsScrolled(aboutTop <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={"box"}>
      <Header isScrolled={isScrolled}/>
      <main>
        <About innerRef={aboutRef} />
        <MindMap />
        <Metaverse />
        <FAQ />
        <Arts />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
