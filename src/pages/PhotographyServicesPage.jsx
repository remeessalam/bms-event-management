import React, { useState, useEffect } from "react";
import { fetchServices } from "../Api/serviceApi";
import { Link, useNavigate } from "react-router-dom";

const PhotographyServicesPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Latest");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const toggleSortDropdown = () => {
    setShowSortDropdown(!showSortDropdown);
  };
  const selectSortOption = (option) => {
    setSortOption(option);
    setShowSortDropdown(false);
  };
  const toggleFilterDropdown = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };
  const selectFilter = (filter) => {
    setSelectedFilter(filter);
    setShowFilterDropdown(false);
  };

  // Fetch services using useEffect

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const servicesData = await fetchServices("PHOTOGRAPHY");
        setServices(servicesData || []);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main>
        {/* Photography Services Header */}
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/2fbd65e2-4c06-4bc3-8907-943ba8e2787c"
                    className="text-white hover:text-indigo-200 mr-4 cursor-pointer"
                    data-readdy="true"
                  >
                    <i className="fas fa-arrow-left text-xl"></i>
                  </a>
                  <h1 className="text-3xl font-bold">Photography Services</h1>
                </div>
                <p className="mt-2 text-indigo-200">
                  Professional photography services for all your event needs
                </p>
              </div>
              <div className="flex space-x-4">
                <div className="relative">
                  <button
                    onClick={toggleFilterDropdown}
                    className="bg-white/20 text-white px-4 py-2 rounded-md font-medium hover:bg-white/30 transition flex items-center !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fas fa-filter mr-2"></i>
                    Filter
                    <i
                      className={`fas fa-chevron-down ml-2 transition-transform ${
                        showFilterDropdown ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  {showFilterDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <button
                        onClick={() => selectFilter("All")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        All
                      </button>
                      <button
                        onClick={() => selectFilter("Wedding")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Wedding
                      </button>
                      <button
                        onClick={() => selectFilter("Corporate")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Corporate
                      </button>
                      <button
                        onClick={() => selectFilter("Portrait")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Portrait
                      </button>
                    </div>
                  )}
                </div>
                {/* <button className="bg-indigo-500 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-600 transition !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-plus mr-2"></i>
                  Add New Service
                </button> */}
              </div>
            </div>
          </div>
        </div>
        {/* Category Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20photographer%20with%20high-end%20camera%20equipment%20capturing%20a%20special%20moment%20at%20a%20wedding%20ceremony%2C%20elegant%20venue%20with%20soft%20natural%20lighting%20and%20beautiful%20decorations%2C%20artistic%20photography%20scene%20with%20bokeh%20effect%20and%20professional%20lighting%20setup&width=1200&height=400&seq=7&orientation=landscape')`,
              }}
            ></div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Photography Services
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Professional photography services for capturing special
                    moments at events of all types
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center">
                  <div className="flex items-center mr-6">
                    <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                      {services.length} Services
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="ml-2 text-gray-600 text-sm">
                      4.5 (28 reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Filter and Sort Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="bg-white shadow-sm rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                {selectedFilter !== "All" && (
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    {selectedFilter}
                    <button
                      onClick={() => selectFilter("All")}
                      className="ml-2 text-indigo-600 hover:text-indigo-800 cursor-pointer"
                    >
                      <i className="fas fa-times-circle"></i>
                    </button>
                  </div>
                )}
                <span className="text-gray-500 text-sm">
                  {selectedFilter === "All"
                    ? "Showing all services"
                    : `Filtered by: ${selectedFilter}`}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button
                    onClick={toggleSortDropdown}
                    className="flex items-center text-gray-700 hover:text-indigo-600 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fas fa-sort mr-2"></i>
                    Sort: {sortOption}
                    <i
                      className={`fas fa-chevron-down ml-1 transition-transform ${
                        showSortDropdown ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  {showSortDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <button
                        onClick={() => selectSortOption("Latest")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Latest
                      </button>
                      <button
                        onClick={() => selectSortOption("Price")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Price
                      </button>
                      <button
                        onClick={() => selectSortOption("Rating")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Rating
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex items-center border-l border-gray-300 pl-4">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1 ${
                      viewMode === "grid"
                        ? "text-indigo-600"
                        : "text-gray-500 hover:text-indigo-600"
                    } !rounded-button whitespace-nowrap cursor-pointer`}
                  >
                    <i className="fas fa-th-large"></i>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1 ml-2 ${
                      viewMode === "list"
                        ? "text-indigo-600"
                        : "text-gray-500 hover:text-indigo-600"
                    } !rounded-button whitespace-nowrap cursor-pointer`}
                  >
                    <i className="fas fa-list"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Photography Services List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {loading ? (
            <div className="text-center text-gray-600">Loading...</div>
          ) : services.length === 0 ? (
            <div className="text-center text-gray-600">
              Currently, we don't have any services.
            </div>
          ) : (
            <div
              className={`${
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 gap-8"
                  : "space-y-8"
              }`}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition ${
                    viewMode === "list" ? "flex flex-col md:flex-row" : ""
                  }`}
                >
                  <div
                    className={`${
                      viewMode === "list" ? "md:w-1/3" : ""
                    } relative`}
                  >
                    <div
                      className="h-64 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${
                          service.images[0] ||
                          "https://readdy.ai/api/search-image?query=generic%20photography%20service&width=600&height=400&seq=24&orientation=landscape"
                        })`,
                      }}
                    ></div>
                    {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="flex space-x-2">
                        <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                          <img
                            src="https://readdy.ai/api/search-image?query=professional% publicaciones photographer%20headshot%20generic%20neutral%20background%20professional%20attire%20high%20quality%20portrait&width=100&height=100&seq=25&orientation=squarish"
                            alt="Photographer"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                          <img
                            src="https://readdy.ai/api/search-image?query=generic%20photography%20sample%20event%20moment%20candid%20shot%20professional%20lighting&width=100&height=100&seq=26&orientation=squarish"
                            alt="Sample 1"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                          <img
                            src="https://readdy.ai/api/search-image?query=generic%20photography%20sample%20detail%20shot%20professional%20event%20photography&width=100&height=100&seq=27&orientation=squarish"
                            alt="Sample 2"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white flex items-center justify-center bg-indigo-600 text-white text-xs font-bold">
                          +{Math.floor(Math.random() * 10) + 5}
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div
                    className={`p-6 ${viewMode === "list" ? "md:w-2/3" : ""}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                            {service.category}
                          </span>
                          <div className="flex text-yellow-400 text-sm">
                            {[...Array(5)].map((_, index) => (
                              <i
                                key={index}
                                className={`fas fa-star ${
                                  index < Math.floor(4.5) ? "" : "far"
                                }`}
                              ></i>
                            ))}
                            <span className="ml-1 text-gray-600">
                              4.5 (Based on sample data)
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mt-2">
                          {service.description}
                        </p>
                        <div className="mt-4">
                          <p className="text-gray-900 font-bold">
                            {service.currency} {service.price.toLocaleString()}
                          </p>
                          <p className="text-gray-500 text-sm">
                            Photographer: {service.vendorName || "Unknown"}
                          </p>
                        </div>
                      </div>
                      {/* <div className="flex space-x-2">
                        <button
                          onClick={() =>
                            navigate(`/photography-services/${service.id}`)
                          }
                          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer inline-block no-underline"
                        >
                          View Details
                        </button>

                        <button
                          onClick={() =>
                            navigate(`/photography-services/${service.id}`)
                          }
                          className="bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition !rounded-button whitespace-nowrap cursor-pointer"
                        >
                          Book Now
                        </button>
                      </div> */}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <button
                        onClick={() =>
                          navigate(`/photography-services/${service.id}`)
                        }
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer inline-block no-underline"
                      >
                        View Details
                      </button>

                      {/* <button
                        onClick={() =>
                          navigate(`/photography-services/${service.id}`)
                        }
                        className="bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Book Now
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <button className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer">
          <i className="fas fa-plus text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default PhotographyServicesPage;
