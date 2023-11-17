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
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgPath,
  url,
  className,
}) => {
  const router = useRouter();

  return (
    <div className=" flex pr-10   ">
      <div className="flex flex-col bg-transparent items-center justify-center  sm:border-2 sm:w-[80%] border-2 px-2 py-10 border-black w-[90%] h-full rounded-xl">
        <div
          className={twMerge(
            `bg-green-500 w-[90%]  rounded-xl h-full py-4 px-2 flex-col flex   justify-center`,
            className
          )}
        >
          <div className="flex items-center pt-2  flex-col justify-center ">
            <div className="mb-1 border-2 group border-neutral-400  p-1 rounded-xl bg-neutral-200 shadow-2xl">
              <Image
                src={imgPath}
                alt={title}
                width={350}
                height={350}
                className="rounded-md shadow-md object-contain "
              />
            </div>
            <div className="mb-10 mt-2">
              <h1 className="text-white font-bold text-4xl md:text-5xl ">
                {title}
              </h1>
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
