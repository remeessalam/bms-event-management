import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchServices } from "../Api/serviceApi";

const SoundAndDjServicePage = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("popularity");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const servicesData = await fetchServices("SOUND_DJ");
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

  const toggleFilterPanel = () => {
    setFilterOpen(!filterOpen);
  };

  const toggleSortDropdown = () => {
    setShowSortDropdown(!showSortDropdown);
  };

  const selectSortOption = (option) => {
    setSortOption(option);
    setShowSortDropdown(false);

    // Apply sorting
    let sortedServices = [...services];
    switch (option) {
      case "price_low":
        sortedServices.sort((a, b) => a.price - b.price);
        break;
      case "price_high":
        sortedServices.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sortedServices.sort((a, b) => b.rating - a.rating);
        break;
      default: // popularity
        // Keep original order or implement popularity logic
        break;
    }
    setServices(sortedServices);
  };

  const handleRatingFilter = (rating) => {
    setRatingFilter(rating === ratingFilter ? 0 : rating);
  };

  const formatPrice = (price, pricingModel) => {
    switch (pricingModel) {
      case "PER_EVENT":
        return `$${price} per event`;
      case "PER_HOUR":
        return `$${price} per hour`;
      case "PER_DAY":
        return `$${price} per day`;
      default:
        return `$${price}`;
    }
  };

  const filteredServices = services.filter((service) => {
    // Filter by price range
    const priceMatch =
      service.price >= priceRange[0] && service.price <= priceRange[1];

    // Filter by rating if set
    const ratingMatch =
      ratingFilter === 0 || (service.rating && service.rating >= ratingFilter);

    return priceMatch && ratingMatch;
  });

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
      <main>
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <button
                    onClick={() => navigate("/")}
                    className="text-gray-500 hover:text-indigo-600 text-sm cursor-pointer"
                  >
                    <i className="fas fa-home mr-2"></i>
                    Home
                  </button>
                </li>
                <li>
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 text-xs mx-2"></i>
                    <button
                      onClick={() => navigate(-1)}
                      className="text-gray-500 hover:text-indigo-600 text-sm cursor-pointer"
                    >
                      Categories
                    </button>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 text-xs mx-2"></i>
                    <span className="text-indigo-600 text-sm font-medium">
                      Sound & DJ
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Category Header */}
        <div className="bg-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <button
                    onClick={() => navigate(-1)}
                    className="mr-4 bg-indigo-600 hover:bg-indigo-500 p-2 rounded-full cursor-pointer"
                  >
                    <i className="fas fa-arrow-left"></i>
                  </button>
                  <h2 className="text-3xl font-bold leading-tight">
                    Sound & DJ Services
                  </h2>
                </div>
                <p className="mt-2 text-indigo-200">
                  Professional audio equipment, DJ services, and music
                  arrangements for all types of events
                </p>
                <div className="mt-2">
                  <span className="bg-indigo-800 text-indigo-100 text-sm font-medium px-3 py-1 rounded-full">
                    {services.length} Services Available
                  </span>
                </div>
              </div>
              <div className="mt-4 flex md:mt-0 md:ml-4 space-x-3">
                <button
                  onClick={toggleFilterPanel}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-500 transition flex items-center"
                >
                  <i className="fas fa-filter mr-2"></i>
                  Filter
                </button>
                <div className="relative">
                  <button
                    onClick={toggleSortDropdown}
                    className="bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-50 transition flex items-center"
                  >
                    <i className="fas fa-sort mr-2"></i>
                    Sort by
                    <i
                      className={`fas fa-chevron-down ml-2 transition-transform ${
                        showSortDropdown ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  {showSortDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <button
                        onClick={() => selectSortOption("popularity")}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          sortOption === "popularity"
                            ? "bg-indigo-50 text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Popularity
                      </button>
                      <button
                        onClick={() => selectSortOption("price_low")}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          sortOption === "price_low"
                            ? "bg-indigo-50 text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Price: Low to High
                      </button>
                      <button
                        onClick={() => selectSortOption("price_high")}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          sortOption === "price_high"
                            ? "bg-indigo-50 text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Price: High to Low
                      </button>
                      <button
                        onClick={() => selectSortOption("rating")}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          sortOption === "rating"
                            ? "bg-indigo-50 text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Highest Rated
                      </button>
                    </div>
                  )}
                </div>
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition flex items-center"
                  onClick={() => navigate("/add-service")}
                >
                  <i className="fas fa-plus mr-2"></i>
                  Add New Service
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content with Filter Panel */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filter Panel - Conditionally rendered */}
            {filterOpen && (
              <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-800">Filters</h3>
                  <button
                    onClick={toggleFilterPanel}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      ${priceRange[0]}
                    </span>
                    <span className="text-sm text-gray-600">
                      ${priceRange[1]}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                {/* Rating Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </h4>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <button
                          onClick={() => handleRatingFilter(rating)}
                          className={`w-full flex items-center justify-between p-2 rounded ${
                            ratingFilter === rating
                              ? "bg-indigo-50 text-indigo-700"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <i
                                key={index}
                                className={`${
                                  index < rating ? "fas" : "far"
                                } fa-star text-yellow-400 mr-1`}
                              ></i>
                            ))}
                            {rating === 5 && (
                              <span className="ml-1 text-sm">& up</span>
                            )}
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Apply/Reset Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition">
                    Apply Filters
                  </button>
                  <button
                    className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition"
                    onClick={() => {
                      setPriceRange([0, 5000]);
                      setRatingFilter(0);
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}

            {/* Services Grid */}
            <div className={`flex-1 ${filterOpen ? "md:ml-4" : ""}`}>
              {services.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="mx-auto w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-music text-indigo-600 text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No Services Available
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We currently don't have any Sound & DJ services available.
                  </p>
                </div>
              ) : filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service) => (
                    <div
                      key={service.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                      onClick={() =>
                        navigate(`/sound-dj-service/${service.id}`)
                      }
                    >
                      <div className="h-48 overflow-hidden">
                        {service.images && service.images.length > 0 ? (
                          <img
                            src={service.images[0]}
                            alt={service.title}
                            className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <i className="fas fa-music text-gray-400 text-4xl"></i>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {service.title}
                          </h3>
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
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
                        <div className="flex items-center mt-1">
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <i
                                key={index}
                                className={`${
                                  index < Math.floor(service.rating || 0)
                                    ? "fas"
                                    : "far"
                                } fa-star text-yellow-400 text-sm`}
                              ></i>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-1">
                            {service.reviews
                              ? `(${service.reviews.length} reviews)`
                              : ""}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                          {service.description}
                        </p>
                        <div className="mt-3 flex items-center text-indigo-700 font-semibold">
                          <span className="text-lg">${service.price}</span>
                          <span className="text-sm text-gray-500 ml-1">
                            {service.pricingModel === "PER_EVENT"
                              ? "/ event"
                              : service.pricingModel === "PER_DAY"
                              ? "/ day"
                              : service.pricingModel === "PER_HOUR"
                              ? "/ hour"
                              : ""}
                          </span>
                        </div>
                        <div className="mt-3">
                          <h4 className="text-sm font-medium text-gray-700">
                            Features:
                          </h4>
                          <ul className="mt-1 space-y-1">
                            {service.features &&
                              service.features
                                .slice(0, 3)
                                .map((feature, index) => (
                                  <li
                                    key={index}
                                    className="flex items-center text-sm text-gray-600"
                                  >
                                    <i className="fas fa-check text-green-500 mr-2"></i>
                                    {feature}
                                  </li>
                                ))}
                          </ul>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/sound-and-dj-services/${service.id}`);
                            }}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                          >
                            View Details
                          </button>
                          {/* <div className="flex space-x-2">
                            <button
                              className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/edit-service/${service.id}`);
                              }}
                            >
                              asdf
                              <i className="fas fa-edit"></i>
                            </button>
                            <button
                              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full"
                              onClick={(e) => {
                                e.stopPropagation();
                                // Handle delete
                              }}
                            >
                              <i className="fas fa-trash-alt"></i>
                            </button>
                          </div> */}
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
                    We couldn't find any services matching your filters.
                  </p>
                  <button
                    onClick={() => {
                      setPriceRange([0, 5000]);
                      setRatingFilter(0);
                    }}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SoundAndDjServicePage;
