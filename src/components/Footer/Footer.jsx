import React from "react";
import { Link } from "react-router-dom";
import { footerData } from "../../data";

const Footer = () => {
  return (
    <div className="flex justify-center items-start xl:px-32">
      {footerData.map((item, index) => {
        return (
          <div key={index} style={{ width: `${100 / footerData.length}%` }}>
            <h3 className="font-bold pb-2">{item.title}</h3>
            <div>
              {item.sub.length === 1
                ? item.sub.map((item, index) => {
                    return (
                      <div key={index} className="text-sm pb-1">
                        {item}
                      </div>
                    );
                  })
                : item.sub.map((item, index) => {
                    return (
                      <div key={index} className="text-sm pb-1">
                        <Link to={item.replace(" ", "").toLowerCase()}>
                          {item}
                        </Link>
                      </div>
                    );
                  })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
