import { opacitySequenceVariants } from "$/constants/animations";

export const useHoverAnimation = (
  animationElements: any,
  setPreviousHover: any
) => {
  const { images, titles } = animationElements;

  const handleHover = (title: string, previousTitle: string) => {
    if (previousTitle === title) {
      return;
    }

    const hideImage = ["programmer", "sound", "forest"].find((value) => {
      const imageToHide = value !== title && value !== previousTitle;
      return imageToHide;
    });

    console.log("hideImage", hideImage);

    switch (hideImage) {
      case "programmer":
        images.image1stSiblingControls.start(opacitySequenceVariants.hideImage);
        titles.title1Controls.start(opacitySequenceVariants.hideTitle);

        break;

      case "sound":
        images.image2ndSiblingControls.start(opacitySequenceVariants.hideImage);
        titles.title2Controls.start(opacitySequenceVariants.hideTitle);

        break;
      case "forest":
        images.image3rdSiblingControls.start(opacitySequenceVariants.hideImage);
        titles.title3Controls.start(opacitySequenceVariants.hideTitle);

        break;
    }

    switch (previousTitle) {
      case "programmer":
        images.image1stSiblingControls.start(opacitySequenceVariants.fadeImage);
        titles.title1Controls.start(opacitySequenceVariants.titleFadeOut);
        break;
      case "sound":
        images.image2ndSiblingControls.start(opacitySequenceVariants.fadeImage);
        titles.title2Controls.start(opacitySequenceVariants.titleFadeOut);
        break;
      case "forest":
        images.image3rdSiblingControls.start(opacitySequenceVariants.fadeImage);
        titles.title3Controls.start(opacitySequenceVariants.titleFadeOut);
        break;
    }

    switch (title) {
      case "programmer":
        titles.title1Controls.start(opacitySequenceVariants.titleFadeIn);
        images.image1stSiblingControls.start(
          opacitySequenceVariants.imageHover
        );

        break;

      case "sound":
        titles.title2Controls.start(opacitySequenceVariants.titleFadeIn);
        images.image2ndSiblingControls.start(
          opacitySequenceVariants.imageHover
        );

        break;

      case "forest":
        titles.title3Controls.start(opacitySequenceVariants.titleFadeIn);
        images.image3rdSiblingControls.start(
          opacitySequenceVariants.imageHover
        );

        break;
    }

    setPreviousHover(title);
  };

  return { handleHover };
};
