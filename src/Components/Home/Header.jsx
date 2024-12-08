import React from "react";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Import images
import Image1 from "../../assets/Logo/Logow.jpg";
import Image2 from "../../assets/Header/image2.jpg";
import Image3 from "../../assets/Header/image3.jpg";
import financeImage from "../../assets/Header/finance.jpg";
import stockImage from "../../assets/Header/sellcar.jpg";
import Image from "../../assets/Car/image1.jpeg";

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
};

const WeeklySchedule = () => (
  <div className="bg-black bg-opacity-75 p-4 text-white rounded-t-md mt-8 mb-12 sm:mb-16 lg:mb-20">
    <h3 className="text-xs sm:text-sm md:text-lg font-bold text-center">
      Office Timings
    </h3>
    <ul className="py-2 text-xs sm:text-sm space-y-1">
      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
        <li key={index} className="flex justify-between">
          <span>{day}</span>
          <span>
            {day === "Saturday"
              ? "10am - 4pm"
              : day === "Sunday"
              ? "Closed"
              : "9am - 5pm"}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const Tagline = () => (
  <Link to="/SellYourCar">
    <div className="absolute top-4 right-4 bg-white bg-opacity-75 p-3 text-white rounded-lg flex flex-col items-center cursor-pointer text-xs sm:text-sm md:text-md lg:text-lg z-20">
      <span className="font-bold flex items-center text-white-500">
        We Buy <FaCar className="text-lg sm:text-xl lg:text-2xl mx-1 text-red-500" />
      </span>
      <span className="font-bold mt-1 text-white-500">for Affordable <span className="text-red-500">£</span> </span>
    </div>
  </Link>
);

const Location = () => (
  <div className="text-center mt-8 sm:mt-10 lg:mt-12 px-4">
    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
      Visit Us At Our Location
    </h4>
    <p className="text-sm sm:text-base lg:text-lg text-black mt-2">
      20 Harding Road Woodley, Reading Berkshire RG5 3ER
    </p>
  </div>
);

const HeaderAndAbout = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="relative w-full h-auto overflow-hidden">
        {/* Blue Background with Phone Number */}
        <div className="bg-red-600 text-white text-center p-3 z-10 relative">
          <span className="text-sm sm:text-lg font-semibold">
            Call us now:{" "}
            <a href="tel:+44 7398 524761" className="text-white hover:underline">
              +44 7398 524761
            </a>
          </span>
        </div>
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px]">
  <Slider {...sliderSettings}>
    <div className="w-full h-full flex items-center justify-center">
      <img
        src={Image1}
        alt="Header Image"
        className="w-full h-full object-cover"  // Ensures the logo fits the container with object-cover
        style={{ aspectRatio: '16/9' }} // Force the logo into a 16:9 ratio
      />
    </div>
    <div className="w-full h-full flex items-center justify-center">
      <img
        src={Image2}
        alt="Slide 2"
        className="w-full h-full object-cover"  // Ensures other images take the same height
        style={{ aspectRatio: '16/9' }} // Force the same aspect ratio for consistency
      />
    </div>
    <div className="w-full h-full flex items-center justify-center">
      <img
        src={Image3}
        alt="Slide 3"
        className="w-full h-full object-cover"  // Ensures other images take the same height
        style={{ aspectRatio: '16/9' }} // Force the same aspect ratio for consistency
      />
    </div>
  </Slider>

  {/* Tagline placed on top of the image */}
  <Tagline />
</div>



        {/* Location Text Below Image */}
        <Location />

        {/* Timings Section */}
        <div className="relative z-10 mt-8 sm:mt-12 lg:mt-16 px-4 mb-16 sm:mb-20 lg:mb-24">
          <WeeklySchedule />
        </div>
      </header>

      {/* About Section */}
      <div className="flex flex-col items-center py-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <div className="flex flex-wrap justify-center sm:justify-evenly max-w-[1200px] pt-2">
          {/* Stock Section */}
          <Link to="/stock">
            <div className="flex flex-col items-start max-w-[420px] h-[300px] m-4 p-4 bg-white rounded-lg shadow-lg cursor-pointer">
              <p className="font-bold text-[18px] mb-2">Browse all stock</p>
              <img
                src={Image}
                alt="Stock"
                className="w-full h-40 object-cover rounded-md mt-2"
              />
            </div>
          </Link>

          {/* Finance Section */}
          <Link to="/finance">
            <div className="flex flex-col items-start max-w-[420px] h-[300px] m-4 p-4 bg-white rounded-lg shadow-lg cursor-pointer">
              <p className="font-bold text-[18px] text-black mb-2">Finance</p>
              <img
                src={financeImage}
                alt="Finance Insights"
                className="w-full h-40 object-cover rounded-md mt-2"
              />
            </div>
          </Link>

          {/* SellCar Section */}
          <Link to="/SellYourCar">
            <div className="flex flex-col items-start max-w-[420px] h-[300px] m-4 p-4 bg-white rounded-lg shadow-lg cursor-pointer">
              <p className="font-bold text-[18px] text-black mb-2">
                Sell Your Car
              </p>
              <img
                src={stockImage}
                alt="Sell Car"
                className="w-full h-40 object-cover rounded-md mt-2"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderAndAbout;
