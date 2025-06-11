import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchServicesDetils } from "../Api/serviceApi"; // Adjust the import path as needed
import ServiceBookModal from "../Components/ServiceBookModal";
const SoundAndDjServiceDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedDate, setSelectedDate] = useState("");
  const [specialRequirements, setSpecialRequirements] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vendorInfo, setVendorInfo] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [relatedServices, setRelatedServices] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch service details
        const serviceData = await fetchServicesDetils(id);
        setService(serviceData);

        // Mock vendor info (in real app, fetch from API)
        setVendorInfo({
          id: serviceData.vendorId,
          name: serviceData.vendorName || "Sound Experts",
          location: "New York, NY",
          phone: "(555) 123-4567",
          email: serviceData.vendorEmail || "contact@soundexperts.com",
          website: "www.soundexperts.com",
          description: "Premium Audio Services with 10+ years experience",
          experience: "Over 10 years in the event industry",
          credentials: [
            "Certified audio engineers on staff",
            "Served 1000+ events successfully",
            "Specialized training in event management",
            "Fully insured and licensed business",
          ],
        });

        // Mock reviews (in real app, fetch from API)
        setReviews([
          {
            id: 1,
            name: "Michael Johnson",
            rating: 5,
            date: "April 15, 2025",
            review:
              "We hired this service for our wedding and they exceeded all expectations. The DJ read the room perfectly!",
          },
          {
            id: 2,
            name: "Sarah Williams",
            rating: 4,
            date: "March 22, 2025",
            review:
              "Amazing service from start to finish. Our corporate event was a huge success.",
          },
        ]);

        // Mock related services (in real app, fetch from API)
        setRelatedServices([
          {
            id: "1",
            title: "Premium Sound System",
            image: "https://via.placeholder.com/400x300?text=Sound+System",
            rating: 4.5,
            reviews: 32,
            price: 350,
            unit: "day",
          },
          {
            id: "2",
            title: "Lighting Package",
            image: "https://via.placeholder.com/400x300?text=Lighting",
            rating: 4.2,
            reviews: 15,
            price: 250,
            unit: "event",
          },
        ]);
      } catch (err) {
        setError("Failed to load service details");
        console.error("Error fetching service details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const openBookingForm = (venueName) => {
    setSelectedVenue(venueName);
    setShowBookingForm(true);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
    setSelectedVenue(null);
  };
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleRequirementsChange = (e) => {
    setSpecialRequirements(e.target.value);
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % (service?.images?.length || 1)
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + (service?.images?.length || 1)) %
        (service?.images?.length || 1)
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleFullGallery = () => {
    setShowFullGallery(!showFullGallery);
  };

  const formatPricingModel = (model) => {
    switch (model) {
      case "PER_EVENT":
        return "per event";
      case "PER_HOUR":
        return "per hour";
      case "PER_DAY":
        return "per day";
      default:
        return "";
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "approved":
        return "Available";
      case "pending":
        return "Pending Approval";
      case "rejected":
        return "Rejected";
      default:
        return status;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Inquiry submitted successfully!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-4xl text-indigo-600 mb-4"></i>
          <p className="text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-exclamation-triangle text-4xl text-red-500 mb-4"></i>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-music text-4xl text-indigo-600 mb-4"></i>
          <p className="text-gray-600">Service not found</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Browse Services
          </button>
        </div>
      </div>
    );
  }

  // Create service images array from backend data
  const serviceImages = service.images?.map((url, index) => ({
    url,
    alt: `${service.title} - Image ${index + 1}`,
  })) || [
    {
      url: "https://via.placeholder.com/800x600?text=No+Image",
      alt: "Service Image Placeholder",
    },
  ];

  // Create features array from backend data
  const serviceFeatures = service.features?.map((feature, index) => ({
    icon: index % 2 === 0 ? "fa-music" : "fa-volume-up",
    text: feature,
  })) || [
    { icon: "fa-music", text: "Professional audio equipment" },
    { icon: "fa-volume-up", text: "High-quality sound system" },
  ];

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
                {/* <li>
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 text-xs mx-2"></i>
                    <button
                      onClick={() => navigate("/")}
                      className="text-gray-500 hover:text-indigo-600 text-sm cursor-pointer"
                    >
                      Categories
                    </button>
                  </div>
                </li> */}
                <li>
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 text-xs mx-2"></i>
                    <button
                      onClick={() => navigate("/sound-and-dj-services")}
                      className="text-gray-500 hover:text-indigo-600 text-sm cursor-pointer"
                    >
                      Sound & DJ
                    </button>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 text-xs mx-2"></i>
                    <span className="text-indigo-600 text-sm font-medium">
                      {service.title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Service Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Images */}
            <div className="w-full lg:w-3/5">
              {/* Main Image */}
              <div className="relative bg-gray-100 rounded-lg overflow-hidden h-96 shadow-md">
                <img
                  src={serviceImages[currentImageIndex].url}
                  alt={serviceImages[currentImageIndex].alt}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button
                    onClick={prevImage}
                    className="bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md text-gray-800 hover:text-indigo-600 transition !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md text-gray-800 hover:text-indigo-600 transition !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
                {/* <button
                  onClick={toggleFullGallery}
                  className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-md shadow-md text-gray-800 hover:text-indigo-600 transition flex items-center !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-expand-alt mr-1"></i>
                  <span className="text-sm">View Gallery</span>
                </button> */}
                <div className="absolute bottom-4 left-4 flex space-x-1">
                  {serviceImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => selectImage(index)}
                      className={`w-2.5 h-2.5 rounded-full ${
                        currentImageIndex === index
                          ? "bg-indigo-600"
                          : "bg-white bg-opacity-60"
                      } !rounded-button whitespace-nowrap cursor-pointer`}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="mt-4 grid grid-cols-5 gap-2">
                {serviceImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`h-20 rounded-md overflow-hidden cursor-pointer ${
                      currentImageIndex === index
                        ? "ring-2 ring-indigo-600"
                        : "hover:opacity-80"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Service Info */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h1>
                  <span
                    className={`text-sm font-medium px-2.5 py-0.5 rounded-full ${getStatusClass(
                      service.status
                    )}`}
                  >
                    {getStatusLabel(service.status)}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <i
                        key={index}
                        className={`${
                          index < 4.8 ? "fas" : "far"
                        } fa-star text-yellow-400`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    4.8 (48 reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-center text-indigo-700">
                  <span className="text-3xl font-bold">
                    {formatter.format(service.price)}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">
                    {formatPricingModel(service.pricingModel)}
                  </span>
                </div>

                {/* Quick Description */}
                <p className="mt-4 text-gray-700">
                  {service.description ||
                    "Professional sound and DJ services for your event"}
                </p>

                {/* Action Buttons */}
                {/* <div className="mt-6 space-y-3">
                  <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-calendar-check mr-2"></i>
                    Book Now
                  </button>
                  <div className="flex space-x-3">
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-phone-alt mr-2"></i>
                      Contact
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-share-alt mr-2"></i>
                      Share
                    </button>
                    <button className="w-12 border border-gray-300 text-gray-700 py-2 px-0 rounded-md hover:bg-gray-50 transition flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                </div> */}

                {/* Back to Services */}
                {/* <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => navigate("/sound-dj-services")}
                    className="text-indigo-600 hover:text-indigo-800 flex items-center cursor-pointer"
                  >
                    <i className="fas fa-arrow-left mr-2"></i>
                    Back to all Sound & DJ services
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8 bg-white rounded-lg shadow-md">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px overflow-x-auto">
                <button
                  onClick={() => handleTabChange("overview")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "overview"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button cursor-pointer`}
                >
                  <i className="fas fa-info-circle mr-2"></i>
                  Overview
                </button>
                <button
                  onClick={() => handleTabChange("features")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "features"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button cursor-pointer`}
                >
                  <i className="fas fa-list-ul mr-2"></i>
                  Features
                </button>

                {/* <button
                  onClick={() => handleTabChange("reviews")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "reviews"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button cursor-pointer`}
                >
                  <i className="fas fa-star mr-2"></i>
                  Reviews
                </button> */}
                {/* <button
                  onClick={() => handleTabChange("vendor")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "vendor"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button cursor-pointer`}
                >
                  <i className="fas fa-user mr-2"></i>
                  Vendor
                </button> */}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Service Overview
                  </h2>
                  <div className="prose max-w-none text-gray-700">
                    <p>
                      {service.description ||
                        "Our Professional DJ Services provide the perfect musical atmosphere for any event."}
                    </p>

                    {service.terms && (
                      <>
                        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">
                          Terms & Conditions
                        </h3>
                        <p>{service.terms}</p>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Features Tab */}
              {activeTab === "features" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Service Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {serviceFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                          <i className={`fas ${feature.icon} text-xl`}></i>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">
                            {feature.text}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing Tab */}

              {/* Reviews Tab */}
              {activeTab === "reviews" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Customer Reviews
                    </h2>
                    <div className="flex items-center bg-indigo-50 px-3 py-1 rounded-full">
                      <div className="flex items-center mr-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <i
                            key={index}
                            className={`${
                              index < 4.8 ? "fas" : "far"
                            } fa-star text-yellow-400 text-sm`}
                          ></i>
                        ))}
                      </div>
                      <span className="text-indigo-700 font-medium">
                        4.8 out of 5
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-gray-200 pb-6 last:border-b-0"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-start">
                            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium">
                              {review.name.charAt(0)}
                            </div>
                            <div className="ml-4">
                              <h4 className="text-lg font-medium text-gray-900">
                                {review.name}
                              </h4>
                              <div className="flex items-center mt-1">
                                <div className="flex">
                                  {Array.from({ length: 5 }).map((_, index) => (
                                    <i
                                      key={index}
                                      className={`${
                                        index < review.rating ? "fas" : "far"
                                      } fa-star text-yellow-400 text-sm`}
                                    ></i>
                                  ))}
                                </div>
                                <span className="ml-2 text-sm text-gray-500">
                                  {review.date}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-gray-700">
                          <p>{review.review}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Vendor Tab */}
              {activeTab === "vendor" && vendorInfo && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Vendor Information
                  </h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center">
                          <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                            {vendorInfo.name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <h3 className="text-xl font-bold text-gray-900">
                              {vendorInfo.name}
                            </h3>
                            <p className="text-gray-600">
                              {vendorInfo.description}
                            </p>
                          </div>
                        </div>
                        <div className="mt-6 space-y-3">
                          <div className="flex items-center">
                            <i className="fas fa-map-marker-alt text-indigo-600 w-5"></i>
                            <span className="ml-2 text-gray-700">
                              {vendorInfo.location}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-phone-alt text-indigo-600 w-5"></i>
                            <span className="ml-2 text-gray-700">
                              {vendorInfo.phone}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-envelope text-indigo-600 w-5"></i>
                            <span className="ml-2 text-gray-700">
                              {vendorInfo.email}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-globe text-indigo-600 w-5"></i>
                            <a
                              href="#"
                              className="ml-2 text-indigo-600 hover:text-indigo-800 cursor-pointer"
                            >
                              {vendorInfo.website}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="prose max-w-none text-gray-700">
                        <p>
                          {vendorInfo.name} has been providing premium audio
                          services for {vendorInfo.experience}.
                        </p>
                        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">
                          Credentials & Experience
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {vendorInfo.credentials.map((credential, index) => (
                            <li key={index}>{credential}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6 flex justify-end">
                        <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer">
                          Contact Vendor
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Booking Section */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Book This Service
            </h2>
            <div className="grid gap-6">
              {/* <div className="md:col-span-2">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="booking-date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="special-requirements"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Special Requirements
                    </label>
                    <textarea
                      id="special-requirements"
                      rows={4}
                      value={specialRequirements}
                      onChange={handleRequirementsChange}
                      placeholder="Tell us about any special requests or requirements for your event..."
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                  </div>
                </div>
              </div> */}

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-4">
                  Price Summary
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Fee</span>
                    <span className="font-medium">
                      {formatter.format(service.price)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 my-2 pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-indigo-600">
                        {formatter.format(service.price)}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => openBookingForm(service)}
                  className="mt-4 w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Book Now
                </button>
                <p className="mt-2 text-xs text-gray-500 text-center">
                  A 25% deposit is required to secure your booking
                </p>
              </div>
            </div>
          </div>

          {/* Related Services */}

          {/* Inquiry Form */}
          {/* <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Send an Inquiry
            </h2>
            <form onSubmit={handleSubmitInquiry}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    name="name"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your full name"
                    required
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
                    name="email"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your email address"
                    required
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
                    name="phone"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="eventDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Tell us about your event and what you're looking for..."
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </main>

      {/* Full Gallery Modal */}
      {showFullGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={toggleFullGallery}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full text-white !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            <div className="relative">
              <img
                src={serviceImages[currentImageIndex].url}
                alt={serviceImages[currentImageIndex].alt}
                className="max-h-[80vh] mx-auto"
              />
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                  onClick={prevImage}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full text-white !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-chevron-left text-xl"></i>
                </button>
                <button
                  onClick={nextImage}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full text-white !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-chevron-right text-xl"></i>
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {serviceImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectImage(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentImageIndex === index
                      ? "bg-white"
                      : "bg-white bg-opacity-30"
                  } !rounded-button whitespace-nowrap cursor-pointer`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      )}
      {showBookingForm && (
        <ServiceBookModal
          closeBookingForm={closeBookingForm}
          service={selectedVenue}
        />
      )}
    </div>
  );
};

export default SoundAndDjServiceDetailsPage;
