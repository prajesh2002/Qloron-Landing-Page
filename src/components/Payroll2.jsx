// import img from "../images/payroll.png";
// const Payroll = () => {
//   return (
//     <div className=" bg-gradient-to-l from-blue-50 to-purple-100 h-full py-5 px-2 lg:px-10 text-center">
//       <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-5">
//         More from <span className=" text-orange-500">Sortboxs</span> Payroll
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-8 lg:mx-28 text-left">
//         <div className=" bg-white p-5 rounded-md">
//           <img src={img} alt="" />
//           <h1 className="font-bold text-2xl mb-2 w-48">Department & Teams</h1>
//           Organize your employees in departments for easy management. Create
//           custom user roles from scratch, or with permissions copied from
//           existing ones.{" "}
//         </div>
//         <div className=" bg-white p-5 rounded-md">
//           <img src={img} alt="" />
//           <h1 className="font-bold text-2xl mb-2 w-48">Department & Teams</h1>
//           Organize your employees in departments for easy management. Create
//           custom user roles from scratch, or with permissions copied from
//           existing ones.{" "}
//         </div>
//         <div className=" bg-white p-5 rounded-md">
//           <img src={img} alt="" />
//           <h1 className="font-bold text-2xl mb-2 w-48">Department & Teams</h1>
//           Organize your employees in departments for easy management. Create
//           custom user roles from scratch, or with permissions copied from
//           existing ones.{" "}
//         </div>
//       </div>
//       <button className="bg-orange-500 text-white px-4 py-3 my-4 rounded-lg">
//         View More
//       </button>
//     </div>
//   );
// };

// export default Payroll;

import { useState } from "react";
import img from "../images/Payroll2/payroll.png";
import bg from "../images/Payroll2/payroll-bg.png";

const Payroll2 = () => {
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(true);
  };

  const handleClose = () => {
    setShowMore(false);
  };

  return (
    // <div className="bg-gradient-to-l from-blue-50 to-purple-200 h-full py-5 px-2 lg:px-10 text-center">
    <div
      className="min-h-screen my-5 md:pb-44 px-2 lg:px-10 text-center place-content-center py-10 pt-28 md:pt-12 pb-28 lg:pb-24"
      style={{
        backgroundImage: `url(${bg})`,
        // backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center pt-10 lg:pt-0">
        More from <span className="text-[#FC8320]">Sortboxs</span> Payroll
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-x-20 mx-8 lg:mx-16 xl:mx-40 text-left my-6">
        <div className="bg-white p-5 rounded-md payroll-item">
          <div className="content py-5">
            <img src={img} alt="" />
            <h1 className="font-bold text-2xl mb-2 w-48">Department & Teams</h1>
            Organize your employees in departments for easy management. Create
            custom user roles from scratch, or with permissions copied from
            existing ones.
          </div>
        </div>
        <div className="bg-white p-5 rounded-md payroll-item">
          <div className="content">
            <img src={img} alt="" />
            <h1 className="font-bold text-2xl mb-2 w-48">Department & Teams</h1>
            Organize your employees in departments for easy management. Create
            custom user roles from scratch, or with permissions copied from
            existing ones.
          </div>
        </div>
        <div className="bg-white p-5 rounded-md payroll-item">
          <div className="content">
            <img src={img} alt="" />
            <h1 className="font-bold text-2xl mb-2 w-48">Department & Teams</h1>
            Organize your employees in departments for easy management. Create
            custom user roles from scratch, or with permissions copied from
            existing ones.
          </div>
        </div>
        <div
          className={`bg-white p-5 rounded-md ${
            showMore ? "" : "hidden"
          } payroll-item`}
        >
          <div className="content">
            <img src={img} alt="" />
            <h1 className="font-bold text-2xl mb-2 w-48">Department & Teams</h1>
            Organize your employees in departments for easy management. Create
            custom user roles from scratch, or with permissions copied from
            existing ones.
          </div>
        </div>
        <div
          className={`bg-white p-5 rounded-md ${
            showMore ? "" : "hidden"
          } payroll-item`}
        >
          <div className="content">
            <img src={img} alt="" />
            <h1 className="font-bold text-2xl mb-2 w-48">Department & Teams</h1>
            Organize your employees in departments for easy management. Create
            custom user roles from scratch, or with permissions copied from
            existing ones.
          </div>
        </div>
        <div
          className={`bg-white p-5 rounded-md ${
            showMore ? "" : "hidden"
          } payroll-item`}
        >
          <div className="content">
            <img src={img} alt="" />
            <h1 className="font-bold text-2xl mb-2 w-48">Department & Teams</h1>
            Organize your employees in departments for easy management. Create
            custom user roles from scratch, or with permissions copied from
            existing ones.
          </div>
        </div>
      </div>
      {!showMore && (
        <button
          className="bg-[#FC8320] font-semibold text-white px-4 py-3 my-4 rounded-sm bottom-4 mx-auto hover:scale-105"
          onClick={handleViewMore}
        >
          View More
        </button>
      )}
      {showMore && (
        <button
          className="bg-green-500 text-white px-4 py-3 my-4 rounded-sm bottom-4 mx-auto hover:scale-105"
          onClick={handleClose}
        >
          Close
        </button>
      )}
    </div>
  );
};

export default Payroll2;
