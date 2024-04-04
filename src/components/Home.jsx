import girl from "../images/Home/girl.svg";
import payroll from "../images/Home/payroll1.png";
import Recognization from "../images/Home/Recognization.png";
import revenue from "../images/Home/revenue.png";
import bg from "../images/Home/welcome_bg.png";
import customers from "../images/Home/customers.png";
function Home() {
  return (
    <div
      className="h-[100%]  md:h-[39rem] w-full  welcome flex flex-col md:flex-row bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[100%] h-[100%] md:w-[45%] md:h-[100%] flex flex-col justify-center p-4 sm:p-8 md:p-10 lg:p-12 gap-8 slideInLeft">
        <p className="text-white font-bold text-[1.2rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] ">
          HRMS and Payroll Software to streamline your HR Operations
        </p>
        <p className="text-xs sm:text-sm md:text-md lg:text-lg text-white font-light">
          Sortboxs HRM Software effectively eases human resource processes for
          all businesses payroll submissions, leave & claims tracking, and
          attendance recording.
        </p>
        <button
          type="button"
          className="text-white bg-[#FC8320] hover:scale-105  rounded-sm text-xs sm:text-xs lg:text-sm px-2 py-2 font-medium sm:px-4 sm:py-2 lg:px-5 lg:py-3 text-center w-48 mx-auto md:mx-0"
        >
          Schedule Demo
        </button>
      </div>
      <div className="w-[100%] h-[100%] md:w-[55%] md:h-[100%] flex justify-center items-center p-5 md:p-2 relative">
        <img
          className="girl_img md:absolute slideInRight sm:w-[18rem] md:w-[20rem] lg:w-[30rem]"
          src={girl}
          alt="girl"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <img
          src={payroll}
          alt="payroll"
          className="hidden md:block md:absolute md:right-10 md:top-44 lg:right-22 lg:top-44 slideInTop sm:w-[6rem] md:w-[8rem] lg:w-[11rem]"
        />
        <img
          src={Recognization}
          alt="payroll"
          className="hidden md:block md:absolute md:left-2 lg:left-8 md:top-24 lg:top-20 slideInTop overflow-hidden sm:w-[6rem] md:w-[8rem] lg:w-[11rem]"
        />
        <img
          src={revenue}
          alt="payroll"
          className="hidden md:block md:absolute md:left-2 md:bottom-44 lg:left-4 lg:top-96 slideInBottom sm:w-[6rem] md:w-[8rem] lg:w-[11rem]"
        />
      </div>
      {/* <img
        src={customers}
        alt="customers"
        className="absolute left-[20%] lg:bottom-[-4.8rem] md:w-[40rem] lg:w-[55rem]"
      /> */}
    </div>
  );
}

export default Home;
