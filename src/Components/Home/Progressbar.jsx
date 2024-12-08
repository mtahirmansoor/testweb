import React, { useState, useEffect } from "react";
import ProgressBar from "react-progressbar"; // For the linear progress bar

// Semi-Circular Speedometer
const SemiCircularSpeedometer = ({ value, maxValue, label }) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = Math.PI * radius; // Semi-circle circumference (half circle)
  
  // Calculate the strokeDashoffset based on the progress (value / maxValue)
  const progressOffset = ((1 - value / maxValue) * circumference); // Full circle offset calculation

  const [hasHovered, setHasHovered] = useState(false);

  const handleHover = () => {
    if (!hasHovered) {
      setHasHovered(true);
    }
  };

  return (
    <div
      className="inline-block mb-6 sm:mb-8 text-center w-full"
      onMouseEnter={handleHover} // Trigger animation on first hover
      style={{ backgroundColor: "#e0e0e0", padding: "20px", borderRadius: "8px" }} // Gray background and padding for spacing
    >
      <svg className="w-full h-20 sm:h-24" viewBox="0 0 120 75">
        {/* Background arc */}
        <circle
          cx="60"
          cy="70"
          r={radius}
          fill="transparent"
          stroke="#d3d3d3" // Light gray color for background
          strokeWidth={strokeWidth}
        />
        {/* Foreground arc representing speed (Progress arc) */}
        <circle
          cx="60"
          cy="70"
          r={radius}
          fill="transparent"
          stroke="#f44336" // Red color for the progress arc
          strokeWidth={strokeWidth}
          strokeDasharray={circumference} // Full circumference for half-circle
          strokeDashoffset={hasHovered ? progressOffset : circumference} // Only animate when hovered
          transform="rotate(180 60 70)" // Rotate to start from the left
          style={{
            transition: "stroke-dashoffset 1s ease-out", // Smooth transition
          }}
        />
      </svg>
      <div className="text-lg sm:text-xl font-bold text-gray-800">
        {Math.round(value)} MPH
      </div>
      <div className="text-sm sm:text-base text-gray-600 font-semibold">
        {label}
      </div>
    </div>
  );
};

// Dashboard Component
const PedometerWithProgressBars = () => {
  // State for the progress bars (0-100%)
  const [urban, setUrban] = useState(15.9); // Urban MPG
  const [extraUrban, setExtraUrban] = useState(34.5); // Extra Urban MPG
  const [combined, setCombined] = useState(24.1); // Combined MPG
  const [co2Emission, setCo2Emission] = useState(73); // CO2 Emission in g/km
  const [acceleration, setAcceleration] = useState(0); // 0-62 mph time in seconds
  const [topSpeed, setTopSpeed] = useState(0); // Top speed in mph
  const [maxPower, setMaxPower] = useState(0); // Max Power (bhp)
  const [maxTorque, setMaxTorque] = useState(0); // Max Torque (Nm)

  const maxMPG = 50; // Set maximum for MPG semi-circles
  const maxCO2 = 300; // Maximum value for CO2 emission (g/km)
  const maxSpeed = 196; // Top speed in mph
  const maxPowerValue = 552; // Max Power value in bhp
  const maxTorqueValue = 775; // Max Torque value in Nm

  // Progress bar transition duration (in milliseconds)
  const progressDuration = 3000; // 3 seconds to complete

  // Simulate progress update for demonstration (using useEffect)
  useEffect(() => {
    // Function to animate progress towards the target values
    const animateProgress = (target, setState) => {
      let currentValue = 0;
      const interval = setInterval(() => {
        currentValue += 1; // Increase by 1 per interval
        setState(currentValue);
        if (currentValue >= target) {
          clearInterval(interval);
        }
      }, progressDuration / target); // Adjust the interval based on target
    };

    // Start animation for each progress bar with their respective target values
    animateProgress(urban, setUrban);
    animateProgress(extraUrban, setExtraUrban);
    animateProgress(combined, setCombined);
    animateProgress(co2Emission, setCo2Emission);
    animateProgress(5.6, setAcceleration); // Simulate 0-62 mph in 3.6s
    animateProgress(maxSpeed, setTopSpeed);
    animateProgress(maxPowerValue, setMaxPower);
    animateProgress(maxTorqueValue, setMaxTorque);
  }, []);

  return (
    <div className="p-6 sm:p-10 md:p-14 text-center font-sans bg-gray-100 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
        Cost and Efficiency
      </h1>
      
      {/* MPG Semi-Circles Section */}
      <div className="w-full mb-12 sm:mb-20">
        {/* Urban MPG */}
        <SemiCircularSpeedometer value={urban} maxValue={maxMPG} label="Urban" />
        
        {/* Extra Urban MPG */}
        <SemiCircularSpeedometer value={extraUrban} maxValue={maxMPG} label="Extra Urban" />
        
        {/* Combined MPG */}
        <SemiCircularSpeedometer value={combined} maxValue={maxMPG} label="Combined" />
      </div>

      {/* CO2 Emission Linear Progress Bar */}
      <div className="w-full mb-12 sm:mb-20 bg-gray-200 p-6 rounded-lg">
        <h3 className="text-xl sm:text-2xl font-semibold text-red-500 mb-2">CO2 Emission</h3>
        <ProgressBar
          completed={co2Emission}
          color="#f44336" // Red color for CO2 Emission bar
          height="20px"
          labelAlignment="outside"
          style={{
            transition: `width ${progressDuration}ms ease-out`, // Smooth transition effect
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        />
        <div className="text-lg sm:text-xl font-bold text-gray-800 mt-2">{Math.round(co2Emission)} g/km</div>
      </div>

      {/* Tax Information */}
      <div className="mb-6">
        <p className="text-sm text-black-600  bg-gray-200 ">
        <h1>Tax</h1>
        (6/12mo) £104.50/ £190
        </p>
      </div>

      {/* Euro Status */}
      <div className="mb-6">
        <p className="text-sm text-black-600  bg-gray-200 ">
        <h1>Euro Status:</h1>
        
           Euro 6
        </p>
      </div>

      {/* Euro Group */}
      <div className="mb-6">
        <p className="text-sm text-black-600  bg-gray-200 ">
        <h1> Euro Group: </h1>
         
         1-50 E50
        </p>
      </div>

      {/* Engine and Performance */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">Engine and Performance</h2>

      {/* 0-62 mph Linear Progress Bar */}
      <div className="w-full mb-6 bg-gray-200 p-6 rounded-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">0 to 62 mph</h3>
        <ProgressBar
          completed={acceleration}
          color="#f44336" // Red color for 0-62 mph bar
          height="20px"
          labelAlignment="outside"
          style={{
            overflow: "hidden",
            marginBottom: "10px",
            borderRadius: "10px",
            transition: "width 3.6s ease-out", // 0-62 mph transition time
          }}
        />
        <div className="text-lg sm:text-xl font-bold text-gray-800 mt-2">{Math.round(acceleration)}s</div>
      </div>

      {/* Top Speed Semi-Circular Speedometer */}
      <SemiCircularSpeedometer value={topSpeed} maxValue={maxSpeed} label="Top Speed" />

      {/* Max Power Linear Progress Bar */}
      <div className="w-full mb-6 bg-gray-200 p-6 rounded-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Max Power (bhp)</h3>
        <ProgressBar
          completed={maxPower}
          color="#f44336" // Red color for Max Power bar
          height="20px"
          labelAlignment="outside"
          style={{
            overflow: "hidden",
            marginBottom: "10px",
            borderRadius: "10px",
            transition: "width 2s ease-out", // Max Power transition
          }}
        />
        <div className="text-lg sm:text-xl font-bold text-gray-800 mt-2">{Math.round(maxPower)} bhp</div>
      </div>

      {/* Max Torque Linear Progress Bar */}
      <div className="w-full mb-6 bg-gray-200 p-6 rounded-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Max Torque (Nm)</h3>
        <ProgressBar
          completed={maxTorque}
          color="#f44336" // Red color for Max Torque bar
          height="20px"
          labelAlignment="outside"
          style={{
            overflow: "hidden",
            marginBottom: "10px",
            borderRadius: "10px",
            transition: "width 2s ease-out", // Max Torque transition
          }}
        />
        <div className="text-lg sm:text-xl font-bold text-gray-800 mt-2">{Math.round(maxTorque)} Nm</div>
      </div>
     
{/* New Information Section */}
<div class="w-full mb-6 bg-gray-200 p-6 rounded-lg shadow-lg">
 
  <div class="row tight mb-8">
    <div class="col-sm-6">
      <h5 class="text-xl font-semibold mb-4">Engine Specifications</h5>
      <ul class="list-none space-y-4">
        <li class="card list p-4 bg-white rounded-lg shadow-sm">
          <span class="title font-medium text-gray-700">Engine Size :</span>
          <span class="value text-gray-900" data-v-enginel>3.9<small>L</small></span>
        </li>
        <li class="card list p-4 bg-white rounded-lg shadow-sm">
          <span class="title font-medium text-gray-700">Aspiration :</span>
          <span class="value text-gray-900" data-v-aspiration>TURBO CHARGED</span>
        </li>
        <li class="card list p-4 bg-white rounded-lg shadow-sm">
          <span class="title font-medium text-gray-700">Valve Gear :</span>
          <span class="value text-gray-900" data-v-valvegear>DOHC</span>
        </li>
        <li class="card list p-4 bg-white rounded-lg shadow-sm">
          <span class="title font-medium text-gray-700">Cylinders :</span>
          <span class="value text-gray-900" data-v-cylinders>8</span>
        </li>
        <li class="card list p-4 bg-white rounded-lg shadow-sm">
          <span class="title font-medium text-gray-700">Cyl. ARR :</span>
          <span class="value text-gray-900" data-v-cylinderarrangement>VEE</span>
        </li>
        <li class="card list p-4 bg-white rounded-lg shadow-sm">
          <span class="title font-medium text-gray-700">Drive :</span>
          <span class="value text-gray-900" data-v-driveaxle>REAR</span>
        </li>
        <li class="card list p-4 bg-white rounded-lg shadow-sm">
          <span class="title font-medium text-gray-700">Gears :</span>
          <span class="value text-gray-900" data-v-gears>7</span>
        </li>
      </ul>
    </div>


    <div class="col-sm-6">
      <h5 class="text-xl font-semibold mb-4">Weights and Measures</h5>
      <ul class="space-y-4">
        <li class="card content p-4 bg-white rounded-lg shadow-sm">
          <h4 class="font-medium text-gray-700">Dimensions : <small class="text-sm">(mm)</small></h4>
          <div class="text-center">
            <div class="dimensions watch">
              <div class="top">
                <span class="value text-gray-900"><i class="counter idle" data-v-weightkerb>1730</i><small>kg</small></span>
              </div>
              <div class="dim h">
                <div class="arrow"></div>
                <span class="title font-medium text-gray-700">Height :</span>
                <span class="value text-gray-900"><i class="counter idle" data-v-height>1317</i><small>mm</small></span>
              </div>
              <div class="dim w">
                <div class="arrow"></div>
                <span class="title font-medium text-gray-700">Width :</span>
                <span class="value text-gray-900"><i class="counter idle" data-v-width>2109</i><small>mm</small></span>
              </div>
              <div class="dim l">
                <div class="arrow"></div>
                <span class="title font-medium text-gray-700">Length :</span>
                <span class="value text-gray-900"><i class="counter idle" data-v-length>4570</i><small>mm</small></span>
              </div>
            </div>
          </div>
        </li>
        <li class="p-4 bg-white rounded-lg shadow-sm  ">
          <span class="title font-medium text-gray-700">Max Gross Weight :</span>
          <span class="value text-gray-900" data-v-maxgrossweight>1730<small>kg</small></span>
        </li>
        <li class="p-4 bg-white rounded-lg shadow-sm ">
          <span class="title font-medium text-gray-700">Towing Weight : <small class="text-sm">(Braked)</small></span>
          <span class="value text-gray-900" data-v-towingweightbraked></span>
        </li>
        <li class="p-4 bg-white rounded-lg shadow-sm ">
          <span class="title font-medium text-gray-700">Towing Weight : <small class="text-sm">(Unbraked)</small></span>
          <span class="value text-gray-900" data-v-towingweightunbraked></span>
        </li>
        <li class="p-4 bg-white rounded-lg shadow-sm ">
          <span class="title font-medium text-gray-700">Seats :</span>
          <span class="value text-gray-900" data-v-seats>4</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="row tight mb-8">
    <div class="col-sm-6">
      <h5 class="text-xl font-semibold mb-4">Safety (NCAP)</h5>
      <ul>
        <li class="safety p-4 bg-white rounded-lg shadow-sm  mb-4">
          <span class="title font-medium text-gray-700">Adult</span>
          <span class="value score-" data-v-ncapadult>-</span>
        </li>
        <li class="safety p-4 bg-white rounded-lg shadow-sm  mb-4">
          <span class="title font-medium text-gray-700">Child</span>
          <span class="value score-" data-v-ncapchild>-</span>
        </li>
        <li class="safety p-4 bg-white rounded-lg shadow-sm  mb-4">
          <span class="title font-medium text-gray-700">Pedestrian</span>
          <span class="value score-" data-v-ncappedestrian>-</span>
        </li>
        <li class="safety p-4 bg-white rounded-lg shadow-sm  mb-4">
          <span class="title font-medium text-gray-700">Safety Assist</span>
          <span class="value score-" data-v-ncapsafetyassist>-</span>
        </li>
        <li class="safety p-4 bg-white rounded-lg shadow-sm">
          <span class="title font-medium text-gray-700">Overall</span>
          <span class="value score-" data-v-ncapoverall>-</span>
        </li>
      </ul>
    </div>
  </div>

  <small class="smallprint text-sm text-gray-500">Note: These figures show the typical specification for this vehicle, actual figures may vary.</small>
</div>

    </div>
  );
};

export default PedometerWithProgressBars;
