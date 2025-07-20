// src/components/ServiceCard.jsx
import React from "react";

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

export default ServiceCard;
