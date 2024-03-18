import React, { useEffect, useRef } from "react";
import "../css/video.css";

function Video() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnded = () => {
      video.play();
    };

    video.addEventListener("ended", handleVideoEnded);

    return () => {
      video.removeEventListener("ended", handleVideoEnded);
    };
  }, []);

  return (
    <>
      <div className="videoMain">
        <div className="videoContainer">
          <iframe
            ref={videoRef}
            src="https://www.youtube.com/embed/r9VOYJM6nZc?si=V85eMgYeIwM1Hjmu&autoplay=1&mute=1&loop=1&rel=0&replay=auto"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Video;

// import React from "react";
// import "../css/video.css";

// function Video() {
//   return (
//     <>
//       <div className="videoMain">
//         <div className="videoContainer">
//           <iframe
//             src="https://www.youtube.com/embed/r9VOYJM6nZc?si=V85eMgYeIwM1Hjmu&autoplay=1&mute=1"
//             title="YouTube video player"
//             frameBorder={0}
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//             style={{
//               position: "absolute",
//               width: "100%",
//               height: "100%",
//               borderRadius: "20px",
//             }}
//           ></iframe>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Video;
