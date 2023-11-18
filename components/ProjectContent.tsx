"use client";
import Spotify from "../public/images/Spotify.png";
import Netflix from "../public/images/Netflix.png";
import Keeper from "../public/images/Keeper.png";
import Discord from "../public/images/Discord.png";

import ProjectCard from "./ProjectCard";
import { IoLogoGithub } from "react-icons/io";
import Contact from "./Contact";

const ProjectContent = () => {
  const handleClick = () => {
    window.open("https://github.com/Arman6117", "_blank");
  };
  return (
    <div className="h-screen w-screen ">
      {/* <div className="w-[100vw] mt-10  -ml-[8vw] sm:top-[131rem] top-[126rem] hidden sm:block absolute h-[1.5px] bg-neutral-700 rounded-full" /> */}
      <div className="flex flex-col sm:ml-2 sm:px-0 gap-10  mt-10  ">
        <div className="relative ">
          <ProjectCard
            title="Spotify"
            imgPath={Spotify}
            url="https://spotify-clone-xi-orcin.vercel.app/"
            className="bg-green-500"
          />
        </div>
        <div className="bg-black w-[78%] -ml-1 h-[1.5px]" />
        <div className="relative  ">
          <ProjectCard
            title="Netflix"
            imgPath={Netflix}
            url="https://netflix-clone-arman6117.vercel.app/"
            className="bg-rose-800 "
          />
        </div>
        <div className="bg-black w-[78%] -ml-1 h-[1.5px]" />

        <div className="relative  mt-">
          <ProjectCard
            title="Discord"
            imgPath={Discord}
            url="https://discord-clone-rat4-mt8omaxg2-arman6117.vercel.app/"
            className="bg-blue-700"
          />
        </div>
        <div className="bg-black w-[78%] -ml-1 h-[1.5px]" />

        <div className="relative  ">
          <ProjectCard
            title="Keeper"
            imgPath={Keeper}
            url="https://keeper-keep-note.vercel.app/"
            className="bg-yellow-500"
          />
        </div>
        <div className="bg-black w-[78%] -ml-1 h-[1.5px]" />
      </div>
      <div className="mt-20 md:ml-[300px] xs:ml-[50px]  ">
        <button
          className="rounded-full group hover:border-2 transition-colors hover:bg-black  flex space-x-7 border-2 bg-transparent px-5 sm:px-10 py-2 border-black "
          onClick={handleClick}
        >
          <IoLogoGithub
            className="text-black group-hover:text-white"
            size={30}
          />
          <span className="text-xl group-hover:text-white">
            See All Projects
          </span>
        </button>
      </div>
      <div className="w-screen h-screen">
        <Contact />
      </div>
    </div>
  );
};

export default ProjectContent;
