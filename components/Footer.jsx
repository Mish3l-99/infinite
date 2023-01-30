import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import content from "../content.json";

const Footer = () => {
  const { locale } = useRouter();
  const con = content.contents.find((c) => c.locale === locale);

  const year = new Date().getFullYear();

  return (
    <div className="w-full bg-slate-200 text-black py-4">
      <div className="container">
        <div className="grid grid-cols-12 gap-y-4">
          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-start">
            <p className="flex items-center gap-x-2 font-bold">
              {con.rights} {year}
              <span>&#169;.</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end">
            <Image
              alt="/"
              src={"/logo/logo-bw.png"}
              height={30}
              width={60}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
