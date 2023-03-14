import { Link } from "react-scroll";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Image from "next/image";

import { HiMenuAlt1, HiX } from "react-icons/hi";
import { ImFacebook, ImTwitter, ImLinkedin } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

import { motion } from "framer-motion";

import content from "../content.json";
import LangToggler from "./Helpers/LangToggler";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { locale } = useRouter();
  const con = content.contents.find((c) => c.locale === locale);

  // prevent scrolling when nav is on
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "scroll");
  }, [nav]);

  return (
    <div className="w-full flex justify-between py-2 items-center shadow-md ">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* mainnav */}
          <div className="flex gap-x-16 items-center">
            <div className="logo text-in z-[999]">
              {/* {locale === "ar" ? (
                <img src="/logo/ar-logo.png" alt="/" />
              ) : (
                <img src="/logo/en-logo.png" alt="/" />
              )} */}
              <img src="/logo/en-logo.png" alt="/" />
              {/* <LogoSvg /> */}
            </div>
            {/* <ul className="hidden md:flex gap-x-6 menu">
              <li>
                <Link href="/">{con.home}</Link>
              </li>
              <li>
                <Link href="/">{con.about}</Link>
              </li>
              <li>
                <Link href="/">{con.services}</Link>
              </li>
              <li>
                <Link href="/">{con.work}</Link>
              </li>
              <li>
                <Link href="/">{con.clients}</Link>
              </li>
              <li>
                <Link href="/">{con.contact}</Link>
              </li>
            </ul> */}
          </div>

          {/* Nav/Language Toggler */}
          <div className="">
            {/* LanguagesToggler */}
            <LangToggler shown="mdUp" />
            {/* Nav Toggler */}
            <div className="md:hidden" onClick={() => setNav(!nav)}>
              {nav ? <HiX /> : <HiMenuAlt1 />}
            </div>
          </div>
        </div>
      </div>
      {/* mobileNav */}
      <div
        className={
          nav
            ? "fixed top-0 h-full w-[85%] bg-white transition-all flex flex-col ease-out duration-500 px-2 pt-16 md:hidden opacity-100 scale-1 z-[99]"
            : "fixed top-0 h-full w-[85%] bg-white transition-all flex flex-col ease-out duration-500 px-2 pt-16 md:hidden opacity-0 pointer-events-none mr-[-100%]"
        }
      >
        {/* <div className="logo text-in mb-6">infinite</div> */}
        <ul className="flex flex-col gap-y-3 p-3 menu">
          <li>
            <Link
              onClick={() => setNav(false)}
              // href="/"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              {con.home}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setNav(false)}
              // href="/"
              to="about"
              spy={true}
              smooth={true}
              offset={-20}
              duration={300}
            >
              {con.about}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setNav(false)}
              // href="/"
              to="services"
              spy={true}
              smooth={true}
              offset={-20}
              duration={300}
            >
              {con.services}
            </Link>
          </li>
          {/* <li onClick={() => setNav(false)}>
            <Link href="/">{con.work}</Link>
          </li> */}
          {/* <li onClick={() => setNav(false)}>
            <Link href="/">{con.clients}</Link>
          </li> */}
          <li>
            <Link
              onClick={() => setNav(false)}
              // href="/"
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

        <div className="social">
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100090908118168"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImFacebook />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/soft_infinite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImTwitter />
            </a>
          </div>
          <div>
            <a
              href="https://wa.me/+249126424865"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineWhatsApp />
            </a>
          </div>
          <div>
            <a
              href="mailto:dev.infinitesoft@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        {/* LanguagesToggler */}
        <LangToggler shown="smOnly" />
      </div>
    </div>
  );
};

export default Navbar;

const LogoSvg = () => {
  const svgVariants = {
    hidden: { rotate: 15, y: -15, opacity: 0 },
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: { duration: 1, yoyo: Infinity },
    },
  };
  // const pathVariants = {
  //   hidden: { opacity: 0.5, pathLength: 0, color: "#ff1616" },
  //   visible: {
  //     color: "#ff1616",
  //     opacity: 1,
  //     pathLength: 0,
  //     transition: {
  //       duration: 2,

  //       // ease: "easeInOut",
  //     },
  //   },
  // };

  // const parentVariants = {
  //   hidden: {},
  //   show: {
  //     transition: {
  //       staggerChildren: 0.4,
  //     },
  //   },
  // };

  return (
    <motion.svg
      className="h-[45px] w-[70px] bg-red-30"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="647.000000pt"
      height="405.000000pt"
      viewBox="0 0 647.000000 405.000000"
      preserveAspectRatio="xMidYMid meet"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <g transform="translate(0.000000,405.000000) scale(0.100000,-0.100000)">
        <motion.path
          fill="#ff1616"
          d="M4080 2854 c-508 -321 -927 -580 -931 -576 -3 4 -210 249 -458 545
-249 296 -458 536 -465 534 -6 -3 -456 -285 -1000 -627 -956 -603 -987 -624
-981 -649 3 -14 20 -77 37 -139 l31 -113 233 -277 c129 -152 238 -278 243
-280 5 -2 22 20 38 49 23 44 52 70 170 159 l141 106 -109 130 c-60 71 -109
131 -109 134 0 5 1262 802 1279 808 7 2 723 -839 728 -856 1 -4 -287 -189
-640 -410 l-641 -404 -54 61 -53 60 -143 -107 c-134 -100 -145 -111 -170 -166
-22 -51 -24 -62 -12 -75 7 -9 99 -118 205 -244 106 -125 194 -227 197 -227 2
0 419 261 926 581 506 319 924 581 928 582 6 2 278 -317 821 -963 l105 -126
989 623 c544 343 994 628 999 633 10 10 -49 242 -73 283 -26 44 -1285 1536
-1296 1535 -5 0 -426 -263 -935 -584z m1284 -559 c190 -225 345 -413 343 -417
-3 -10 -1260 -801 -1275 -802 -6 -1 -174 190 -371 424 -270 320 -356 428 -348
436 7 7 295 190 642 408 601 378 630 395 647 379 9 -10 173 -202 362 -428z
m-2062 -159 l27 -54 58 -7 c32 -4 62 -10 66 -12 5 -3 -12 -27 -38 -53 l-47
-47 11 -58 c6 -31 8 -61 5 -66 -3 -5 -31 4 -63 20 l-57 29 -54 -29 c-29 -16
-55 -29 -58 -29 -2 0 -1 30 3 66 l7 66 -42 43 c-23 24 -40 47 -36 53 3 5 32
12 64 16 l58 7 27 54 c15 30 30 55 35 55 4 0 20 -24 34 -54z"
        />
        <motion.path
          // variants={pathVariants}
          d="M1068 1384 c-122 -92 -141 -111 -167 -162 l-29 -58 43 -49 c24 -28
45 -48 48 -45 2 3 16 28 30 56 22 44 46 66 166 155 77 57 140 107 141 110 0 9
-81 99 -88 98 -4 0 -69 -47 -144 -105z"
        />
        <path
          d="M1230 1186 c-120 -92 -138 -109 -163 -161 l-28 -57 36 -44 c20 -24
38 -44 40 -44 2 0 18 25 35 56 27 46 56 73 172 160 152 115 146 104 89 167
-14 15 -30 27 -35 26 -6 0 -72 -47 -146 -103z"
        />
      </g>
    </motion.svg>
  );
};
