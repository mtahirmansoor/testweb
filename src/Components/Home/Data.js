import image1 from '../../assets/Car/image1.jpeg';
import image2 from '../../assets/Car/image2.jpeg';
import image3 from '../../assets/Car/image3.jpeg';
import image4 from '../../assets/Car/image4.jpeg';
import image5 from '../../assets/Car/image5.jpeg';
import image6 from '../../assets/Car/image6.jpeg';
import image7 from '../../assets/Car/image7.jpeg';
import image8 from '../../assets/Car/image8.jpeg';
import image9 from '../../assets/Car/image9.jpeg';
import image10 from '../../assets/Car/image10.jpeg';
import image11 from '../../assets/Car/image11.jpeg';
import image12 from '../../assets/Car/image12.jpeg';
import image13 from '../../assets/Car/image13.jpeg';
import image14 from '../../assets/Car/image14.jpeg';
import image15 from '../../assets/Car/image15.jpeg';
import image16 from '../../assets/Car/image16.jpeg';
import image17 from '../../assets/Car/image17.jpeg';
import image18 from '../../assets/Car/image18.jpeg';
import image19 from '../../assets/Car/image19.jpeg';
import image20 from '../../assets/Car/image20.jpeg';
import image21 from '../../assets/Car/image21.jpeg';
import image22 from '../../assets/Car/image22.jpeg';
import image23 from '../../assets/Car/image23.jpeg';
import image24 from '../../assets/Car/image24.jpeg';
import image25 from '../../assets/Car/image25.jpeg';
import image26 from '../../assets/Car/image26.jpeg';
import image27 from '../../assets/Car/image27.jpeg';
import image28 from '../../assets/Car/image28.jpeg';
import image29 from '../../assets/Car/image29.jpeg';
import image30 from '../../assets/Car/image30.jpeg';

const carsData = [
    {
      id: 10,
      make: 'Ford Fiesta',
      model: '1.0T EcoBoost Titanium Euro 6 (s/s) 5dr',
      registration:'2016 (16 reg)',
      year: 2016,
      price: 2993.00,
      mileage: 126000,
      color: 'Black Cloth',
      fuel_type: 'petrol',
      transmission: 'Manual',
      body_type: 'Hatchback',
      engine_size: '2',
      features: 'airbag',
      carcondition: 'New',
      images: [
        "image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg",
        "image5.jpeg", "image6.jpeg", "image7.jpeg", "image8.jpeg",
        "image9.jpeg", "image10.jpeg", "image11.jpeg", "image12.jpeg",
        "image13.jpeg", "image14.jpeg", "image15.jpeg", "image16.jpeg",
        "image17.jpeg", "image18.jpeg", "image19.jpeg", "image20.jpeg", "image21.jpeg", "image22.jpeg",
        "image23.jpeg", "image24.jpeg", "image25.jpeg", "image26.jpeg", "image27.jpeg", "image28.jpeg",
        "image29.jpeg", "image30.jpeg",
      ],
      createdAt: '2024-11-16 13:56:38',
      updatedAt: '2024-11-16 13:56:38',
      vehicle_description: '3 Previous Owner, HPI Clear, MOT is valid until 28/02/2025, With A Low Mileage Of 125000, Comes with Full Service History, 2 Keys, Loads of paper work, it has been very well looked after throughout its whole life, Runs and drives and stops as it should, no faults or issues present. 1 litre Eco Boost, ULEZ COMPLIANT, Euro 6. All documents present, including previous MOT, service history, and a clean copy of the HPI report for the vehicle., Exceptionally clean inside and out, This vehicle boasts a great specifications list from factory, inclusive of ; electric windows, electric mirrors, central locking, air conditioning, front day time running lights and much more., Vehicle will be supplied with 3 months warranty included in the sale price, Warranted Mileage, 104 Point Vehicle Health Check, Part Exchange Welcome, Finance Available, AA Approved Dealership, All cars are subject to a variable administration fee, Free Home Delivery up to 25 miles for online orders.',
      vehicle_details: 'Black Cloth interior, Blue, 3 owners. Don\'t hesitate to contact us!, £4,094 Vehicle registered: 01/03/2016',
      features_details: [
        { detail: "Sony Navigation System - DAB and Ford SYNC" },
        { detail: "Active City Stop" },
        { detail: "City Pack" },
        { detail: "Convenience Pack" },
        { detail: "Rear Centre Head Restraint" },
        { detail: "16in Alloy Wheels - 10 Spoke" },
        { detail: "4.2in TFT Display" },
        { detail: "AUX Connection" },
        { detail: "Aesthetic Lighting Package" },
        { detail: "Airbags - Passenger Deactivation" },
        { detail: "Automatic Dimming Rear View Mirror" },
        { detail: "Automatic Headlights - Rain Sensing Wipers - Auto Dimming" },
        { detail: "Rear View Mirror" },
        { detail: "Bluetooth Hands-free Phone" },
        { detail: "Bumpers - Front and Rear - Body Colour" },
        { detail: "Chrome Belt Line Finisher" },
        { detail: "Courtesy Light - Overhead with Theatre-Style Dimming" },
        { detail: "Courtesy Lights with Map Reading Lights" },
        { detail: "Cruise Control" },
        { detail: "DDS - Deflation Detection System" },
        { detail: "Door Handles - Body Colour" },
        { detail: "Door Mirrors - Power-Foldable with Puddle Lights" },
        { detail: "EATC - Electronic Automatic Temperature Control - Climate Control" },
        { detail: "EBD - Electronic Brakeforce Distribution ECOmode" },
        { detail: "ESP - Electronic Stability Programme Ford Easy Fuel Capless Refuelling System with Misfuel Inhibitor" },
        { detail: "Ford SYNC" },
        { detail: "Front Fog Lights - Chrome Bezel Rings" },
        { detail: "Gear Knob - Leather" },
        { detail: "Gearshift Knob - Leather-Trimmed with Chrome Finish Bezel" },
        { detail: "Glovebox - Illuminated" },
        { detail: "Head Restraints - 2-way Adjustment" },
        { detail: "Head Restraints - Rear 2-Way Adjustment" },
        { detail: "Headlights - Automatic" },
        { detail: "Headlights - Halogen Projector with Silver Bezel" },
        { detail: "Headliner - Woven" },
        { detail: "IPS - Intelligent Protection System" },
        { detail: "Interior Door Lever - Chrome Finish" },
        { detail: "Leather-Trimmed Handbrake" },
        { detail: "Loadspace Compartment Light" },
        { detail: "MyKey" },
        { detail: "Perimeter Anti Theft Alarm" },
        { detail: "Pollen Filter" },
        { detail: "Rear Courtesy Lights" },
        { detail: "Rear Privacy Glass" },
        { detail: "Rear Spoiler - Body Colour" },
        { detail: "Seats - 60-40 Split Folding Back and Fixed Cushion" },
        { detail: "Seats - Front Comfort Style" },
        { detail: "Sony DAB Digital Radio" },
        { detail: "Speakers - x6" },
        { detail: "Tailgate Handle - Body Colour with Chrome Finisher" },
        { detail: "Traction Control - TC" },
        { detail: "Tyre Pressure Monitoring System" },
        { detail: "USB Connection" },
        { detail: "Voice Control - Audio" }
      ],
      fuel_efficiency: {
        urban: '40 mpg',           // Urban Fuel Efficiency
        extra_urban: '60 mpg',     // Extra Urban Fuel Efficiency
        combined: '50 mpg',        // Combined Fuel Efficiency
      },
      emissions: {
        CO2_emission: '120 g/km',  // CO2 emissions
        tax: '£150',               // Annual road tax
        Euro: 'Euro 6',            // Euro standard
      },
      insurance: {
        group: 'Group 12',         // Insurance group
      },
      engine_performance: {
        max_power: '100 hp',       // Max power
        max_torque: '150 Nm',      // Max torque
        engine_size: '1.0L',       // Engine size
        valve_gear: 'DOHC',        // Valve gear
        aspiration: 'Turbocharged', // Aspiration
        cylinders: 4,              // Cylinder count
        cylinder_arrangement: 'Inline', // Cylinder arrangement
        drive: 'Front Wheel Drive', // Drive type
        gears: 6,                  // Number of gears
      },
      dimensions: {
        length: '4000 mm',         // Length
        width: '1750 mm',          // Width
        height: '1450 mm',         // Height
        max_weight: '1300 kg',     // Max weight
        seats: 5,                  // Number of seats
        towing_weight: '1200 kg',  // Towing capacity
      },
    }
  ];
  
  export default carsData;
  