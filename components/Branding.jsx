import { useRouter } from "next/router";
import React from "react";
import { GiMoebiusStar } from "react-icons/gi";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import content from "../content.json";

const Branding = () => {
  const { locale } = useRouter();

  const con = content.contents.find((c) => c.locale === locale);
  return (
    <div>
      {/* <div className="flex flex-col gap-y-4">
        <div className="mr-4 flex items-center gap-x-2">
          <GiMoebiusStar />
          <h1>{con.steppi}</h1>
        </div>
        <MdOutlineSubdirectoryArrowLeft />
        <div className="mr-24">
          <h1>{con.care_det}</h1>
        </div>
        <MdOutlineSubdirectoryArrowLeft />
        <div className="mr-44">
          <h1>{con.your_par}</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Branding;
