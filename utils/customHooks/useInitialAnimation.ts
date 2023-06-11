import { opacitySequenceVariants } from "$/constants/animations";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const useInitialAnimation = () => {
  const [greetingComplete, setGreetingComplete] = useState(false);

  const image1stSiblingControls = useAnimation();
  const image2ndSiblingControls = useAnimation();
  const image3rdSiblingControls = useAnimation();

  const title1Controls = useAnimation();
  const title2Controls = useAnimation();
  const title3Controls = useAnimation();

  const handleUpdateGreeting = () => {
    setGreetingComplete(true);
  };

  useEffect(() => {
    title1Controls.start(opacitySequenceVariants.title1);
    image1stSiblingControls.start(
      opacitySequenceVariants.image1stSiblingInitial
    );
    title2Controls.start(opacitySequenceVariants.title2);
    image2ndSiblingControls.start(
      opacitySequenceVariants.image2ndSiblingInitial
    );
    title3Controls.start(opacitySequenceVariants.title3);
    image3rdSiblingControls.start(
      opacitySequenceVariants.image3rdSiblingInitial
    );
  }, [
    greetingComplete,
    image1stSiblingControls,
    image2ndSiblingControls,
    image3rdSiblingControls,
    title1Controls,
    title2Controls,
    title3Controls,
  ]);

  return [
    greetingComplete,
    handleUpdateGreeting,
    image1stSiblingControls,
    image2ndSiblingControls,
    image3rdSiblingControls,
    title1Controls,
    title2Controls,
    title3Controls,
  ];
};
