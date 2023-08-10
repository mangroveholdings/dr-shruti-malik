import React, { useEffect } from "react";
import { preloader } from "../../../utils/helper";

const PreLoader: React.FC = () => {
  useEffect(() => {
    preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line"></div>
    </div>
  );
};

export default PreLoader;
