import { Fragment } from "react/jsx-runtime";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">Uses</a>
        </li>
      </ul>
      <p>
        &copy; {new Date().getFullYear()} <span>ENG/ Mohamed</span>. All rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
