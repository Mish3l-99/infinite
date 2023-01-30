import { useRouter } from "next/router";
import React from "react";
import content from "../content.json";

import { GiMoebiusStar } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { SiAltiumdesigner, SiWebmoney } from "react-icons/si";

const Services = () => {
  const { locale } = useRouter();
  const con = content.contents.find((c) => c.locale === locale);

  return (
    <div id="services" className="mt-8 w-full py-8">
      <div className="container">
        <h1 className="font-bold text-xl md:text-3xl flex items-center gap-x-2">
          <GiMoebiusStar /> <span>{con.services} :</span>
        </h1>
        <div className="mt-6 grid grid-cols-12 max-w-[950px] mx-auto gap-4">
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-3 px-4 py-8 items-center border bg-white hover:shadow-in hover:shadow-sm duration-500 ">
            <span>
              <SiAltiumdesigner size={40} className="text-in" />
            </span>
            <h1 className="font-bold">{con.grfc}</h1>
            <p className="p-1 mt-8">{con.grfc_t}</p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-3 px-4 py-8 items-center border bg-white hover:shadow-in hover:shadow-sm duration-500 ">
            <span>
              <SiWebmoney size={40} className="text-in" />
            </span>
            <h1 className="font-bold">{con.webd}</h1>
            <p className="p-1 mt-8">{con.webd_t}</p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-3 px-4 py-8 items-center border bg-white hover:shadow-in hover:shadow-sm duration-500 ">
            <span>
              <IoAppsSharp size={40} className="text-in" />
            </span>
            <h1 className="font-bold">{con.apps}</h1>
            <p className="p-1 mt-8">{con.apps_t}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
