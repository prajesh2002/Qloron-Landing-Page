// import React from "react";
// import time from "../image/time.png";
// import insight from "../image/insight.png";
// import emp from "../image/emp.png";
// import scale from "../image/scale.png";
// function Benefits() {
//   return (
//     <div className="w-full h-[25rem]  benefits ">
//       <div className="features h-40 flex justify-center items-center">
//         <p className="text-black font-semibold text-lg sm:text-2xl md:text-3xl lg:text-3xl  pb-8">
//           Benefits of Sortboxs HRM
//         </p>
//       </div>
//       <div className="w-[80%] h-[30%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
//         <div className="shadow-xl flex flex-col justify-center bg-white p-4 gap-2 hover:bg-gradient-to-r from-yellow-200 to-orange-400">
//           <div className="flex flex-row gap-2 " >
//             <img src={time} alt="time" />
//             <p className="text-md font-semibold text-[#FC8320]">Time Saving</p>
//           </div>
//           <p className="text-black text-[0.7rem] sm:text-xs font-medium">
//             Automate repetitive HR tasks to save time for strategic initiatives.
//           </p>
//         </div>
//         <div className="shadow-xl flex flex-col justify-center bg-white p-4 gap-2 hover:bg-gradient-to-r from-cyan-200 to-cyan-500 ">
//           <div className="flex flex-row gap-2 ">
//             <img src={insight} alt="insight" />
//             <p className="text-md font-semibold text-[#16B7C3] ">
//               Insightful Reporting
//             </p>
//           </div>
//           <p className="text-black text-[0.7rem] sm:text-xs font-medium ">
//             Automate repetitive HR tasks to save time for strategic initiatives.
//           </p>
//         </div>
//         <div className="shadow-xl flex flex-col justify-center bg-white p-4 gap-2 hover:bg-gradient-to-r from-[#7fa7ff] to-[#407bff]">
//           <div className="flex flex-row gap-2">
//             <img src={emp} alt="emp" />
//             <p className="text-md font-semibold text-[#407BFF]">
//               Employee Engagement
//             </p>
//           </div>
//           <p className="text-black text-[0.7rem] sm:text-xs font-medium">
//             Automate repetitive HR tasks to save time for strategic initiatives.
//           </p>
//         </div>
//         <div className="shadow-xl flex flex-col justify-center bg-white p-4 gap-2 hover:bg-gradient-to-r from-[#81fa7f] to-[#16f112]">
//           <div className="flex flex-row gap-2">
//             <img src={scale} alt="scale" />
//             <p className="text-md font-semibold text-[#16F112]">Scalability</p>
//           </div>
//           <p className="text-black text-[0.7rem] sm:text-xs font-medium">
//             Automate repetitive HR tasks to save time for strategic initiatives.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Benefits;
import time from "../images/Benefits/time.png";
import insight from "../images/Benefits/insight.png";
import emp from "../images/Benefits/emp.png";
import scale from "../images/Benefits/scale.png";
import bars from '../images/Benefits/bars.png';
import employee from '../images/Benefits/employee.png'
import insightVec from '../images/Benefits/insightVec.png';
import timeVec from '../images/Benefits/timeVec.png';

function Benefits() {
  return (
    <div className="w-full benefits -mt-40 md:-mt-20 xl:mt-0">
      <div className="features h-40 flex justify-center items-center">
        <p className="text-black font-semibold text-lg sm:text-2xl md:text-3xl lg:text-3xl">
          Benefits of Sortboxs HRM
        </p>
      </div>
      <div className="w-[80%] h-[30%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        <div className="group shadow-xl flex flex-col justify-center bg-white p-4 pb-8 gap-2 hover:bg-gradient-to-r from-yellow-200 to-orange-400 hover:text-white transition duration-300 ease-in-out">
          <div className="flex flex-row gap-2">
          <div className="w-7 h-7 rounded-sm bg-orange-100 flex justify-center items-center group-hover:bg-white transition duration-300 ease-in-out">
              <img className="w-4" src={timeVec} alt="timeVec" 
              style={{
                objectFit:"fit"
              }}/>
            </div>
            <p className="text-md font-semibold benefits_head1">Time Saving</p>
          </div>
          <div>
            <p className="text-[0.7rem] sm:text-xs font-medium benefits_text">
              Automate repetitive HR tasks to save time for strategic initiatives.
            </p>
          </div>
        </div>
        <div className="group shadow-xl flex flex-col justify-center bg-white p-4 pb-8 gap-2 hover:bg-gradient-to-r from-cyan-200 to-cyan-500 hover:text-white transition duration-300 ease-in-out">
          <div className="flex flex-row gap-2">
          <div className="w-7 h-7 rounded-sm bg-green-100 flex justify-center items-center group-hover:bg-white transition duration-300 ease-in-out">
              <img className="w-4" src={insightVec} alt="insightVec" 
              style={{
                objectFit:"fit"
              }}/>
            </div>
            <p className="text-md font-semibold benefits_head1">
              Insightful Reporting
            </p>
          </div>
          <p className="text-[0.7rem] sm:text-xs font-medium benefits_text">
            Generate comprehensive reports quickly for informed decision-making.
          </p>
        </div>
        <div className="group shadow-xl flex flex-col justify-center bg-white p-4 pb-8 gap-2 hover:bg-gradient-to-r from-[#7fa7ff] to-[#407bff] hover:text-white transition-colors duration-300 ease-in-out">
          <div className="flex flex-row gap-2">
          <div className="w-7 h-7 rounded-sm bg-blue-100 flex justify-center items-center group-hover:bg-white transition duration-300 ease-in-out">
              <img className="w-4" src={employee} alt="employee" 
              style={{
                objectFit:"fit"
              }}/>
            </div>
            <p className="text-md font-semibold benefits_head1">
              Employee Engagement
            </p>
          </div>
          <p className="text-[0.7rem] sm:text-xs font-medium benefits_text">
            Foster positive employee experiences, leading to increased engagement.
          </p>
        </div>
        <div className="group shadow-xl flex flex-col justify-center bg-white p-4 pb-8 gap-2 hover:text-white hover:bg-gradient-to-r from-[#81fa7f] to-[#16f112] transition-colors duration-300 ease-in-out">
          <div className="flex flex-row gap-2">
            <div className="w-7 h-7 rounded-sm bg-green-100 flex justify-center items-center group-hover:bg-white transition duration-300 ease-in-out">
              <img className="w-4" src={bars} alt="bars" 
              style={{
                objectFit:"fit"
              }}/>
            </div>
            <p className="text-md font-semibold benefits_head1">Scalability</p>
          </div>
          <p className="text-[0.7rem] sm:text-xs font-medium benefits_text">
            Adaptable solutions to accommodate organizational growth effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
