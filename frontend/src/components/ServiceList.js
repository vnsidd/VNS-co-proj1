import { useEffect, useState } from "react";
import axios from "axios";

function ServiceList() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  useEffect(() => {
    if (selectedCategory && selectedSubcategory) {
      axios.get(`http://localhost:5000/api/services?category=${selectedCategory}&subcategory=${selectedSubcategory}`)
        .then((res) => setServices(res.data))
        .catch((err) => console.error("Error fetching services:", err));
    }
  }, [selectedCategory, selectedSubcategory]);

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Browse Services</h2>

      {/* Filter UI */}
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-semibold">Select a Category</h3>
        {categories.map((cat) => (
          <div key={cat._id} className="mb-2">
            <button
              className={`text-lg font-medium ${selectedCategory === cat.name ? "text-blue-700" : "text-blue-500"}`}
              onClick={() => {
                setSelectedCategory(cat.name);
                setSelectedSubcategory(""); // Reset subcategory
                setServices([]); // Reset services on new category
              }}
            >
              {cat.name}
            </button>
            {selectedCategory === cat.name && (
              <ul className="mt-1 ml-4">
                {cat.subcategories.map((sub) => (
                  <li
                    key={sub.name}
                    className={`cursor-pointer hover:underline ${selectedSubcategory === sub.name ? "font-bold text-black" : "text-gray-700"}`}
                    onClick={() => setSelectedSubcategory(sub.name)}
                  >
                    {sub.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Services Grid */}
      {services.length > 0 && (
        <>
          <h3 className="mb-3 text-xl font-semibold">Available Services</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(service => (
              <div key={service._id} className="overflow-hidden bg-white shadow-lg rounded-xl">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h4 className="text-xl font-bold text-gray-800">{service.name}</h4>
                  <p className="text-gray-600">{service.description}</p>
                  <p className="mt-2 font-semibold text-blue-600">₹{service.price}</p>
                  {service.discount > 0 && (
                    <p className="text-sm text-red-500">Discount: {service.discount}%</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ServiceList;
