// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const CateringServicePage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const filters = [
    "All",
    "Price: Low to High",
    "Price: High to Low",
    // "Availability",
    // "Rating",
  ];
  const services = [
    {
      id: 1,
      name: "Premium Wedding Buffet",
      price: "$25-35 per person",
      image:
        "https://readdy.ai/api/search-image?query=elegant%20wedding%20buffet%20with%20beautifully%20arranged%20food%20on%20white%20tables%20with%20floral%20decorations%2C%20professional%20catering%20setup%20with%20high-end%20silverware%20and%20serving%20stations%2C%20soft%20lighting%20and%20minimal%20elegant%20background&width=400&height=225&seq=101&orientation=landscape",
      available: true,
      rating: 4.8,
      description:
        "Luxury wedding catering service with premium menu options and elegant presentation.",
    },
    {
      id: 2,
      name: "Corporate Lunch Packages",
      price: "$18-28 per person",
      image:
        "https://readdy.ai/api/search-image?query=professional%20corporate%20lunch%20buffet%20with%20business-appropriate%20food%20presentation%2C%20elegant%20serving%20trays%20with%20sandwiches%20and%20salads%2C%20minimal%20corporate%20setting%20with%20soft%20lighting%20and%20clean%20background&width=400&height=225&seq=102&orientation=landscape",
      available: true,
      rating: 4.6,
      description:
        "Professional catering solutions for business meetings and corporate events.",
    },
    {
      id: 3,
      name: "Cocktail Reception Service",
      price: "$22-32 per person",
      image:
        "https://readdy.ai/api/search-image?query=elegant%20cocktail%20reception%20with%20servers%20holding%20trays%20of%20appetizers%20and%20drinks%2C%20sophisticated%20venue%20setting%20with%20soft%20lighting%2C%20professional%20catering%20staff%20in%20uniform%2C%20minimal%20elegant%20background&width=400&height=225&seq=103&orientation=landscape",
      available: true,
      rating: 4.7,
      description:
        "Elegant passed hors d'oeuvres and cocktail service for sophisticated events.",
    },
    {
      id: 4,
      name: "Gourmet Plated Dinner",
      price: "$40-60 per person",
      image:
        "https://readdy.ai/api/search-image?query=gourmet%20plated%20dinner%20with%20beautifully%20presented%20food%20on%20white%20plates%2C%20fine%20dining%20experience%20with%20elegant%20table%20setting%2C%20professional%20catering%20presentation%20with%20garnishes%2C%20soft%20lighting%20and%20minimal%20elegant%20background&width=400&height=225&seq=104&orientation=landscape",
      available: true,
      rating: 4.9,
      description:
        "Fine dining experience with multi-course plated meals and premium service.",
    },
    {
      id: 5,
      name: "International Cuisine Station",
      price: "$30-45 per person",
      image:
        "https://readdy.ai/api/search-image?query=international%20food%20stations%20with%20diverse%20cuisine%20options%20displayed%20on%20elegant%20tables%2C%20variety%20of%20ethnic%20foods%20professionally%20presented%2C%20catering%20setup%20with%20decorative%20elements%2C%20soft%20lighting%20and%20minimal%20elegant%20background&width=400&height=225&seq=105&orientation=landscape",
      available: false,
      rating: 4.5,
      description:
        "Diverse food stations featuring cuisine from around the world with chef attendants.",
    },
    {
      id: 6,
      name: "Dessert & Coffee Bar",
      price: "$15-25 per person",
      image:
        "https://readdy.ai/api/search-image?query=elegant%20dessert%20and%20coffee%20bar%20with%20variety%20of%20pastries%20and%20sweets%20on%20tiered%20displays%2C%20professional%20catering%20setup%20with%20coffee%20service%2C%20beautiful%20presentation%20with%20decorative%20elements%2C%20soft%20lighting%20and%20minimal%20elegant%20background&width=400&height=225&seq=106&orientation=landscape",
      available: true,
      rating: 4.7,
      description:
        "Sweet endings with gourmet desserts, coffee service, and optional chocolate fountain.",
    },
    {
      id: 7,
      name: "Kids Menu Package",
      price: "$12-18 per child",
      image:
        "https://readdy.ai/api/search-image?query=kid-friendly%20catering%20with%20colorful%20food%20presentation%2C%20child-appropriate%20menu%20items%20arranged%20in%20fun%20ways%2C%20professional%20catering%20setup%20with%20bright%20elements%2C%20soft%20lighting%20and%20minimal%20elegant%20background&width=400&height=225&seq=107&orientation=landscape",
      available: true,
      rating: 4.4,
      description:
        "Child-friendly menu options with fun presentation for family events.",
    },
    {
      id: 8,
      name: "Beverage Package",
      price: "$15-35 per person",
      image:
        "https://readdy.ai/api/search-image?query=professional%20beverage%20station%20with%20variety%20of%20drinks%20elegantly%20displayed%2C%20bar%20setup%20with%20glassware%20and%20mixers%2C%20catering%20service%20with%20decorative%20elements%2C%20soft%20lighting%20and%20minimal%20elegant%20background&width=400&height=225&seq=108&orientation=landscape",
      available: false,
      rating: 4.6,
      description:
        "Comprehensive beverage service including alcoholic and non-alcoholic options.",
    },
  ];
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    let sortedServices = [...services];
    if (filter === "Price: Low to High") {
      sortedServices.sort((a, b) => {
        const aPrice = parseInt(a.price.match(/\d+/)?.[0] || "0");
        const bPrice = parseInt(b.price.match(/\d+/)?.[0] || "0");
        return aPrice - bPrice;
      });
    } else if (filter === "Price: High to Low") {
      sortedServices.sort((a, b) => {
        const aPrice = parseInt(a.price.match(/\d+/)?.[0] || "0");
        const bPrice = parseInt(b.price.match(/\d+/)?.[0] || "0");
        return bPrice - aPrice;
      });
    } else if (filter === "Availability") {
      sortedServices.sort((a, b) =>
        a.available === b.available ? 0 : a.available ? -1 : 1
      );
    } else if (filter === "Rating") {
      sortedServices.sort((a, b) => b.rating - a.rating);
    }
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setTimeout(() => {
        const searchInput = document.getElementById("serviceSearch");
        if (searchInput) searchInput.focus();
      }, 100);
    }
  };
  const navigate = useNavigate();
  const handleOpenService = (serviceId) => {
    navigate(`/catering-service/${serviceId}`);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pb-12">
        {/* Header Section with Back Button */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <a
                  href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/2fbd65e2-4c06-4bc3-8907-943ba8e2787c"
                  data-readdy="true"
                  className="mr-4 text-gray-500 hover:text-indigo-600 cursor-pointer"
                >
                  <i className="fas fa-arrow-left text-lg"></i>
                </a>
                <h1 className="text-xl font-bold text-gray-900">
                  Catering Services
                </h1>
              </div>
              <div className="flex items-center space-x-3">
                {showSearch ? (
                  <div className="relative">
                    <input
                      id="serviceSearch"
                      type="text"
                      placeholder="Search services..."
                      className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <button
                      onClick={toggleSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={toggleSearch}
                    className="text-gray-500 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fas fa-search text-lg"></i>
                  </button>
                )}
                <button className="text-gray-500 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-filter text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Category Overview */}
        <div className="relative">
          <div
            className="h-64 w-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20catering%20service%20with%20beautifully%20arranged%20food%20on%20white%20tables%20with%20professional%20servers%20in%20background%2C%20luxury%20event%20setting%20with%20soft%20lighting%20and%20minimal%20elegant%20decorations%2C%20wide%20angle%20shot&width=1440&height=400&seq=201&orientation=landscape')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-indigo-900/30"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-24">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Catering
                  </h2>
                  <p className="text-gray-600 mb-4 max-w-3xl">
                    Professional food services for all types of events including
                    weddings, corporate gatherings, and private parties. Our
                    catering services offer a variety of menu options,
                    presentation styles, and dietary accommodations.
                  </p>
                  <div className="flex items-center">
                    <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                      8 Services Available
                    </span>
                  </div>
                </div>
                {/* <div className="mt-4 sm:mt-0">
                  <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition flex items-center !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-edit mr-2"></i>
                    Edit Category
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Filter Options */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap !rounded-button cursor-pointer ${
                    selectedFilter === filter
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleOpenService(service.id)}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <button className="bg-white/90 p-2 rounded-full shadow-sm hover:bg-white text-gray-700 !rounded-button whitespace-nowrap cursor-pointer">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="bg-white/90 p-2 rounded-full shadow-sm hover:bg-white text-gray-700 !rounded-button whitespace-nowrap cursor-pointer">
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {service.name}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          service.available
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {service.available ? "Available" : "Unavailable"}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-indigo-600 font-medium">
                          {service.price}
                        </p>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`text-xs ${
                                  i < Math.floor(service.rating)
                                    ? "fas fa-star text-yellow-400"
                                    : i < service.rating
                                    ? "fas fa-star-half-alt text-yellow-400"
                                    : "far fa-star text-yellow-400"
                                }`}
                              ></i>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 ml-1">
                            {service.rating}
                          </span>
                        </div>
                      </div>
                      <a
                        href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/ae590afe-d5df-4fef-86ec-42ec0244a37e"
                        data-readdy="true"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="mx-auto w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-utensils text-indigo-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Services Found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any catering services matching your search
                criteria.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
export default CateringServicePage;
