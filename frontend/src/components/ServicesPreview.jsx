import React from "react";

const services = [
  {
    title: "Hair Spa",
    desc: "Relaxing hair spa with shampoo and massage",
    price: 499,
    image: "https://images.unsplash.com/photo-1600607687185-022deb3a4b0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Face Tanning",
    desc: "Remove sun tan with premium organic treatment",
    price: 899,
    image: "https://images.unsplash.com/photo-1620281734148-06b6c2bb2c6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Japanese Treatment",
    desc: "Luxurious hair smoothing therapy",
    price: 1999,
    image: "https://images.unsplash.com/photo-1588776814546-57aa7f383dbe?auto=format&fit=crop&w=800&q=80",
  },
];

const ServicesPreview = () => {
  return (
    <div className="px-4 py-12 bg-white md:px-16">
      <h2 className="mb-10 text-3xl font-bold text-center text-indigo-700">
        Featured Services
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="overflow-hidden transition duration-300 shadow-md bg-gray-50 rounded-2xl hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-52"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-indigo-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
              <p className="mt-2 font-bold text-blue-600">₹{service.price}</p>
              <button className="px-4 py-2 mt-4 text-white transition bg-indigo-600 rounded-md cursor-parlour hover:bg-indigo-700">
                Book Now
                </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPreview;
