import { useRouter } from "next/router";
import React from "react";
import content from "../content.json";

import { GiMoebiusStar } from "react-icons/gi";
import Image from "next/image";

const About = () => {
  const { locale } = useRouter();
  const con = content.contents.find((c) => c.locale === locale);

  return (
    <div id="about" className="mt-8 w-full py-8">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8">
          <div className="col-span-12 md:col-span-8">
            <h1 className="font-bold text-xl md:text-3xl flex items-center gap-x-2">
              <GiMoebiusStar /> <span>{con.abt} :</span>
            </h1>
            <p className="mt-6">{con.abt_txt}</p>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col items-start justify-center">
            <div className="w-9/12  h-[150px] md:w-[200px] md:h-[110px] mx-auto relative ">
              <Image
                alt="/"
                src={"/logo/logo-bw.png"}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
