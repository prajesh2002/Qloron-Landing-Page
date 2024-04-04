import img from "../images/Clients/client1.png";
import img2 from "../images/Clients/client2.png";
const Clients = () => {
  return (
    <div className="my-10 mx-10 md:mx-16 lg:mx-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-5">Our Clients</h1>
      <div
        className="bg-[#F2F9F9] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 md:p-10 lg:p-10 "
      >
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
