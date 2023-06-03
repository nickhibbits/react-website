export const transition = (delay: number) => {
  return {
    imageBaseInitial: { duration: 4, delay },
    imageSiblingInitial: { duration: 4, delay },
    title: { duration: 2, delay },
    titleHover: { duration: 0.5, delay },
    imageHover: { duration: 0.8, delay },
  };
};

export const opacitySequenceVariants = {
  image1stSiblingInitial: {
    opacity: [0, 1, 1, 1, 1, 0, 1],
    transition: { ...transition(0).imageBaseInitial },
  },
  image2ndSiblingInitial: {
    opacity: [0, 1, 1, 1, 1, 0],
    transition: { ...transition(1.5).imageSiblingInitial },
  },
  image3rdSiblingInitial: {
    opacity: [0, 1, 1, 1, 0, 0],
    transition: { ...transition(3).imageSiblingInitial },
  },
  imageHover: {
    opacity: [0, 1, 1],
    transition: { ...transition(0).imageHover },
  },
  fadeImage: {
    opacity: [1, 1, 0],
    transition: { ...transition(0).imageHover },
  },
  hideImage: {
    opacity: 0,
  },
  title1: { opacity: [0, 1, 1], transition: { ...transition(0).title } },
  title2: { opacity: [0, 1, 1], transition: { ...transition(1.5).title } },
  title3: { opacity: [0, 1, 1], transition: { ...transition(3).title } },
  titleFadeOut: {
    opacity: [1, 0.5],
    transition: { ...transition(0).titleHover },
  },
  titleFadeIn: {
    opacity: [0.5, 1],
    transition: { ...transition(0).titleHover },
  },

  hideTitle: {
    opacity: 0.5,
  },
};
