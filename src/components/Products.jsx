import mod1 from "../images/customer.png";
import mod2 from "../images/customer.png";
import mod3 from "../images/customer.png";
import mod4 from "../images/customer.png";
import mod5 from "../images/customer.png";
import mod6 from "../images/customer.png";
import mod7 from "../images/customer.png";
import mod8 from "../images/customer.png";
import mod9 from "../images/customer.png";

import { FaShoppingBag } from "react-icons/fa";

function Products() {
  return (
    <div className="bg-purple-200 flex flex-col justify-center items-center">
      <div className="pt-20">
        <p className="text-3xl font-bold text-[#775FB5]">
          1 HCM Software, <span className="text-[#FC8320]">9 HR products,</span>{" "}
          30+ Modules
        </p>
      </div>
      <div className="h-[100%] lg:w-[50%]  grid grid-cols-10 gap-4 grid-row-10 grid-flow-row-dense p-10">
        {/*  */}
        <div className="rounded-md col-span-6 row-span-4 bg-white p-10">
          <div className="flex justify-around">
            <div className="">
              <FaShoppingBag className="bg-orange-100 text-orange-500 h-14 w-14 p-2 rounded-md mb-5" />
              <h1 className="text-2xl font-bold">Recruitment Management</h1>
            </div>
            <div className="">
              <img src={mod1} alt="mod1" className="" />
              <img src={mod1} alt="mod1" className="" />
            </div>
          </div>
        </div>
        <div className=" col-span-2 row-span-4 rounded-md bg-red-500">
          <img src={mod2} alt="mod2" className=" " />
        </div>
        <div className=" col-span-2 row-span-4 rounded-md bg-green-500">
          <img src={mod3} alt="mod3" className="" />
        </div>
        {/*  */}
        <div className="col-span-5 row-span-3 rounded-md bg-sky-500 p-10">
          <img src={mod4} alt="mod4" className="" />
        </div>
        <div className=" col-span-2 row-span-1 rounded-md bg-purple-500">
          <img src={mod5} alt="mod5" className="" />
        </div>
        <div className=" col-span-3 row-span-1 rounded-md bg-cyan-500">
          <img src={mod6} alt="mod6" className="" />
        </div>
        {/*  */}
        <div className=" col-span-2 row-span-3 rounded-md bg-gray-500">
          <img src={mod8} alt="mod8" className="" />
        </div>
        <div className=" col-span-3 row-span-3 rounded-md bg-pink-500">
          <img src={mod9} alt="mod9" className="" />
        </div>
        <div className=" col-span-5 row-span-1 rounded-md bg-blue-500">
          <img src={mod7} alt="mod7" className="" />
        </div>
      </div>
    </div>
  );
}

export default Products;
