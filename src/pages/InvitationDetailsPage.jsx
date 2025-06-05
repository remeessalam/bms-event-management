import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchServicesDetils } from "../Api/serviceApi";
import { FiArrowUp } from "react-icons/fi";

const InvitationDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(100);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [services, setServices] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const servicesData = await fetchServicesDetils(id);
        setServices(servicesData || null);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices(null);
      }
    };

    fetchServiceData();
  }, [id]);

  // Fallback images if backend provides none
  const fallbackImages = [
    "https://readdy.ai/api/search-image?query=luxury%2520printed%2520wedding%2520invitation%2520suite%2520with%2520envelope%252C%2520RSVP%2520card%252C%2520and%2520details%2520card%2520on%2520textured%2520paper%2520with%2520gold%2520foil%2520accents%252C%2520arranged%2520on%2520a%2520white%2520marble%2520surface%2520with%2520minimal%2520floral%2520decoration%2520and%2520soft%2520natural%2520lighting&width=800&height=500&seq=102&orientation=landscape",
    "https://readdy.ai/api/search-image?query=elegant%2520wedding%2520invitation%2520card%2520closeup%2520showing%2520gold%2520foil%2520details%2520and%2520floral%2520design%2520on%2520cream%2520textured%2520paper%252C%2520professional%2520invitation%2520design%2520with%2520sophisticated%2520typography%252C%2520arranged%2520on%2520a%2520white%2520surface%2520with%2520soft%2520lighting&width=800&height=500&seq=301&orientation=landscape",
    "https://readdy.ai/api/search-image?query=wedding%2520invitation%2520suite%2520with%2520matching%2520envelope%2520and%2520RSVP%2520card%2520with%2520wax%2520seal%2520and%2520ribbon%2520details%252C%2520luxury%2520stationery%2520set%2520with%2520calligraphy%2520on%2520handmade%2520paper%252C%2520arranged%2520on%2520a%2520white%2520marble%2520surface%2520with%2520soft%2520lighting&width=800&height=500&seq=302&orientation=landscape",
    "https://readdy.ai/api/search-image?query=wedding%2520invitation%2520suite%2520flat%2520lay%2520with%2520all%2520components%2520displayed%2520including%2520main%2520invitation%252C%2520RSVP%2520card%252C%2520details%2520card%252C%2520envelope%2520and%2520decorative%2520elements%252C%2520arranged%2520on%2520a%2520white%2520surface%2520with%2520soft%2520natural%2520lighting&width=800&height=500&seq=303&orientation=landscape",
  ];

  const images =
    services?.images?.length > 0 ? services.images : fallbackImages;

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 50) {
      setQuantity(newQuantity);
    }
  };

  const faqs = [
    {
      question: "What is included in this service?",
      answer:
        services?.features?.join(", ") ||
        "Details about included features are available upon request.",
    },
    {
      question: "How long does production and delivery take?",
      answer:
        "Standard production time is 2-3 weeks after final design approval. Rush options are available for an additional fee. Shipping typically takes 3-5 business days within the continental US. International shipping times vary by location.",
    },
    {
      question: "Can I request custom design changes?",
      answer:
        "Absolutely! We offer unlimited design revisions until you're completely satisfied. Our designers will work with you to customize colors, typography, layouts, and illustrations to match your event theme perfectly.",
    },
    {
      question: "What paper and printing options are available?",
      answer:
        "We offer premium 120lb smooth cardstock, 100% cotton paper, handmade paper, and specialty papers like vellum or shimmer stock. Printing options include digital printing, letterpress, foil stamping (gold, rose gold, silver, copper), embossing, and debossing.",
    },
    {
      question: "Do you offer samples before ordering?",
      answer:
        "Yes! We offer sample packs for $25 which includes paper swatches, printing technique examples, and a sample invitation suite. This amount is credited toward your final order when you purchase.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to={"/"}
                  data-readdy="true"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 cursor-pointer"
                >
                  <i className="fas fa-home mr-2"></i>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2 text-sm"></i>
                  <Link
                    to={"/invitation"}
                    data-readdy="true"
                    className="text-sm font-medium text-gray-700 hover:text-indigo-600 cursor-pointer"
                  >
                    Categories
                  </Link>
                </div>
              </li>
              {/* <li>
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2 text-sm"></i>
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/6d446a38-13eb-44da-9ba8-82db1d87a763"
                    data-readdy="true"
                    className="text-sm font-medium text-gray-700 hover:text-indigo-600 cursor-pointer"
                  >
                    {services?.category || "Invitations"}
                  </a>
                </div>
              </li> */}
              <li aria-current="page">
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2 text-sm"></i>
                  <span className="text-sm font-medium text-indigo-600">
                    {services?.title || "Service Details"}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="lg:flex">
            <div className="lg:w-3/5 lg:pr-8">
              <div className="relative rounded-lg overflow-hidden bg-gray-100 mb-4 h-[400px]">
                <img
                  src={images[selectedImage]}
                  alt={services?.title || "Service Image"}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                    {services?.category || "Service"}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`h-24 rounded-md overflow-hidden cursor-pointer ${
                      selectedImage === index
                        ? "ring-2 ring-indigo-500"
                        : "opacity-70"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${services?.title || "Service"} view ${index + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-2/5 mt-8 lg:mt-0">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {services?.title || "Service Title"}
                  </h1>
                  <div className="flex items-center mt-2">
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
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-share-alt"></i>
                  </button>
                  <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <div className="text-3xl font-bold text-indigo-600">
                    {services?.currency} {services?.price.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {services?.pricingModel === "PER_EVENT"
                      ? "per event"
                      : "per 100 sets"}
                  </div>
                </div>
                <p className="mt-1 text-sm text-green-600">
                  <i className="fas fa-check-circle mr-1"></i>
                  {services?.status === "approved"
                    ? "In stock - Ready to ship in 2-3 weeks"
                    : "Check availability"}
                </p>
              </div>

              {/* <div className="mt-6 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900">Quantity</h3>
                <div className="mt-2 flex items-center">
                  <button
                    onClick={() => handleQuantityChange(quantity - 50)}
                    className="p-2 border border-gray-300 rounded-l-md bg-gray-50 text-gray-600 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(parseInt(e.target.value) || 50)
                    }
                    min="50"
                    step="50"
                    className="w-20 border-y border-gray-300 py-2 text-center text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-none"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 50)}
                    className="p-2 border border-gray-300 rounded-r-md bg-gray-50 text-gray-600 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                  <span className="ml-3 text-sm text-gray-500">
                    sets (min. 50)
                  </span>
                </div>
              </div> */}

              {/* <div className="mt-6 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Finishing Options
                </h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input
                      id="foil"
                      name="finishing"
                      type="radio"
                      defaultChecked
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor="foil"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Gold Foil Stamping (+{services?.currency} 50)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="letterpress"
                      name="finishing"
                      type="radio"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor="letterpress"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Letterpress (+{services?.currency} 75)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="embossing"
                      name="finishing"
                      type="radio"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor="embossing"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Embossing (+{services?.currency} 60)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="standard"
                      name="finishing"
                      type="radio"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label
                      htmlFor="standard"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Standard Digital Printing (No extra cost)
                    </label>
                  </div>
                </div>
              </div> */}

              <div className="mt-8 space-y-3">
                <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition flex items-center justify-center font-medium !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-shopping-cart mr-2"></i>
                  Book This Service
                </button>
                <button className="w-full bg-white text-indigo-600 py-3 px-6 rounded-md border border-indigo-600 hover:bg-indigo-50 transition flex items-center justify-center font-medium !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-envelope mr-2"></i>
                  Request Custom Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-0 z-10 bg-white shadow-md border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition !rounded-button whitespace-nowrap cursor-pointer ${
                    activeTab === "description"
                      ? "text-indigo-700 border-b-2 border-indigo-700"
                      : "text-gray-600 hover:text-indigo-700"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("specifications")}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition !rounded-button whitespace-nowrap cursor-pointer ${
                    activeTab === "specifications"
                      ? "text-indigo-700 border-b-2 border-indigo-700"
                      : "text-gray-600 hover:text-indigo-700"
                  }`}
                >
                  Specifications
                </button>
                {/* <button
                  onClick={() => setActiveTab("samples")}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition !rounded-button whitespace-nowrap cursor-pointer ${
                    activeTab === "samples"
                      ? "text-indigo-700 border-b-2 border-indigo-700"
                      : "text-gray-600 hover:text-indigo-700"
                  }`}
                >
                  Sample Designs
                </button> */}
                {/* <button
                  onClick={() => setActiveTab("reviews")}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition !rounded-button whitespace-nowrap cursor-pointer ${
                    activeTab === "reviews"
                      ? "text-indigo-700 border-b-2 border-indigo-700"
                      : "text-gray-600 hover:text-indigo-700"
                  }`}
                >
                  Reviews
                </button> */}
                {/* <button
                  onClick={() => setActiveTab("faq")}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition !rounded-button whitespace-nowrap cursor-pointer ${
                    activeTab === "faq"
                      ? "text-indigo-700 border-b-2 border-indigo-700"
                      : "text-gray-600 hover:text-indigo-700"
                  }`}
                >
                  FAQ
                </button> */}
              </div>
              {/* <div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-download mr-2"></i>
                  Download Sample
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === "description" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {services?.title || "Service Title"}
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  {services?.description || "No description available."}
                </p>
                {services?.features?.length > 0 && (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                      Features
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      {services.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
                {services?.terms && (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                      Terms and Conditions
                    </h3>
                    <p className="text-gray-700">{services.terms}</p>
                  </>
                )}
              </div>
            </div>
          )}

          {activeTab === "specifications" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Service Specifications
              </h2>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-900 w-1/3">
                        Service Category
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {services?.category || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-900">
                        Price
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {services?.currency} {services?.price.toFixed(2)}{" "}
                        {services?.pricingModel === "PER_EVENT"
                          ? "per event"
                          : "per unit"}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-900">
                        Status
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {services?.status || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-900">
                        Vendor
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {services?.vendorName || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-900">
                        Last Updated
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {services?.updatedAt
                          ? new Date(services.updatedAt).toLocaleDateString()
                          : "N/A"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "samples" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Sample Designs
                </h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition !rounded-button whitespace-nowrap cursor-pointer">
                    All Styles
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-700 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    Wedding
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-700 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    Corporate
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-700 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    Birthday
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=elegant%2520wedding%2520invitation%2520card%2520with%2520gold%2520foil%2520details%2520and%2520floral%2520design%2520on%2520cream%2520textured%2520paper%252C%2520professional%2520invitation%2520design%2520with%2520sophisticated%2520typography%252C%2520arranged%2520on%2520a%2520white%2520surface%2520with%2520soft%2520lighting&width=400&height=400&seq=201&orientation=squarish"
                      alt="Elegant Gold Foil Wedding Invitation"
                      className="w-full h-full object-cover object-top hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Elegant Gold Foil
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Wedding Collection
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-indigo-600 font-medium">
                        {services?.currency} 300 per 100
                      </span>
                      <button className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-md hover:bg-indigo-200 transition !rounded-button whitespace-nowrap cursor-pointer">
                        <i className="fas fa-download mr-1"></i> Sample
                      </button>
                    </div>
                  </div>
                </div>
                {/* Additional sample designs remain static as no dynamic data provided */}
              </div>

              <div className="text-center mt-8">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer">
                  Request Custom Design
                </button>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Customer Reviews
                  </h2>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 text-3xl">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className="ml-2 text-2xl font-bold text-gray-900">
                        5.0
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">Based on 42 reviews</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 w-24">
                          5 stars
                        </span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                          <div
                            className="h-2 bg-yellow-400 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">90%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 w-24">
                          4 stars
                        </span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                          <div
                            className="h-2 bg-yellow-400 rounded-full"
                            style={{ width: "7%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">7%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 w-24">
                          3 stars
                        </span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                          <div
                            className="h-2 bg-yellow-400 rounded-full"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">3%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 w-24">
                          2 stars
                        </span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                          <div
                            className="h-2 bg-yellow-400 rounded-full"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">0%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 w-24">
                          1 star
                        </span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                          <div
                            className="h-2 bg-yellow-400 rounded-full"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">0%</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowReviewForm(!showReviewForm)}
                      className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Write a Review
                    </button>
                  </div>
                </div>

                <div className="md:w-2/3 md:pl-8">
                  {showReviewForm ? (
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Write Your Review
                      </h3>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Rating
                        </label>
                        <div className="flex text-gray-400 text-2xl">
                          <i className="fas fa-star cursor-pointer hover:text-yellow-400"></i>
                          <i className="fas fa-star cursor-pointer hover:text-yellow-400"></i>
                          <i className="fas fa-star cursor-pointer hover:text-yellow-400"></i>
                          <i className="fas fa-star cursor-pointer hover:text-yellow-400"></i>
                          <i className="fas fa-star cursor-pointer hover:text-yellow-400"></i>
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="reviewTitle"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Review Title
                        </label>
                        <input
                          type="text"
                          id="reviewTitle"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Summarize your experience"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="reviewContent"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Review
                        </label>
                        <textarea
                          id="reviewContent"
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Tell others about your experience with this product"
                        ></textarea>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => setShowReviewForm(false)}
                          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer">
                          Submit Review
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                              <span className="text-indigo-800 font-medium">
                                JM
                              </span>
                            </div>
                          </div>
                          <div className="ml-4 flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900">
                                  Jessica Miller
                                </h4>
                                <div className="flex items-center mt-1">
                                  <div className="flex text-yellow-400">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </div>
                                  <span className="ml-2 text-sm text-gray-500">
                                    May 2, 2025
                                  </span>
                                </div>
                              </div>
                              <div>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  <i className="fas fa-check-circle mr-1"></i>{" "}
                                  Verified Purchase
                                </span>
                              </div>
                            </div>
                            <h5 className="mt-3 text-md font-medium text-gray-900">
                              Absolutely stunning invitations!
                            </h5>
                            <p className="mt-2 text-gray-600">
                              The invitations exceeded all my expectations! The
                              quality of the paper and printing was outstanding,
                              and the details added such an elegant touch. The
                              customer service was also exceptional.
                            </p>
                            <div className="mt-4 flex items-center text-sm">
                              <button className="text-gray-500 hover:text-gray-700 flex items-center !rounded-button whitespace-nowrap cursor-pointer">
                                <i className="far fa-thumbs-up mr-1"></i>{" "}
                                Helpful (12)
                              </button>
                              <span className="mx-2 text-gray-300">|</span>
                              <button className="text-gray-500 hover:text-gray-700 !rounded-button whitespace-nowrap cursor-pointer">
                                Report
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {!showReviewForm && (
                    <div className="mt-6 text-center">
                      <button className="bg-white text-indigo-600 border border-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                        Load More Reviews
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "faq" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 mb-8">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center p-5 text-left !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <i
                        className={`fas fa-chevron-down text-gray-500 transition-transform ${
                          expandedFaq === index ? "rotate-180" : ""
                        }`}
                      ></i>
                    </button>
                    {expandedFaq === index && (
                      <div className="px-5 pb-5">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">
                  Still have questions?
                </h3>
                <p className="text-indigo-700 mb-4">
                  Our invitation specialists are here to help with any questions
                  about our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-comment-alt mr-2"></i>
                    Chat with a Specialist
                  </button>
                  <button className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-envelope mr-2"></i>
                    Email Support
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-50 border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%2520digital%2520invitation%2520design%2520with%2520modern%2520typography%2520and%2520floral%2520elements%2520on%2520a%2520tablet%2520screen%252C%2520professional%2520e-invitation%2520with%2520RSVP%2520functionality%252C%2520displayed%2520on%2520a%2520clean%2520white%2520desk%2520with%2520minimal%2520decoration%2520and%2520soft%2520natural%2520lighting&width=400&height=250&seq=101&orientation=landscape')`,
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
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
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
                        <span className="ml-2 text-xs text-gray-600">4.5</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-md font-bold text-indigo-600">
                        $75 - $150
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <a
                      href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/6d446a38-13eb-44da-9ba8-82db1d87a763"
                      data-readdy="true"
                      className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                    >
                      View Details
                    </a>
                    <button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold">
                  Ready to create your perfect invitations?
                </h2>
                <p className="mt-3 text-indigo-200">
                  Book now and receive a complimentary consultation with our
                  design specialists to create invitations that perfectly match
                  your event.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/3 md:flex md:justify-end space-y-3 md:space-y-0 md:space-x-3">
                <button className="w-full md:w-auto bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                  Book This Service
                </button>
                <button className="w-full md:w-auto bg-indigo-600 border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-800 transition !rounded-button whitespace-nowrap cursor-pointer">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer"
        >
          <FiArrowUp />
        </button>
      </div>
    </div>
  );
};

export default InvitationDetailsPage;
