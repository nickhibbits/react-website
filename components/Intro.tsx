import { useWindowCheck } from "$/utils/customHooks/useWindowCheck";
import { motion } from "framer-motion";

import layoutStyles from "$/styles/layout/layout.module.scss";

function Intro({
  title1Controls,
  title2Controls,
  title3Controls,
  greetingComplete,
  updateGreeting,
  handleHover,
  previousHover,
}: {
  title1Controls: any;
  title2Controls: any;
  title3Controls: any;
  greetingComplete: any;
  updateGreeting: any;
  handleHover: any;
  previousHover: string;
}) {
  const width = useWindowCheck();
  if (width) {
    return (
      <div className={width < 1150 ? `${layoutStyles.component}` : ""}>
        <section
          className={`${layoutStyles.info_wrapper} ${layoutStyles.intro_wrapper}`}
        >
          {greetingComplete ? (
            <>
              <h1>Hi, I&apos;m Nick</h1>
              <ul className={layoutStyles.title_list}>
                <motion.li
                  animate={title1Controls}
                  className={layoutStyles.title}
                  style={{ opacity: 0 }}
                  onHoverStart={() => handleHover("programmer", previousHover)}
                  onTap={() => handleHover("programmer", previousHover)}
                >
                  Programmer
                </motion.li>
                <motion.li
                  animate={title2Controls}
                  className={layoutStyles.title}
                  style={{ opacity: 0 }}
                  onHoverStart={() => handleHover("sound", previousHover)}
                  onTap={() => handleHover("sound", previousHover)}
                >
                  • Sound Enthusiast
                </motion.li>
                <motion.li
                  animate={title3Controls}
                  className={layoutStyles.title}
                  style={{ opacity: 0 }}
                  onHoverStart={() => handleHover("forest", previousHover)}
                  onTap={() => handleHover("forest", previousHover)}
                >
                  • Forest Dweller
                </motion.li>
              </ul>
            </>
          ) : (
            <motion.h1
              animate={{ opacity: [0, 1] }}
              transition={{ ease: "easeOut", duration: 1 }}
              onAnimationComplete={() => updateGreeting()}
              style={{ paddingBottom: "25px" }}
            >
              Hi, I&apos;m Nick
            </motion.h1>
          )}
        </section>
      </div>
    );
  }

  return null;
}

export default Intro;
