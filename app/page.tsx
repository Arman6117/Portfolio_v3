import HeroContent from "@/components/HeroContent";
import Logo from "@/components/Logo";
import MobNavbar from "@/components/MobNavbar";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="sm:px-24 px-10 flex flex-col space-y-48 xl:space-y-56">
      <section className="">
        <div className="flex justify-between  sm:mt-5">
          <div className="mt-1">
            <Logo />
          </div>
          <div className=" ">
            <div className="hidden sm:block">
              <Navbar />
            </div>
            <div className="sm:hidden  bg-lack  ml-5 ">
              <MobNavbar />
            </div>
          </div>
        </div>
      </section>
      <section className="  ">
        <div className="">
          <HeroContent />
        </div>
      </section>
    </main>
  );
}
