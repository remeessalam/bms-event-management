import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchServices } from "../Api/serviceApi";

const CateringServicePage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const servicesData = await fetchServices("CATRING");
        setServices(servicesData || []);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServiceData();
  }, []);

  const filters = ["Price: Low to High", "Price: High to Low"];

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    let sortedServices = [...services];
    if (filter === "Price: Low to High") {
      sortedServices.sort((a, b) => a.price - b.price);
    } else if (filter === "Price: High to Low") {
      sortedServices.sort((a, b) => b.price - a.price);
    }
    setServices(sortedServices);
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

  const formatPrice = (price, pricingModel) => {
    switch (pricingModel) {
      case "PER_EVENT":
        return `$${price} per event`;
      case "PER_HOUR":
        return `$${price} per hour`;
      case "PER_PERSON":
        return `$${price} per person`;
      default:
        return `$${price}`;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-4xl text-indigo-600 mb-4"></i>
          <p className="text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pb-12">
        {/* Header Section with Back Button */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <button
                  onClick={() => navigate(-1)}
                  className="mr-4 text-gray-500 hover:text-indigo-600 cursor-pointer"
                >
                  <i className="fas fa-arrow-left text-lg"></i>
                </button>
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
                      {services.length} Services Available
                    </span>
                  </div>
                </div>
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
          {services.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="mx-auto w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-utensils text-indigo-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Services Available
              </h3>
              <p className="text-gray-600 mb-6">
                We currently don't have any catering services available.
              </p>
            </div>
          ) : filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleOpenService(service.id)}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                >
                  <div className="relative h-56 overflow-hidden">
                    {service.images && service.images.length > 0 ? (
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <i className="fas fa-image text-gray-400 text-4xl"></i>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          service.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {service.status === "approved"
                          ? "Available"
                          : "Pending"}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-indigo-600 font-medium">
                          {formatPrice(service.price, service.pricingModel)}
                        </p>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-500">
                            {service.currency}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenService(service.id);
                        }}
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="mx-auto w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-search text-indigo-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Services Found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any services matching your search criteria.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
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
