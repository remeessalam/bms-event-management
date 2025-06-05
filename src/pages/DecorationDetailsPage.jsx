import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchServicesDetils } from "../Api/serviceApi";

const DecorationDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [service, setService] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const serviceData = await fetchServicesDetils(id);
        setService(serviceData || null);
      } catch (error) {
        console.error("Error fetching service:", error);
        setService(null);
      }
    };

    fetchServiceData();
  }, [id]);

  // Dynamic data mappings
  const testimonials = [
    {
      name: "Sarah Johnson",
      event: "Wedding",
      date: "March 15, 2025",
      rating: 5,
      image:
        "https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520a%2520young%2520woman%2520with%2520blonde%2520hair%2520and%2520natural%2520makeup%2520smiling%2520at%2520camera%2520with%2520soft%2520lighting%2520and%2520neutral%2520background%2520high%2520quality%2520professional%2520headshot&width=80&height=80&seq=201&orientation=squarish",
      review:
        "The Wedding Elegance Package exceeded all our expectations. The attention to detail was impeccable, and our guests couldn't stop complimenting the beautiful decorations. Worth every penny!",
    },
    // ... other testimonials
  ];

  const navigateTestimonial = (direction) => {
    if (direction === "prev") {
      setCurrentTestimonialIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    } else {
      setCurrentTestimonialIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }
  };

  const packageInclusions = [
    {
      icon: "fas fa-flower",
      title: "Premium Floral Arrangements",
      description: "Exquisite floral designs using fresh, seasonal flowers",
    },
    // ... other inclusions
  ];

  const faqs = [
    {
      question: "How far in advance should I book my decoration services?",
      answer:
        "We recommend booking at least 3-6 months in advance for weddings and large events, and 1-2 months for smaller events. Popular dates can fill up quickly, especially during wedding season.",
    },
    // ... other FAQs
  ];

  const relatedPackages = [
    {
      title: "Rustic Charm Package",
      image:
        "https://readdy.ai/api/search-image?query=rustic%2520wedding%2520decoration%2520with%2520wooden%2520elements%2520burlap%2520accents%2520mason%2520jars%2520and%2520wildflowers%2520on%2520simple%2520neutral%2520background%2520professional%2520event%2520styling%2520high%2520quality&width=300&height=200&seq=204&orientation=landscape",
      price: "$1,200 - $2,800",
      rating: 4.8,
      reviews: 36,
    },
    // ... other packages
  ];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  // Currency formatting
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: service.currency || "INR",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main>
        {/* Back Button and Title */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center">
              <a
                href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/cc6836e2-95a3-4503-b7be-b568897fed6e"
                data-readdy="true"
                className="text-gray-600 hover:text-indigo-600 mr-4 cursor-pointer"
              >
                <i className="fas fa-arrow-left text-lg"></i>
              </a>
              <h1 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative">
          <div
            className="h-96 bg-cover bg-center"
            style={{
              backgroundImage:
                service.images && service.images.length > 0
                  ? `url('${service.images[0]}')`
                  : `url('https://readdy.ai/api/search-image?query=elegant%2520wedding%2520decoration%2520with%2520white%2520and%2520blush%2520floral%2520arrangements%252C%2520crystal%2520chandeliers%252C%2520draped%2520fabrics%252C%2520sophisticated%2520table%2520settings%252C%2520romantic%2520lighting%252C%2520and%2520premium%2520decor%2520elements%2520in%2520a%2520luxurious%2520venue%2520with%2520soft%2520ambient%2520lighting&width=1440&height=500&seq=207&orientation=landscape')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                  <p className="text-xl mb-6">
                    {service.description ||
                      "Transform your wedding venue into a breathtaking space with our premium decoration services designed to create an elegant and romantic atmosphere."}
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <span className="ml-2 text-white">5.0 (42 reviews)</span>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold">
                      {formatCurrency(service.price)}
                    </span>
                  </div>
                  <button
                    onClick={() => setShowQuoteForm(true)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              className="flex space-x-8 overflow-x-auto scrollbar-hide"
              aria-label="Tabs"
            >
              {["overview", "gallery", "terms"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer ${
                    activeTab === tab
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Package Overview
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-4">
                      {service.description ||
                        "Our Wedding Elegance Package is designed to create a sophisticated and romantic atmosphere for your special day."}
                    </p>

                    {service.features && service.features.length > 0 && (
                      <>
                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                          Key Features
                        </h3>
                        <ul className="list-disc pl-5 text-gray-600 mb-6">
                          {service.features.map((feature, index) => (
                            <li key={index} className="mb-2">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Service Details
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <i className="fas fa-tag text-indigo-600"></i>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-gray-900">
                            Category
                          </h4>
                          <p className="text-sm text-gray-500">
                            {service.category}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <i className="fas fa-dollar-sign text-indigo-600"></i>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-gray-900">
                            Pricing
                          </h4>
                          <p className="text-sm text-gray-500">
                            {formatCurrency(service.price)} (
                            {service.pricingModel})
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <i className="fas fa-calendar-alt text-indigo-600"></i>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-gray-900">
                            Created At
                          </h4>
                          <p className="text-sm text-gray-500">
                            {new Date(service.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <i className="fas fa-check-circle text-indigo-600"></i>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-gray-900">
                            Status
                          </h4>
                          <p className="text-sm text-gray-500 capitalize">
                            {service.status}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <button
                        onClick={() => setShowQuoteForm(true)}
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Package Inclusions */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  What's Included
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {packageInclusions.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                          <i className={`${item.icon} text-indigo-600`}></i>
                        </div>
                        <h3 className="ml-3 text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === "gallery" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Gallery</h2>

              {service.images && service.images.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-sm"
                      >
                        <img
                          src={img}
                          alt={`Gallery image ${idx + 1}`}
                          className="w-full h-full object-cover object-top"
                        />
                        {/* <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                          <button className="bg-white text-gray-900 p-3 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                            <i className="fas fa-search-plus">sfdg</i>
                          </button>
                        </div> */}
                      </div>
                    ))}
                  </div>

                  {/* <div className="mt-8 text-center">
                    <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                      Load More Images
                    </button>
                  </div> */}
                </>
              ) : (
                <div className="bg-gray-50 rounded-lg p-12 text-center">
                  <i className="fas fa-image text-gray-300 text-5xl mb-4"></i>
                  <p className="text-gray-500">
                    No images available for this service
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Terms Tab */}
          {activeTab === "terms" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Terms & Conditions
              </h2>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="prose max-w-none">
                  {service.terms ? (
                    <p className="text-gray-600 whitespace-pre-line">
                      {service.terms}
                    </p>
                  ) : (
                    <p className="text-gray-600">
                      No specific terms and conditions provided for this
                      service. Please contact us for more information.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Testimonials Section */}
        {/* <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Our Clients Say
            </h2>

            <div className="relative bg-white rounded-lg shadow-sm p-6 mb-12 max-w-4xl mx-auto">
              <div className="relative">
                <div className="flex items-start">
                  <img
                    src={testimonials[currentTestimonialIndex].image}
                    alt={testimonials[currentTestimonialIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonials[currentTestimonialIndex].name}
                    </h3>
                    <div className="flex items-center mt-1 mb-2">
                      <div className="flex text-yellow-400">
                        {[
                          ...Array(
                            testimonials[currentTestimonialIndex].rating
                          ),
                        ].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {testimonials[currentTestimonialIndex].event} •{" "}
                        {testimonials[currentTestimonialIndex].date}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonialIndex].review}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={() => navigateTestimonial("prev")}
                  className="bg-white text-gray-800 w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={() => navigateTestimonial("next")}
                  className="bg-white text-gray-800 w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div className="flex justify-center mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`w-2 h-2 rounded-full mx-1 ${
                      currentTestimonialIndex === index
                        ? "bg-indigo-600"
                        : "bg-gray-300"
                    } !rounded-button whitespace-nowrap cursor-pointer`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* Related Packages */}
        {/* <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${pkg.image}')`,
                    }}
                  ></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {pkg.title}
                    </h3>
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i
                          className={
                            pkg.rating === 5
                              ? "fas fa-star"
                              : "fas fa-star-half-alt"
                          }
                        ></i>
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {pkg.rating} ({pkg.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">
                        {pkg.price}
                      </span>
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
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
                Request Quote for {service.title}
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
                      Service
                    </label>
                    <input
                      type="text"
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100"
                      value={service.title}
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price
                    </label>
                    <input
                      type="text"
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100"
                      value={formatCurrency(service.price)}
                      readOnly
                    />
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
                      Venue Location
                    </label>
                    <input
                      type="text"
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Enter venue name and address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Estimated Guest Count
                    </label>
                    <input
                      type="number"
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Enter number of guests"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Describe your decoration needs..."
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
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
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
                      required
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

export default DecorationDetailsPage;
