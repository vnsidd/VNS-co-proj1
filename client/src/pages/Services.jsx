// client/src/pages/Services.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <img
        src={service.imageUrl || "https://via.placeholder.com/150"}
        alt={service.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
      <p className="text-sm text-gray-500 mt-1">{service.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">
          ₹{service.price}
        </span>
        {service.discount > 0 && (
          <span className="text-sm text-green-600 font-semibold">
            {service.discount}% OFF
          </span>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
