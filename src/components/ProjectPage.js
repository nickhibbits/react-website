import { useLocation, useNavigate, useParams } from "react-router-dom";
import projects from "../projects";

import "../styles/ProjectPage.scss";

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
  const projectTitle = props.router.params.name;
  const project = Object.values(projects).find(
    (project) => project.title === projectTitle
  );

  console.log("project", project);
  return (
    <main className="project-page-component">
      <div className="project-page-container">
        <div className="project-page-image-wrapper">
          <img
            src={project.imgSrc}
            className="project-page-image"
            alt={project.imgAlt}
          />
        </div>
        <div className="project-page-profile">
          <div className="project-page-title">{projectTitle}</div>
          <div className="project-page-description">{project.description}</div>
        </div>
      </div>
    </main>
  );
}

export default withRouter(ProjectPage);
