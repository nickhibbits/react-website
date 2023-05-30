export const transition = (delay: number) => {
  return {
    imageBaseInitial: { duration: 3, delay },
    imageSiblingInitial: { duration: 3, delay },
    title: { duration: 2, delay },
  };
};

export const opacitySequenceVariants = {
  imageBaseInitial: {
    opacity: [0, 1, 1, 1, 0, 1],
    transition: { ...transition(0).imageBaseInitial },
  },
  image1stSiblingInitial: {
    opacity: [0, 1, 1, 1, 0],
    transition: { ...transition(1).imageSiblingInitial },
  },
  image2ndSiblingInitial: {
    opacity: [0, 1, 1, 1, 0],
    transition: { ...transition(2).imageSiblingInitial },
  },
  // imageHover: { opacity: [0, 1] },
  title1: { opacity: [0, 1, 1], transition: { ...transition(0).title } },
  title2: { opacity: [0, 1, 1], transition: { ...transition(1).title } },
  title3: { opacity: [0, 1, 1], transition: { ...transition(2).title } },
  // titleHover: { scale: 1.2 },
};
