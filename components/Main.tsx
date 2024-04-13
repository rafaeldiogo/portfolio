import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import React from "react";

const Main = () => {
  return (
    <div className="w-full h-screen text-center text-white">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-white">
            Vamos construir algo juntos :)
          </p>
          <h2 className="py-4 text-white">
            Oi, meu nome é <span className="text-[#5651e5]">Rafael Diogo</span>
          </h2>
          <h1 className="py-2 text-white">Desenvolvedor Front-End</h1>
          <p className="py-4 text-white max-w-[70%] m-auto">
            Sou um desenvolvedor front-end apaixonado por criar interfaces web
            que sejam ao mesmo tempo bonitas e funcionais. Também tenho um pouco
            de experiência em design, o que me permite oferecer uma visão da
            experiência do usuário. Atualmente, estou focado em criar aplicações
            web, enquanto aprendo o framework Flutter para desenvolver
            aplicativos mobile.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
