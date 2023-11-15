interface ProjectCardProps {
  title: string;
  image: string;
}

const ProjectCard = () => {
  return (
    <div className="sm:hidden bg-blac flex justify-center ">
      <div className="flex flex-col bg-green-500 w-[80%] h-60 rounded-xl">
        <div></div>
      </div>
    </div>
  );
};

export default ProjectCard;
