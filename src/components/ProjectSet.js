import { Fragment } from "react";
import "../styles/Work.css";
import ProjectCard from "./ProjectCard";

function ProjectSet({ name }) {
  const projects = {
    zoomies: {
      title: "Studio Zoomies",
      description:
        "Junior Developer at a startup building a Customer Relation Managment Application for photographers.",
      imgAlt: "Studio Zoomies Logo",
      imgSrc: null,
      href: "https://studiozoomies.com",
    },
    bearsDen: {
      title: "The Bear's Den",
      description:
        "Built e-commerce, studied SEO, performed cross-platform integration with social media for a small business in South Lake Tahoe.",
      imgAlt: "The Bear's Den",
      imgSrc: "",
    },
  };

  return (
    <div className="project-set-component">
      <div className="project-set-title">{name}</div>
      {name === "Professional" ? (
        <Fragment>
          <a
            style={{ textDecoration: "none" }}
            href={projects.zoomies.href}
            target="_blank"
            rel="noreferrer"
          >
            <ProjectCard
              title={projects.zoomies.title}
              description={projects.zoomies.description}
              imgAlt={projects.zoomies.imgAlt}
              imgSrc={null}
            />
          </a>
          <ProjectCard
            title={projects.bearsDen.title}
            description={projects.bearsDen.description}
            imgAlt={projects.bearsDen.imgAlt}
            imgSrc={projects.bearsDen.imgSrc}
          />
        </Fragment>
      ) : (
        <Fragment>
          <ProjectCard />
          <ProjectCard />
        </Fragment>
      )}
    </div>
  );
}

export default ProjectSet;
