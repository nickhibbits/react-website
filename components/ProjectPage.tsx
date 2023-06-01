import { useRouter } from "next/router";
import { useWindowCheck } from "$/utils/customHooks";

import layoutStyles from "$/styles/layout/layout.module.scss";
import projectPageStyles from "$/styles/components/ProjectPage.module.scss";

import projects from "$/constants/projects";
import Link from "next/link";

// import "../styles/ProjectPage.scss";

function ProjectPage() {
  const width = useWindowCheck();
  const router = useRouter();
  const projectTitle = router.query.slug;
  const project = Object.values(projects).find(
    (project) => project.title === projectTitle
  );

  return (
    <main className={projectPageStyles.project_page_container}>
      <div
        className={
          width > 850
            ? `${layoutStyles.component} ${layoutStyles.split}`
            : `${layoutStyles.component}  ${projectPageStyles.project_page_component}`
        }
      >
        <div>
          {project && project.title === "Studio Zoomies" ? (
            <div>{/* zoomies logo with svg wrapper component */}</div>
          ) : // <img
          //   src={project && project.imgSrc}
          //   className={projectPageStyles.project_page_image}
          //   alt={project && project.imgAlt}
          // />
          null}
        </div>
        <div>
          <h1 className={projectPageStyles.project_page_title}>
            {projectTitle}
          </h1>
          <p className={projectPageStyles.project_page_description}>
            {project && project.description}
          </p>
          <div className="links-wrapper">
            <Link href={"/#work-container"}>
              <p>Go back</p>
            </Link>
            <Link href={project ? project.link : ""}>
              {project && project.type === "personal" ? (
                <p>Visit repository</p>
              ) : (
                <p> See more</p>
              )}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
