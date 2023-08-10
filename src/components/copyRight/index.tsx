import React from "react";

const CopyRight: React.FC = () => {
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <p>
                Copyright All rights reserved.
                <a href="https://drshrutimalik.com/" target="_blank" rel="noreferrer">
                  Dr. Shruti Malik
                </a>{" "}
                © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
