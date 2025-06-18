import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("mode") !== null
      ? localStorage.getItem("mode")
      : "dark"
  );
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <header>
      <button
        className="menu"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <div />
      <nav>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="mode-toggler"
        onClick={(e) => {
          // @ts-ignore
          e.target.classList.toggle("fa-moon");
          setTheme(theme === "dark" ? "light" : "dark");
          window.localStorage.setItem(
            "mode",
            theme === "dark" ? "light" : "dark"
          );
        }}
      >
        <i
          className={`fa-regular fa-sun ${
            localStorage.getItem("mode") !== null &&
            localStorage.getItem("mode") === "light"
              ? "fa-moon"
              : ""
          }`}
        ></i>
      </button>

      {showModal && (
        <div className="nav-modal">
          <ul>
            <i
              className="close fa-solid fa-close"
              onClick={() => {
                setShowModal(false);
              }}
            ></i>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
