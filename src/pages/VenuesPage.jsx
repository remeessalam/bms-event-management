import React, { useState, useEffect } from "react";
import { fetchServices } from "../Api/serviceApi";

const VenuesPage = () => {
  const [selectedVenueType, setSelectedVenueType] = useState("All Types");
  const [showVenueTypeDropdown, setShowVenueTypeDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Recommended");
  const [capacityRange, setCapacityRange] = useState([50, 1000]);
  const [priceRange, setPriceRange] = useState([1000, 10000]);
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState();
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarVenue, setCalendarVenue] = useState();
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleVenueTypeDropdown = () => {
    setShowVenueTypeDropdown(!showVenueTypeDropdown);
  };

  const selectVenueType = (type) => {
    setSelectedVenueType(type);
    setShowVenueTypeDropdown(false);
  };

  const toggleSortDropdown = () => {
    setShowSortDropdown(!showSortDropdown);
  };

  const selectSort = (sort) => {
    setSelectedSort(sort);
    setShowSortDropdown(false);
  };

  const handleCapacityChange = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.name === "minCapacity") {
      setCapacityRange([value, capacityRange[1]]);
    } else {
      setCapacityRange([capacityRange[0], value]);
    }
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.name === "minPrice") {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  const openBookingForm = (venueName) => {
    setSelectedVenue(venueName);
    setShowBookingForm(true);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
    setSelectedVenue(null);
  };

  const openCalendar = (venueName) => {
    setCalendarVenue(venueName);
    setShowCalendar(true);
  };

  const closeCalendar = () => {
    setShowCalendar(false);
    setCalendarVenue(null);
  };

  // Fetch venues using useEffect
  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const servicesData = await fetchServices("VENUS");
        setVenues(servicesData || []);
      } catch (error) {
        console.error("Error fetching services:", error);
        setVenues([]);
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
        {/* Venue Category Header */}
        <div className="bg-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center">
              <a
                href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/2fbd65e2-4c06-4bc3-8907-943ba8e2787c"
                data-readdy="true"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full mr-4 transition cursor-pointer"
              >
                <i className="fas fa-arrow-left"></i>
              </a>
              <div>
                <h1 className="text-3xl font-bold mb-2">Venues</h1>
                <p className="text-indigo-200">
                  Discover the perfect space for your next event
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap items-center gap-4">
              {/* Venue Type Filter */}
              {/* <div className="relative">
                <button
                  onClick={toggleVenueTypeDropdown}
                  className="flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-gray-700 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-building mr-2"></i>
                  <span>{selectedVenueType}</span>
                  <i
                    className={`fas fa-chevron-down ml-2 transition-transform ${
                      showVenueTypeDropdown ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                {showVenueTypeDropdown && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10">
                    <button
                      onClick={() => selectVenueType("All Types")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      All Types
                    </button>
                    <button
                      onClick={() => selectVenueType("Banquet Hall")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Banquet Hall
                    </button>
                    <button
                      onClick={() => selectVenueType("Outdoor")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Outdoor
                    </button>
                    <button
                      onClick={() => selectVenueType("Conference Room")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Conference Room
                    </button>
                    <button
                      onClick={() => selectVenueType("Rooftop")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Rooftop
                    </button>
                    <button
                      onClick={() => selectVenueType("Historic Venue")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Historic Venue
                    </button>
                    <button
                      onClick={() => selectVenueType("Waterfront")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Waterfront
                    </button>
                  </div>
                )}
              </div> */}

              {/* Capacity Range */}
              {/* <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md text-gray-700">
                <i className="fas fa-users mr-2"></i>
                <span className="mr-2">Capacity:</span>
                <span>
                  {capacityRange[0]}-{capacityRange[1]} guests
                </span>
              </div> */}

              {/* Price Range */}
              {/* <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md text-gray-700">
                <i className="fas fa-dollar-sign mr-2"></i>
                <span className="mr-2">Price:</span>
                <span>
                  ${priceRange[0]}-${priceRange[1]}
                </span>
              </div> */}

              {/* Additional Filters Button */}
              {/* <button
                onClick={() => setShowFiltersModal(true)}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-gray-700 !rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-sliders-h mr-2"></i>
                More Filters
              </button> */}

              {/* Spacer */}
              <div className="flex-grow"></div>

              {/* Sort By */}
              {/* <div className="relative">
                <button
                  onClick={toggleSortDropdown}
                  className="flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-gray-700 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-sort mr-2"></i>
                  <span>Sort: {selectedSort}</span>
                  <i
                    className={`fas fa-chevron-down ml-2 transition-transform ${
                      showSortDropdown ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                {showSortDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <button
                      onClick={() => selectSort("Recommended")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Recommended
                    </button>
                    <button
                      onClick={() => selectSort("Price: Low to High")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Price: Low to High
                    </button>
                    <button
                      onClick={() => selectSort("Price: High to Low")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Price: High to Low
                    </button>
                    <button
                      onClick={() => selectSort("Capacity: Low to High")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Capacity: Low to High
                    </button>
                    <button
                      onClick={() => selectSort("Capacity: High to Low")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Capacity: High to Low
                    </button>
                    <button
                      onClick={() => selectSort("Rating")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Rating
                    </button>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>

        {/* Venues Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {loading ? (
            <div className="text-center text-gray-600">Loading...</div>
          ) : venues.length === 0 ? (
            <div className="text-center text-gray-600">
              Currently, we don't have any venues.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {venues.map((venue) => (
                <div
                  key={venue.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={
                        venue.images[0] ||
                        "https://readdy.ai/api/search-image?query=generic%20event%20venue&width=600&height=400&seq=70&orientation=landscape"
                      }
                      alt={venue.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-indigo-700">
                      {venue.category || "Venue"}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {venue.title}
                      </h3>
                      <div className="flex items-center">
                        <i className="fas fa-star text-yellow-400 mr-1"></i>
                        <span className="text-gray-700 font-medium">
                          {venue.rating || 4.5}
                        </span>
                        <span className="text-gray-500 text-sm ml-1">
                          (
                          {venue.reviews || Math.floor(Math.random() * 50) + 50}
                          )
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{venue.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {(venue.amenities || ["WiFi", "Parking"]).map(
                        (amenity, index) => (
                          <span
                            key={index}
                            className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full"
                          >
                            {amenity}
                          </span>
                        )
                      )}
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-700 mb-4">
                      <div className="flex items-center">
                        <i className="fas fa-users mr-2 text-indigo-600"></i>
                        <span>{venue.capacity || "100-500"} guests</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-dollar-sign mr-2 text-indigo-600"></i>
                        <span>
                          {venue.currency || "$"}
                          {venue.price.toLocaleString() || "2000-5000"}
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => openBookingForm(venue.title)}
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        <i className="fas fa-clipboard-check mr-2"></i>
                        Book Now
                      </button>
                      {/* <button
                        onClick={() => openCalendar(venue.title)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        <i className="fas fa-calendar-alt"></i>
                      </button> */}
                    </div>
                  </div>

                  {/* Gallery Section */}
                  <div className="px-6 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Gallery
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {(
                        venue.images?.slice(1, 4) || [
                          "https://readdy.ai/api/search-image?query=generic%20venue%20interior&width=300&height=200&seq=71&orientation=landscape",
                          "https://readdy.ai/api/search-image?query=generic%20venue%20setup&width=300&height=200&seq=72&orientation=landscape",
                          "https://readdy.ai/api/search-image?query=generic%20venue%20exterior&width=300&height=200&seq=73&orientation=landscape",
                        ]
                      ).map((image, index) => (
                        <div
                          key={index}
                          className="h-24 overflow-hidden rounded-md"
                        >
                          <img
                            src={image}
                            alt={`${venue.title} gallery ${index + 1}`}
                            className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* More Filters Modal */}
      {showFiltersModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={() => setShowFiltersModal(false)}
            ></div>
            <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Advanced Filters
                </h3>
                <button
                  onClick={() => setShowFiltersModal(false)}
                  className="text-gray-400 hover:text-gray-500 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              <div className="space-y-6">
                {/* Capacity Range Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Capacity Range
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      name="minCapacity"
                      value={capacityRange[0]}
                      onChange={handleCapacityChange}
                      min="50"
                      max="1000"
                      className="w-24 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    />
                    <span className="text-gray-500">to</span>
                    <input
                      type="number"
                      name="maxCapacity"
                      value={capacityRange[1]}
                      onChange={handleCapacityChange}
                      min="50"
                      max="1000"
                      className="w-24 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    />
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    value={capacityRange[1]}
                    onChange={handleCapacityChange}
                    name="maxCapacity"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-4"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>50</span>
                    <span>500</span>
                    <span>1000</span>
                  </div>
                </div>

                {/* Price Range Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-gray-500">$</span>
                      </div>
                      <input
                        type="number"
                        name="minPrice"
                        value={priceRange[0]}
                        onChange={handlePriceChange}
                        min="1000"
                        max="10000"
                        className="pl-7 w-24 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                      />
                    </div>
                    <span className="text-gray-500">to</span>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-gray-500">$</span>
                      </div>
                      <input
                        type="number"
                        name="maxPrice"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        min="1000"
                        max="10000"
                        className="pl-7 w-24 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    name="maxPrice"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-4"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$1,000</span>
                    <span>$5,000</span>
                    <span>$10,000</span>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amenities
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-700">WiFi</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-700">Parking</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-700">
                        AV Equipment
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-700">Catering</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-700">Bar Service</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-700">Dance Floor</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-700">
                        Wheelchair Access
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-700">
                        Outdoor Space
                      </span>
                    </label>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    <button className="bg-gray-100 hover:bg-indigo-100 text-gray-700 text-sm py-1 px-2 rounded-md !rounded-button whitespace-nowrap cursor-pointer">
                      Today
                    </button>
                    <button className="bg-gray-100 hover:bg-indigo-100 text-gray-700 text-sm py-1 px-2 rounded-md !rounded-button whitespace-nowrap cursor-pointer">
                      Tomorrow
                    </button>
                    <button className="bg-gray-100 hover:bg-indigo-100 text-gray-700 text-sm py-1 px-2 rounded-md !rounded-button whitespace-nowrap cursor-pointer">
                      This Week
                    </button>
                    <button className="bg-gray-100 hover:bg-indigo-100 text-gray-700 text-sm py-1 px-2 rounded-md !rounded-button whitespace-nowrap cursor-pointer">
                      This Month
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <button
                  onClick={() => setShowFiltersModal(false)}
                  className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Reset Filters
                </button>
                <button
                  onClick={() => setShowFiltersModal(false)}
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Inquiry Form */}
      {showBookingForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={closeBookingForm}
            ></div>
            <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Book {selectedVenue}
                </h3>
                <button
                  onClick={closeBookingForm}
                  className="text-gray-400 hover:text-gray-500 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="event-date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Event Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fas fa-calendar-alt text-gray-400"></i>
                    </div>
                    <input
                      type="date"
                      id="event-date"
                      className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="start-time"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Start Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i className="fas fa-clock text-gray-400"></i>
                      </div>
                      <input
                        type="time"
                        id="start-time"
                        className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="end-time"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      End Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i className="fas fa-clock text-gray-400"></i>
                      </div>
                      <input
                        type="time"
                        id="end-time"
                        className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    min="1"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="event-type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Event Type
                  </label>
                  <select
                    id="event-type"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="conference">Conference</option>
                    <option value="social">Social Gathering</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="requirements"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Special Requirements
                  </label>
                  <textarea
                    id="requirements"
                    rows={3}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Tell us about any specific requirements or questions"
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={closeCalendar}
            ></div>
            <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {calendarVenue} Availability
                </h3>
                <button
                  onClick={closeCalendar}
                  className="text-gray-400 hover:text-gray-500 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              <div className="mb-4 flex justify-between items-center">
                <button className="text-gray-500 hover:text-gray-700 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <h4 className="text-lg font-medium text-gray-900">May 2025</h4>
                <button className="text-gray-500 hover:text-gray-700 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                <div className="text-gray-500 font-medium">Su</div>
                <div className="text-gray-500 font-medium">Mo</div>
                <div className="text-gray-500 font-medium">Tu</div>
                <div className="text-gray-500 font-medium">We</div>
                <div className="text-gray-500 font-medium">Th</div>
                <div className="text-gray-500 font-medium">Fr</div>
                <div className="text-gray-500 font-medium">Sa</div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {/* Previous month */}
                <div className="py-2 text-gray-300">27</div>
                <div className="py-2 text-gray-300">28</div>
                <div className="py-2 text-gray-300">29</div>
                <div className="py-2 text-gray-300">30</div>

                {/* Current month */}
                <div className="py-2 text-gray-300">1</div>
                <div className="py-2 text-gray-300">2</div>
                <div className="py-2 text-gray-300">3</div>
                <div className="py-2 text-gray-300">4</div>
                <div className="py-2 text-gray-300">5</div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  6
                </div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  7
                </div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  8
                </div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  9
                </div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  10
                </div>
                <div className="py-2 text-gray-300">11</div>
                <div className="py-2 text-gray-300">12</div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  13
                </div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  14
                </div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  15
                </div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  16
                </div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  17
                </div>
                <div className="py-2 text-gray-300">18</div>
                <div className="py-2 text-gray-300">19</div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  20
                </div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  21
                </div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  22
                </div>
                <div className="py-2 text-gray-300">23</div>
                <div className="py-2 text-gray-300">24</div>
                <div className="py-2 text-gray-300">25</div>
                <div className="py-2 text-gray-300">26</div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  27
                </div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  28
                </div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  29
                </div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  30
                </div>
                <div className="py-2 text-gray-700 hover:bg-indigo-50 cursor-pointer rounded-full">
                  31
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-4 h-4 bg-green-100 border border-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Available</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-4 h-4 bg-red-100 border border-red-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Booked</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-100 border border-yellow-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Partially Available
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    closeCalendar();
                    openBookingForm(calendarVenue || "");
                  }}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Book This Venue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VenuesPage;
