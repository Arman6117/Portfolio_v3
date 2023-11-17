import React from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoCss3, IoLogoJavascript, IoLogoSass } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { LuGithub } from "react-icons/lu";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";

import SkillsEle from "./SkillsEle";

const SkillContent = () => {
  return (
    <div className="grid grid-cols-2 sm:p-3 sm:grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-12 ">
      <div className="">
        <SkillsEle className="bg-white" title="React.Js">
          <FaReact className="text-sky-500 sm:text-[50px]  text-[30px]"  />
        </SkillsEle>
      </div>
      <div>
        <SkillsEle className="bg-black" title="Next.Js">
          <SiNextdotjs className="text-white sm:text-[50px] text-[30px]"  />
        </SkillsEle>
      </div>
      {/* <div className="sm:hidden w-full h-[1.5px] bg-neutral-600"/> */}
      <div>
        <SkillsEle className="bg-yellow-300" title="JavaScript">
          <IoLogoJavascript className="text-black sm:text-[50px]  text-[30px]"  />
        </SkillsEle>
      </div>
      <div>
        <SkillsEle className="bg-orange-600" title="HTML5">
          <AiFillHtml5 className="text-white sm:text-[50px]   text-[30px]"  />
        </SkillsEle>
      </div>
      <div>
        <SkillsEle className="bg-sky-600" title="CSS3">
          <IoLogoCss3 className="text-white sm:text-[50px] text-[30px] "  />
        </SkillsEle>
      </div>
      <div>
        <SkillsEle className="bg-black" title="Github">
          <LuGithub className="text-white sm:text-[50px]  text-[30px]"  />
        </SkillsEle>
      </div>
      <div>
        <SkillsEle className="bg-cyan-400" title="Tailwind">
          <BiLogoTailwindCss className="text-white sm:text-[50px] text-[30px] "  />
        </SkillsEle>
      </div>
      <div>
        <SkillsEle className="bg-blue-500" title="TypeScript">
          <BiLogoTypescript className="text-white sm:text-[50px] text-[20px] "  />
        </SkillsEle>
      </div>
    </div>
  );
};

export default SkillContent;
