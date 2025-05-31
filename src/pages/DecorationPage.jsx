// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const DecorationPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [eventType, setEventType] = useState("All");
  const [showEventTypeDropdown, setShowEventTypeDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const toggleEventTypeDropdown = () => {
    setShowEventTypeDropdown(!showEventTypeDropdown);
    if (showEventTypeDropdown) setShowPriceDropdown(false);
  };
  const togglePriceDropdown = () => {
    setShowPriceDropdown(!showPriceDropdown);
    if (showPriceDropdown) setShowEventTypeDropdown(false);
  };
  const selectEventType = (type) => {
    setEventType(type);
    setShowEventTypeDropdown(false);
  };
  const selectPriceRange = (range) => {
    setPriceRange(range);
    setShowPriceDropdown(false);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Back Button and Title */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center">
              <a
                href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/2fbd65e2-4c06-4bc3-8907-943ba8e2787c"
                data-readdy="true"
                className="text-gray-600 hover:text-indigo-600 mr-4 cursor-pointer"
              >
                <i className="fas fa-arrow-left text-lg"></i>
              </a>
              <h1 className="text-xl font-semibold text-gray-900">
                Decoration Services
              </h1>
              <div className="ml-auto">
                <button className="text-gray-600 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-search text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section */}
        <div className="relative">
          <div
            className="h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20event%20decoration%20with%20beautiful%20floral%20arrangements%2C%20soft%20lighting%2C%20premium%20decor%20elements%2C%20luxurious%20venue%20setup%20with%20draped%20fabrics%20and%20centerpieces%2C%20professional%20event%20styling%20with%20sophisticated%20color%20palette%20and%20ambient%20lighting%2C%20high-end%20event%20design&width=1440&height=500&seq=101&orientation=landscape')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl font-bold mb-4">
                    Decoration Services
                  </h1>
                  <p className="text-xl mb-6">
                    Transform your event space with our premium decoration
                    services. From elegant weddings to corporate events, we
                    create stunning atmospheres tailored to your vision.
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="ml-2 text-white">4.8 (124 reviews)</span>
                  </div>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition !rounded-button whitespace-nowrap cursor-pointer">
                    Explore Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Style Gallery */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Decoration Styles
          </h2>
          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
              {/* Style 1 */}
              <div className="flex-none w-72 bg-white rounded-lg shadow-md overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20minimalist%20event%20decoration%20with%20clean%20lines%2C%20neutral%20color%20palette%2C%20geometric%20elements%2C%20contemporary%20floral%20arrangements%2C%20sleek%20furniture%2C%20and%20ambient%20lighting%20on%20a%20simple%20elegant%20background&width=300&height=200&seq=102&orientation=landscape')`,
                  }}
                ></div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">
                    Modern
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Clean lines, minimalist approach with contemporary elements
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-indigo-600 font-medium">
                      4 packages
                    </span>
                    <button className="text-gray-600 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* Style 2 */}
              <div className="flex-none w-72 bg-white rounded-lg shadow-md overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=classic%20elegant%20event%20decoration%20with%20rich%20fabrics%2C%20crystal%20chandeliers%2C%20ornate%20details%2C%20traditional%20floral%20arrangements%2C%20luxurious%20table%20settings%2C%20and%20warm%20lighting%20on%20a%20sophisticated%20neutral%20background&width=300&height=200&seq=103&orientation=landscape')`,
                  }}
                ></div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">
                    Classic
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Timeless elegance with rich fabrics and ornate details
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-indigo-600 font-medium">
                      6 packages
                    </span>
                    <button className="text-gray-600 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* Style 3 */}
              <div className="flex-none w-72 bg-white rounded-lg shadow-md overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=rustic%20countryside%20event%20decoration%20with%20wooden%20elements%2C%20natural%20materials%2C%20wildflowers%2C%20burlap%20accents%2C%20vintage%20items%2C%20string%20lights%2C%20and%20earthy%20color%20palette%20on%20a%20simple%20warm%20background&width=300&height=200&seq=104&orientation=landscape')`,
                  }}
                ></div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">
                    Rustic
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Natural elements with wooden accents and countryside charm
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-indigo-600 font-medium">
                      5 packages
                    </span>
                    <button className="text-gray-600 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* Style 4 */}
              <div className="flex-none w-72 bg-white rounded-lg shadow-md overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=bohemian%20event%20decoration%20with%20eclectic%20mix%20of%20patterns%2C%20vibrant%20colors%2C%20macrame%20details%2C%20lush%20greenery%2C%20floor%20cushions%2C%20dream%20catchers%2C%20and%20relaxed%20atmosphere%20on%20a%20simple%20neutral%20background&width=300&height=200&seq=105&orientation=landscape')`,
                  }}
                ></div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">
                    Bohemian
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Eclectic mix of patterns, textures, and free-spirited
                    elements
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-indigo-600 font-medium">
                      3 packages
                    </span>
                    <button className="text-gray-600 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* Style 5 */}
              <div className="flex-none w-72 bg-white rounded-lg shadow-md overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=glamorous%20luxury%20event%20decoration%20with%20gold%20accents%2C%20crystal%20elements%2C%20mirrored%20surfaces%2C%20opulent%20floral%20arrangements%2C%20dramatic%20lighting%2C%20plush%20fabrics%2C%20and%20high-end%20finishes%20on%20a%20simple%20elegant%20background&width=300&height=200&seq=106&orientation=landscape')`,
                  }}
                ></div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">
                    Glamorous
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Luxurious elements with gold accents and crystal details
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-indigo-600 font-medium">
                      4 packages
                    </span>
                    <button className="text-gray-600 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Filters Section */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-gray-900">
                Available Services
              </h2>
              <div className="flex flex-wrap gap-4">
                {/* Event Type Filter */}
                <div className="relative">
                  <button
                    onClick={toggleEventTypeDropdown}
                    className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <span>Event Type: {eventType}</span>
                    <i
                      className={`fas fa-chevron-down ml-2 transition-transform ${
                        showEventTypeDropdown ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  {showEventTypeDropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <button
                        onClick={() => selectEventType("All")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        All
                      </button>
                      <button
                        onClick={() => selectEventType("Wedding")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Wedding
                      </button>
                      <button
                        onClick={() => selectEventType("Corporate")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Corporate
                      </button>
                      <button
                        onClick={() => selectEventType("Birthday")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Birthday
                      </button>
                      <button
                        onClick={() => selectEventType("Anniversary")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Anniversary
                      </button>
                    </div>
                  )}
                </div>
                {/* Price Range Filter */}
                <div className="relative">
                  <button
                    onClick={togglePriceDropdown}
                    className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <span>Price Range: {priceRange}</span>
                    <i
                      className={`fas fa-chevron-down ml-2 transition-transform ${
                        showPriceDropdown ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  {showPriceDropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <button
                        onClick={() => selectPriceRange("All")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        All
                      </button>
                      <button
                        onClick={() => selectPriceRange("$0-$500")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        $0-$500
                      </button>
                      <button
                        onClick={() => selectPriceRange("$500-$1000")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        $500-$1000
                      </button>
                      <button
                        onClick={() => selectPriceRange("$1000-$2000")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        $1000-$2000
                      </button>
                      <button
                        onClick={() => selectPriceRange("$2000+")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        $2000+
                      </button>
                    </div>
                  )}
                </div>
                {/* Rating Filter */}
                <div className="flex space-x-1">
                  {["All", "4+", "3+", "2+"].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setActiveFilter(rating)}
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        activeFilter === rating
                          ? "bg-indigo-600 text-white"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                      } !rounded-button whitespace-nowrap cursor-pointer`}
                    >
                      {rating === "All" ? "All Ratings" : `${rating} Stars`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service Listings */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div
                className="h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20wedding%20decoration%20service%20with%20white%20floral%20arrangements%2C%20draped%20fabrics%2C%20sophisticated%20table%20settings%2C%20romantic%20lighting%2C%20and%20premium%20decor%20elements%20on%20a%20simple%20neutral%20background&width=400&height=300&seq=107&orientation=landscape')`,
                }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Wedding Elegance Package
                  </h3>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Wedding
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    5.0 (42 reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Complete wedding decoration service including floral
                  arrangements, table settings, backdrop, and lighting.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    $1,500 - $3,000
                  </span>
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/d8b1b1d1-329b-42ee-8769-e9980f361b4f"
                    data-readdy="true"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer inline-block no-underline"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div
                className="h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=corporate%20event%20decoration%20with%20sleek%20modern%20design%2C%20branded%20elements%2C%20professional%20table%20arrangements%2C%20ambient%20lighting%2C%20and%20business-appropriate%20decor%20on%20a%20simple%20neutral%20background&width=400&height=300&seq=108&orientation=landscape')`,
                }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Corporate Event Setup
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Corporate
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    4.5 (28 reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Professional decoration for corporate events, conferences, and
                  business meetings.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    $800 - $2,500
                  </span>
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/d8b1b1d1-329b-42ee-8769-e9980f361b4f"
                    data-readdy="true"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer inline-block no-underline"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div
                className="h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=birthday%20party%20decoration%20with%20colorful%20balloons%2C%20festive%20elements%2C%20themed%20table%20settings%2C%20party%20props%2C%20and%20celebratory%20atmosphere%20on%20a%20simple%20neutral%20background&width=400&height=300&seq=109&orientation=landscape')`,
                }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Birthday Celebration Setup
                  </h3>
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Birthday
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    4.0 (35 reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Themed birthday decorations including balloons, banners, table
                  settings, and props.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    $300 - $800
                  </span>
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/d8b1b1d1-329b-42ee-8769-e9980f361b4f"
                    data-readdy="true"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer inline-block no-underline"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div
                className="h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=anniversary%20celebration%20decoration%20with%20romantic%20elements%2C%20red%20roses%2C%20candles%2C%20elegant%20table%20settings%2C%20champagne%20setup%2C%20and%20intimate%20atmosphere%20on%20a%20simple%20neutral%20background&width=400&height=300&seq=110&orientation=landscape')`,
                }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Anniversary Romance Package
                  </h3>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Anniversary
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    4.7 (19 reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Romantic decoration setup for anniversary celebrations with
                  roses, candles, and personalized elements.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    $400 - $1,200
                  </span>
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/d8b1b1d1-329b-42ee-8769-e9980f361b4f"
                    data-readdy="true"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer inline-block no-underline"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div
                className="h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=baby%20shower%20decoration%20with%20pastel%20colors%2C%20cute%20elements%2C%20themed%20props%2C%20balloon%20arrangements%2C%20gift%20table%20setup%2C%20and%20playful%20atmosphere%20on%20a%20simple%20neutral%20background&width=400&height=300&seq=111&orientation=landscape')`,
                }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Baby Shower Delight
                  </h3>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Baby Shower
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    5.0 (24 reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Themed baby shower decorations with customizable color schemes
                  and adorable props.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    $350 - $900
                  </span>
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/d8b1b1d1-329b-42ee-8769-e9980f361b4f"
                    data-readdy="true"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer inline-block no-underline"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            {/* Service 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div
                className="h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=holiday%20party%20decoration%20with%20festive%20elements%2C%20Christmas%20decor%2C%20winter%20themed%20props%2C%20seasonal%20table%20settings%2C%20and%20celebratory%20atmosphere%20on%20a%20simple%20neutral%20background&width=400&height=300&seq=112&orientation=landscape')`,
                }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Holiday Season Special
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Holiday
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    4.2 (31 reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Festive decorations for holiday parties and seasonal
                  celebrations with themed elements.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    $500 - $1,500
                  </span>
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/d8b1b1d1-329b-42ee-8769-e9980f361b4f"
                    data-readdy="true"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer inline-block no-underline"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition !rounded-button whitespace-nowrap cursor-pointer">
              Load More Services
            </button>
          </div>
        </div>
      </main>
      {/* Quote Request Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setShowQuoteForm(true)}
          className="bg-indigo-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
        >
          <i className="fas fa-comment-dollar text-2xl"></i>
        </button>
      </div>
      {/* Quote Request Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden">
            <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">
                Request Decoration Quote
              </h3>
              <button
                onClick={() => setShowQuoteForm(false)}
                className="text-white hover:text-gray-200 !rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-6">
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Event Type
                    </label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Birthday Party</option>
                      <option>Anniversary</option>
                      <option>Baby Shower</option>
                      <option>Holiday Party</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Event Date
                    </label>
                    <input
                      type="date"
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Budget Range
                    </label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                      <option>$0 - $500</option>
                      <option>$500 - $1,000</option>
                      <option>$1,000 - $2,000</option>
                      <option>$2,000 - $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Describe your event and specific decoration needs..."
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DecorationPage;
