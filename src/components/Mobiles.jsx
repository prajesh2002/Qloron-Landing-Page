// import React from 'react'
// import tick from '../image/tick.png';
// import playStore from '../image/playStore.png';
// import Apple from '../image/Apple.png';
// import phone1 from '../image/phone1.png';
// import phone2 from '../image/phone2.png';
// import phone3 from '../image/phone3.png';
// function Mobiles() {
//   return (
//     <div className='w-full h-[39rem] bg-[#58448B] mobile_css bg-cover flex flex-col md:flex-row'>
//         {/* left--div */}
//         <div className='w-[100%] md:w-[60%] h-[100%]  '>
//             <div className='h-[25%] w-full  p-8 lg:pr-60 slideInTop'>
//                 <p className='text-lg sm:text-xl md:text-2xl lg:text-[2.3rem] font-bold text-white'>Mobile App Management Software</p>
//                 <br />
//                 <p className='text-xs md:text-sm lg:text-[0.9rem] font-medium  text-white'>The leading Sortboxs HRM, keeping you at the forefront of today's People Management strategies and best practices.</p>
//             </div>
//             <div className='h-[75%] w-full flex flex-row overflow-hidden '>
//                 <div  className='w-[100%] md:w-[70%] '>
//                     <div className='flex flex-col gap-5 p-8 md:p-10 h-[80%] fadeInTop'>
//                     <div className='flex flex-row gap-2'>
//                         <img src={tick} alt="tick" />
//                         <p className='text-white text-sm sm:text-md md:text-lg lg:text-xl font-medium'>Employee Profile</p>
//                     </div>
//                     <div className='flex flex-row gap-2'>
//                         <img src={tick} alt="tick" />
//                         <p className='text-white text-sm sm:text-md md:text-lg lg:text-xl font-medium'>Daily Attendance</p>
//                     </div>
//                     <div className='flex flex-row gap-2'>
//                         <img src={tick} alt="tick" />
//                         <p className='text-white text-sm sm:text-md md:text-lg lg:text-xl font-medium'>Leave Application</p>
//                     </div>
//                     <div className='flex flex-row gap-2'>
//                         <img src={tick} alt="tick" />
//                         <p className='text-white text-sm sm:text-md md:text-lg lg:text-xl font-medium'>Location Tracking</p>
//                     </div>
//                     <div className='flex flex-row gap-2'>
//                         <img src={tick} alt="tick" />
//                         <p className='text-white text-sm sm:text-md md:text-lg lg:text-xl font-medium'>Payslips</p>
//                     </div>
//                     <div className='flex flex-row gap-2'>
//                         <img src={tick} alt="tick" />
//                         <p className='text-white text-sm sm:text-md md:text-lg lg:text-xl font-medium'>Organization</p>
//                     </div>
//                  </div>
//                  <div className='h-[20%] w-full  flex flex-row items-center px-8 py-5 slideInLeft'>
//                     <img src={playStore} alt="playStore" className=' w-24 md:w-36'/>
//                     <img src={Apple} alt="Apple"  className=' w-24 md:w-36'/>
//                  </div>
//                 </div>
//                 <div className='w-[30%] relative'>
//                     <img src={phone1} alt="phone1" className='md:w-[8rem] lg:w-[16.3rem] absolute hidden sm:block sm:right-32 md:right-2 md:top-20 overflow-hidden slideInBottom' />
//                 </div>
//             </div>
//         </div>
//         {/* right--div */}
//         <div className='w-[40%] h-[100%] relative overflow-hidden'>
//             <img src={phone2} alt="phone2" className='hidden md:block md:w-[8rem] lg:w-[16.3rem] absolute left-2 md:top-40 lg:top-4 slideInTop' />
//             <img src={phone1} alt="phone2" className='hidden md:block md:w-[8rem] lg:w-[16.3rem] absolute right-10 md:top-[2rem] lg:top-[-18.5rem] overflow-hidden slideInBottom' />
//             <img src={phone3} alt="phone3" className='hidden md:block md:w-[8rem] lg:w-[16.3rem] absolute right-10 md:bottom-0 lg:bottom-0 overflow-hidden slideInBottom' />
//         </div>

//     </div>
//   )
// }

// export default Mobiles

import { useEffect, useRef, useState } from "react";
import tick from "../images/Mobiles/tick.png";
import playStore from "../images/Mobiles/playStore.png";
import Apple from "../images/Mobiles/Apple.png";
import phone1 from "../images/Mobiles/phone1.png";
import phone2 from "../images/Mobiles/phone2.png";
import phone3 from "../images/Mobiles/phone3.png";
import bg from "../images/Mobiles/sortbox_bg.png"
function Mobiles() {
  const [isVisible, setIsVisible] = useState(false);
  const topToBottomRef = useRef(null);
  const bottomToTopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (topToBottomRef.current && bottomToTopRef.current) {
        const elementTop = topToBottomRef.current.getBoundingClientRect().top;
        const elementBottom =
          bottomToTopRef.current.getBoundingClientRect().bottom;
        const isVisibleOnScreen =
          elementTop < window.innerHeight && elementBottom >= 0;

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
    <div
      className="w-full h-[39rem] bg-[#58448B] mobile_css flex flex-col md:flex-row
    "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* left--div */}
      <div className="w-[100%] md:w-[60%] h-[100%]  ">
        <div
          ref={topToBottomRef}
          className={`h-[25%] w-full  p-8 lg:pr-60 ${
            isVisible ? "slideInTop" : ""
          }`}
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[2.3rem] font-bold text-white">
            Mobile App Management Software
          </p>
          <br />
          <p className="text-xs md:text-sm lg:text-[0.9rem] font-medium  text-white">
            The leading Sortboxs HRM, keeping you at the forefront of today'sMobiles/. People Management strategies and best practices.
          </p>
        </div>
        <div className="h-[75%] w-full flex flex-row overflow-hidden ">
          <div className="w-[100%] md:w-[70%] ">
            <div
              className={`flex flex-col gap-5 p-8 md:p-10 h-[80%] ${
                isVisible ? "fadeInTop" : ""
              }`}
            >
              <div className="flex flex-row gap-2">
                <img src={tick} alt="tick" />
                <p className="text-white text-sm sm:text-md md:text-lg lg:text-xl font-medium">
                  Employee Profile
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <img src={tick} alt="tick" />
                <p className="text-white text-sm sm:text-md md:text-lg lg:text-xl font-medium">
                  Daily Attendance
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <img src={tick} alt="tick" />
                <p className="text-white text-sm sm:text-md md:text-lg lg:text-xl font-medium">
                  Leave Application
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <img src={tick} alt="tick" />
                <p className="text-white text-sm sm:text-md md:text-lg lg:text-xl font-medium">
                  Location Tracking
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <img src={tick} alt="tick" />
                <p className="text-white text-sm sm:text-md md:text-lg lg:text-xl font-medium">
                  Payslips
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <img src={tick} alt="tick" />
                <p className="text-white text-sm sm:text-md md:text-lg lg:text-xl font-medium">
                  Organization
                </p>
              </div>
            </div>
            <div
              className={`h-[20%] w-full  flex flex-row items-center px-8 py-5 ${
                isVisible ? "slideInLeft" : ""
              }`}
            >
              <img src={playStore} alt="playStore" className="w-24 md:w-36" />
              <img src={Apple} alt="Apple" className="w-24 md:w-36" />
            </div>
          </div>
          <div className="w-[30%] relative">
            <img
              ref={bottomToTopRef}
              src={phone1}
              alt="phone1"
              className={`md:w-[8rem] lg:w-[16.3rem] absolute hidden sm:block sm:right-32 md:right-2 md:top-20 ${
                isVisible ? "slideInBottom" : ""
              }`}
            />
          </div>
        </div>
      </div>
      {/* right--div */}
      <div className="w-[40%] h-[100%] relative overflow-hidden">
        <img
          src={phone2}
          alt="phone2"
          className={`hidden md:block md:w-[8rem] lg:w-[16.3rem] absolute left-2 md:top-40 lg:top-4 ${
            isVisible ? "slideInTop" : ""
          }`}
        />
        <img
          src={phone1}
          alt="phone2"
          className={`hidden md:block md:w-[8rem] lg:w-[16.3rem] absolute right-10 md:top-[2rem] lg:top-[-18.5rem] overflow-hidden ${
            isVisible ? "slideInBottom" : ""
          }`}
        />
        <img
          src={phone3}
          alt="phone3"
          className={`hidden md:block md:w-[8rem] lg:w-[16.3rem] absolute right-10 md:bottom-0 lg:bottom-0 overflow-hidden ${
            isVisible ? "slideInBottom" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default Mobiles;
