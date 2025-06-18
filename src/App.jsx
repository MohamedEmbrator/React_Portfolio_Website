import Landing from "./components/hero/Landing";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Contact from "./components/Contact/contact";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollTop = document.documentElement.scrollTop;
      setScrollWidth((scrollTop / height) * 100);
    };
  }, []);

  return (
    <>
      {window.scrollY >= 50 && (
        <div
          className="scroll-progress"
          style={{ width: `${scrollWidth}%`}}
        ></div>
      )}
      <div className="container">
        <Header />
        <div className="divider" />
        <Landing />
        <div className="divider" />
        <Main />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />
        {window.scrollY >= 150 && (
          <button
            className="scroll-btn"
            onClick={() => {
              window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth"
              });
            }}
          >
            <i className="fa-solid fa-angle-up"></i>
          </button>
        )}
      </div>
    </>
  );
}

export default App;
