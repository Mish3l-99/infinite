import React from "react";
import { Link } from "react-scroll";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import content from "../content.json";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();
  const { locale } = router;
  const con = content.contents.find((c) => c.locale === locale);

  const goToContactForm = () => {
    router.push("/#contact");
  };

  return (
    <div id="home" className="w-full py-8">
      <div className="container">
        <div className="hidden md:block py-4">
          <ul className="hidden md:flex gap-x-6 menu">
            <li className="hover:cursor-pointer">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
              >
                {con.home}
              </Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-20}
                duration={300}
              >
                {con.about}
              </Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-20}
                duration={300}
              >
                {con.services}
              </Link>
            </li>

            <li className="hover:cursor-pointer">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-20}
                duration={300}
              >
                {con.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-12 gap-y-8 gap-x-4">
          <div className="col-span-12 md:col-span-6 mt-6">
            <hr className="my-3" />
            <h1 className="font-bold text-xl md:text-3xl">{con.sol}</h1>
            <h1 className="font-bold text-lg md:text-2xl mt-3 text-in">
              {con.partn}
            </h1>
            <p className="max-w-[500px] mt-4 p-3 text-lg md:text-xl bg-gray-100 hover:bg-white hover:scale-[1.04] duration-500 rounded">
              {con.hero_k}
            </p>
            <div className="mt-12 flex items-center gap-x-4">
              <button className="text-in font-bold underline text-xl">
                <Link href="/">{con.serv}</Link>
              </button>
              <motion.button
                onClick={() => goToContactForm()}
                // initial={{ scale: 0.8 }}
                animate={{
                  scale: [1, 0.8, 1],
                  boxShadow: "0px 0px 8px #d21f22",
                }}
                transition={{
                  duration: 1.3,
                  repeatDelay: 2,
                  repeat: Infinity,
                }}
                className="text-xl px-3 py-1 bg-in border-[#ecf0f3] border shadow-md shadow-gray-500 rounded text-white"
              >
                {con.talk}
              </motion.button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="w-full h-[200px] md:h-[300px] mx-auto relative shadow-sm shadow-gray-600 hover:scale-95 duration-500">
              <Image
                alt="/"
                src="/mock-up.png"
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

export default Hero;
