"use client";

import { FormEventHandler, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast"; 
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [EmailForm, setEmailForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const resetForm = () => {
    setEmailForm({
      ...EmailForm,
      email: "",
      name: "",
      message: "",
      subject: "",
    });
    // setEmailForm({...EmailForm,email:''})
  };

  const sendEmail: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cqwrf4f",
        "template_apka79n",
        e.currentTarget,
        "rFahnMuuydWo8Bmfv"
      )
      .then(
        (response) => {
          resetForm();
          toast.success('Message sent successfully')
        },
        (error) => {
          resetForm();
          toast.error(error.message);
        }
      );
  };


  return (
    <div className="w-[26rem] relative right-12   sm:scale-100 scale-[.65] xs:scale-75 mt-5 ml-14 rounded-md h-[32rem] shadowForm ">
      <div className=" rounded-md w-[26rem] h-[32rem]    bg-neutral-100 border-[1.5px] border-neutral-500">
        <form className="" onSubmit={sendEmail}>
          <div className="flex flex-col justify-center space-y-10 py-12 px-10">
            <div className="flex flex-col space-y-8">
              <div className="flex justify-between items-center text-center flex-row space-x-8">
                <label className="font-mono font-semibold  text-lg">Name</label>
                <input
                  value={EmailForm.name}
                  name="from_name"
                  onChange={(e) =>
                    setEmailForm({ ...EmailForm, name: e.target.value })
                  }
                  className="outline-none font-normal text- p-1  border-[1.5px] border-neutral-500 rounded-md bg-neutral-100 w-[70%]"
                />
              </div>

              <div className="flex justify-between items-center text-center flex-row space-x-8">
                <label className="font-mono font-semibold  text-lg">
                  Email
                </label>
                <input
                  value={EmailForm.email}
                  name="from_email"
                  onChange={(e) =>
                    setEmailForm({ ...EmailForm, email: e.target.value })
                  }
                  className="outline-none font-normal text- p-1  border-[1.5px] border-neutral-500 rounded-md bg-neutral-100 w-[70%]"
                />
              </div>

              <div className="flex justify-between items-center text-center flex-row space-x-8">
                <label className="font-mono font-semibold  text-lg">
                  Subject
                </label>
                <input
                  value={EmailForm.subject}
                  name="subject"
                  onChange={(e) =>
                    setEmailForm({ ...EmailForm, subject: e.target.value })
                  }
                  className="outline-none font-normal text- p-1  border-[1.5px] border-neutral-500 rounded-md bg-neutral-100 w-[70%]"
                />
              </div>
              <div className="flex justify-between items-center text-center flex-row space-x-8">
                <textarea
                  value={EmailForm.message}
                  onChange={(e) =>
                    setEmailForm({ ...EmailForm, message: e.target.value })
                  }
                  rows={7}
                  name="message"
                  className="outline-none font-normal text- p-1  border-[1.5px] border-neutral-500 rounded-md bg-neutral-100 w-[100%]"
                />
              </div>
            </div>
          </div>
          <div className="relative float-right mr-10">
            <button
              // type="submit"
              className="px-4 font-semibold bg-[#ffb9f0] shadowFormBtn text-lg rounded-md "
            >
              Let's Talk!!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
