import React from "react";
import { Link } from "react-router-dom";
import { footerData } from "../../data";

const Footer = () => {
  return (
    <div className="xl:px-32">
      <div className="flex flex-col justify-start pl-5 md:pl-0 gap-5 md:gap-0 md:flex-row md:justify-center md:items-start ">
        {footerData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full md:w-[25%]"
              // style={{ width: `[${100 / footerData.length}%]` }}
            >
              <h3 className="font-bold pb-2 select-none">{item.title}</h3>
              <div>
                {item.sub.length === 1
                  ? item.sub.map((item, index) => {
                      return (
                        <div key={index} className="text-sm pb-1 select-none">
                          {item}
                        </div>
                      );
                    })
                  : item.sub.map((item, index) => {
                      return (
                        <div key={index} className="text-sm pb-1 select-none">
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
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:py-10">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
          <h2 className="text-3xl font-bold font-antonio text-blue-900">
            STORE
          </h2>
          <p className="text-xs pb-10 md:pb-0">
            Copyright 2023 All Rights Reserved
          </p>
        </div>
        <img
          src="/img/payment.png"
          alt="payment"
          className="pt-5 md:pt-0 pb-5 md:pb-0 w-[90%] md:w-[40%]"
        />
      </div>
    </div>
  );
};

export default Footer;
