import { useRouter } from "next/router";
import React from "react";
import content from "../content.json";

import { GiMoebiusStar } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { MdNextWeek } from "react-icons/md";

const noteIcon = (
  <svg
    aria-hidden="true"
    className="w-5 h-5  dark:text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
    <path
      fillRule="evenodd"
      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const Steps = () => {
  const { locale } = useRouter();

  const righ = locale === "ar" ? "-right-2 md:-right-4" : "-left-2 md:-left-4";
  const righ_b = locale === "ar" ? "border-r" : "border-l";

  const con = content.contents.find((c) => c.locale === locale);

  return (
    <div className="mt-8 w-full py-8">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8">
          <div className="col-span-12 md:col-span-8">
            <h1 className="mt-6 text-in font-bold">{con.how_h}</h1>
            <h1 className="font-bold text-xl md:text-3xl flex items-start gap-x-2 mb-12">
              <GiMoebiusStar className="mt-1" /> <span>{con.handle} :</span>
            </h1>
            <ol
              className={`relative ${righ_b} border-gray-200 dark:border-gray-700 dark:text-gray-400 max-w-[700px]`}
            >
              <li className="mb-10 ml-6">
                <span
                  className={`absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full ${righ} ring-4 ring-white dark:ring-gray-300`}
                >
                  {noteIcon}
                </span>
                <p className="text-gray-600 font-bold text-lg mr-8">
                  {con.stp_1}
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span
                  className={`absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full ${righ} ring-4 ring-white dark:ring-gray-300`}
                >
                  <FaHandshake />
                </span>
                <p className="text-gray-600 mr-8 font-bold text-lg">
                  {con.stp_2}
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span
                  className={`absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full ${righ} ring-4 ring-white dark:ring-gray-300`}
                >
                  <RiComputerLine />
                </span>
                <p className="text-gray-600 mr-8 font-bold text-lg">
                  {con.stp_3}
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span
                  className={`absolute flex items-center justify-center w-8 h-8 bg-green-600 text-green-200 rounded-full ${righ} ring-4 ring-white dark:ring-gray-300`}
                >
                  <BsCheck2Circle />
                </span>
                <p className="text-gray-600 mr-8 font-bold text-lg">
                  {con.stp_4}
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span
                  className={`absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full ${righ} ring-4 ring-white dark:ring-gray-300`}
                >
                  <BiSupport />
                </span>
                <p className="text-gray-600 mr-8 font-bold text-lg">
                  {con.stp_5}
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span
                  className={`absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full ${righ} ring-4 ring-white dark:ring-gray-300`}
                >
                  <MdNextWeek />
                </span>
                <p className="text-gray-600 mr-8 font-bold text-lg">
                  {con.stp_6}
                </p>
              </li>
            </ol>
          </div>
          <div className="col-span-12 md:col-span-4">{/* <Decorr /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
