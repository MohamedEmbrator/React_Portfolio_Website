import Lottie from "lottie-react";
import "./landing.css";
import developmentAnimation from "../../animation/dev.json";
import { motion } from "framer-motion";
const Landing = () => {
  return (
    <section className="landing">
      <div className="left-section">
        <div className="avatar">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{damping: 6, type: "spring", stiffness: 100}}
            src="imgs/avatar.png"
            alt=""
          />
          <span className="check-icon">
            <i className="fa-solid fa-circle-check"></i>
          </span>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Full Stack Developer, Software Engineer{" "}
        </motion.h1>
        <p className="description">
          I'm Mohamed, Software Enginner and Full-Stack Developer. Student at
          Faculty of Computer Science Al-Azhar Universty in Cairo.
        </p>
        <div className="icons">
          <a href="https://github.com/MohamedEmbrator" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.youtube.com/@code-society" target="_blank">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-embrator"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/EmbratorM" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className="right-section">
        <Lottie animationData={developmentAnimation} />
      </div>
    </section>
  );
};

export default Landing;
