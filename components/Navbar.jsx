import Image from "next/image";
import Logo from "../public/assets/navLogo.png";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-2xl shadow-white z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image alt="/" src={Logo} width={80} height={26} />
        <ul className="md:flex hidden">
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Sobre</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">
              Habilidades
            </li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Projetos</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Desafios</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Contato</li>
          </Link>
        </ul>
        <button onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={26} />
        </button>
      </div>
      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-white/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md-[45%] h-screen bg-[#000000] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image alt="/" src={Logo} width={80} height={18} />
              <button
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Construiremos algo que desafie o tempo e as expectativas.
              </p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Sobre</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Habilidades</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projetos</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Desafios</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contato</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="tracking-widest text-white">
                Vamos nos conectar :)
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
