// // const Demo = () => {
// //   return (
// //     <div className="min-h-80 flex flex-col md:flex-row justify-center text-center mx-5 md:mx-16 lg:mx-40 my-10 items-center gap-x-10">
// //       <div className="left w-1/2">
// //         {/* <div className="w-40 h-40 bg-slate-300 border-2 border-white rounded-full"></div> */}
// //         {/* <img src="/src/images/macbook-bg.png" alt="not found" />
// //         <img src="/src/images/MacBook.jpg" alt="not found" /> */}
// //         <img src="/src/images/MacBook1.jpg" alt="not found" />
// //       </div>
// //       <div className="right w-1/2 md:text-left text-center">
// //         <h1 className=" lg:text-4xl md:text-3xl text-2xl font-semibold">
// //           Ready to empower and retain your workforce?
// //         </h1>
// //         <button className="bg-[#FC8320] font-semibold py-3 px-4 rounded-sm text-white my-6 hover:scale-105 border-none">
// //           Schedule a Demo
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Demo;

// // =========
// const Demo = () => {
//   return (
//     <div className="min-h-96 flex flex-col lg:flex-row justify-center text-center mx-5 md:mx-16 lg:mx-32 my-10 items-center space-y-4">
//       <div className="left flex my-auto mx-auto justify-center">
//         <div className="">
//           <img
//             src="/src/images/macbook-bg.png"
//             className="relative"
//             style={{ zIndex: 0 }}
//             alt="not found"
//           />
//         </div>
//         <div>
//           <img
//             src="/src/images/macbook.png"
//             className="relative right-24 top-9 md:right-44 md:top-16 lg:right-28 lg:top-8 xl:top-12 xl:right-40 max-h-60"
//             style={{ zIndex: 0 }}
//             alt="not found"
//           />
//         </div>
//       </div>
//       <div className="right lg:text-left text-center">
//         {/* lg:w-3/4 */}
//         <h1 className=" xl:text-4xl lg:text-3xl md:text-3xl text-2xl font-semibold">
//           Ready to empower and retain your workforce?
//         </h1>
//         <button className="bg-[#FC8320] font-semibold py-3 px-4 rounded-sm text-white my-6 hover:scale-105 border-none">
//           Schedule a Demo
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Demo;

// // //
// // const Demo = () => {
// //   return (
// //     <div className="flex flex-col lg:flex-row justify-center text-center mx-5 md:mx-16 lg:mx-40 my-10 items-center bg-red-200">
// //       <div className="left flex my-auto mx-auto justify-center bg-yellow-500 w-1/2">
// //         <div>
// //           <img
// //             src="/src/images/macbook-bg.png"
// //             className="relative md:left-20"
// //             style={{ zIndex: 0 }}
// //             alt="not found"
// //           />
// //         </div>
// //         <div>
// //           <img
// //             src="/src/images/macbook.png"
// //             className="relative right-24 top-9 md:right-2 md:top-9 lg:right-20 max-h-60"
// //             style={{ zIndex: 0 }}
// //             alt="not found"
// //           />
// //         </div>
// //       </div>
// //       <div className="right md:text-left text-center w-1/2">
// //         <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
// //           Ready to empower and retain your workforce?
// //         </h1>
// //         <button className="bg-[#FC8320] font-semibold py-3 px-4 rounded-sm text-white my-6 hover:scale-105 border-none">
// //           Schedule a Demo
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Demo;
// // //

// //NEWEST
import img from "../images/Demo/laptop-icon.svg"
import macbook from "../images/Demo/macbook.svg"
const Demo = () => {
  return (
    <div className="min-h-96 flex flex-col md:flex-row justify-center text-center mx-5 md:mx-16 lg:mx-32 my-10 items-center md:space-x-10 space-y-10 md:space-y-0">
      <div className="left flex my-auto mx-auto justify-center md:w-1/2">
        {/* <div className="xl:h-80 xl:w-80 md:w-60 md:h-60  h-40 w-40 bg-gradient-to-br to-[#e6d6f9] from-[#5c4887]  rounded-full">
          <div>
            <img
              src={macbook}
              className="relative xl:top-16 xl:left-24 lg:top-12 lg:left-24 max-h-80 md:top-10 md:left-16 top-8 left-10"
              style={{ zIndex: 0 }}
              alt="not found"
            />
          </div>
        </div> */}
        <img src={img} alt="not found" />
      </div>
      <div className="right lg:text-left text-center md:w-1/2">
        {/* lg:w-3/4 */}
        <h1 className=" xl:text-4xl lg:text-3xl md:text-3xl text-2xl font-semibold">
          Ready to empower <br /> and retain your workforce?
        </h1>
        <button className="bg-[#FC8320] font-semibold py-3 px-4 rounded-sm text-white my-6 hover:scale-105 border-none">
          Schedule a Demo
        </button>
      </div>
    </div>
  );
};

export default Demo;

// //
