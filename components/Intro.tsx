import layoutStyles from "$/styles/layout/layout.module.scss";

function Intro() {
  return (
    // <div className={width < 1150 ? `${layoutStyles.component}` : ""}>
    <div className={layoutStyles.component}>
      <section
        className={`${layoutStyles.info_wrapper} ${layoutStyles.intro_wrapper}`}
      >
        <>
          <h1>Hi, I&apos;m Nick</h1>
          <ul className={layoutStyles.title_list}>
            <li className={layoutStyles.title}>Programmer</li>
            <li className={layoutStyles.title}>• Sound Enthusiast</li>
            <li className={layoutStyles.title}>• Forest Dweller</li>
          </ul>
        </>
      </section>
    </div>
  );

  return null;
}

export default Intro;
