import React, { useEffect } from "react";
import CopyRight from "../copyRight";
import ImageView from "../popup/ImageView";
import VideoPopup from "../popup/VideoPopup";
import { dataImage, scrollTop, scroll_, stickyNav, wowJsAnimation } from "../../../utils/helper";
import Cursor from "./Cursor";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import PreLoader from "./PreLoader";
import Progressbar from "./Progressbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    dataImage();
  }, []);
  useEffect(() => {
    wowJsAnimation();
    window.addEventListener("scroll", scroll_);
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollTop);
    return () => {
      window.removeEventListener("scroll", scroll_);
      window.removeEventListener("scroll", stickyNav);
      window.removeEventListener("scroll", scrollTop);
    };
  }, []);
  return (
    <>
      <PreLoader />
      <ImageView />
      <VideoPopup />
      <div className="dizme_tm_all_wrap" data-magic-cursor="show">
        <MobileMenu />
        <Header />
        {children}
        <CopyRight />
        <Cursor />
        <Progressbar />
      </div>
    </>
  );
};

export default Layout;
