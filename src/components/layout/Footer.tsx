import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import info from "@utils/siteSettings/info.json";

const socialIcons: Record<string, JSX.Element> = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedinIn />,
  behance: <FaInstagram />,
};

const SiteFooter: React.FC = () => (
  <footer className="lg-footer">
    <div className="lg-container">
      <div className="lg-footer-inner">
        <Link href="/" className="lg-logo">
          <span className="lg-logo-mark">S</span>
          <span className="lg-logo-text-wrap">
            <span className="lg-logo-name">
              Dr. <em>Shruti</em> Malik
            </span>
            <span className="lg-logo-tag">BDS &middot; MDS Endodontics</span>
          </span>
        </Link>

        <div className="lg-footer-copy">
          &copy; {new Date().getFullYear()} Dr. {info.name} &middot; Radix Healthcare. All
          rights reserved.
        </div>

        <div className="lg-footer-social">
          {info.social.map((s) => (
            <Link key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
              {socialIcons[s.name] ?? <FaInstagram />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
