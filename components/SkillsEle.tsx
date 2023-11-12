import { twMerge } from "tailwind-merge";
interface SkillsEleProps {
  children: React.ReactNode;
  className: string;
  title: string;
}

const SkillsEle: React.FC<SkillsEleProps> = ({
  children,
  className,
  title,
}) => {
  return (
    <div className="flex flex-col space-y-7 items-center text-center mr-11 ">
      <div className="flex">
        <div className="sm:w-20 sm:h-20 h-14 w-14 border-[2.5px] border-black rounded-xl p-1 relative -right-[68px] top-3 group-hover:bg-black transition-colors" />
        <div
          className={twMerge(
            `sm:w-20 sm:h-20 w-14 h-14 border-[2.5px] border-black z-10 justify-center flex items-center rounded-xl `,
            className
          )}
        >
          {children}
        </div>
      </div>
      <div className=" ml-16 hidden sm:block" >
        <h1 className="font-bold md:text-xl">{title}</h1>
      </div>
    </div>
  );
};

export default SkillsEle;
