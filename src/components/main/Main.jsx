import { useState } from "react";
import "./main.css";
import { projects } from "./projects.js";
import { AnimatePresence, motion } from "framer-motion";
const Main = () => {
  const [currentActive, setCurentActive] = useState("all");
  const [filterdProjects, setFilterdProjects] = useState(projects);
  function changeCategory(category) {
      setFilterdProjects(projects.filter((el) => el.category === category));
  }
  return (
    <main>
      <section className="left-section">
        <button className={currentActive === "all" ? "active" : null} onClick={() => {
          setCurentActive("all");
          setFilterdProjects(projects);
        }}>All Projects</button>
        <button className={currentActive === "HTML & CSS" ? "active" : null} onClick={() => {
          setCurentActive("HTML & CSS");
          changeCategory("css");
          }}>HTML & CSS</button>
        <button className={currentActive === "JavaScript" ? "active" : null} onClick={() => {
          setCurentActive("JavaScript");
          changeCategory("javascript");
        }}>JavaScript</button>
        <button className={currentActive === "React & MUI" ? "active" : null} onClick={() => {
          setCurentActive("React & MUI");
          changeCategory("react");
        }}>React & MUI</button>
        <button className={currentActive === "Node & Express" ? "active" : null} onClick={() => {
          setCurentActive("Node & Express");
          changeCategory("node&express");
        }}>Node & Express</button>
      </section>
      <section className="right-section">
      <AnimatePresence>
      {filterdProjects.length === 0 ? <span style={{color: "var(--main-text-color)"}}>No Projects Found</span> : filterdProjects.map((project, index) => {
        return (
              <motion.article layout initial={{transform: "scal(0)"}} animate={{transform: "scale(1)"}} transition={{type: "spring", damping: 8, stiffness: 50}} className="card" key={index}>
                <img src={project.img} alt="" width={266} />
                <div className="card-content" style={{ width: "266px" }}>
                  <h1 className="title">{project.title}</h1>
                  <div className="sub-title">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores nihil consequuntur sapiente animi accusamus
                    temporibus.
                  </div>
                  <div>
                    <div className="icons">
                      <a href={project.url} target="_blank">
                        <i className="fa-solid fa-link"></i>
                      </a>
                      <a href={project.githubLink} target="_blank">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                    <a href={project.url} className="link" target="_blank">
                      <span>More</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </motion.article>
          );
      })}
      </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
