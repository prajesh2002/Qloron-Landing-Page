const Midcomp = () => {
  return (
    <div className=" max-h-20 py-5 bg-white rounded-md shadow-md -mt-10 mx-5 md:mx-28 lg:mx-60 xl:mx-80 -mb-3 md:-mb-5 lg:-mb-10 hidden md:block z-50 relative">
    {/* <div className=" max-h-20 py-5 bg-gradient-to-br to-[#e6d6f9] from-[#5c4887] text-white md:text-black md:bg-gradient-to-br t md:to-[#ffffff] md:from-[#ffffff]  rounded-md shadow-md -mt-10 mx-5 md:mx-28 lg:mx-60 xl:mx-96 -mb-3 md:-mb-5 lg:-mb-10"> */}
      <div className="grid grid-cols-3 justify-center items-center place-items-center">
        <div className="flex">
          <div className="max-h-20 max-w-20 bg-gradient-to-br to-[#e6d6f9] from-[#5c4887]  rounded-full h-10 w-10 hidden md:block"></div>
          <div className="place-content-end">
            <h1 className="">
              {" "}
              <span className="md:-ml-5 font-bold text-sm md:text-2xl">500+ </span>
              Customers
            </h1>
          </div>
        </div>
        <div className="flex">
          <div className="max-h-20 max-w-20 bg-gradient-to-br to-[#e6d6f9] from-[#5c4887]  rounded-full h-10 w-10 hidden md:block"></div>
          <div className="place-content-end">
            <h1>
              {" "}
              <span className="md:-ml-5 font-bold text-sm md:text-2xl">30000+ </span>
              Users
            </h1>
          </div>
        </div>
        <div className="flex">
          <div className="max-h-20 max-w-20 bg-gradient-to-br to-[#e6d6f9] from-[#5c4887]  rounded-full h-10 w-10 hidden md:block"></div>
          <div className="place-content-end">
            <h1>
              {" "}
              <span className="md:-ml-5 font-bold text-sm md:text-2xl">30+ </span>
              Modules
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midcomp;
