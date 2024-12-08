import React, { useState } from "react";
import { Link } from "react-router-dom";
import carsData from "./Data"; // Importing data.js
import image1 from "../../assets/car/image1.jpeg";

const Stock = () => {
  const [cars, setCars] = useState(carsData); // Directly set the imported data

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Car List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform transform hover:scale-105"
          >
            {/* Car Image */}
            <div className="flex-shrink-0">
              {Array.isArray(car.images) && car.images.length > 0 ? (
                <img
                  src={image1} // Show only the first image
                  alt={`Car ${car.make} ${car.model}`}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">No Image</span>
                </div>
              )}
            </div>

            {/* Car Info Section */}
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

                  {/* Price and More Info Button */}

                  {/* Price and More Info Button */}
                  <div className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
                    {/* More Info Button with Red Background */}
                    <Link to={`/MoreInfo/${car.id}`}>
                      <button  className="text-center w-full">
                        More Info
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stock;
