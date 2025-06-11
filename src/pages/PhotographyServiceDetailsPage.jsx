import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchServicesDetils } from "../Api/serviceApi";
import ServiceBookModal from "../Components/ServiceBookModal";

const PhotographyServiceDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("standard");
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [services, setServices] = useState(null); // Changed to null for initial state
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const servicesData = await fetchServicesDetils(id);
        setServices(servicesData || null); // Set the data property from API response
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices(null);
      }
    };

    fetchServiceData();
  }, [id]);
  console.log("Services data:", services);
  const openGalleryModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowGalleryModal(true);
  };

  const closeGalleryModal = () => {
    setShowGalleryModal(false);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  const openBookingForm = (venueName) => {
    setSelectedVenue(venueName);
    setShowBookingForm(true);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
    setSelectedVenue(null);
  };
  // Static package options (kept as is, but can be updated with API data if needed)
  const packageOptions = {
    basic: {
      name: "Basic Package",
      price: services ? `${services.currency} ${services.price}` : "$1,200", // Use API price for basic
      features: [
        "6 hours of coverage",
        "1 photographer",
        "Online gallery",
        "100 edited digital images",
        "Print release",
      ],
    },
    standard: {
      name: "Standard Package",
      price: services
        ? `${services.currency} ${services.price + 1200}`
        : "$2,200", // Example adjustment
      features: [
        "8 hours of coverage",
        "2 photographers",
        "Engagement session",
        "Online gallery",
        "300 edited digital images",
        "Print release",
        "Custom USB drive",
      ],
    },
    premium: {
      name: "Premium Package",
      price: services
        ? `${services.currency} ${services.price + 2500}`
        : "$3,500", // Example adjustment
      features: [
        "10 hours of coverage",
        "2 photographers",
        "Engagement session",
        "Bridal session",
        "Online gallery",
        "500+ edited digital images",
        "Print release",
        "Custom USB drive",
        "Premium photo album",
      ],
    },
  };

  // Use API images or fallback to static gallery
  const galleryImages =
    services?.images?.length > 0
      ? services.images
      : [
          // Existing static galleryImages array (kept as fallback)
          "https://readdy.ai/api/search-image?query=elegant%2520wedding%2520photography%2520of%2520bride%2520and%2520groom%2520in%2520a%2520beautiful%2520garden%2520setting%2520with%2520soft%2520natural%2520lighting%252C%2520romantic%2520atmosphere%252C%2520professional%2520composition%2520with%2520bokeh%2520effect%2520and%2520artistic%2520framing%252C%2520high%2520quality%2520professional%2520wedding%2520photography&width=600&height=400&seq=101&orientation=landscape",
          // ... other static images
        ];

  // Static data (testimonials, availability, related services) kept as is
  const testimonials = [
    /* ... existing testimonials array ... */
  ];
  const availabilityDates = [
    /* ... existing availabilityDates array ... */
  ];
  const relatedServices = [
    /* ... existing relatedServices array ... */
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Back Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to={"/photography-services"}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 cursor-pointer"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Photography Services
          </Link>
        </div>

        {/* Service Hero Section */}
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                    {services?.category || "Wedding"}
                  </span>
                  <div className="flex text-yellow-400 text-sm">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className="ml-1 text-white">5.0 (18 reviews)</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold mb-4">
                  {services?.title || "Wedding Photography"}
                </h1>
                <p className="text-lg text-indigo-100 mb-6">
                  {services?.description ||
                    "Professional wedding photography service with high-end equipment"}
                </p>
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white mr-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520male%2520photographer%2520with%2520a%2520confident%2520smile%252C%2520neutral%2520studio%2520background%252C%2520professional%2520attire%252C%2520well-groomed%2520appearance%252C%2520high%2520quality%2520portrait&width=100&height=100&seq=9&orientation=squarish"
                      alt="Photographer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">
                      {services?.vendorName || "Photographer: John Anderson"}
                    </p>
                    <p className="text-indigo-200 text-sm">
                      10+ years of experience
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  {/* <button className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    Check Availability
                  </button> */}
                  <button
                    onClick={() => openBookingForm(services)}
                    className="bg-pink-500 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-600 transition !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fas fa-heart mr-2"></i>
                    Book Now
                  </button>
                </div>
              </div>
              <div className="relative h-80 md:h-auto overflow-hidden rounded-lg shadow-xl">
                <img
                  src={
                    services?.images[0] || ""
                    // "https://readdy.ai/api/search-image?query=elegant%2520wedding%2520photography%2520scene%2520with%2520a%2520professional%2520photographer%2520capturing%2520a%2520bride%2520and%2520groom%2520in%2520a%2520romantic%2520pose%252C%2520beautiful%2520wedding%2520venue%2520with%2520soft%2520natural%2520lighting%252C%2520dreamy%2520atmosphere%2520with%2520bokeh%2520effect%2520and%2520professional%2520lighting%2520setup&width=600&height=400&seq=8&orientation=landscape"
                  }
                  alt={services?.title || "Wedding Photography"}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Service Details Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === "overview"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button whitespace-nowrap cursor-pointer`}
                >
                  <i className="fas fa-info-circle mr-2"></i>
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("portfolio")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === "portfolio"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button whitespace-nowrap cursor-pointer`}
                >
                  <i className="fas fa-images mr-2"></i>
                  Portfolio
                </button>
                {/* <button
                  onClick={() => setActiveTab("pricing")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === "pricing"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button whitespace-nowrap cursor-pointer`}
                >
                  <i className="fas fa-tag mr-2"></i>
                  Pricing
                </button> */}
                {/* <button
                  onClick={() => setActiveTab("reviews")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === "reviews"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button whitespace-nowrap cursor-pointer`}
                >
                  <i className="fas fa-star mr-2"></i>
                  Reviews
                </button> */}
                {/* <button
                  onClick={() => setActiveTab("availability")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === "availability"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button whitespace-nowrap cursor-pointer`}
                >
                  <i className="fas fa-calendar-check mr-2"></i>
                  Availability
                </button> */}
              </nav>
            </div>

            <div className="p-6">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Service Overview
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {services?.description ||
                      "Professional wedding photography service with high-end equipment."}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      What's Included
                    </h3>
                    {services?.features?.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.features.map((feature, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-4 rounded-lg"
                          >
                            <div className="flex items-start">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                <i className="fas fa-check"></i>
                              </div>
                              <div className="ml-4">
                                <p className="text-gray-600">{feature}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600">
                        No specific features listed for this service.
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Terms and Conditions
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {services?.terms ||
                        "Service terms and conditions not specified."}
                    </p>
                  </div>
                </div>
              )}

              {/* Portfolio Tab */}
              {activeTab === "portfolio" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Portfolio Gallery
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {galleryImages.map((image, index) => (
                      <div
                        key={index}
                        className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                        onClick={() => openGalleryModal(image)}
                      >
                        <img
                          src={image}
                          alt={`Wedding photography sample ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                          <div className="text-white">
                            <i className="fas fa-search-plus text-2xl"></i>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {showGalleryModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                      <div className="relative max-w-4xl w-full">
                        <button
                          onClick={closeGalleryModal}
                          className="absolute -top-12 right-0 text-white text-xl hover:text-gray-300 !rounded-button whitespace-nowrap cursor-pointer"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                        <img
                          src={selectedImage}
                          alt="Enlarged wedding photography"
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16">
                          <button className="w-12 h-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-white hover:bg-opacity-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                            <i className="fas fa-chevron-left text-xl"></i>
                          </button>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16">
                          <button className="w-12 h-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-white hover:bg-opacity-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                            <i className="fas fa-chevron-right text-xl"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Pricing Tab */}
              {activeTab === "pricing" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Pricing & Packages
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {Object.keys(packageOptions).map((key) => (
                      <div
                        key={key}
                        className={`bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-6 ${
                          key === "standard" ? "relative" : ""
                        }`}
                      >
                        {key === "standard" && (
                          <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                            MOST POPULAR
                          </div>
                        )}
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold text-gray-900">
                            {packageOptions[key].name}
                          </h3>
                          <div className="mt-4 flex justify-center">
                            <span className="text-3xl font-extrabold text-gray-900">
                              {packageOptions[key].price}
                            </span>
                          </div>
                        </div>
                        <ul className="space-y-3 mb-6">
                          {packageOptions[key].features.map(
                            (feature, index) => (
                              <li key={index} className="flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            )
                          )}
                        </ul>
                        <button
                          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer ${
                            selectedPackage === key
                              ? "ring-2 ring-offset-2 ring-indigo-500"
                              : ""
                          }`}
                          onClick={() => setSelectedPackage(key)}
                        >
                          {selectedPackage === key
                            ? "Selected"
                            : "Select Package"}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Payment Information
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Pricing Model: {services?.pricingModel || "Per Event"}
                      <br />
                      Base Price: {services?.currency} {services?.price}
                      <br />A 30% non-refundable retainer is required to secure
                      your date, with the remaining balance due 30 days before
                      the wedding. We accept credit cards, bank transfers, and
                      payment plans are available upon request.
                    </p>
                    <div className="flex items-center">
                      <i className="fas fa-info-circle text-indigo-600 mr-2"></i>
                      <p className="text-sm text-indigo-700">
                        All packages include travel within 30 miles of downtown.
                        Additional travel fees may apply for locations beyond
                        this radius.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews and Availability Tabs (unchanged) */}
              {activeTab === "reviews" && (
                <div>{/* Existing reviews tab content */}</div>
              )}
              {activeTab === "availability" && (
                <div>{/* Existing availability tab content */}</div>
              )}
            </div>
          </div>
        </div>

        {/* Photographer Profile (unchanged, as vendorName is null) */}

        {/* Booking and Related Services Sections (unchanged) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Existing booking section */}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Existing related services section */}
        </div>
      </main>
      {/* Booking Inquiry Form */}
      {showBookingForm && (
        <ServiceBookModal
          closeBookingForm={closeBookingForm}
          service={selectedVenue}
        />
      )}
    </div>
  );
};

export default PhotographyServiceDetailsPage;
