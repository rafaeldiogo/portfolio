import Skill from "./Skill";
import React from "react";
import LogoCSS from "../../public/assets/skills/css.png";
import LogoHTML from "../../public/assets/skills/html.png";
import LogoJavaScript from "../../public/assets/skills/javascript.png";
import LogoNextJS from "../../public/assets/skills/nextjs.png";
import LogoReactJS from "../../public/assets/skills/react.png";
import LogoNode from "../../public/assets/skills/node.png";
import LogoTailwindCSS from "../../public/assets/skills/tailwind.png";

const Index = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center f-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Habilidades
        </p>
        <h2 className="py-4">O que posso fazer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skill logo={LogoCSS} text="CSS" />
          <Skill logo={LogoHTML} text="HTML" />
          <Skill logo={LogoJavaScript} text="Javascript" />
          <Skill logo={LogoNextJS} text="NextJS" />
          <Skill logo={LogoReactJS} text="ReactJS" />
          <Skill logo={LogoNode} text="Node" />
          <Skill logo={LogoTailwindCSS} text="TailwindCSS" />
        </div>
      </div>
    </div>
  );
};

export default Index;
