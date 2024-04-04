import bg from "../images/Products/products-bg.png";
import rec1 from "../images/Products/rec1.png";
import rec2 from "../images/Products/rec2.png";
import time from "../images/Products/time.png";
import empl4 from "../images/Products/4empl.png";
import corehr from "../images/Products/corehr.png";
import sortbox from "../images/Products/sortbox.png";
import rs from "../images/Products/rs.png";
import emp_smile from "../images/Products/emp-smile.png";
import empeng1 from "../images/Products/empeng1.png";
import empeng2 from "../images/Products/empeng2.png";
import learn from "../images/Products/learn.png";
import perfo1 from "../images/Products/perfo1.png";
import perfo2 from "../images/Products/perfo2.png";

import { FaShoppingBag } from "react-icons/fa";

function Products() {
  return (
    <div
      // className="bg-gradient-to-r from-purple-100 to-purple-200"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center pb-40 xl:pb-10 md:pl-9 lg:pl-12">
        <div className="pt-20 text-center">
          <p className="text-2xl md:text-3xl font-bold text-[#775FB5]">
            1 HCM Software,{" "}
            <span className="text-[#FC8320]">9 HR products,</span> 30+ Modules
          </p>
        </div>
        <div className="grid grid-cols-12 grid-row-12 grid-flow-row-dense p-10 gap-x-4 md:gap-x-6 gap-y-8 xl:w-3/4">
          {/*  */}
          <div className="rounded-md md:col-span-5 col-span-6 row-span-3 bg-white p-2 py-8 shadow-md duration-300  hover:scale-105">
            <div className="flex justify-around">
              <div className="z-10 w-1/2">
                <div>
                  <FaShoppingBag className="bg-orange-100 text-orange-500 h-14 w-14 p-2 rounded-md mb-5" />
                  <h1 className="text-md md:text-xl lg:text-2xl font-bold">
                    Recruitment Management
                  </h1>
                </div>
              </div>
              <div className="z-20">
                <img src={rec1} alt="mod1" className="" />
                <img src={rec2} alt="mod1" className="" />
              </div>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 row-span-3 rounded-md bg-white  flex flex-col justify-around  p-4 shadow-md duration-300  hover:scale-105">
            <div>
              <img src={time} alt="mod2" className="" />
            </div>
            <div className="">
              <h1 className=" text-md md:text-xl lg:text-2xl font-bold">
                Time & Attendance
              </h1>
            </div>
          </div>

          <div className=" col-span-6 md:col-span-3 row-span-3 rounded-md bg-white  flex flex-col justify-around items-center p-4 shadow-md duration-300  hover:scale-105">
            <img src={empl4} alt="mod3" className="" />
            <h1 className=" text-md md:text-xl lg:text-2xl font-bold">
              Leave Management
            </h1>
          </div>

          {/*  */}

          <div className=" col-span-6 md:col-span-4 row-span-3 md:row-span-2 rounded-md bg-white flex flex-col p-4 justify-center items-center shadow-md duration-300  hover:scale-105">
            <img src={corehr} alt="mod4" className=" max-h-auto max-w-40" />
            <h1 className=" text-lg md:text-xl lg:text-2xl font-bold">
              Core HR
            </h1>
          </div>

          <div
            className=" col-span-6 md:col-span-3 row-span-1 md:row-span-1 rounded-md shadow-md duration-300  hover:scale-105"
            style={{
              backgroundImage: `url(${sortbox})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <img src={sortbox} alt="mod5" className="" /> */}
          </div>

          <div className="col-span-6 md:col-span-4 row-span-1 rounded-md bg-white p-4 flex flex-col items-center justify-center shadow-md duration-300  hover:scale-105">
            <img src={rs} alt="mod6" className="" />
            <h1 className=" text-md md:text-xl lg:text-2xl font-bold">
              {" "}
              Payroll & <span className=" font-normal"> expenses</span>
            </h1>
          </div>

          {/*  */}

          <div className="col-span-6 md:col-span-3 row-span-5 rounded-md bg-white p-4 flex flex-col justify-center items-center shadow-md duration-300  hover:scale-105">
            <img src={learn} alt="mod9" className="" />
            <h1 className=" text-md md:text-xl lg:text-2xl font-bold">
              Learning Management
            </h1>
          </div>

          <div className="col-span-6 md:col-span-4 row-span-5 rounded-md bg-white flex flex-col justify-center items-center p-4 space-y-3 shadow-md duration-300  hover:scale-105">
            <div className="flex items-center justify-between w-full">
              <img src={perfo1} alt="mod7" className="" />
              <img
                src={perfo2}
                alt="mod7"
                className="max-w-12 md:max-w-24 lg:max-w-40"
              />
            </div>
            <div>
              <h1 className=" text-md md:text-xl lg:text-2xl font-bold">
                Performance Management
              </h1>
            </div>
          </div>

          <div className="col-span-10 md:col-span-4 row-span-4 rounded-md bg-white flex p-4 py-10 justify-center shadow-md duration-300  hover:scale-105">
            <div className=" flex flex-col">
              {/* <FaSmile className="text-orange-200"/> */}
              <img src={emp_smile} alt="" className=" w-8" />
              <h1 className="text-md md:text-xl lg:text-2xl font-bold md:w-1/2">
                Employee Engagement
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <img src={empeng1} alt="mod8" className="max-w-24 max-h-24" />
              <img src={empeng2} alt="mod8" className="max-w-24 max-h-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
