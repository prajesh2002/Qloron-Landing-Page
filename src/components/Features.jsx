// import React from 'react'
// import man from '../image/Man.png'

// function Features() {
//   return (
//     <div className='w-full h-[100%] md:h-[39rem] bg-white pt-10 '>
//         <div className='features h-20 flex justify-center items-center slideInTop'>
//             <p className='text-black font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl pb-8'>
//                 Our Key Features
//             </p>
//         </div>
//         <div className='flex flex-col md:flex-row '>

//             <div className='w-[100%] h-[100%] md:w-[50%] md:h-[100%]  bg-white flex justify-center items-center p-5 md:p-2 fadeInTop'>
//                     <img src={man} alt="man" className='lg:w-[20rem] md:w-[18rem] sm:w-[16rem] w-[14rem]'/>
//             </div>
//             <div className='w-[100%] h-[100%] md:w-[50%] md:h-[100%] bg-white flex justify-center  flex-col fadeInTop'>
//                 <div className='p-5 md:p-7'>
//                 <p className='text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-[#FC8320]'>Time & Attendance 	&nbsp;	&nbsp;	&nbsp;<span className='text-black'>&#8594;</span></p>
//                 <p className='text-black text-xs sm:text-sm md:text-sm lg:text-md'> Manage leaves ,track time and pay on time</p>
//                 </div>
//                 <div className='p-5 md:p-8'>
//                 <p className='text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-[#FC8320]'>Payroll Software 	&nbsp;	&nbsp;	&nbsp;<span className='text-black'>&#8594;</span></p>
//                 <p className='text-black text-xs sm:text-sm md:text-sm lg:text-md'>Automate and pay employees on time and stay compliant</p>
//                 </div>
//                 <div className='p-5 md:p-8'>
//                 <p className='text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-[#FC8320]'>Hiring & Onboarding 	&nbsp;	&nbsp;	&nbsp;<span className='text-black'>&#8594;</span></p>
//                 <p className='text-black text-xs sm:text-sm md:text-sm lg:text-md'> Create a great candidate experience before and after joining</p>
//                 </div>
//                 <div className='p-5 md:p-8'>
//                 <p className='text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-[#FC8320]'>Performance & Culture	&nbsp;	&nbsp;	&nbsp;<span className='text-black'>&#8594;</span></p>
//                 <p className='text-black text-xs sm:text-sm md:text-sm lg:text-md'> An engaging culture driven by contextual feedback and organization aligned goals.</p>
//                 </div>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Features

import { useEffect, useRef, useState } from "react";
import man from "../images/Features/Man.png";
import bg from "../images/Features/feature_bg.png";
function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (featuresRef.current) {
        const elementTop = featuresRef.current.getBoundingClientRect().top;
        const isVisibleOnScreen = elementTop < window.innerHeight;

        if (isVisibleOnScreen) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-[100%] md:max-h-[39rem] bg-white my-10">
      <div
        ref={featuresRef}
        className={`max-h-20 flex justify-center items-center ${
          isVisible ? "slideInTop" : ""
        }`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          // backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="text-black font-semibold text-xl sm:text-2xl md:text-3xl lg:text-3xl pb-8">
          Our Key Features
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div
          ref={featuresRef}
          className={`w-[100%] h-[100%] md:w-[50%] md:h-[100%] bg-white flex justify-center items-center p-5 md:p-2 ${
            isVisible ? "fadeInTop" : ""
          }`}
        >
          <img
            src={man}
            alt="man"
            className="lg:w-[20rem] md:w-[18rem] sm:w-[16rem] w-[14rem]"
          />
        </div>
        <div
          ref={featuresRef}
          className={`w-[100%] h-[100%] md:w-[50%] md:h-[100%] bg-white flex justify-center flex-col ${
            isVisible ? "fadeInTop" : ""
          }`}
        >
          <div className="p-5 md:p-7 ">
            <a  className="hover:cursor-pointer group-hover:transition duration-150 ease-in hover:px-2 text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-[#FC8320] ">
              Time & Attendance &nbsp; 
              <span className="text-black ">&#8594;</span>
            </a>
            <p className="text-black text-xs sm:text-sm md:text-sm lg:text-md">
              {" "}
              Manage leaves ,track time and pay on time
            </p>
          </div>
          <div className="p-5 md:p-8">
            <a  className="hover:cursor-pointer group-hover:transition duration-150 ease-in hover:px-2 text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-[#FC8320]">
              Payroll Software &nbsp; 
              <span className="text-black">&#8594;</span>
            </a>
            <p className="text-black text-xs sm:text-sm md:text-sm lg:text-md">
              Automate and pay employees on time and stay compliant
            </p>
          </div>
          <div className="p-5 md:p-8">
            <a  className="hover:cursor-pointer group-hover:transition duration-150 ease-in hover:px-2 text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-[#FC8320]">
              Hiring & Onboarding &nbsp; 
              <span className="text-black">&#8594;</span>
            </a>
            <p className="text-black text-xs sm:text-sm md:text-sm lg:text-md">
              {" "}
              Create a great candidate experience before and after joining
            </p>
          </div>
          <div className="p-5 md:p-8">
            <a  className="hover:cursor-pointer group-hover:transition duration-150 ease-in hover:px-2 text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-[#FC8320]">
              Performance & Culture &nbsp; 
              <span className="text-black">&#8594;</span>
            </a>
            <p className="text-black text-xs sm:text-sm md:text-sm lg:text-md">
              {" "}
              An engaging culture driven by contextual feedback and organization
              aligned goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
