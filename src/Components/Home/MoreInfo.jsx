import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaCheckCircle, FaYoutube } from "react-icons/fa"; // Import new icons
import Slider from "react-slick"; // Import react-slick
import PedometerWithProgressBars from "./Progressbar";
import carsData from "./Data";
// Import images statically

import image1 from "../../assets/Car/image1.jpeg";
import image2 from "../../assets/Car/image2.jpeg";
import image3 from "../../assets/Car/image3.jpeg";
import image4 from "../../assets/Car/image4.jpeg";
import image5 from "../../assets/Car/image5.jpeg";
import image6 from "../../assets/Car/image6.jpeg";
import image7 from "../../assets/Car/image7.jpeg";
import image8 from "../../assets/Car/image8.jpeg";
import image9 from "../../assets/Car/image9.jpeg";
import image10 from "../../assets/Car/image10.jpeg";
import image11 from "../../assets/Car/image11.jpeg";
import image12 from "../../assets/Car/image12.jpeg";
import image13 from "../../assets/Car/image13.jpeg";
import image14 from "../../assets/Car/image14.jpeg";
import image15 from "../../assets/Car/image15.jpeg";
import image16 from "../../assets/Car/image16.jpeg";
import image17 from "../../assets/Car/image17.jpeg";
import image18 from "../../assets/Car/image18.jpeg";
import image19 from "../../assets/Car/image19.jpeg";
import image20 from "../../assets/Car/image20.jpeg";
import image21 from "../../assets/Car/image21.jpeg";
import image22 from "../../assets/Car/image22.jpeg";
import image23 from "../../assets/Car/image23.jpeg";
import image24 from "../../assets/Car/image24.jpeg";
import image25 from "../../assets/Car/image25.jpeg";
import image26 from "../../assets/Car/image26.jpeg";
import image27 from "../../assets/Car/image27.jpeg";
import image28 from "../../assets/Car/image28.jpeg";
import image29 from "../../assets/Car/image29.jpeg";
import image30 from "../../assets/Car/image30.jpeg";

// Create an object mapping image names to actual imported images
const imageMap = {
  "image1.jpeg": image1,
  "image2.jpeg": image2,
  "image3.jpeg": image3,
  "image4.jpeg": image4,
  "image5.jpeg": image5,
  "image6.jpeg": image6,
  "image7.jpeg": image7,
  "image8.jpeg": image8,
  "image9.jpeg": image9,
  "image10.jpeg": image10,
  "image11.jpeg": image11,
  "image12.jpeg": image12,
  "image13.jpeg": image13,
  "image14.jpeg": image14,
  "image15.jpeg": image15,
  "image16.jpeg": image16,
  "image17.jpeg": image17,
  "image18.jpeg": image18,
  "image19.jpeg": image19,
  "image20.jpeg": image20,
  "image21.jpeg": image21,
  "image22.jpeg": image22,
  "image23.jpeg": image23,
  "image24.jpeg": image24,
  "image25.jpeg": image25,
  "image26.jpeg": image26,
  "image27.jpeg": image27,
  "image28.jpeg": image28,
  "image29.jpeg": image29,
  "image30.jpeg": image30,
};

const MoreInfo = () => {
  const { id } = useParams(); // Get the car ID from the URL
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("tech");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal open state

  // Fetch car details
  useEffect(() => {
    const foundCar = carsData.find((car) => car.id === parseInt(id)); // Find car by ID
    if (foundCar) {
      setCar(foundCar);
      setSelectedImage(foundCar.images[0]);
      setLoading(false);
    } else {
      setError("Car not found");
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const renderTabContent = () => {
    if (activeTab === "moreDetails") {
      return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Features</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {car.features_details.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <FaCheckCircle className="text-green-500 mr-2 text-lg flex-shrink-0" />
                <span>{feature.detail}</span>
              </li>
            ))}
          </ul>
          <hr className="border-t-4 border-gray-800 my-6" />
  
          <h2 className="text-1xl font-semibold mb-2 mt-6">Vehicle Description</h2>
          <p>{car.vehicle_description}</p>
        </div>
      );
    } else if (activeTab === "techSpecifications") {
      return <PedometerWithProgressBars />;
    }
  };

  // Custom Arrows for Slider
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow-next`}
        style={{
          ...style,
          display: "block",
          background: "transparent",
          right: "10px",
          zIndex: 10,
        }}
        onClick={onClick}
      >
        <span className="text-3xl">→</span>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow-prev`}
        style={{
          ...style,
          display: "block",
          background: "transparent",
          left: "10px",
          zIndex: 10,
        }}
        onClick={onClick}
      >
        <span className="text-3xl">←</span>
      </div>
    );
  };

  // Slider settings for React Slick
  const sliderSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          centerMode: false,
        },
      },
    ],
  };

  // Function to open the full-screen modal when the large image is clicked
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="container mx-auto px-4 py-6">
    {/* Large Image Section */}
    <div className="mb-6">
      <img
        src={imageMap[selectedImage]} // Show the large selected image
        alt={`${car.make} ${car.model}`}
        className="w-3/4 sm:w-1/2 md:w-1/3 h-auto sm:h-40 md:h-56 lg:h-64 rounded-lg shadow-md cursor-pointer mb-4 mx-auto"
        onClick={() => openModal(selectedImage)} // Open modal when the large image is clicked
      />
    </div>

    {/* Thumbnails Slider Below the Large Image */}
    <div className="mb-6 relative">
      <Slider {...sliderSettings}>
        {Array.isArray(car.images) && car.images.length > 0 ? (
          car.images.map((image, index) => (
            <div key={index} onClick={() => setSelectedImage(image)}>
              <img
                src={imageMap[image]} // Map each thumbnail image to the correct imported image
                alt={`${car.make} ${car.model}`}
                className="w-full h-[150px] object-cover rounded-lg shadow-md transition-all duration-300 hover:scale-105"
              />
            </div>
          ))
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600">No Image Available</span>
          </div>
        )}
      </Slider>
    </div>

    {/* Modal for Full-Screen Image View */}
    {isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="relative w-full h-full">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-red text-3xl"
          >
            ×
          </button>
          <img
            src={imageMap[selectedImage]} // Display the image in full screen
            alt={`${car.make} ${car.model}`}
            className="w-full h-full object-cover" // Make image cover the entire screen
          />
        </div>
      </div>
    )}

    <div className="p-4 flex-1">
      {/* Make & Model */}
      <h1 className="font-bold text-xl text-gray-800">{car.make}</h1>
      <p className="font-semibold text-md text-gray-800">
        {car.model} ({car.year})
      </p>
      <h2 className="text-green-500 font-bold text-xl">£{car.price}</h2>
      {/* Details in Grey Block */}
      <div className="mt-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-200 p-4 rounded-md">
            <strong>Registration:</strong> {car.registration}
          </div>
          <div className="bg-gray-200 p-4 rounded-md">
            <strong>Mileage:</strong> {car.mileage} miles
          </div>
          <div className="bg-gray-200 p-4 rounded-md">
            <strong>Transmission:</strong> {car.transmission}
          </div>
          <div className="bg-gray-200 p-4 rounded-md">
            <strong>Fuel Type:</strong> {car.fuel_type}
          </div>
          <div className="bg-gray-200 p-4 rounded-md">
            <strong>Year:</strong> {car.year}
          </div>
          <div className="bg-gray-200 p-4 rounded-md">
            <strong>Body Type:</strong> {car.body_type}
          </div>
          <div className="bg-gray-200 p-4 rounded-md">
            <h1 className="font-bold">
              Detail Link:
              <a
                href="https://youtube.com/shorts/El67M69xZCw?si=qn2gdI0xa0xnrOyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-gray-400"
              >
                <FaYoutube size={20} />
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-6 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === "moreDetails" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("moreDetails")}
        >
          More Details
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === "techSpecifications" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("techSpecifications")}
        >
          Tech Specifications
        </button>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
  </div>
  );
};

export default MoreInfo;