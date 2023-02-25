import React, { useState, useEffect } from "react";
import projectsDB from "./PortfolioDB";



export const ProjectsFilter = () => {
  const [filter, setFilter] = useState("all");
  const [projectsInitial, setProjectsInitial] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsDB);
  }, []);

  useEffect(() => {
    let projectsInitialDB = projectsDB.slice(0,9);
      setProjectsInitial(projectsInitialDB);
  },[]);

  useEffect(() => {
    setProjects([]);

    const filtered = projectsDB.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);

  return (
    <>
      <div className="portfolio_labels">
        <button active={filter === "all"} onClick={() => setFilter("all")}>
          TODOS
        </button>
        <button active={filter === "diseno"} onClick={() => setFilter("diseno")}>
          DISEÑO GRÁFICO
        </button>
        <button active={filter === "web"} onClick={() => setFilter("web")}>
          DISEÑO WEB
        </button>
       
      </div>
      
      <div className="PortfolioGrid">

        {projectsInitial.map(el =>
          el.filtered === true ? <span key={el.client} client={el.client} type={el.type} categroy={el.category}web={el.web} link={el.link} description={el.description} description2={el.description2} description3={el.description3} description4={el.description4} description5={el.description5} description6={el.description6} image={el.image} slide01={el.slide01} slide02={el.slide02}></span> : ""
        )}

      </div>
      
    </>
  );
}

