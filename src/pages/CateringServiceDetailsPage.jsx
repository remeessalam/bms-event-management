// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useEffect, useState } from "react";
import { fetchServicesDetils } from "../Api/serviceApi";
import { useParams } from "react-router-dom";
import ServiceBookModal from "../Components/ServiceBookModal";

const CateringServiceDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedVenue, setSelectedVenue] = useState();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [service, setServices] = useState(null); // Changed to null for initial state
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

  // Service details
  // const service = {
  //   id: "683fd48c4379a7bf57f84b91",
  //   title: "CATRING Service 10 - 22nc7j",
  //   description:
  //     "This is a sample catring service description. It includes Feature 1.",
  //   category: "CATRING",
  //   price: 650.43,
  //   currency: "INR",
  //   features: ["Feature 1"],
  //   images: [
  //     "https://res.cloudinary.com/dzcfl3qpw/image/upload/v1749013643/event_services/z2ugmjsgirmttuqv8vvi.jpg",
  //     "https://res.cloudinary.com/dzcfl3qpw/image/upload/v1749013644/event_services/nmgzrmwzvfuihkx9p8wx.jpg",
  //     "https://res.cloudinary.com/dzcfl3qpw/image/upload/v1749013646/event_services/r2r2z087emlibvbqwriy.jpg",
  //   ],
  //   isDeleted: false,
  //   pricingModel: "PER_EVENT",
  //   status: "approved",
  //   statusReason: null,
  //   statusUpdatedAt: "2025-06-04T09:07:17.748Z",
  //   terms: "Sample terms and conditions for this service.",
  //   createdAt: "2025-06-04T05:07:24.165Z",
  //   updatedAt: "2025-06-04T09:07:17.748Z",
  //   vendorId: "68368f94acb519fde26427f3",
  //   vendorEmail: null,
  //   vendorName: null,
  //   rating: 0, // Default or placeholder
  //   reviewCount: 0, // Default or placeholder
  //   available: true, // Default or placeholder
  //   capacity: "N/A", // Default or placeholder
  //   duration: "N/A", // Default or placeholder
  //   included: [], // Default or placeholder
  //   setup: "N/A", // Default or placeholder
  //   cancellation: "N/A", // Default or placeholder
  //   menuOptions: [], // Default or placeholder
  //   packages: [
  //     {
  //       name: "Standard Package",
  //       price: "₹650.43 per event",
  //       includes: ["Basic catering service", "Setup and cleanup"],
  //     },
  //   ],
  //   addOns: [], // Default or placeholder
  //   payment: "N/A", // Default or placeholder
  //   reviews: [], // Default or placeholder
  //   availability: {
  //     availableDates: [], // Default or placeholder
  //     timeSlots: [], // Default or placeholder
  //   },
  // };

  // Generate calendar days
  const generateCalendarDays = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: "", date: "", available: false });
    }

    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        i
      ).padStart(2, "0")}`;
      days.push({
        day: i,
        date,
        available: service?.availability?.availableDates.includes(date),
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  // Handle image navigation
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? service.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === service.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  console.log("Service details:", service);

  const openBookingForm = (venueName) => {
    setSelectedVenue(venueName);
    setShowBookingForm(true);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
    setSelectedVenue(null);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="pb-12">
        {/* Back Button & Service Title */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <a
                  href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/10ba292e-4af4-410f-a494-0aade4ae67d6"
                  data-readdy="true"
                  className="mr-4 text-gray-500 hover:text-indigo-600 cursor-pointer"
                >
                  <i className="fas fa-arrow-left text-lg"></i>
                </a>
                <h1 className="text-xl font-bold text-gray-900">
                  {service?.title}
                </h1>
              </div>
              <button className="text-gray-500 hover:text-indigo-600 cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fas fa-share-alt text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-[500px]">
                <img
                  src={service?.images[currentImageIndex]}
                  alt={`${service?.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover object-top"
                />

                {/* Image Navigation Controls */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white text-gray-800 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white text-gray-800 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1}/{service.images.length}
                </div>

                {/* Full Screen Button */}
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="absolute bottom-4 left-4 bg-black/70 text-white p-2 rounded-full !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i
                    className={`fas ${
                      isFullScreen ? "fa-compress" : "fa-expand"
                    }`}
                  ></i>
                </button>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex p-2 bg-gray-100 overflow-x-auto">
                {service?.images?.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-16 w-24 flex-shrink-0 mx-1 rounded overflow-hidden cursor-pointer ${
                      currentImageIndex === index
                        ? "ring-2 ring-indigo-500"
                        : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Service Overview & Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Service Info */}
            <div className="lg:col-span-2">
              {/* Service Overview */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h1>
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`${
                              i < Math.floor(service.rating)
                                ? "fas fa-star text-yellow-400"
                                : i < service.rating
                                ? "fas fa-star-half-alt text-yellow-400"
                                : "far fa-star text-yellow-400"
                            }`}
                          ></i>
                        ))}
                      </div>
                      <span className="text-gray-600">
                        {service.rating} ({service.reviewCount} reviews)
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full ${
                          service.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {service.status === "approved"
                          ? "Available"
                          : "Unavailable"}
                      </span>
                      <span className="text-sm text-gray-600">
                        <i className="fas fa-users mr-1"></i> {service.capacity}
                      </span>
                      <span className="text-sm text-gray-600">
                        <i className="far fa-clock mr-1"></i> {service.duration}
                      </span>
                    </div>
                  </div>
                  <div className="text-right mt-2 lg:mt-0">
                    <p className="text-2xl font-bold text-indigo-600">
                      ₹{service.price}
                    </p>
                    <p className="text-sm text-gray-500">per event</p>
                  </div>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="border-b border-gray-200">
                  <nav className="flex overflow-x-auto">
                    {[
                      "description",
                      "menu",
                      "pricing",
                      "reviews",
                      "availability",
                    ].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-4 px-6 text-center border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer !rounded-button ${
                          activeTab === tab
                            ? "border-indigo-500 text-indigo-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {/* Description Tab */}
                  {activeTab === "description" && (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Service Description
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Features
                      </h3>
                      <ul className="mb-6">
                        {service?.features?.map((feature, index) => (
                          <li key={index} className="flex items-start mb-2">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        What's Included
                      </h3>
                      <ul className="mb-6">
                        {service?.included?.map((item, index) => (
                          <li key={index} className="flex items-start mb-2">
                            <i className="fas fa-utensils text-indigo-500 mt-1 mr-2"></i>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Setup & Service Details
                      </h3>
                      <p className="text-gray-600 mb-6">{service.setup}</p>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Terms and Conditions
                      </h3>
                      <p className="text-gray-600 mb-6">{service.terms}</p>

                      {/* <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Cancellation Policy
                      </h3>
                      <p className="text-gray-600">{service.cancellation}</p> */}

                      {/* <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                        Additional Information
                      </h3>
                      <ul className="mb-6">
                        <li className="flex items-start mb-2">
                          <i className="fas fa-info-circle text-indigo-500 mt-1 mr-2"></i>
                          <span className="text-gray-600">
                            <strong>Category:</strong> {service.category}
                          </span>
                        </li>
                        <li className="flex items-start mb-2">
                          <i className="fas fa-info-circle text-indigo-500 mt-1 mr-2"></i>
                          <span className="text-gray-600">
                            <strong>Created At:</strong> {service.createdAt}
                          </span>
                        </li>
                        <li className="flex items-start mb-2">
                          <i className="fas fa-info-circle text-indigo-500 mt-1 mr-2"></i>
                          <span className="text-gray-600">
                            <strong>Updated At:</strong> {service.updatedAt}
                          </span>
                        </li>
                        <li className="flex items-start mb-2">
                          <i className="fas fa-info-circle text-indigo-500 mt-1 mr-2"></i>
                          <span className="text-gray-600">
                            <strong>Status:</strong> {service.status}
                          </span>
                        </li>
                        <li className="flex items-start mb-2">
                          <i className="fas fa-info-circle text-indigo-500 mt-1 mr-2"></i>
                          <span className="text-gray-600">
                            <strong>Status Updated At:</strong>{" "}
                            {service.statusUpdatedAt}
                          </span>
                        </li>
                        <li className="flex items-start mb-2">
                          <i className="fas fa-info-circle text-indigo-500 mt-1 mr-2"></i>
                          <span className="text-gray-600">
                            <strong>Vendor ID:</strong> {service.vendorId}
                          </span>
                        </li>
                        <li className="flex items-start mb-2">
                          <i className="fas fa-info-circle text-indigo-500 mt-1 mr-2"></i>
                          <span className="text-gray-600">
                            <strong>Vendor Name:</strong>{" "}
                            {service.vendorName || "N/A"}
                          </span>
                        </li>
                        <li className="flex items-start mb-2">
                          <i className="fas fa-info-circle text-indigo-500 mt-1 mr-2"></i>
                          <span className="text-gray-600">
                            <strong>Vendor Email:</strong>{" "}
                            {service.vendorEmail || "N/A"}
                          </span>
                        </li>
                        <li className="flex items-start mb-2">
                          <i className="fas fa-info-circle text-indigo-500 mt-1 mr-2"></i>
                          <span className="text-gray-600">
                            <strong>Is Deleted:</strong>{" "}
                            {service.isDeleted ? "Yes" : "No"}
                          </span>
                        </li>
                      </ul> */}
                    </div>
                  )}

                  {/* Menu Options Tab */}
                  {activeTab === "menu" && (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Menu Options
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Our menu can be customized to suit your preferences and
                        dietary requirements. Below are our standard offerings:
                      </p>

                      <div className="space-y-8">
                        {service.menuOptions.map((category, categoryIndex) => (
                          <div key={categoryIndex}>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                              {category.category}
                            </h3>
                            <div className="space-y-4 mt-4">
                              {category.items.map((item, itemIndex) => (
                                <div
                                  key={itemIndex}
                                  className="flex flex-col sm:flex-row sm:items-start"
                                >
                                  <div className="flex-grow">
                                    <div className="flex items-center">
                                      <h4 className="font-medium text-gray-900">
                                        {item.name}
                                      </h4>
                                      <div className="flex ml-2 space-x-1">
                                        {item.dietary.includes(
                                          "vegetarian"
                                        ) && (
                                          <span
                                            title="Vegetarian"
                                            className="text-green-600"
                                          >
                                            <i className="fas fa-leaf"></i>
                                          </span>
                                        )}
                                        {item.dietary.includes("vegan") && (
                                          <span
                                            title="Vegan"
                                            className="text-green-700"
                                          >
                                            <i className="fas fa-seedling"></i>
                                          </span>
                                        )}
                                        {item.dietary.includes(
                                          "gluten-free"
                                        ) && (
                                          <span
                                            title="Gluten-Free"
                                            className="text-amber-600"
                                          >
                                            <i className="fas fa-wheat-awn-circle-exclamation"></i>
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 bg-gray-50 p-4 rounded-md">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Dietary Information
                        </h3>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center">
                            <i className="fas fa-leaf text-green-600 mr-2"></i>
                            <span className="text-sm text-gray-700">
                              Vegetarian
                            </span>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-seedling text-green-700 mr-2"></i>
                            <span className="text-sm text-gray-700">Vegan</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-wheat-awn-circle-exclamation text-amber-600 mr-2"></i>
                            <span className="text-sm text-gray-700">
                              Gluten-Free
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Please inform us of any allergies or dietary
                          restrictions when booking. We can accommodate most
                          special dietary needs with advance notice.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Pricing Tab */}
                  {activeTab === "pricing" && (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Pricing & Packages
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Choose from our carefully designed packages or contact
                        us for a custom quote:
                      </p>

                      <div className="space-y-6">
                        {service.packages.map((pkg, index) => (
                          <div
                            key={index}
                            className="border rounded-lg overflow-hidden"
                          >
                            <div
                              className={`px-6 py-4 ${
                                index === 0
                                  ? "bg-gray-100"
                                  : index === 1
                                  ? "bg-yellow-50"
                                  : "bg-indigo-50"
                              }`}
                            >
                              <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">
                                  {pkg.name}
                                </h3>
                                <span className="font-bold text-indigo-600">
                                  {pkg.price}
                                </span>
                              </div>
                            </div>
                            <div className="p-6">
                              <ul className="space-y-2">
                                {pkg.includes.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="flex items-start"
                                  >
                                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                    <span className="text-gray-600">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
                        Additional Services
                      </h3>
                      <div className="bg-white border rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Service
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Price
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {service.addOns.map((addon, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  {addon.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                  {addon.price}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
                        Payment Terms
                      </h3>
                      <p className="text-gray-600">{service.payment}</p>
                    </div>
                  )}

                  {/* Reviews Tab */}
                  {activeTab === "reviews" && (
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">
                          Customer Reviews
                        </h2>
                        <div className="mt-2 sm:mt-0 flex items-center">
                          <div className="flex mr-2">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`${
                                  i < Math.floor(service.rating)
                                    ? "fas fa-star text-yellow-400"
                                    : i < service.rating
                                    ? "fas fa-star-half-alt text-yellow-400"
                                    : "far fa-star text-yellow-400"
                                }`}
                              ></i>
                            ))}
                          </div>
                          <span className="text-gray-600">
                            {service.rating} out of 5
                          </span>
                        </div>
                      </div>

                      {/* Rating Breakdown */}
                      <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          Rating Breakdown
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            "Food Quality",
                            "Service",
                            "Value",
                            "Presentation",
                          ].map((criterion, index) => {
                            const criterionKey = criterion
                              .toLowerCase()
                              .split(" ")[0];
                            const avgRating =
                              service.reviews.reduce(
                                (acc, review) =>
                                  acc + (review.criteria[criterionKey] || 0),
                                0
                              ) / service.reviews.length;

                            return (
                              <div key={index} className="flex items-center">
                                <span className="text-sm text-gray-600 w-32">
                                  {criterion}
                                </span>
                                <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-yellow-400 rounded-full"
                                    style={{
                                      width: `${(avgRating / 5) * 100}%`,
                                    }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-600 ml-2">
                                  {avgRating.toFixed(1)}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Review List */}
                      <div className="space-y-6">
                        {service.reviews.map((review, index) => (
                          <div
                            key={index}
                            className="border-b border-gray-200 pb-6 last:border-b-0"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium text-gray-900">
                                {review.name}
                              </h3>
                              <span className="text-sm text-gray-500">
                                {review.date}
                              </span>
                            </div>
                            <div className="flex mb-3">
                              {[...Array(5)].map((_, i) => (
                                <i
                                  key={i}
                                  className={`text-sm ${
                                    i < Math.floor(review.rating)
                                      ? "fas fa-star text-yellow-400"
                                      : i < review.rating
                                      ? "fas fa-star-half-alt text-yellow-400"
                                      : "far fa-star text-yellow-400"
                                  }`}
                                ></i>
                              ))}
                            </div>
                            <p className="text-gray-600">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Availability Tab */}
                  {activeTab === "availability" && (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Check Availability
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Select a date to see available time slots. We recommend
                        booking at least 30 days in advance for weddings and 14
                        days for other events.
                      </p>

                      {/* Calendar */}
                      <div className="bg-white border rounded-lg overflow-hidden mb-6">
                        <div className="bg-indigo-600 px-6 py-4 text-white">
                          <h3 className="text-lg font-semibold">May 2025</h3>
                        </div>
                        <div className="p-4">
                          <div className="grid grid-cols-7 gap-2 mb-2">
                            {[
                              "Sun",
                              "Mon",
                              "Tue",
                              "Wed",
                              "Thu",
                              "Fri",
                              "Sat",
                            ].map((day, index) => (
                              <div
                                key={index}
                                className="text-center text-sm font-medium text-gray-500"
                              >
                                {day}
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-7 gap-2">
                            {calendarDays.map((day, index) => (
                              <div
                                key={index}
                                onClick={() =>
                                  day.available
                                    ? handleDateSelect(day.date)
                                    : null
                                }
                                className={`
                                  h-12 flex items-center justify-center rounded-md text-sm
                                  ${!day.day ? "invisible" : ""}
                                  ${
                                    day.available
                                      ? "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 cursor-pointer"
                                      : day.day
                                      ? "bg-gray-100 text-gray-400"
                                      : ""
                                  }
                                  ${
                                    day.date === selectedDate
                                      ? "ring-2 ring-indigo-500"
                                      : ""
                                  }
                                `}
                              >
                                {day.day}
                                {day.available && (
                                  <span className="w-1 h-1 bg-green-500 rounded-full absolute bottom-2"></span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Time Slots */}
                      {selectedDate && (
                        <div className="mt-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Available Time Slots for {selectedDate}
                          </h3>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                            {service.availability.timeSlots.map(
                              (time, index) => (
                                <button
                                  key={index}
                                  className="bg-white border border-gray-300 rounded-md py-2 px-4 text-center text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer"
                                >
                                  {time}
                                </button>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Booking Information
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <i className="fas fa-info-circle text-yellow-500 mt-1 mr-2"></i>
                            <span className="text-gray-600">
                              Peak season (May-September) requires booking at
                              least 60 days in advance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-info-circle text-yellow-500 mt-1 mr-2"></i>
                            <span className="text-gray-600">
                              Off-peak season (October-April) requires booking
                              at least 30 days in advance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-info-circle text-yellow-500 mt-1 mr-2"></i>
                            <span className="text-gray-600">
                              Weekend dates book quickly and may have premium
                              pricing
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Booking & Contact */}
            <div>
              {/* Booking Card */}
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Book This Service
                </h2>

                {/* <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Event Date
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Select a date"
                        value={selectedDate || ""}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i className="far fa-calendar text-gray-400"></i>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm appearance-none">
                        <option>Select number of guests</option>
                        <option>50-100 guests</option>
                        <option>100-150 guests</option>
                        <option>150-200 guests</option>
                        <option>200-250 guests</option>
                        <option>250-300 guests</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i className="fas fa-chevron-down text-gray-400"></i>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Package
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm appearance-none">
                        <option>Select a package</option>
                        <option>Standard Package - ₹650.43 per event</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i className="fas fa-chevron-down text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                </div> */}

                <button
                  onClick={() => openBookingForm(service)}
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition font-medium !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Book Now
                </button>

                {/* <div className="mt-4 text-center">
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
                    Request Custom Quote
                  </button>
                </div> */}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Have Questions?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <i className="fas fa-phone text-indigo-500 mr-3"></i>
                      <span className="text-gray-600">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-envelope text-indigo-500 mr-3"></i>
                      <span className="text-gray-600">
                        catering@eventpro.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Corporate Lunch Packages",
                image:
                  "https://readdy.ai/api/search-image?query=professional%2520corporate%2520lunch%2520buffet%2520with%2520business-appropriate%2520food%2520presentation%252C%2520elegant%2520serving%2520trays%2520with%2520sandwiches%2520and%2520salads%252C%2520minimal%2520corporate%2520setting%2520with%2520soft%2520lighting%2520and%2520clean%2520background&width=400&height=225&seq=301&orientation=landscape",
                price: "$18-28 per person",
                rating: 4.6,
              },
              {
                name: "Cocktail Reception Service",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%2520cocktail%2520reception%2520with%2520servers%2520holding%2520trays%2520of%2520appetizers%2520and%2520drinks%252C%2520sophisticated%2520venue%2520setting%2520with%2520soft%2520lighting%252C%2520professional%2520catering%2520staff%2520in%2520uniform%252C%2520minimal%2520elegant%2520background&width=400&height=225&seq=302&orientation=landscape",
                price: "$22-32 per person",
                rating: 4.7,
              },
              {
                name: "Dessert & Coffee Bar",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%2520dessert%2520and%2520coffee%2520bar%2520with%2520variety%2520of%2520pastries%2520and%2520sweets%2520on%2520tiered%2520displays%252C%2520professional%2520catering%2520setup%2520with%2520coffee%2520service%252C%2520beautiful%2520presentation%2520with%2520decorative%2520elements%252C%2520soft%2520lighting%2520and%2520minimal%2520elegant%2520background&width=400&height=225&seq=303&orientation=landscape",
                price: "$15-25 per person",
                rating: 4.7,
              },
            ].map((relatedService, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={relatedService.image}
                    alt={relatedService.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {relatedService.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-indigo-600 font-medium">
                        {relatedService.price}
                      </p>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`text-xs ${
                                i < Math.floor(relatedService.rating)
                                  ? "fas fa-star text-yellow-400"
                                  : i < relatedService.rating
                                  ? "fas fa-star-half-alt text-yellow-400"
                                  : "far fa-star text-yellow-400"
                              }`}
                            ></i>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">
                          {relatedService.rating}
                        </span>
                      </div>
                    </div>
                    <a
                      href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/10ba292e-4af4-410f-a494-0aade4ae67d6"
                      data-readdy="true"
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Book Button (Mobile) */}
        {/* <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 lg:hidden">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-bold text-indigo-600">
                ₹{service.price}
              </p>
              <p className="text-sm text-gray-500">per event</p>
            </div>
            <button
              // onClick={() => openBookingForm(service)}
              className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition font-medium !rounded-button whitespace-nowrap cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div> */}
      </main>
      {showBookingForm && (
        <ServiceBookModal
          closeBookingForm={closeBookingForm}
          service={selectedVenue}
        />
      )}
    </div>
  );
};

export default CateringServiceDetailsPage;
