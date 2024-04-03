import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from "../images/reviews-bg.png";
import img from "../images/customer.png";
import star1 from "../images/star-filled.png";
import star2 from "../images/star-empty.png";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 2, // Number of slides to scroll at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    // <div className="bg-gradient-to-l from-[#3e315e] to-[#654F9D] text-center place-content-center p-10">
    <div
      className="text-center place-content-center p-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-white mb-10 font-bold text-2xl md:text-3xl lg:text-4xl">
        Customer Reviews
      </h1>
      <Slider {...settings} className="mx-1 md:mx-6 lg:mx-12 xl:mx-16 ">
        <div className="slider-item ">
          <div className="bg-white text-black relative p-4 rounded-md my-7">
            <img
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full"
              src={img}
              alt="Profile"
            />
            <div className="flex justify-center mt-12">
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star2} alt="" />
            </div>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
            <h1 className="font-bold my-2">Haylie Herwitz</h1>
          </div>
        </div>
        <div className="slider-item">
          <div className="bg-white text-black relative p-4 rounded-md my-7">
            <img
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full"
              src={img}
              alt="Profile"
            />
            <div className="flex justify-center mt-12">
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star2} alt="" />
            </div>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
            <h1 className="font-bold my-2">Haylie Herwitz</h1>
          </div>
        </div>
        <div className="slider-item">
          <div className="bg-white text-black relative p-4 rounded-md my-7">
            <img
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full"
              src={img}
              alt="Profile"
            />
            <div className="flex justify-center mt-12">
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star2} alt="" />
            </div>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
            <h1 className="font-bold my-2">Haylie Herwitz</h1>
          </div>
        </div>{" "}
        <div className="slider-item">
          <div className="bg-white text-black relative p-4 rounded-md my-7">
            <img
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full"
              src={img}
              alt="Profile"
            />
            <div className="flex justify-center mt-12">
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star2} alt="" />
            </div>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
            <h1 className="font-bold my-2">Haylie Herwitz</h1>
          </div>
        </div>
        <div className="slider-item">
          <div className="bg-white text-black relative p-4 rounded-md my-7">
            <img
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full"
              src={img}
              alt="Profile"
            />
            <div className="flex justify-center mt-12">
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star2} alt="" />
            </div>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
            <h1 className="font-bold my-2">Haylie Herwitz</h1>
          </div>
        </div>{" "}
        <div className="slider-item">
          <div className="bg-white text-black relative p-4 rounded-md my-7">
            <img
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full"
              src={img}
              alt="Profile"
            />
            <div className="flex justify-center mt-12">
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star1} alt="" />
              <img src={star2} alt="" />
            </div>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
            <h1 className="font-bold my-2">Haylie Herwitz</h1>
          </div>
        </div>
      </Slider>
      <div className="flex mt-8 justify-center">
        {/* Optional: Pagination or navigation buttons */}
      </div>

      {/* prev next buttons styling */}
      <style>
        {`
          .slick-prev:before,
          .slick-next:before {
            font-size: 35px;
            color: white;
          }

          .slick-prev {
            left: -32px; 
          }

          .slick-next {
            right: -20px; 
          }

          .slick-dots li button::before {
            font-size:10px;
            color: white;
          }

          .slick-dots li.slick-active button::before {
            color: orangeRed; 
            font-size:15px;
            width: 16px;
          }

          .slick-dots li button::before {
            width: 10px;
          }

          .slick-prev:hover:before,
          .slick-next:hover:before {
            color: white;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Reviews;
