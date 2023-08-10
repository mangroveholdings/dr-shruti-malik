import React, { Fragment, useEffect, useState } from "react";
import useClickOutside from "../../../utils/useClickOutside";
import Image from "next/image";

interface ImgViewsProps {
  close: (value: boolean) => void;
  src: string | null;
}

const ImgViews: React.FC<ImgViewsProps> = ({ close, src }) => {
  const domNode = useClickOutside(() => {
    close(false);
  });

  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex={-1} style={{ overflow: "hidden auto" }}>
        <div className={`mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`}>
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <Image src={src || ""} alt="Image" width={600} height={400} />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const ImageView: React.FC = () => {
  const [img, setImg] = useState(false);
  const [imgValue, setImgValue] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const aElements = document.querySelectorAll("a");
      aElements.forEach((a) => {
        if (a.href.includes("img/")) {
          if (a.getAttribute("download") === null) {
            a.addEventListener("click", (e) => {
              e.preventDefault();
              setImgValue(a.href);
              setImg(true);
            });
          }
        }
      });
    }, 1500);
  }, []);

  return <Fragment>{img && <ImgViews close={(value) => setImg(value)} src={imgValue} />}</Fragment>;
};

export default ImageView;
