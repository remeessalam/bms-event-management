// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const InvitationPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeStyle, setActiveStyle] = useState("wedding");
  const handleStyleChange = (style) => {
    const allButtons = [
      "allStylesBtn",
      "weddingBtn",
      "corporateBtn",
      "birthdayBtn",
    ];
    allButtons.forEach((btnId) => {
      const btn = document.getElementById(btnId);
      if (btn) {
        btn.className =
          "px-3 py-1 text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-700 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer";
      }
    });
    const activeBtn = document.getElementById(`${style}Btn`);
    if (activeBtn) {
      activeBtn.className =
        "px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition !rounded-button whitespace-nowrap cursor-pointer";
    }
    setActiveStyle(style);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main>
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/2fbd65e2-4c06-4bc3-8907-943ba8e2787c"
                  data-readdy="true"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 cursor-pointer"
                >
                  <i className="fas fa-home mr-2"></i>
                  Dashboard
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2 text-sm"></i>
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/2fbd65e2-4c06-4bc3-8907-943ba8e2787c"
                    data-readdy="true"
                    className="text-sm font-medium text-gray-700 hover:text-indigo-600 cursor-pointer"
                  >
                    Categories
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2 text-sm"></i>
                  <span className="text-sm font-medium text-indigo-600">
                    Invitations
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        {/* Category Header */}
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/2fbd65e2-4c06-4bc3-8907-943ba8e2787c"
                    data-readdy="true"
                    className="mr-4 bg-white/20 p-2 rounded-full hover:bg-white/30 transition cursor-pointer"
                  >
                    <i className="fas fa-arrow-left"></i>
                  </a>
                  <div>
                    <h2 className="text-3xl font-bold leading-tight">
                      Invitations
                    </h2>
                    <p className="mt-2 text-indigo-200">
                      Custom invitation design, printing, and digital invitation
                      services
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex md:mt-0 md:ml-4 space-x-3">
                <button className="bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-plus mr-2"></i>
                  Add New Service
                </button>
              </div>
            </div>
            <div className="mt-6 flex items-center">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                2 Services Available
              </span>
            </div>
          </div>
        </div>
        {/* Filter Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveFilter("All")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition !rounded-button whitespace-nowrap cursor-pointer ${
                  activeFilter === "All"
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-600 hover:text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                All Services
              </button>
              <button
                onClick={() => setActiveFilter("Digital")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition !rounded-button whitespace-nowrap cursor-pointer ${
                  activeFilter === "Digital"
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-600 hover:text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                Digital Invitations
              </button>
              <button
                onClick={() => setActiveFilter("Printed")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition !rounded-button whitespace-nowrap cursor-pointer ${
                  activeFilter === "Printed"
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-600 hover:text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                Printed Invitations
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Service 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
              <div
                className="h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20digital%20invitation%20design%20with%20modern%20typography%20and%20floral%20elements%20on%20a%20tablet%20screen%2C%20professional%20e-invitation%20with%20RSVP%20functionality%2C%20displayed%20on%20a%20clean%20white%20desk%20with%20minimal%20decoration%20and%20soft%20natural%20lighting&width=600&height=300&seq=101&orientation=landscape')`,
                }}
              >
                <div className="h-full w-full bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <span className="bg-blue-500 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                      Digital
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Digital Invitation Suite
                    </h3>
                    <div className="flex items-center mt-1">
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
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-indigo-600">
                      $75 - $150
                    </p>
                    <p className="text-sm text-gray-500">per design</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  Custom digital invitations with interactive RSVP features,
                  animated elements, and personalized designs. Perfect for
                  modern events with international guests.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Animated
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    RSVP Integration
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Mobile-friendly
                  </span>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/d1d777c2-17f1-4c0d-ab7e-08b56bc0c66b"
                    data-readdy="true"
                    className="text-indigo-600 hover:text-indigo-800 font-medium !rounded-button whitespace-nowrap cursor-pointer"
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
            {/* Service 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
              <div
                className="h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=luxury%20printed%20wedding%20invitation%20suite%20with%20envelope%2C%20RSVP%20card%2C%20and%20details%20card%20on%20textured%20paper%20with%20gold%20foil%20accents%2C%20arranged%20on%20a%20white%20marble%20surface%20with%20minimal%20floral%20decoration%20and%20soft%20natural%20lighting&width=600&height=300&seq=102&orientation=landscape')`,
                }}
              >
                <div className="h-full w-full bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <span className="bg-purple-500 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                      Printed
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Premium Printed Collection
                    </h3>
                    <div className="flex items-center mt-1">
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
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-indigo-600">
                      $150 - $350
                    </p>
                    <p className="text-sm text-gray-500">per 100 sets</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  Luxury printed invitation suites including main invitation,
                  RSVP cards, details card, and custom envelopes. Available with
                  premium finishes like foil stamping and letterpress.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Foil Stamping
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Letterpress
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Custom Envelopes
                  </span>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/d1d777c2-17f1-4c0d-ab7e-08b56bc0c66b"
                    data-readdy="true"
                    className="text-indigo-600 hover:text-indigo-800 font-medium !rounded-button whitespace-nowrap cursor-pointer"
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
        {/* Sample Designs Gallery */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Sample Designs</h2>
            <div className="flex space-x-2">
              <button
                id="allStylesBtn"
                onClick={() => handleStyleChange("all")}
                className="px-3 py-1 text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-700 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer"
              >
                All Styles
              </button>
              <button
                id="weddingBtn"
                onClick={() => handleStyleChange("wedding")}
                className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition !rounded-button whitespace-nowrap cursor-pointer"
              >
                Wedding
              </button>
              <button
                id="corporateBtn"
                onClick={() => handleStyleChange("corporate")}
                className="px-3 py-1 text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-700 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer"
              >
                Corporate
              </button>
              <button
                id="birthdayBtn"
                onClick={() => handleStyleChange("birthday")}
                className="px-3 py-1 text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-700 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer"
              >
                Birthday
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="relative group rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://readdy.ai/api/search-image?query=elegant%20wedding%20invitation%20card%20with%20gold%20foil%20details%20and%20floral%20design%20on%20cream%20textured%20paper%2C%20professional%20invitation%20design%20with%20sophisticated%20typography%2C%20arranged%20on%20a%20white%20surface%20with%20soft%20lighting&width=250&height=250&seq=201&orientation=squarish"
                alt="Wedding invitation sample"
                className="w-full h-48 object-cover object-top group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-3 text-white">
                  <p className="font-medium text-sm">Elegant Gold Foil</p>
                  <p className="text-xs text-white/80">Wedding Collection</p>
                </div>
              </div>
            </div>
            <div className="relative group rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://readdy.ai/api/search-image?query=romantic%20wedding%20invitation%20with%20watercolor%20floral%20design%20and%20rose%20gold%20calligraphy%20on%20ivory%20paper%2C%20delicate%20and%20elegant%20invitation%20design%20with%20matching%20envelope%2C%20arranged%20on%20a%20white%20surface%20with%20soft%20lighting&width=250&height=250&seq=206&orientation=squarish"
                alt="Wedding invitation sample"
                className="w-full h-48 object-cover object-top group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-3 text-white">
                  <p className="font-medium text-sm">Watercolor Romance</p>
                  <p className="text-xs text-white/80">Wedding Collection</p>
                </div>
              </div>
            </div>
            <div className="relative group rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20minimalist%20wedding%20invitation%20with%20geometric%20patterns%20and%20rose%20gold%20foil%20on%20white%20premium%20paper%2C%20contemporary%20wedding%20stationery%20with%20clean%20typography%2C%20arranged%20on%20a%20white%20surface%20with%20soft%20lighting&width=250&height=250&seq=207&orientation=squarish"
                alt="Wedding invitation sample"
                className="w-full h-48 object-cover object-top group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-3 text-white">
                  <p className="font-medium text-sm">Modern Geometric</p>
                  <p className="text-xs text-white/80">Wedding Collection</p>
                </div>
              </div>
            </div>
            <div className="relative group rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://readdy.ai/api/search-image?query=rustic%20wedding%20invitation%20suite%20with%20kraft%20paper%20and%20twine%20details%2C%20handcrafted%20invitation%20with%20botanical%20illustrations%2C%20arranged%20on%20a%20white%20wooden%20surface%20with%20soft%20natural%20lighting&width=250&height=250&seq=204&orientation=squarish"
                alt="Rustic invitation sample"
                className="w-full h-48 object-cover object-top group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-3 text-white">
                  <p className="font-medium text-sm">Rustic Botanical</p>
                  <p className="text-xs text-white/80">Wedding Collection</p>
                </div>
              </div>
            </div>
            <div className="relative group rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://readdy.ai/api/search-image?query=vintage%20inspired%20wedding%20invitation%20with%20lace%20patterns%20and%20pearl%20embellishments%20on%20champagne%20colored%20paper%2C%20classic%20wedding%20stationery%20with%20elegant%20details%2C%20arranged%20on%20a%20white%20surface%20with%20soft%20lighting&width=250&height=250&seq=208&orientation=squarish"
                alt="Wedding invitation sample"
                className="w-full h-48 object-cover object-top group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-3 text-white">
                  <p className="font-medium text-sm">Vintage Lace</p>
                  <p className="text-xs text-white/80">Wedding Collection</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium !rounded-button whitespace-nowrap cursor-pointer">
              View All Samples
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
        {/* Customer Reviews */}
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Customer Reviews
              </h2>
              <p className="mt-2 text-gray-600">
                See what our clients say about our invitation services
              </p>
              <div className="mt-4 flex justify-center items-center">
                <div className="flex text-yellow-400 text-2xl">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  4.8
                </span>
                <span className="ml-1 text-gray-600">out of 5</span>
                <span className="ml-2 text-gray-500 text-sm">(70 reviews)</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Review 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-800 font-medium">JM</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h4 className="text-lg font-semibold text-gray-900">
                        Jessica Miller
                      </h4>
                      <span className="ml-2 text-sm text-gray-500">
                        • May 2, 2025
                      </span>
                    </div>
                    <div className="flex text-yellow-400 mt-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="mt-2 text-gray-600">
                      The Premium Printed Collection exceeded all my
                      expectations! The quality of the paper and printing was
                      outstanding, and the foil details added such an elegant
                      touch to our wedding invitations. Our guests were
                      impressed!
                    </p>
                    <div className="mt-3 text-sm text-gray-500">
                      <span className="font-medium">Purchased:</span> Premium
                      Printed Collection
                    </div>
                  </div>
                </div>
              </div>
              {/* Review 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-800 font-medium">DR</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h4 className="text-lg font-semibold text-gray-900">
                        David Rodriguez
                      </h4>
                      <span className="ml-2 text-sm text-gray-500">
                        • April 18, 2025
                      </span>
                    </div>
                    <div className="flex text-yellow-400 mt-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <p className="mt-2 text-gray-600">
                      We used the Digital Invitation Suite for our corporate
                      event and it was perfect. The RSVP functionality made
                      tracking attendance so much easier, and the design
                      perfectly matched our brand. Would definitely use again.
                    </p>
                    <div className="mt-3 text-sm text-gray-500">
                      <span className="font-medium">Purchased:</span> Digital
                      Invitation Suite
                    </div>
                  </div>
                </div>
              </div>
              {/* Review 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-800 font-medium">AT</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h4 className="text-lg font-semibold text-gray-900">
                        Aisha Thomas
                      </h4>
                      <span className="ml-2 text-sm text-gray-500">
                        • April 10, 2025
                      </span>
                    </div>
                    <div className="flex text-yellow-400 mt-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <p className="mt-2 text-gray-600">
                      The letterpress invitations were absolutely beautiful! The
                      attention to detail and the quality of the paper were
                      exceptional. The design team was also very helpful with
                      customizations.
                    </p>
                    <div className="mt-3 text-sm text-gray-500">
                      <span className="font-medium">Purchased:</span> Premium
                      Printed Collection
                    </div>
                  </div>
                </div>
              </div>
              {/* Review 4 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-800 font-medium">MK</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h4 className="text-lg font-semibold text-gray-900">
                        Michael Kim
                      </h4>
                      <span className="ml-2 text-sm text-gray-500">
                        • March 28, 2025
                      </span>
                    </div>
                    <div className="flex text-yellow-400 mt-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="mt-2 text-gray-600">
                      I needed digital invitations for my birthday party and
                      these were perfect! The animated elements were a fun touch
                      and everyone loved them. The mobile responsiveness worked
                      great for all my guests.
                    </p>
                    <div className="mt-3 text-sm text-gray-500">
                      <span className="font-medium">Purchased:</span> Digital
                      Invitation Suite
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer">
                View All Reviews
              </button>
            </div>
          </div>
        </div>
        {/* Add New Service Button (Floating) */}
        <div className="fixed bottom-8 right-8">
          <button className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer">
            <i className="fas fa-plus text-xl"></i>
          </button>
        </div>
      </main>
    </div>
  );
};
export default InvitationPage;
