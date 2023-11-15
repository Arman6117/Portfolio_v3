"use client";

import ProjectCard from "./ProjectCard";


const ProjectContent = () => {

  return (
    <div className="">
      <div className="flex flex-col ">

    <div>
      
    </div>
     <div className='w-[80%] hidden sm:block absolute h-[1.5px] bg-neutral-700 rounded-full'/>
        <div className="h-screen absolute hidden sm:block left-[50%] w-[1.5px] bg-neutral-700 rounded-full"/>
      </div>
      <div className="grid -ml-9 sm:ml-2 justify-center sm:px-0  grid-cols-1 sm:grid-cols-2 mt-10 gap-7 ">
      <div>
        <ProjectCard/>
      </div>
      </div>
    </div>
  );
};

export default ProjectContent;
