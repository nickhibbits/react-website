import { Fragment } from "react";

import ProjectCard from "./ProjectCard";
import bearsDen from "../images/Crowd-Front.JPG";
import pollPhoto from "../images/poll-photo.JPG";
import bookPhoto from "../images/books.jpg";

import "../styles/Work.css";

function ProjectSet({ name }) {
  const projects = {
    zoomies: {
      title: "Studio Zoomies",
      description:
        "Junior Developer at a startup building a Customer Relation Managment Application for photographers.",
      imgAlt: "Studio Zoomies Logo",
      imgSrc: null,
      link: "https://studiozoomies.com",
    },
    bearsDen: {
      title: "The Bear's Den",
      description:
        "Built e-commerce, studied SEO, performed cross-platform integration with social media for a small business.",
      imgAlt: "The Bear's Den",
      imgSrc: bearsDen,
      link: "https://thebearsdentahoe.com",
    },
    pollApp: {
      title: "Employee Poll App",
      description:
        "Mock comppany polling app, allowing users to vote on questions asked by other employees or create their own, as well as see stats about questions and users.",
      imgAlt: "Employee Poll App",
      imgSrc: pollPhoto,
      link: "https://github.com/nickhibbits/employee-poll-react-app",
    },
    bookApp: {
      title: "My Reads App",
      description:
        "Book tracking app, allowing users to organize books on different shelves as well as add new ones, as they progress in reading.",
      imgAlt: "My Reads Ap",
      imgSrc: bookPhoto,
      link: "https://github.com/nickhibbits/my-reads-react-app",
    },
  };

  return (
    <div className="project-set-component">
      <div className="project-set-title">{name}</div>
      {name === "Professional" ? (
        <Fragment>
          <a
            style={{ textDecoration: "none" }}
            href={projects.zoomies.link}
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
          <a
            style={{ textDecoration: "none" }}
            href={projects.bearsDen.link}
            target="_blank"
            rel="noreferrer"
          >
            <ProjectCard
              title={projects.bearsDen.title}
              description={projects.bearsDen.description}
              imgAlt={projects.bearsDen.imgAlt}
              imgSrc={projects.bearsDen.imgSrc}
            />
          </a>
        </Fragment>
      ) : (
        <Fragment>
          <a
            style={{ textDecoration: "none" }}
            href={projects.pollApp.link}
            target="_blank"
            rel="noreferrer"
          >
            <ProjectCard
              title={projects.pollApp.title}
              description={projects.pollApp.description}
              imgAlt={projects.pollApp.imgAlt}
              imgSrc={projects.pollApp.imgSrc}
            />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href={projects.bookApp.link}
            target="_blank"
            rel="noreferrer"
          >
            <ProjectCard
              title={projects.bookApp.title}
              description={projects.bookApp.description}
              imgAlt={projects.bookApp.imgAlt}
              imgSrc={projects.bookApp.imgSrc}
            />
          </a>
        </Fragment>
      )}
    </div>
  );
}

export default ProjectSet;
