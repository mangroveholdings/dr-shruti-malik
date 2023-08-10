import React, { useEffect } from "react";
import { customCursor } from "../../../utils/helper";

const Cursor: React.FC = () => {
  useEffect(() => {
    customCursor();
  }, []);

  return (
    <>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </>
  );
};

export default Cursor;
