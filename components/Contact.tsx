import React from "react";
import EmailForm from "./EmailForm";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <div className="mt-20 w-full h-full">
      <Toaster/>

      <div className="flex md:flex-row flex-col space-x-0 space-y-10 justify-center sm:justify-normal items-center  sm:space-x-28">
        <div className="flex flex-col p-2">
          <h1 className="font-semibold text-3xl">Contact</h1>
          <div className="mt-20 ">
            <h1 className="font-black   text-neutral-900 text-5xl s md:pr-16 leading-snug">
              Let's create <br className="hidden md:block" /> something
              <br className="hidden md:block"  /> great
              <br className="hidden md:block" /> together
            </h1>
          </div>
        </div>
        <div>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
