// // import img1 from "../images/hr1.png";
// // import img2 from "../images/hr2.png";
// // const Hroperations = () => {
// //   return (
// //     <div className="p-10 bg-[#735BB0] flex">
// //       <div>
// //         <img src={img1} alt="" />
// //       </div>
// //       <div>
// //         <p className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-white my-5">
// //           Take control of all your HR operations and experience the difference!{" "}
// //         </p>
// //         <button className=" py-2 px-4 bg-orange-500 text-white mx-auto rounded-md">
// //           Schedule Demo
// //         </button>
// //       </div>
// //       <div>
// //         <img src={img2} alt="" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hroperations;

// import img1 from "../images/hr1.png";
// import img2 from "../images/hr2.png";
// import bg from "../images/hr-bg.png";

// const Hroperations = () => {
//   return (
//     // <div className="mt-32 h-96 p-10 bg-[#735BB0] flex md:flex-row flex-col relative">
//     <div
//       className="mt-32 p-10 flex md:flex-row flex-col relative"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="d1 relative -top-36 md:-top-24 lg:-top-36 left-0">
//         <img src={img1} alt="" />
//       </div>
//       <div className="d2 relative flex justify-center flex-col">
//         {/* <div className="flex justify-center flex-col"> */}
//           <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-5 -mt-20 md:mt-0">
//             Take control of all your HR operations and experience the
//             difference!{" "}
//           </p>
//           <button className="py-2 px-4 bg-[#FC8320] text-white mx-auto rounded-sm hover:scale-105">
//             Schedule Demo
//           </button>
//         {/* </div> */}
//       </div>
//       <div className="d3 relative z-30">
//         <img src={img2} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Hroperations;

//// -----------With auto play animation
// import bg from "../images/hr-bg.png";
// import img1 from "../images/hr1.png";
// import img2 from "../images/hr2.png";

// const Hroperations = () => {
//   return (
//     // <div className="mt-32 p-10 bg-[#735BB0] flex relative md:flex-row flex-col">
//     <div
//       className="mt-32 p-10 flex lg:flex-row flex-col items-center justify-center"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* <div className="flex flex-col md:flex-row"> */}
//       <div className="d1 lg:-mt-36 -mt-36 lg:-mb-10 slideInLeft">
//         <img src={img1} alt="" className=" h-full max-w-80" />
//       </div>
//       <div className="d2 px-10 text-center lg:text-left slideInTop">
//         <p className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-white my-5">
//           Take control of all your HR operations and experience the difference!{" "}
//         </p>
//         <button className="py-2 px-4 bg-[#FC8320] font-semibold text-white mx-auto rounded-sm hover:scale-105">
//           Schedule Demo
//         </button>
//         {/* </div> */}
//       </div>
//       <div className="d3 -mb-5 lg:-mb-16 xl:-mb-16 slideInRight">
//         <img src={img2} alt="" className=" h-full max-w-80 -mb-5" />
//       </div>
//     </div>
//   );
// };

// export default Hroperations;
// //------------

import { useRef, useEffect, useState } from "react";
import bg from "../images/HrOperations/hr-bg.png";
import img1 from "../images/HrOperations/hr1.png";
import img2 from "../images/HrOperations/hr2.png";

const Hroperations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If section is intersecting with viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5 // Percentage of section that needs to be visible to trigger animation
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mt-32 p-10 flex lg:flex-row flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`d1 lg:-mt-36 -mt-36 lg:-mb-10 ${isVisible && 'slideInLeft'}`}>
        <img src={img1} alt="" className=" h-full max-w-80" />
      </div>
      <div className={`d2 px-10 text-center lg:text-left ${isVisible && 'slideInTop'}`}>
        <p className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-white my-5">
          Take control of all your HR operations and experience the difference!{" "}
        </p>
        <button className="py-2 px-4 bg-[#FC8320] font-semibold text-white mx-auto rounded-sm hover:scale-105">
          Schedule Demo
        </button>
      </div>
      <div className={`d3 -mb-5 lg:-mb-16 xl:-mb-16 ${isVisible && 'slideInRight'}`}>
        <img src={img2} alt="" className=" h-full max-w-80 -mb-5" />
      </div>
    </div>
  );
};

export default Hroperations;



// //---------------------------

// const Hroperations = () => {
//   return (
//     <div
//       className="mt-32 p-10 flex relative md:flex-row flex-col items-center justify-center"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="d1 relative top-0 md:left-1/2 transform md:-translate-y-1/3 md:static md:w-1/3 bg-yellow-300 md:bg-transparent">
//         <img src={img1} alt="" className="h-full max-w-60 mx-auto md:mx-0" />
//       </div>
//       <div className="d2 md:w-1/2 bg-red-300 px-10 text-center">
//         <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white my-5">
//           Take control of all your HR operations and experience the difference!{" "}
//         </p>
//         <button className="py-2 px-4 bg-[#FC8320] font-semibold text-white rounded-sm hover:scale-105">
//           Schedule Demo
//         </button>
//       </div>
//       <div className="d3 relative bottom-0 md:left-1/2 transform md:static md:w-1/3  bg-green-300 md:bg-transparent">
//         <img src={img2} alt="" className="h-full max-w-60 mx-auto md:mx-0" />
//       </div>
//     </div>
//   );
// };

// export default Hroperations;



// //
// NEWEST

// import img1 from "../images/hr1.png";
// import img2 from "../images/hr2.png";
// import bg from "../images/hr-bg.png";

// const Hroperations = () => {
//   return (
//     // <div className="mt-32 h-96 p-10 bg-[#735BB0] flex md:flex-row flex-col relative">
//     <div className="overflow-hideen">
//       <div
//         className="mt-32 p-10 flex md:flex-row flex-col relative justify-center  h-[400px]"
//         style={{
//           backgroundImage: `url(${bg})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="d1 absolute -top-36 md:-top-24 lg:-top-36 left-0">
//           <img src={img1} alt="" />
//         </div>
//         <div className="d2 relative flex justify-center flex-col mx-44">
//           {/* <div className="flex justify-center flex-col"> */}
//           <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-5 -mt-20 md:mt-0">
//             Take control of all your HR operations and experience the
//             difference!{" "}
//           </p>
//           <button className="py-2 px-4 bg-[#FC8320] text-white mx-auto rounded-sm hover:scale-105">
//             Schedule Demo
//           </button>
//           {/* </div> */}
//         </div>
//         <div className="d3 absolute z-30 bottom-0 right-0">
//           <img src={img2} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hroperations;

// //