import React, { useState, useEffect } from "react";
import projectsDB from "./PortfolioDB";


function Prueba() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsDB);
  }, []);

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
      <div className="portfolio__labels">
        <button 
            active={filter === "all"} onClick={() => setFilter("all")}>
          TODO
        </button>
        <button
          active={filter === "diseno"}
          onClick={() => setFilter("diseno")}
        >
          DISEÑO GRÁFICO
        </button>
        <button
          active={filter === "web"}
          onClick={() => setFilter("web")}
        >
          DISEÑO WEB
        </button>
        
      </div>
      <div className="portfolio__container">
        {projects.map(item =>
          item.filtered === true ? <span key={item.client}>{item.type}</span> : ""
        )}
      </div>
    </>
  );
}

export default Prueba;
