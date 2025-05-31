// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const SoundAndDjServicePage = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("popularity");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(0);

  const toggleFilterPanel = () => {
    setFilterOpen(!filterOpen);
  };
  const toggleSortDropdown = () => {
    setShowSortDropdown(!showSortDropdown);
  };
  const selectSortOption = (option) => {
    setSortOption(option);
    setShowSortDropdown(false);
  };
  const handleRatingFilter = (rating) => {
    setRatingFilter(rating === ratingFilter ? 0 : rating);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-indigo-600 text-sm cursor-pointer"
                  >
                    <i className="fas fa-home mr-2"></i>
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 text-xs mx-2"></i>
                    <a
                      href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/2fbd65e2-4c06-4bc3-8907-943ba8e2787c"
                      data-readdy="true"
                      className="text-gray-500 hover:text-indigo-600 text-sm cursor-pointer"
                    >
                      Categories
                    </a>
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
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/2fbd65e2-4c06-4bc3-8907-943ba8e2787c"
                    data-readdy="true"
                    className="mr-4 bg-indigo-600 hover:bg-indigo-500 p-2 rounded-full cursor-pointer"
                  >
                    <i className="fas fa-arrow-left"></i>
                  </a>
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
                    3 Services Available
                  </span>
                </div>
              </div>
              <div className="mt-4 flex md:mt-0 md:ml-4 space-x-3">
                <button
                  onClick={toggleFilterPanel}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-500 transition flex items-center !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-filter mr-2"></i>
                  Filter
                </button>
                <div className="relative">
                  <button
                    onClick={toggleSortDropdown}
                    className="bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-50 transition flex items-center !rounded-button whitespace-nowrap cursor-pointer"
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
                        } !rounded-button whitespace-nowrap cursor-pointer`}
                      >
                        Popularity
                      </button>
                      <button
                        onClick={() => selectSortOption("price_low")}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          sortOption === "price_low"
                            ? "bg-indigo-50 text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        } !rounded-button whitespace-nowrap cursor-pointer`}
                      >
                        Price: Low to High
                      </button>
                      <button
                        onClick={() => selectSortOption("price_high")}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          sortOption === "price_high"
                            ? "bg-indigo-50 text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        } !rounded-button whitespace-nowrap cursor-pointer`}
                      >
                        Price: High to Low
                      </button>
                      <button
                        onClick={() => selectSortOption("rating")}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          sortOption === "rating"
                            ? "bg-indigo-50 text-indigo-700"
                            : "text-gray-700 hover:bg-gray-100"
                        } !rounded-button whitespace-nowrap cursor-pointer`}
                      >
                        Highest Rated
                      </button>
                    </div>
                  )}
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition flex items-center !rounded-button whitespace-nowrap cursor-pointer">
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
                    className="text-gray-500 hover:text-gray-700 !rounded-button whitespace-nowrap cursor-pointer"
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
                          } !rounded-button whitespace-nowrap cursor-pointer`}
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
                {/* Availability Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Availability
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Available Now
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Available Weekends
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Available Evenings
                      </span>
                    </label>
                  </div>
                </div>
                {/* Apply/Reset Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer">
                    Apply Filters
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                    Reset
                  </button>
                </div>
              </div>
            )}
            {/* Services Grid */}
            <div className={`flex-1 ${filterOpen ? "md:ml-4" : ""}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Service Card 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=professional%20DJ%20setup%20with%20turntables%2C%20mixer%20and%20headphones%20in%20a%20dark%20venue%20with%20colorful%20stage%20lights%2C%20modern%20equipment%20for%20nightclub%20or%20wedding%20events%2C%20high-end%20professional%20audio%20setup%20with%20minimal%20clean%20background&width=600&height=400&seq=101&orientation=landscape"
                      alt="Professional DJ Services"
                      className="w-full h-full object-cover object-top transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Professional DJ Services
                      </h3>
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Most Popular
                      </span>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <i
                            key={index}
                            className={`${
                              index < 4.8 ? "fas" : "far"
                            } fa-star text-yellow-400 text-sm`}
                          ></i>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-1">
                        (48 reviews)
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">
                      Experienced DJs for weddings, corporate events, and
                      parties with custom playlists and professional equipment.
                    </p>
                    <div className="mt-3 flex items-center text-indigo-700 font-semibold">
                      <span className="text-lg">$450</span>
                      <span className="text-sm text-gray-500 ml-1">
                        / event
                      </span>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-gray-700">
                        Features:
                      </h4>
                      <ul className="mt-1 space-y-1">
                        <li className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          Professional DJ with 5+ years experience
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          High-quality sound equipment
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          Custom playlist creation
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <a
                        href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/1c722e20-120c-47b5-8c37-714cc4c515cd"
                        data-readdy="true"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer inline-block"
                      >
                        View Details
                      </a>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Service Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=professional%20sound%20system%20setup%20with%20speakers%2C%20amplifiers%20and%20audio%20mixer%20for%20event%20venue%2C%20high-end%20audio%20equipment%20arranged%20for%20concert%20or%20corporate%20event%2C%20clean%20minimal%20background%20with%20soft%20lighting&width=600&height=400&seq=102&orientation=landscape"
                      alt="Sound System Rental"
                      className="w-full h-full object-cover object-top transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Sound System Rental
                      </h3>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Available Now
                      </span>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <i
                            key={index}
                            className={`${
                              index < 4.5 ? "fas" : "far"
                            } fa-star text-yellow-400 text-sm`}
                          ></i>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-1">
                        (32 reviews)
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">
                      High-quality sound systems for rent, including speakers,
                      mixers, microphones, and technical support.
                    </p>
                    <div className="mt-3 flex items-center text-indigo-700 font-semibold">
                      <span className="text-lg">$350</span>
                      <span className="text-sm text-gray-500 ml-1">/ day</span>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-gray-700">
                        Features:
                      </h4>
                      <ul className="mt-1 space-y-1">
                        <li className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          Professional-grade equipment
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          Setup and technical support
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          Delivery and pickup included
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <a
                        href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/1c722e20-120c-47b5-8c37-714cc4c515cd"
                        data-readdy="true"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer inline-block"
                      >
                        View Details
                      </a>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Service Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=professional%20live%20music%20equipment%20setup%20with%20instruments%2C%20microphones%2C%20amplifiers%20and%20stage%20monitors%20for%20band%20performance%2C%20high-end%20musical%20gear%20arranged%20for%20concert%20or%20event%2C%20clean%20minimal%20background%20with%20soft%20lighting&width=600&height=400&seq=103&orientation=landscape"
                      alt="Live Music Equipment"
                      className="w-full h-full object-cover object-top transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Live Music Equipment
                      </h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        New Service
                      </span>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <i
                            key={index}
                            className={`${
                              index < 4.2 ? "fas" : "far"
                            } fa-star text-yellow-400 text-sm`}
                          ></i>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-1">
                        (15 reviews)
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">
                      Complete equipment setup for live bands and performers,
                      including instruments, amplifiers, and stage monitors.
                    </p>
                    <div className="mt-3 flex items-center text-indigo-700 font-semibold">
                      <span className="text-lg">$550</span>
                      <span className="text-sm text-gray-500 ml-1">
                        / event
                      </span>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-gray-700">
                        Features:
                      </h4>
                      <ul className="mt-1 space-y-1">
                        <li className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          Full band equipment setup
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          Sound engineer included
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          Stage lighting options available
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <a
                        href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/1c722e20-120c-47b5-8c37-714cc4c515cd"
                        data-readdy="true"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer inline-block"
                      >
                        View Details
                      </a>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default SoundAndDjServicePage;
