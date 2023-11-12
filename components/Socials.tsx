"use client";

import { BsGithub, BsLinkedin } from "react-icons/bs";

const Socials = () => {
  const openLinkInNewTab = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="flex mt-10 space-x-6 -ml-12   ">
      <div className="group flex">
        <div className="w-14 h-14 border-2 border-black rounded-md p-1 relative -right-[61px] group-hover:bg-black transition-colors" />
        <div className="w-14 h-14 bg-black z-10 justify-center flex items-center rounded-md ">
          <BsGithub
            onClick={() => openLinkInNewTab("https://github.com/Arman6117")}
            size={51}
            className=" text-white rounded-md bg-black p-2 group-hover:bg-white group-hover:text-black cursor-pointer transition-colors"
          />
        </div>
      </div>
      <div className="group flex">
        <div className="w-14 h-14 border-2 border-black rounded-md p-1 relative -right-[61px] group-hover:bg-black transition-colors" />
        <div className="w-14 h-14 bg-black z-10 justify-center flex items-center rounded-md ">
          <BsLinkedin
            onClick={() =>
              openLinkInNewTab(
                "https://www.linkedin.com/in/arman-patel-4aa503201/"
              )
            }
            size={51}
            className=" text-white rounded-md bg-black p-2 group-hover:bg-white group-hover:text-black cursor-pointer transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

export default Socials;
