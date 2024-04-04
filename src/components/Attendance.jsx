// import React from 'react'
// import laptop2sm from '../image/laptop2sm.png';
// import smallPhone1 from '../image/smallPhone1.png';
// import smallPhone2 from '../image/smallPhone2.png'
// function Attendance() {
//   return (
//     <div className='w-full h-[100%] md:h-[35rem] p-6 sm:p-8 md:p-12 lg:p-16 flex md:flex-row flex-col gap-8'>
//         <div className='md:w-[50%] md:h-[100%] w-[100%] h-[100%] bg-[#686a6e] bg-opacity-5 flex flex-col text-center justify-center items-center gap-3 relative'>
//             <p className='text-md sm:text-lg md:text-xl lg:text-2xl text-black font-semibold'>Attendance Tracking</p>
//             <p className='text-[0.65rem] sm:text-xs md:text-sm text-black sm:px-28 md:px-20 lg:px-32'>Flexible to customize different leave types and set up complex leave policies. Easy to apply, view leave request status and reports.</p>
//             <br />
//             <img src={laptop2sm} alt="laptop2sm" className='slideInLeft w-[12rem] sm:w-[15rem] md:w-[16rem] lg:w-[20rem]'/>
//             <img src={smallPhone1} alt="smallPhone1" className='absolute w-8 sm:w-10 md:w-14 lg:w-20 bottom-1 sm:bottom-2 md:bottom-16 lg:bottom-9 right-48 sm:right-56 md:right-14 lg:right-40 slideInRight' />
//         </div>
//         <div className='md:w-[50%] md:h-[100%] w-[100%] h-[100%] bg-[#686a6e] bg-opacity-5 flex flex-col text-center justify-center items-center gap-3 relative'>
//         <p className='text-md sm:text-lg md:text-xl lg:text-2xl text-black font-semibold'>Attendance Tracking</p>
//             <p className='text-[0.65rem] sm:text-xs md:text-sm text-black sm:px-24 md:px-20 lg:px-32'>Flexible to customize different leave types and set up complex leave policies. Easy to apply, view leave request status and reports.</p>
//             <br />
//             <img src={laptop2sm} alt="laptop2sm" className='slideInLeft w-[12rem] sm:w-[15rem] md:w-[16rem] lg:w-[20rem]'/>
//             <img src={smallPhone2} alt="smallPhone1" className='absolute w-8 sm:w-10 md:w-14 lg:w-20 bottom-1 sm:bottom-2 md:bottom-16 lg:bottom-9 right-48 sm:right-56 md:right-14 lg:right-40 slideInRight' />

//         </div>
//     </div>
//   )
// }

// export default Attendance


import { useEffect, useRef, useState } from 'react';
import laptop2sm from '../images/Attendance/laptop2sm.png';
import smallPhone1 from '../images/Attendance/smallPhone1.png';
import smallPhone2 from '../images/Attendance/smallPhone2.png';

function Attendance() {
    const [isVisible, setIsVisible] = useState(false);
    const attendanceRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (attendanceRef.current) {
                const elementTop = attendanceRef.current.getBoundingClientRect().top;
                const isVisibleOnScreen = elementTop < window.innerHeight;

                if (isVisibleOnScreen) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='w-full h-[100%] md:h-[35rem] p-6 sm:p-8 md:p-12 lg:p-16 flex md:flex-row flex-col gap-8'>
            <div ref={attendanceRef} className='md:w-[50%] md:h-[100%] w-[100%] h-[100%] bg-[#686a6e] bg-opacity-5 flex flex-col text-center justify-center items-center gap-3 relative '>
                <p className='text-md sm:text-lg md:text-xl lg:text-2xl text-black font-semibold'>Attendance Tracking</p>
                <p className='text-[0.65rem] sm:text-xs md:text-sm text-black sm:px-28 md:px-20 lg:px-32'>Flexible to customize different leave types and set up complex leave policies. Easy to apply, view leave request status and reports.</p>
                <br />
                <img ref={attendanceRef} src={laptop2sm} alt="laptop2sm" className={`w-[12rem] sm:w-[15rem] md:w-[16rem] lg:w-[20rem] ${isVisible ? 'slideInLeft' : ''}`} />
                <img src={smallPhone1} alt="smallPhone1" className={`absolute w-8 sm:w-10 md:w-14 lg:w-20 bottom-1 sm:bottom-2 md:bottom-16 lg:bottom-9 right-48 sm:right-56 md:right-14 lg:right-40 ${isVisible ? 'slideInRight' : ''}`} />
            </div>
            <div ref={attendanceRef} className='md:w-[50%] md:h-[100%] w-[100%] h-[100%] bg-[#686a6e] bg-opacity-5 flex flex-col text-center justify-center items-center gap-3 relative '>
                <p className='text-md sm:text-lg md:text-xl lg:text-2xl text-black font-semibold'>Attendance Tracking</p>
                <p className='text-[0.65rem] sm:text-xs md:text-sm text-black sm:px-24 md:px-20 lg:px-32'>Flexible to customize different leave types and set up complex leave policies. Easy to apply, view leave request status and reports.</p>
                <br />
                <img ref={attendanceRef} src={laptop2sm} alt="laptop2sm" className={`w-[12rem] sm:w-[15rem] md:w-[16rem] lg:w-[20rem] ${isVisible ? 'slideInLeft' : ''}`} />
                <img ref={attendanceRef} src={smallPhone2} alt="smallPhone1" className={`absolute w-8 sm:w-10 md:w-14 lg:w-20 bottom-1 sm:bottom-2 md:bottom-16 lg:bottom-9 right-48 sm:right-56 md:right-14 lg:right-40 ${isVisible ? 'slideInRight' : ''}`} />
            </div>
        </div>
    );
}

export default Attendance;
