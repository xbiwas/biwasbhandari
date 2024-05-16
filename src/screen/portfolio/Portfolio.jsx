// import { NavLink } from "react-router-dom";
import { projects } from "../../assets/data/data";
import { GoArrowUpRight } from "react-icons/go";

export const Portfolio = () => {
  return (
    <>
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">My Recent Works</h2>
            <p>
              Using the modern tech stack, I have build some of the cool
              projects.
            </p>
          </div>

          <div className="portfolio-filter text-center">
            {/* <div className="button-group filter-button-group">
              <button>All</button>
              <button>UX/UI</button>
              <button>Branding</button>
              <button>Apps</button>
              <div className="active-bg"></div>
            </div> */}
          </div>
          <div className="portfolio-box">
            <div className="grid2">
              {projects.map((project) => (
                <div className="portfolio-item branding" key={project.id}>
                  <div className="image-box">
                    <img src={project.cover} alt="" />
                  </div>
                  <div className="content-box">
                    <a href={project.href} target="_blank">
                      <h3 className="portfolio-title">{project.title}</h3>
                    </a>
                    <p>{project.desc}</p>
                    <i>
                      <GoArrowUpRight size={50} />
                    </i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
