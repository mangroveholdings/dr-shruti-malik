import React, { Fragment, useEffect, useState } from "react";
import useClickOutside from "@utils/useClickOutside";

interface VideoPopupProps {
  close: () => void;
  videoID: string | null;
}

const VideoPopup_: React.FC<VideoPopupProps> = ({ close, videoID }) => {
  const domNode = useClickOutside(() => {
    close();
  });

  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close()}></div>
      <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex={-1} style={{ overflow: "hidden auto" }}>
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => close()}>
                ×
              </button>
              <iframe
                src={videoID || ""}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const VideoPopup: React.FC = () => {
  const [video, setVideo] = useState(false);
  const [videoValue, setVideoValue] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const aElements = document.querySelectorAll("a");
      aElements.forEach((a) => {
        if (a.href.includes("www.youtube.com") || a.href.includes("vimeo.com") || a.href.includes("soundcloud.com")) {
          a.addEventListener("click", (e) => {
            e.preventDefault();
            setVideoValue(a.href);
            setVideo(true);
          });
        }
      });
    }, 1500);
  }, []);

  return <Fragment>{video && <VideoPopup_ close={() => setVideo(false)} videoID={videoValue} />}</Fragment>;
};

export default VideoPopup;
