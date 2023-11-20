"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { CiShare1 } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";

interface ProjectCardProps {
  title: string;
  imgPath: StaticImageData;
  url: string;
  className: string;
  description: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgPath,
  url,
  className,
  description,
}) => {
  const router = useRouter();

  return (
    <div className=" flex    ">
      <div
        className={twMerge(
          `bg-green-500 w-[100%] shadow-lg items-center rounded-xl h-full py-4  flex justify-center`,
          className
        )}
      >
        <div>
          <div className="flex flex-col md:flex-row space-x-7 items-center py-3 group cursor-pointer justify-center ">
            <div className="mb-1  rounded-xl  ">
              <Image
                src={imgPath}
                alt={title}
                width={550}
                height={550}
                className="rounded-md   sm:group-hover:right-[0px] md:top-0 top-[60px] transition-all   sm:relative sm:group-hover:top-0 sm:-right-[0px] md:-right-[175px]   "
              />
            </div>
            <div className="mb-0 mt-2 flex sm:px-4 text-start  md:text-start sm:text-center flex-col space-y-5">
              <h1 className="text-white sm:opacity-0 group-hover:block   md:group-hover:right-[0px] sm:-right-[0px] md:top-0 sm:-top-[250px] md:right-[260px] sm:group-hover:opacity-100 transition-all relative sm:group-hover:top-0 font-bold text-4xl md:text-5xl ">
                {title}
              </h1>
              <p className="text-white sm:opacity-0 sm:group-hover:block  md:group-hover:right-[0px] sm:-top-[200px] md:top-0  sm:group-hover:top-0  md:right-[260px] sm:group-hover:opacity-100 transition-all relative   text- md:text-sm font-light">
                {description}
              </p>
            </div>
          </div>
          <div className="flex space-x-10 scale-[.7] sm:scale-100 xs:justify-center xs:space-x-40  mb-2 ">
            <button
              className="px-2 py-1 space-x-2 flex rounded-lg border-2 border-neutral-100 "
              onClick={() => router.push(url)}
            >
              <CiShare1 size={22} className="text-neutral-100 mt-0 font-bold" />
              <span className="text-neutral-100">Visit</span>
            </button>
            <button
              className="px-2 py-1  space-x-2 flex rounded-lg border-2 border-neutral-100 "
              onClick={() =>
                router.push(`https://github.com/Arman6117/${title}`)
              }
            >
              <IoLogoGithub
                size={22}
                className="text-neutral-100 mt-0 font-bold"
              />
              <span className="text-neutral-100">Code</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
