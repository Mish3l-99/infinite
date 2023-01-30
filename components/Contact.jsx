import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BsQuestionSquare } from "react-icons/bs";
import { GiMoebiusStar } from "react-icons/gi";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import content from "../content.json";

const Contact = () => {
  const { locale } = useRouter();
  const brdr = locale === "ar" ? "rounded-l" : "rounded-r";

  const con = content.contents.find((c) => c.locale === locale);

  return (
    <div id="contact" className="w-full py-8 bg-white">
      <div className="container">
        <div className="bg-black text-gray-200 rounded shadow-xl shadow-gray-500">
          <div className="grid grid-cols-12 ">
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center py-4 items-center">
              <div>
                <Image src="/icons/call.gif" alt="/" height={30} width={30} />
              </div>
              <div className="flex flex-col items-start gap-y-3 p-6">
                <div className="flex items-start gap-x-2">
                  <BsQuestionSquare className="w-12 mt-1" />
                  <h2 className="flex-1">{con.qn_1}</h2>
                </div>
                <div className="flex items-start gap-x-2">
                  <BsQuestionSquare className="w-12 mt-1" />
                  <h2 className="flex-1">{con.qn_2}</h2>
                </div>
                <div className="flex items-start gap-x-2">
                  <BsQuestionSquare className="w-12 mt-1" />
                  <h2 className="flex-1">{con.qn_3}</h2>
                </div>

                <div className="flex items-start gap-x-2">
                  <BsQuestionSquare className="w-12 mt-1" />
                  <h2 className="flex-1">{con.qn_4}</h2>
                </div>
                <div className="flex items-start gap-x-2">
                  <BsQuestionSquare className="w-12 mt-1" />
                  <h2 className="flex-1">{con.qn_5}</h2>
                </div>

                <div className="flex items-start gap-x-2 mt-6 text-in">
                  <GiMoebiusStar />
                  <h2>{con.ans}</h2>
                </div>
              </div>
              <div className="flex gap-x-3 mt-2">
                <div className="hover:text-blue-700 duration-500 ease-out hover:scale-90">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <AiFillFacebook size={30} />
                  </a>
                </div>

                <div className="hover:text-green-700 duration-500 ease-out hover:scale-90">
                  <a
                    href="https://wa.me/+249126424865"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineWhatsApp size={30} />
                  </a>
                </div>
                <div className="hover:text-blue-400 duration-500 ease-out hover:scale-90">
                  <a
                    href="https://twitter.com/soft_infinite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillTwitterSquare size={30} />
                  </a>
                </div>
                <div className="hover:text-red-700 duration-500 ease-out hover:scale-90">
                  <a
                    href="mailto:dev.infinitesoft@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdEmail size={30} />
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`col-span-12 md:col-span-6 bg-gray-300 ${brdr} p-4 text-black`}
            >
              <form
                action="https://getform.io/f/01f7ce47-e842-47b4-bfdb-6aaa99c1f8d8"
                method="POST"
                encType="multipart/form-data"
                className="flex flex-col gap-y-3"
              >
                <div className="flex items-center gap-x-2 font-bold">
                  <GiMoebiusStar />
                  <h1>{con.filll} :</h1>
                </div>
                <input
                  className="px-3 py-[2px] rounded placeholder:text-black focus:outline-none"
                  type="text"
                  name="name"
                  placeholder={con.name}
                />
                <input
                  className="px-3 py-[2px] rounded placeholder:text-black focus:outline-none"
                  type="phone"
                  name="phone"
                  placeholder={con.phone}
                />
                <input
                  className="px-3 py-[2px] rounded placeholder:text-black focus:outline-none"
                  type="email"
                  name="email"
                  placeholder={con.email}
                />
                <input
                  className="px-3 py-[2px] rounded placeholder:text-black focus:outline-none"
                  type="text"
                  name="subject"
                  placeholder={con.subject}
                />
                <textarea
                  rows={3}
                  className="px-3 py-[2px] rounded placeholder:text-black focus:outline-none"
                  placeholder={con.message}
                  name="message"
                />
                <div className="flex flex-col px-3">
                  <label htmlFor="">{con.attach}</label>
                  <input
                    className="px-3 py-[2px] rounded placeholder:text-black focus:outline-none"
                    type="file"
                    name="attach"
                    // placeholder={con.attach}
                  />
                </div>
                <div className="flex justify-center mt-4">
                  <button className="py-[3px] px-6 bg-in rounded text-white">
                    {con.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
