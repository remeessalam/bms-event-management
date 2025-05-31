// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const PhotographyServicesPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Latest");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

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
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-600 transition !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-plus mr-2"></i>
                  Add New Service
                </button>
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
                      4 Services
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
          <div
            className={`${
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 gap-8"
                : "space-y-8"
            }`}
          >
            {/* Service 1 - Wedding Photography */}
            <div
              className={`bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition ${
                viewMode === "list" ? "flex flex-col md:flex-row" : ""
              }`}
            >
              <div
                className={`${viewMode === "list" ? "md:w-1/3" : ""} relative`}
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20wedding%20photography%20scene%20with%20a%20professional%20photographer%20capturing%20a%20bride%20and%20groom%20in%20a%20romantic%20pose%2C%20beautiful%20wedding%20venue%20with%20soft%20natural%20lighting%2C%20dreamy%20atmosphere%20with%20bokeh%20effect%20and%20professional%20lighting%20setup&width=600&height=400&seq=8&orientation=landscape')`,
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex space-x-2">
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20male%20photographer%20with%20a%20confident%20smile%2C%20neutral%20studio%20background%2C%20professional%20attire%2C%20well-groomed%20appearance%2C%20high%20quality%20portrait&width=100&height=100&seq=9&orientation=squarish"
                        alt="Photographer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src="https://readdy.ai/api/search-image?query=elegant%20wedding%20photo%20sample%20showing%20a%20bride%20and%20groom%20from%20behind%20looking%20at%20sunset%2C%20artistic%20silhouette%2C%20romantic%20atmosphere%2C%20professional%20wedding%20photography&width=100&height=100&seq=10&orientation=squarish"
                        alt="Sample 1"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src="https://readdy.ai/api/search-image?query=wedding%20photography%20sample%20showing%20wedding%20rings%20on%20flower%20petals%20with%20soft%20focus%20background%2C%20macro%20photography%2C%20artistic%20wedding%20detail%20shot&width=100&height=100&seq=11&orientation=squarish"
                        alt="Sample 2"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white flex items-center justify-center bg-indigo-600 text-white text-xs font-bold">
                      +12
                    </div>
                  </div>
                </div>
              </div>
              <div className={`p-6 ${viewMode === "list" ? "md:w-2/3" : ""}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                        Wedding
                      </span>
                      <div className="flex text-yellow-400 text-sm">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="ml-1 text-gray-600">5.0 (18)</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Wedding Photography
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Comprehensive wedding photography packages to capture your
                      special day from preparation to reception. Includes
                      engagement photos and custom album.
                    </p>
                    <div className="mt-4">
                      <p className="text-gray-900 font-bold">$1,200 - $3,500</p>
                      <p className="text-gray-500 text-sm">
                        Photographer: John Anderson
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-gray-500 hover:text-red-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/c450d7a9-1f1b-4faf-8603-4017203a5000"
                    data-readdy="true"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer inline-block no-underline"
                  >
                    View Details
                  </a>
                  <button className="bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/* Service 2 - Corporate Event Photography */}
            <div
              className={`bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition ${
                viewMode === "list" ? "flex flex-col md:flex-row" : ""
              }`}
            >
              <div
                className={`${viewMode === "list" ? "md:w-1/3" : ""} relative`}
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20corporate%20event%20photography%20showing%20a%20keynote%20speaker%20on%20stage%20at%20a%20business%20conference%2C%20elegant%20venue%20with%20professional%20lighting%2C%20audience%20in%20foreground%2C%20high%20quality%20corporate%20photography%20with%20professional%20equipment&width=600&height=400&seq=12&orientation=landscape')`,
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex space-x-2">
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20female%20photographer%20with%20camera%2C%20confident%20pose%2C%20neutral%20studio%20background%2C%20professional%20attire%2C%20well-groomed%20appearance%2C%20high%20quality%20portrait&width=100&height=100&seq=13&orientation=squarish"
                        alt="Photographer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src="https://readdy.ai/api/search-image?query=corporate%20event%20photo%20sample%20showing%20business%20professionals%20networking%20at%20a%20conference%2C%20professional%20lighting%2C%20corporate%20atmosphere%2C%20candid%20business%20interaction&width=100&height=100&seq=14&orientation=squarish"
                        alt="Sample 1"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src="https://readdy.ai/api/search-image?query=corporate%20award%20ceremony%20photo%20sample%20showing%20executive%20receiving%20award%20on%20stage%2C%20professional%20event%20photography%20with%20perfect%20lighting%2C%20business%20formal%20attire&width=100&height=100&seq=15&orientation=squarish"
                        alt="Sample 2"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white flex items-center justify-center bg-indigo-600 text-white text-xs font-bold">
                      +8
                    </div>
                  </div>
                </div>
              </div>
              <div className={`p-6 ${viewMode === "list" ? "md:w-2/3" : ""}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                        Corporate
                      </span>
                      <div className="flex text-yellow-400 text-sm">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span className="ml-1 text-gray-600">4.5 (12)</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Corporate Event Photography
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Professional photography for corporate events,
                      conferences, and business meetings. Includes headshots,
                      event coverage, and digital delivery.
                    </p>
                    <div className="mt-4">
                      <p className="text-gray-900 font-bold">$800 - $2,500</p>
                      <p className="text-gray-500 text-sm">
                        Photographer: Sarah Johnson
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-gray-500 hover:text-red-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/c450d7a9-1f1b-4faf-8603-4017203a5000"
                    data-readdy="true"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer inline-block no-underline"
                  >
                    View Details
                  </a>
                  <button className="bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/* Service 3 - Portrait Sessions */}
            <div
              className={`bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition ${
                viewMode === "list" ? "flex flex-col md:flex-row" : ""
              }`}
            >
              <div
                className={`${viewMode === "list" ? "md:w-1/3" : ""} relative`}
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20portrait%20photography%20session%20in%20a%20studio%20with%20photographer%20adjusting%20lighting%20equipment%2C%20model%20posing%20elegantly%2C%20high-end%20camera%20setup%2C%20artistic%20portrait%20photography%20with%20soft%20studio%20lighting%20and%20neutral%20background&width=600&height=400&seq=16&orientation=landscape')`,
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex space-x-2">
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20male%20photographer%20with%20stylish%20glasses%2C%20creative%20look%2C%20neutral%20studio%20background%2C%20casual%20professional%20attire%2C%20artistic%20appearance%2C%20high%20quality%20portrait&width=100&height=100&seq=17&orientation=squarish"
                        alt="Photographer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src="https://readdy.ai/api/search-image?query=artistic%20portrait%20photo%20sample%20of%20young%20woman%20with%20dramatic%20lighting%2C%20professional%20studio%20portrait%2C%20emotional%20expression%2C%20black%20and%20white%20photography&width=100&height=100&seq=18&orientation=squarish"
                        alt="Sample 1"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src="https://readdy.ai/api/search-image?query=family%20portrait%20photo%20sample%20showing%20parents%20with%20two%20children%2C%20outdoor%20natural%20setting%2C%20soft%20golden%20hour%20lighting%2C%20candid%20family%20interaction%2C%20professional%20family%20photography&width=100&height=100&seq=19&orientation=squarish"
                        alt="Sample 2"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white flex items-center justify-center bg-indigo-600 text-white text-xs font-bold">
                      +15
                    </div>
                  </div>
                </div>
              </div>
              <div className={`p-6 ${viewMode === "list" ? "md:w-2/3" : ""}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                        Portrait
                      </span>
                      <div className="flex text-yellow-400 text-sm">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <span className="ml-1 text-gray-600">4.0 (9)</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Portrait Sessions
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Professional portrait photography for individuals,
                      couples, and families. Studio or location sessions
                      available with multiple outfit changes.
                    </p>
                    <div className="mt-4">
                      <p className="text-gray-900 font-bold">$250 - $800</p>
                      <p className="text-gray-500 text-sm">
                        Photographer: Michael Chen
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-gray-500 hover:text-red-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/c450d7a9-1f1b-4faf-8603-4017203a5000"
                    data-readdy="true"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer inline-block no-underline"
                  >
                    View Details
                  </a>
                  <button className="bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/* Service 4 - Special Events Coverage */}
            <div
              className={`bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition ${
                viewMode === "list" ? "flex flex-col md:flex-row" : ""
              }`}
            >
              <div
                className={`${viewMode === "list" ? "md:w-1/3" : ""} relative`}
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20photographer%20capturing%20a%20special%20celebration%20event%20with%20guests%20dancing%2C%20elegant%20venue%20with%20colorful%20lighting%20and%20decorations%2C%20festive%20atmosphere%2C%20event%20photography%20with%20professional%20equipment%20and%20creative%20angle&width=600&height=400&seq=20&orientation=landscape')`,
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex space-x-2">
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20female%20photographer%20with%20curly%20hair%2C%20creative%20style%2C%20neutral%20studio%20background%2C%20casual%20professional%20attire%2C%20artistic%20appearance%2C%20high%20quality%20portrait&width=100&height=100&seq=21&orientation=squarish"
                        alt="Photographer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src="https://readdy.ai/api/search-image?query=birthday%20party%20photo%20sample%20showing%20cake%20cutting%20moment%2C%20celebration%20atmosphere%2C%20colorful%20decorations%2C%20candid%20emotional%20moment%2C%20professional%20event%20photography&width=100&height=100&seq=22&orientation=squarish"
                        alt="Sample 1"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src="https://readdy.ai/api/search-image?query=graduation%20ceremony%20photo%20sample%20showing%20graduate%20receiving%20diploma%2C%20formal%20academic%20setting%2C%20proud%20moment%2C%20professional%20event%20photography%20with%20perfect%20timing&width=100&height=100&seq=23&orientation=squarish"
                        alt="Sample 2"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white flex items-center justify-center bg-indigo-600 text-white text-xs font-bold">
                      +10
                    </div>
                  </div>
                </div>
              </div>
              <div className={`p-6 ${viewMode === "list" ? "md:w-2/3" : ""}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                        Special Events
                      </span>
                      <div className="flex text-yellow-400 text-sm">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span className="ml-1 text-gray-600">4.7 (15)</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Special Events Coverage
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Photography services for special occasions like birthdays,
                      anniversaries, graduations, and other milestone
                      celebrations. Includes event coverage and edited digital
                      images.
                    </p>
                    <div className="mt-4">
                      <p className="text-gray-900 font-bold">$500 - $1,500</p>
                      <p className="text-gray-500 text-sm">
                        Photographer: Emily Rodriguez
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-gray-500 hover:text-red-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/c450d7a9-1f1b-4faf-8603-4017203a5000"
                    data-readdy="true"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer inline-block no-underline"
                  >
                    View Details
                  </a>
                  <button className="bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
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
