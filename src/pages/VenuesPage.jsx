// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";

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

  const venues = [
    {
      id: 1,
      name: "Grand Ballroom",
      type: "Banquet Hall",
      image:
        "https://readdy.ai/api/search-image?query=luxurious%20grand%20ballroom%20with%20crystal%20chandeliers%2C%20elegant%20table%20settings%2C%20high%20ceilings%2C%20and%20a%20spacious%20dance%20floor%2C%20perfect%20for%20large%20formal%20events%20and%20weddings%2C%20with%20soft%20ambient%20lighting%20and%20sophisticated%20decor&width=600&height=400&seq=11&orientation=landscape",
      capacity: "200-500",
      price: "$3,000-$7,000",
      rating: 4.8,
      reviews: 124,
      description:
        "An elegant ballroom with crystal chandeliers, perfect for weddings and formal events. Features a spacious dance floor and state-of-the-art sound system.",
      amenities: ["Dance Floor", "Stage", "Premium Sound System"],
      gallery: [
        "https://readdy.ai/api/search-image?query=elegant%20ballroom%20setup%20with%20round%20tables%20and%20white%20linens%2C%20crystal%20chandeliers%20overhead%2C%20and%20a%20spacious%20dance%20floor%20in%20the%20center%2C%20perfect%20for%20weddings%20and%20galas%2C%20with%20soft%20ambient%20lighting&width=300&height=200&seq=12&orientation=landscape",
        "https://readdy.ai/api/search-image?query=ballroom%20stage%20area%20with%20professional%20lighting%20setup%2C%20elegant%20backdrop%20and%20podium%20for%20speakers%2C%20perfect%20for%20corporate%20events%20and%20ceremonies%2C%20with%20sophisticated%20decor&width=300&height=200&seq=13&orientation=landscape",
        "https://readdy.ai/api/search-image?query=ballroom%20entrance%20with%20grand%20doorway%2C%20elegant%20carpet%2C%20and%20floral%20arrangements%2C%20welcoming%20guests%20to%20a%20luxurious%20event%20space%2C%20with%20sophisticated%20lighting&width=300&height=200&seq=14&orientation=landscape",
      ],
    },
    {
      id: 2,
      name: "Garden Terrace",
      type: "Outdoor",
      image:
        "https://readdy.ai/api/search-image?query=beautiful%20outdoor%20garden%20terrace%20venue%20with%20lush%20greenery%2C%20string%20lights%20overhead%2C%20elegant%20seating%20arrangements%2C%20and%20stunning%20views%2C%20perfect%20for%20weddings%20and%20cocktail%20receptions%2C%20with%20natural%20lighting%20and%20sophisticated%20landscaping&width=600&height=400&seq=21&orientation=landscape",
      capacity: "100-300",
      price: "$2,500-$5,500",
      rating: 4.9,
      reviews: 98,
      description:
        "A stunning outdoor venue with lush gardens, perfect for spring and summer events. Features string lighting and panoramic views of the surrounding landscape.",
      amenities: ["Outdoor Bar", "Covered Areas", "Garden Lighting"],
      gallery: [
        "https://readdy.ai/api/search-image?query=garden%20terrace%20seating%20area%20with%20elegant%20chairs%20and%20tables%2C%20surrounded%20by%20flowering%20plants%20and%20string%20lights%2C%20perfect%20for%20outdoor%20receptions%2C%20with%20natural%20lighting&width=300&height=200&seq=22&orientation=landscape",
        "https://readdy.ai/api/search-image?query=outdoor%20bar%20setup%20on%20garden%20terrace%20with%20elegant%20countertop%2C%20glassware%20display%2C%20and%20professional%20bartenders%2C%20surrounded%20by%20greenery%2C%20with%20ambient%20lighting&width=300&height=200&seq=23&orientation=landscape",
        "https://readdy.ai/api/search-image?query=garden%20terrace%20at%20night%20with%20string%20lights%20illuminating%20the%20space%2C%20creating%20a%20magical%20atmosphere%20for%20evening%20events%2C%20with%20elegant%20landscaping%20visible&width=300&height=200&seq=24&orientation=landscape",
      ],
    },
    {
      id: 3,
      name: "Executive Conference Center",
      type: "Conference Room",
      image:
        "https://readdy.ai/api/search-image?query=modern%20executive%20conference%20center%20with%20sleek%20boardroom%20table%2C%20ergonomic%20chairs%2C%20state-of-the-art%20presentation%20equipment%2C%20and%20floor-to-ceiling%20windows%20offering%20city%20views%2C%20perfect%20for%20corporate%20meetings%20and%20presentations%2C%20with%20professional%20lighting&width=600&height=400&seq=31&orientation=landscape",
      capacity: "50-150",
      price: "$1,500-$3,500",
      rating: 4.7,
      reviews: 76,
      description:
        "A professional conference center with state-of-the-art technology, perfect for corporate events and business meetings. Features high-speed internet and video conferencing capabilities.",
      amenities: ["AV Equipment", "Whiteboard Walls", "Video Conferencing"],
      gallery: [
        "https://readdy.ai/api/search-image?query=conference%20room%20setup%20with%20u-shaped%20table%20arrangement%2C%20presentation%20screen%2C%20and%20ergonomic%20chairs%2C%20perfect%20for%20business%20meetings%2C%20with%20professional%20lighting&width=300&height=200&seq=32&orientation=landscape",
        "https://readdy.ai/api/search-image?query=conference%20room%20technology%20hub%20with%20control%20panel%2C%20multiple%20screens%2C%20and%20connectivity%20options%2C%20showcasing%20advanced%20AV%20capabilities%2C%20with%20clean%20professional%20design&width=300&height=200&seq=33&orientation=landscape",
        "https://readdy.ai/api/search-image?query=conference%20room%20breakout%20area%20with%20comfortable%20seating%2C%20coffee%20service%2C%20and%20networking%20space%2C%20adjacent%20to%20main%20meeting%20room%2C%20with%20professional%20atmosphere&width=300&height=200&seq=34&orientation=landscape",
      ],
    },
    {
      id: 4,
      name: "Skyline Loft",
      type: "Rooftop",
      image:
        "https://readdy.ai/api/search-image?query=modern%20rooftop%20venue%20with%20panoramic%20city%20skyline%20views%2C%20contemporary%20furniture%2C%20glass%20railings%2C%20and%20ambient%20lighting%2C%20perfect%20for%20cocktail%20parties%20and%20social%20gatherings%2C%20with%20sunset%20and%20city%20lights%20visible&width=600&height=400&seq=41&orientation=landscape",
      capacity: "80-200",
      price: "$3,500-$6,500",
      rating: 4.9,
      reviews: 112,
      description:
        "A modern rooftop venue with panoramic city views, perfect for cocktail parties and social gatherings. Features contemporary design and a retractable roof for all-weather use.",
      amenities: ["Retractable Roof", "Lounge Seating", "City Views"],
      gallery: [
        "https://readdy.ai/api/search-image?query=rooftop%20lounge%20area%20with%20comfortable%20sectional%20seating%2C%20low%20tables%2C%20and%20mood%20lighting%2C%20overlooking%20city%20skyline%2C%20perfect%20for%20VIP%20events%2C%20with%20evening%20atmosphere&width=300&height=200&seq=42&orientation=landscape",
        "https://readdy.ai/api/search-image?query=rooftop%20bar%20setup%20with%20illuminated%20countertop%2C%20high%20stools%2C%20and%20premium%20spirits%20display%2C%20with%20city%20lights%20in%20background%2C%20creating%20sophisticated%20ambiance&width=300&height=200&seq=43&orientation=landscape",
        "https://readdy.ai/api/search-image?query=rooftop%20dining%20arrangement%20with%20elegant%20tables%2C%20chair%20covers%2C%20and%20centerpieces%2C%20set%20against%20dramatic%20city%20backdrop%2C%20perfect%20for%20upscale%20events&width=300&height=200&seq=44&orientation=landscape",
      ],
    },
    {
      id: 5,
      name: "Heritage Hall",
      type: "Historic Venue",
      image:
        "https://readdy.ai/api/search-image?query=historic%20venue%20with%20architectural%20details%2C%20arched%20windows%2C%20wooden%20beams%2C%20and%20elegant%20chandeliers%2C%20renovated%20with%20modern%20amenities%20while%20preserving%20classic%20character%2C%20perfect%20for%20sophisticated%20events%20with%20a%20touch%20of%20history%2C%20with%20warm%20ambient%20lighting&width=600&height=400&seq=51&orientation=landscape",
      capacity: "100-250",
      price: "$2,800-$5,800",
      rating: 4.7,
      reviews: 89,
      description:
        "A beautifully restored historic venue with architectural details, perfect for clients seeking character and elegance. Features original woodwork and modern amenities.",
      amenities: [
        "Architectural Details",
        "Mezzanine Level",
        "Grand Staircase",
      ],
      gallery: [
        "https://readdy.ai/api/search-image?query=historic%20hall%20interior%20with%20ornate%20ceiling%20details%2C%20wall%20sconces%2C%20and%20period%20furniture%2C%20showcasing%20architectural%20heritage%2C%20with%20elegant%20lighting&width=300&height=200&seq=52&orientation=landscape",
        "https://readdy.ai/api/search-image?query=grand%20staircase%20in%20historic%20venue%20with%20ornate%20banister%2C%20red%20carpet%2C%20and%20classic%20artwork%20on%20walls%2C%20perfect%20for%20dramatic%20entrances%20and%20photo%20opportunities&width=300&height=200&seq=53&orientation=landscape",
        "https://readdy.ai/api/search-image?query=mezzanine%20level%20of%20historic%20hall%20overlooking%20main%20floor%2C%20with%20antique%20railings%20and%20vintage-inspired%20furnishings%2C%20offering%20unique%20perspective%20of%20events%20below&width=300&height=200&seq=54&orientation=landscape",
      ],
    },
    {
      id: 6,
      name: "Coastal Pavilion",
      type: "Waterfront",
      image:
        "https://readdy.ai/api/search-image?query=waterfront%20pavilion%20venue%20with%20floor-to-ceiling%20windows%20overlooking%20ocean%20or%20lake%2C%20white%20drapes%2C%20elegant%20seating%2C%20and%20natural%20light%2C%20perfect%20for%20weddings%20and%20upscale%20events%2C%20with%20water%20views%20and%20sophisticated%20decor&width=600&height=400&seq=61&orientation=landscape",
      capacity: "150-400",
      price: "$4,000-$8,000",
      rating: 4.8,
      reviews: 105,
      description:
        "A stunning waterfront venue with floor-to-ceiling windows, perfect for clients who want scenic views. Features a covered deck and direct access to the shoreline.",
      amenities: ["Water Views", "Private Beach", "Sunset Deck"],
      gallery: [
        "https://readdy.ai/api/search-image?query=waterfront%20pavilion%20interior%20with%20tables%20set%20for%20a%20wedding%20reception%2C%20white%20drapes%2C%20floral%20centerpieces%2C%20and%20panoramic%20water%20views%20through%20large%20windows&width=300&height=200&seq=62&orientation=landscape",
        "https://readdy.ai/api/search-image?query=private%20beach%20area%20adjacent%20to%20pavilion%20venue%2C%20with%20ceremony%20setup%2C%20white%20chairs%2C%20floral%20arch%2C%20and%20ocean%20backdrop%2C%20perfect%20for%20waterfront%20weddings&width=300&height=200&seq=63&orientation=landscape",
        "https://readdy.ai/api/search-image?query=sunset%20deck%20of%20coastal%20pavilion%20with%20lounge%20furniture%2C%20string%20lights%2C%20and%20unobstructed%20views%20of%20water%20at%20golden%20hour%2C%20creating%20romantic%20atmosphere%20for%20events&width=300&height=200&seq=64&orientation=landscape",
      ],
    },
  ];

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
              <div className="relative">
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
              </div>

              {/* Capacity Range */}
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md text-gray-700">
                <i className="fas fa-users mr-2"></i>
                <span className="mr-2">Capacity:</span>
                <span>
                  {capacityRange[0]}-{capacityRange[1]} guests
                </span>
              </div>

              {/* Price Range */}
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md text-gray-700">
                <i className="fas fa-dollar-sign mr-2"></i>
                <span className="mr-2">Price:</span>
                <span>
                  ${priceRange[0]}-${priceRange[1]}
                </span>
              </div>

              {/* Additional Filters Button */}
              <button
                onClick={() => setShowFiltersModal(true)}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-gray-700 !rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-sliders-h mr-2"></i>
                More Filters
              </button>

              {/* Spacer */}
              <div className="flex-grow"></div>

              {/* Sort By */}
              <div className="relative">
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
              </div>
            </div>
          </div>
        </div>

        {/* Venues Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <div
                key={venue.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-indigo-700">
                    {venue.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {venue.name}
                    </h3>
                    <div className="flex items-center">
                      <i className="fas fa-star text-yellow-400 mr-1"></i>
                      <span className="text-gray-700 font-medium">
                        {venue.rating}
                      </span>
                      <span className="text-gray-500 text-sm ml-1">
                        ({venue.reviews})
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{venue.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {venue.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-700 mb-4">
                    <div className="flex items-center">
                      <i className="fas fa-users mr-2 text-indigo-600"></i>
                      <span>{venue.capacity} guests</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-dollar-sign mr-2 text-indigo-600"></i>
                      <span>{venue.price}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => openBookingForm(venue.name)}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <i className="fas fa-clipboard-check mr-2"></i>
                      Book Now
                    </button>
                    <button
                      onClick={() => openCalendar(venue.name)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <i className="fas fa-calendar-alt"></i>
                    </button>
                  </div>
                </div>

                {/* Gallery Section */}
                <div className="px-6 pb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Gallery
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {venue.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="h-24 overflow-hidden rounded-md"
                      >
                        <img
                          src={image}
                          alt={`${venue.name} gallery ${index + 1}`}
                          className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
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

              <form className="space-y-6">
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
              </form>
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
