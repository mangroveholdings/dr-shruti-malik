import { FC } from "react";
import Image from "next/image"; // Import Image from Next.js
import data from "../../../utils/siteSettings/workProcess.json";

const Process: FC = () => {
  return (
    <div className="dizme_tm_section" id="process">
      <div className="dizme_tm_process">
        <div className="container">
          <div className="list">
            <ul>
              {data &&
                data.map((item, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="icon">
                        <span>
                          <Image className="brush" src={item.icons} alt="image" width={90} height={90} />
                        </span>
                      </div>
                      <div className="title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="text">
                        <p>{item.dec}</p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
