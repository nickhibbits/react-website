import { useLocation, useNavigate, useParams } from "react-router-dom";

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
  console.log("router params", props.router.params);
  return <main className="project-page-component">PROJECT PAGE</main>;
}

export default withRouter(ProjectPage);
