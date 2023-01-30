import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const LangToggler = (props) => {
  const { locale, locales, asPath } = useRouter();
  const shown = props.shown;
  return (
    <div
      className={
        shown === "mdUp"
          ? "my-auto hidden md:flex mt-auto w-full justify-center items-center mb-4"
          : "mt-auto w-full flex justify-center mb-4 md:hidden"
      }
    >
      <div className="flex flex-row gap-x-1 bg-gray-300 px-2 items-center py-[2px] rounded-md">
        {locales.map((l, i) => {
          return (
            <div
              key={i}
              className={
                l === locale ? "px-[4px] rounded bg-white" : "px-[4px] rounded"
              }
            >
              <Link href={asPath} locale={l}>
                {l === "ar" ? (
                  <img
                    alt="/"
                    className="cursor-pointer"
                    src="/sa.png"
                    width={20}
                  />
                ) : (
                  <img
                    alt="/"
                    className="cursor-pointer"
                    src="/en.png"
                    width={20}
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LangToggler;
