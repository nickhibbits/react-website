import treesImage from "$/public/images/trees-overhead-min.jpg";
import synthImage from "$/public/images/synthesizer.jpg";
import codeImage from "$/public/images/code-image.jpg";

import Image from "next/image";

import { useEffect, useState } from "react";

type LoadingStatuses = {
  codeLoaded: boolean;
  dialsLoaded: boolean;
  teesLoaded: boolean;
};

const loadingStatus = {
  codeLoaded: false,
  dialsLoaded: false,
  treesLoaded: false,
};

function ImageLoad({ updateIsLoading }: { updateIsLoading: any }) {
  const [loadingStatuses, setLoadingStatuses] = useState(loadingStatus);

  useEffect(() => {
    // console.log("🟣 loading status updated", loadingStatuses);
    if (Object.values(loadingStatuses).every((v) => v === true)) {
      updateIsLoading(false);
      // console.log("🟢 all images loaded", loadingStatuses);
    }
  }, [loadingStatuses]);

  const height = 500;
  const width = 500;

  return (
    <div style={{ opacity: "0" }}>
      <Image
        src={codeImage}
        alt="code"
        fill={true}
        height={height}
        width={width}

        // onLoadingComplete={() =>
        //   setLoadingStatuses((statuses) => {
        //     return { ...statuses, codeLoaded: true };
        //   })
        // }
      />

      <Image
        src={synthImage}
        alt="sound eq dials"
        fill={true}
        height={height}
        width={width}

        // onLoadingComplete={() =>
        //   setLoadingStatuses((statuses) => {
        //     return { ...statuses, dialsLoaded: true };
        //   })
        // }
      />
      <Image
        src={treesImage}
        alt="overhead forest shot"
        fill={true}
        height={height}
        width={width}

        // priority
        // onLoadingComplete={() =>
        //   setLoadingStatuses((statuses) => {
        //     return { ...statuses, treesLoaded: true };
        //   })
        // }
      />
    </div>
  );
}

export default ImageLoad;
