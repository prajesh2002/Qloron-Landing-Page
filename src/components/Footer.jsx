const sections = [
  {
    title: "HR & Payroll",
    items: [
      "What is HRMS?",
      "What is payroll?",
      "What is Statutory Compilance?",
      "Guide to Leave Management",
      "Guide to Attendance Management",
    ],
  },
  {
    title: "Product",
    items: [
      "HR Software",
      "Payroll Software",
      "Leave Management System",
      "Attendance Management System",
      "Performance Management System",
      "Employee Self Service",
    ],
  },
  {
    title: "Resource",
    items: ["Blogs", "Webinars", "Case Study"],
  },
  {
    title: "Company",
    items: [
      "About",
      "Customer",
      "Payroll Service Providers",
      "Plans & Pricing",
      "Newsroom",
      "Contact Us",
    ],
  },
];

const Footer = () => {
  return (
    <>
      {/* <div className="w-full mt-10 bg-black text-white py-y px-2 text-left">
        <div className="mx-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b-2 border-gray-600 py-8">
          <div className="col-span-2 pt-8 md:pt-2 md:mr-48 lg:mr-36"> */}
      <div className="w-full mt-10 bg-black text-white py-y px-2 text-left">
        <div className="mx-3 md:mx-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-b-2 border-gray-300 py-8 gap-x-10 text-[0.9rem]">
          {/*  */}
          <div className="col-span-1 pt-8 md:pt-2 ">
            <p className="font-bold">
              <img
                src="/src/images/sortboxs-logo1.png"
                alt=""
                className="w-48"
              />
            </p>
            <p className="py-4 text-white">
              Sortboxs is made for your people, by people like you, who care for
              people in the organization.{" "}
            </p>
          </div>
          {/*  */}

          {sections.map((section, index) => (
            <div key={index}>
              <h6 className="font-bold pt-2 text-[1.1rem]">{section.title}</h6>
              <ul>
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="py-2 text-gray-300 hover:text-white cursor-pointer pr-2 text-[0.93rem]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col px-2 py-3 mx-auto justify-between sm:flex  text-center text-gray-200">
          <p className="my-4">
            © Copyright 2024, All Rights Reserved by
            <span className=" text-[#FC8320]"> Sortboxs</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
