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
    <>
    
    <div className="h-screen w-screen sm:pr-[207px] ">
      {/* <div className="w-[100vw] mt-10  -ml-[8vw] sm:top-[131rem] top-[126rem] hidden sm:block absolute h-[1.5px] bg-neutral-700 rounded-full" /> */}
      <div className="flex flex-col mr-16 sm:mr-0 sm:ml-2 sm:px-0 gap-10  mt-10  ">
        <div className="relative ">
          <ProjectCard
            title="Spotify"
            imgPath={Spotify}
            url="https://spotify-clone-xi-orcin.vercel.app/"
            className="bg-green-500"
            description={
              <>
                A dynamic web replica of the renowned music 
                <br className="hidden sm:block" /> streaming
                platform, Spotify.
                <br className="hidden sm:block"/>
                This project encapsulates key features such as <br className="hidden sm:block" /> song
                playback, playlists,and user authentication,
                <br className="hidden sm:block" /> mirroring the original Spotify’s user experience.
              </>
            }
          />
        </div>

        <div className="relative  ">
          <ProjectCard
            title="Netflix"
            imgPath={Netflix}
            url="https://netflix-clone-arman6117.vercel.app/"
            className="bg-rose-800 "
            description={
              <>
                An interactive web-based imitation of the globally recognized{" "}
                <br  className="hidden sm:block" />
                streaming service, Netflix.
                <br  className="hidden sm:block" />
                This project incorporates essential functionalities <br  className="hidden sm:block" /> such
                as video streaming, user profile management, user sign-in,{" "}
                <br  className="hidden sm:block" />
                and tailored recommendations, reflecting the <br  className="hidden sm:block" /> original
                Netflix's immersive experience.
              </>
            }
          />
        </div>

        <div className="relative  mt-">
          <ProjectCard
            title="Discord"
            imgPath={Discord}
            url="https://discord-clone-rat4-mt8omaxg2-arman6117.vercel.app/"
            className="bg-blue-700"
            description={
              <>
                An interactive web-based imitation of the widely-used <br  className="hidden sm:block" />{" "}
                communication application, Discord.
                <br  className="hidden sm:block" /> This project incorporates essential functionalities such
                as <br  className="hidden sm:block" /> text and voice channels, user sign-in, and private
                messaging,
                <br  className="hidden sm:block" /> reflecting the original Discord’s interactive experience.
              </>
            }
          />
        </div>

        <div className="relative  ">
          <ProjectCard
            title="Keeper"
            imgPath={Keeper}
            url="https://keeper-keep-note.vercel.app/"
            className="bg-yellow-500"
            description={
              <>
                An intuitive web-based application for note-taking.
                <br  className="hidden sm:block" />
                This project integrates key features such as creating,
                <br  className="hidden sm:block" />
                and deleting notes, offering a user-friendly platform
                <br  className="hidden sm:block" />
                for managing important information. It mirrors the simplicity
                <br  className="hidden sm:block" />
                and efficiency of traditional note-taking, while adding the
                <br  className="hidden sm:block" />
                convenience and accessibility of digital storage.
              </>
            }
          />
        </div>
      </div>
      <div className="mt-20 md:ml-[350px] xs:ml-[50px]  ">
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
      <div className=" mt-10 lg:mr-0 lg:ml-10 mr-10">
        <Contact />
      </div>
    </div>
    </>
  );
};

export default ProjectContent;
