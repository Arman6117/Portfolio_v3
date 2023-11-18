const EmailForm = () => {
  return (
    <div className="w-[26rem] relative right-12   sm:scale-100 scale-[.6] xs:scale-75 mt-5 ml-10 rounded-md h-[32rem] shadowForm ">
      <div className=" rounded-md w-[26rem] h-[32rem]    bg-neutral-100 border-[1.5px] border-neutral-500">
        <div className="">
          <div className="flex flex-col justify-center space-y-10 py-12 px-10">
            <div className="flex flex-col space-y-8">
              <div className="flex justify-between items-center text-center flex-row space-x-8">
                <label className="font-mono font-semibold  text-lg">Name</label>
                <input className="outline-none font-normal text- p-1  border-[1.5px] border-neutral-500 rounded-md bg-neutral-100 w-[70%]" />
              </div>

              <div className="flex justify-between items-center text-center flex-row space-x-8">
                <label className="font-mono font-semibold  text-lg">
                  Email
                </label>
                <input className="outline-none font-normal text- p-1  border-[1.5px] border-neutral-500 rounded-md bg-neutral-100 w-[70%]" />
              </div>

              <div className="flex justify-between items-center text-center flex-row space-x-8">
                <label className="font-mono font-semibold  text-lg">
                  Subject
                </label>
                <input className="outline-none font-normal text- p-1  border-[1.5px] border-neutral-500 rounded-md bg-neutral-100 w-[70%]" />
              </div>
              <div className="flex justify-between items-center text-center flex-row space-x-8">
                <textarea rows={7}  className="outline-none font-normal text- p-1  border-[1.5px] border-neutral-500 rounded-md bg-neutral-100 w-[100%]" />
              </div>
            </div>
          </div>
          <div className="relative float-right mr-10">
            <button type="submit" className="px-4 font-semibold bg-[#ffb9f0] shadowFormBtn text-lg rounded-md ">Let's Talk!!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
