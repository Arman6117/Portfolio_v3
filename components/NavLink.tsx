"use client";

interface NavLinkProps {
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ children }) => {
  return (
    <div className="cursor-pointer group text-white sm:text-neutral-600 font-semibold text-3xl  sm:text-[16px] sm:leading-5">
      {children}
      <div className="w-0 group-hover:w-7 transition-all absolute rounded-full h-[3px] bg-[#ff6a69]"/>
    </div>
  );
};

export default NavLink;
