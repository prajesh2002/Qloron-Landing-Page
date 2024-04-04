// import React from 'react'
// import dots1 from  '../image/dots1.png';
// import laptop1 from '../image/laptop1.png'
// import tab1 from '../image/tab1.png';
// import tab2 from '../image/tab2.png';
// import { useEffect, useRef } from 'react';

// function Payroll() {

//   const tab2Ref = useRef(null);
//   const tab1Ref = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const componentHeight = document.querySelector('.payroll').offsetHeight; // Get component height
//       const scrollPosition = window.scrollY; // Get current scroll position

//       // Check if scrolled past 80% of the component's height
//       if (scrollPosition >= componentHeight * 0.8) {
//         // Add animations with 'forwards' to prevent resetting
//         tab2Ref.current.style.animation = 'slideInLeft 0.7s ease forwards';
//         tab1Ref.current.style.animation = 'slideInRight 0.7s ease forwards';
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className='h-[45rem] bg-white w-full flex flex-col '>
//         <div>
//             <img src={dots1} alt="dots1" />
//         </div>
//         <div className='flex flex-col justify-center items-center relative '>
//                 <p className='text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-black p-5 text-center sm:p-2 '><span className='text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#FC8320]'>Modern payroll</span> for all companies</p>
//                 <p className='p-4 text-center text-xs sm:text-sm md:text-md text-black '>Our industry redefining payroll system automates your payroll and saves time for everyon</p>
//         </div>
//         <div className='payroll w-full h-[70%] flex justify-center items-center p-5 sm:p-5 bg-cover relative' >
//             <img src={laptop1} alt="laptop1" style={{objectFit:'contain'}} className='md:w-[30rem] lg:w-[40rem]' />
//             <img src={tab2} ref={tab2Ref} alt="tab2" className='md:w-[8rem] lg:w-[10rem] hidden md:block absolute md:left-[10rem] lg:left-[22em] lg:top-44 ' />
//             <img src={tab1} ref={tab1Ref} alt="tab2" className='md:w-[8rem] lg:w-[10rem] hidden md:block absolute md:right-[10rem] lg:right-[22rem] md:top-16 lg:top-0 ' />
//         </div>
//     </div>
//   )
// }

// export default Payroll

import { useEffect, useRef, useState } from "react";
import dots1 from "../images/Payroll1/dots1.png";
import laptop1 from "../images/Payroll1/laptop1.png";
import tab1 from "../images/Payroll1/tab1.png";
import tab2 from "../images/Payroll1/tab2.png";
import bg from "../images/Payroll1/wave1.png";

function Payroll1() {
  const tab2Ref = useRef(null);
  const tab1Ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const componentHeight = document.querySelector(".payroll").offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= componentHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-h-[45rem] bg-white w-full flex flex-col my-5 md:my-10 lg:my-0">
      <div>
        <img src={dots1} alt="dots1" className="hidden lg:block" />
      </div>
      <div
        className={`flex flex-col justify-center items-center relative  ${
          isVisible ? "slideInTop" : ""
        }`}
      >
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-black p-5 text-center sm:p-2 ">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#FC8320]">
            Modern payroll
          </span>{" "}
          for all companies
        </p>
        <p className="p-4 text-center text-xs sm:text-sm md:text-md text-black ">
          Our industry redefining payroll system automates your payroll and
          saves time for everyone
        </p>
      </div>
      <div
        className="payroll w-full h-[70%] flex justify-center items-center p-5 sm:p-5 bg-cover relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={laptop1}
          alt="laptop1"
          style={{ objectFit: "contain" }}
          className="md:w-[30rem] lg:w-[40rem]"
        />
        <img
          src={tab2}
          ref={tab2Ref}
          alt="tab2"
          className={`md:w-[8rem] lg:w-[10rem] hidden md:block absolute md:left-[10rem] lg:left-[22em] lg:top-44 ${
            isVisible ? "slideInLeft" : ""
          }`}
        />
        <img
          src={tab1}
          ref={tab1Ref}
          alt="tab2"
          className={`md:w-[8rem] lg:w-[10rem] hidden md:block absolute md:right-[10rem] lg:right-[22rem] md:top-16 lg:top-0 ${
            isVisible ? "slideInRight" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default Payroll1;
