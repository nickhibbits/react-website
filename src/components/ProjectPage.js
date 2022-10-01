import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import projects from "../projects";

import { ReactComponent as ZoomiesLogo } from "../assets/svgs/ZoomiesLogo.svg";

import "../styles/index.scss";
import "../styles/components/ProjectPage.scss";
import { useWindowCheck } from "../customHooks";

// import "../styles/ProjectPage.scss";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let params = useParams();
    let navigate = useNavigate();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

function ProjectPage(props) {
  const width = useWindowCheck();
  const projectTitle = props.router.params.name;
  const project = Object.values(projects).find(
    (project) => project.title === projectTitle
  );

  console.log("project", project);

  return (
    <main className="project-page-container">
      <div
        className={
          width > 850 ? `component split` : `component project-page-component`
        }
      >
        <div className="project-page-image-wrapper">
          {project.title === "Studio Zoomies" ? (
            <div className="project-page-logo-wrapper">
              <ZoomiesLogo />
            </div>
          ) : (
            <img
              src={project.imgSrc}
              className="project-page-image"
              alt={project.imgAlt}
            />
          )}
        </div>
        <div className="project-page-profile">
          <h1 className="project-page-title">{projectTitle}</h1>
          <p className="project-page-description">{project.description}</p>
          <div className="links-wrapper">
            <Link className="project-page-link" to={"/"}>
              <p className="">Go back</p>
            </Link>
            <a href={project.link} className="project-page-link">
              {project.type === "personal" ? (
                <p>Visit repository</p>
              ) : (
                <p> See more</p>
              )}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default withRouter(ProjectPage);
