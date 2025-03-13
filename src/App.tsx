import Header from "./components/Header";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import { useEffect, useRef, useState } from "react";
import About from "./components/About";

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
    <>
      <Header isScrolled={isScrolled}/>
      <main>
        <About innerRef={aboutRef} />
        <FAQ />
        <ContactUs />
      </main>
    </>
  );
};

export default App;
