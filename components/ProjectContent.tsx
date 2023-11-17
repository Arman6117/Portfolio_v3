import Spotify from "../public/images/Spotify.png";
import Netflix from "../public/images/Netflix.png";
import Keeper from "../public/images/Keeper.png";
import Discord from "../public/images/Discord.png";

import ProjectCard from "./ProjectCard";

const ProjectContent = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col ">
        {/* <div className="w-[100vw] md:-ml-[8vw] sm:-ml-[13vw] xl:-ml-[7vw] hidden sm:block absolute h-[1.5px] bg-neutral-700 rounded-full" />
        <div className="h-[150vh] absolute hidden sm:block left-[50%] w-[1.5px] bg-neutral-700 rounded-full" /> */}
      </div>
      {/* <div className="w-[100vw] mt-10  -ml-[8vw] sm:top-[131rem] top-[126rem] hidden sm:block absolute h-[1.5px] bg-neutral-700 rounded-full" /> */}
      <div className="grid  sm:ml-2 sm:px-0 gap-10  grid-cols-1 sm:grid-cols-1 mt-10  ">
        <div className="relative ">
          <ProjectCard
            title="Spotify"
            imgPath={Spotify}
            url="https://spotify-clone-xi-orcin.vercel.app/"
            className="bg-green-500"
          />
        </div>
        <div className="relative  ">
          <ProjectCard
            title="Netflix"
            imgPath={Netflix}
            url="https://netflix-clone-arman6117.vercel.app/"
            className="bg-rose-800 "
          />
        </div>

        <div className="relative  mt-">
          <ProjectCard
            title="Discord"
            imgPath={Discord}
            url="https://discord-clone-rat4-mt8omaxg2-arman6117.vercel.app/"
            className="bg-blue-700"
          />
        </div>
        <div className="relative  ">
          <ProjectCard
            title="Keeper"
            imgPath={Keeper}
            url="https://keeper-keep-note.vercel.app/"
            className="bg-yellow-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
