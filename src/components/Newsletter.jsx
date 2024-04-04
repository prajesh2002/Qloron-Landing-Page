// import bg from "../images/Newsletter/newsletter-bg.png";
import head_bg from "../images/Newsletter/newsletter-head-bg.png";
const Newsletter = () => {
  return (
    // #3e315e
    // #31264a
    <div className="bg-gradient-to-l from-[#3e315e] to-[#654F9D] text-center h-96 place-content-center mx-5 md:mx-10 my-10 rounded-xl relative overflow-hidden lg:mx-32">
      {/* <div
      className="text-center h-96 place-content-center mx-5 md:mx-16 my-10 rounded-xl relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    > */}
      <div
        style={{
          backgroundImage: `url(${head_bg})`,
          // backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "43px",
          backgroundPositionX: "center",
          marginLeft: "20px",
          marginRight: "10px",
        }}
      >
         <div className="absolute w-48 h-48 bg-transparent border-4 border-gray-300  lg:-top-24 rounded-full lg:-left-28 -left-32 -top-28 md:-top-28 md:-left-28"></div>
        <h1 className="lg:text-4xl md:text-3xl text-2xl mb-10 font-semibold text-white p-5">
          Subscribe to our newsletter
        </h1>
      </div>
      <form action="" className="">
        <div className="flex flex-col md:flex-row justify-center gap-y-4 gap-x-2">
          <div className="flex flex-row gap-x-2 justify-center mx-2">
            <input
              //   required
              type="text"
              placeholder="First Name"
              className="py-2 text-center rounded-md placeholder-[gray] w-1/2 outline-none"
            />
            <input
              //   required
              type="email"
              placeholder="Email Address"
              className="py-2 text-center rounded-md placeholder-[gray] w-1/2 outline-none"
            />
          </div>
          <div>
            <button
              action="submit"
              className=" bg-[#FC8320] font-semibold text-white py-3 px-12 rounded-md hover:scale-105 mx-auto"
            >
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="absolute w-48 h-48 bg-transparent border-4 border-white lg:-bottom-24 rounded-full lg:-right-28 -right-32 -bottom-28 md:-bottom-28 md:-right-28"></div>
        {/* <div
        className="absolute w-40 h-40 bg-transparent border-4 border-red-600 rounded-full right-0 transform translate-x-1/2 top-60"
        style={{ right: "-20px", clipPath: "circle(50%)" }}
      ></div> */}
      </form>
    </div>
  );
};

export default Newsletter;

/////////////

// const Newsletter = () => {
//   return (
//     <div className="relative bg-gradient-to-l from-[#3e315e] to-[#654F9D] text-center h-96 place-content-center mx-5 md:mx-20 lg:mx-32 my-10 rounded-xl">
//       <h1 className="lg:text-5xl md:text-4xl text-3xl mb-10 font-semibold text-white">
//         Subscribe to our newsletter
//       </h1>
//       <form action="" className="relative z-10">
//         <div className="flex flex-col md:flex-row justify-center gap-y-4 gap-x-2">
//           <div className="flex flex-row gap-x-2 justify-center mx-2">
//             <input
//               type="text"
//               placeholder="First Name"
//               className="py-2 text-center rounded-md placeholder-[gray] w-1/2 outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="py-2 text-center rounded-md placeholder-[gray] w-1/2 outline-none"
//             />
//           </div>
//           <div>
//             <button
//               action="submit"
//               className="bg-orange-500 text-white py-3 px-12 rounded-md hover:scale-105 mx-auto"
//             >
//               Subscribe Now
//             </button>
//           </div>
//         </div>
//       </form>
//       <div className="absolute bottom-0 right-0 mb-4 mr-4">
//         <div className="w-28 h-28 border-2 border-white rounded-full rounded-tl-none rotate-180"></div>
//       </div>
//       <div className="absolute bottom-0 right-0 w-8 h-4 bg-gradient-to-r from-[#3e315e] to-[#654F9D] rounded-b-lg"></div>
//     </div>
//   );
// };

// export default Newsletter
// ///////////

/////////////
// import { useState } from 'react';

// const Newsletter = () => {
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!firstName.trim() || !email.trim()) {
//       setError('Please provide both first name and email.');
//       return;
//     }
//     // Your form submission logic here
//     console.log('Form submitted:', { firstName, email });
//     setError('');
//     // Reset form fields
//     setFirstName('');
//     setEmail('');
//   };

//   return (
//     <div className="bg-purple-800 text-white text-center h-96 flex flex-col justify-center">
//       <h1 className="lg:text-5xl md:text-4xl text-3xl mb-10 font-semibold">Subscribe to our newsletter</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center gap-y-4 gap-x-2">
//         <div className="flex flex-row gap-2 justify-center mx-2">
//           <input
//             type="text"
//             placeholder="First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             className="py-2 w-1/2 text-center rounded-md placeholder-[gray]"
//           />
//           <input
//             type="email"
//             placeholder="Email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="py-2 w-1/2 text-center rounded-md placeholder-[gray]"
//           />
//         </div>
//         <div>
//           <button type="submit" className="bg-orange-500 text-white py-3 px-12 rounded-md hover:scale-105">
//             Subscribe Now
//           </button>
//         </div>
//       </form>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//   );
// };

// export default Newsletter;
