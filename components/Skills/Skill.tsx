import Image, { ImageProps } from "next/image";
import React from "react";

type SkillProps = {
  text: string;
  logo: ImageProps
};

const Skill = ({ text, logo }: SkillProps) => {
  return (
    <div className="shadow-gray-400 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image {...logo} width={64} height={64} alt="CSS" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skill;
