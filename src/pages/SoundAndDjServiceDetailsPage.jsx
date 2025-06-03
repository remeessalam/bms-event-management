// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import { useEffect, useState } from "react";
import { fetchServicesDetils } from "../Api/serviceApi";
import { useParams } from "react-router-dom";

const SoundAndDjServiceDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("standard");
  const [specialRequirements, setSpecialRequirements] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: "",
    agreeToPolicy: false,
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handlePackageChange = (packageType) => {
    setSelectedPackage(packageType);
  };

  const handleRequirementsChange = (e) => {
    setSpecialRequirements(e.target.value);
  };

  const handleFormChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? e.target.checked : value,
    });
  };

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Inquiry submitted successfully!");
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % serviceImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + serviceImages.length) % serviceImages.length
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleFullGallery = () => {
    setShowFullGallery(!showFullGallery);
  };

  // Service data
  const serviceImages = [
    {
      url: "https://readdy.ai/api/search-image?query=professional%20DJ%20setup%20with%20turntables%20mixer%20and%20headphones%20in%20a%20dark%20venue%20with%20colorful%20stage%20lights%20modern%20equipment%20for%20nightclub%20or%20wedding%20events%20high-end%20professional%20audio%20setup%20with%20dynamic%20lighting%20and%20elegant%20atmosphere%20perfect%20for%20entertainment%20events&width=1200&height=800&seq=201&orientation=landscape",
      alt: "Professional DJ setup with turntables",
    },
    {
      url: "https://readdy.ai/api/search-image?query=professional%20DJ%20performing%20at%20an%20elegant%20wedding%20reception%20with%20soft%20lighting%20and%20well-dressed%20guests%20dancing%20on%20dance%20floor%20high-end%20audio%20equipment%20visible%20with%20same%20consistent%20background%20and%20atmosphere%20as%20main%20image&width=1200&height=800&seq=202&orientation=landscape",
      alt: "DJ performing at wedding reception",
    },
    {
      url: "https://readdy.ai/api/search-image?query=close%20up%20of%20professional%20DJ%20equipment%20with%20mixer%20controller%20and%20headphones%20in%20nightclub%20setting%20with%20colorful%20lights%20and%20same%20atmosphere%20as%20previous%20images%20high%20quality%20equipment%20detail%20shot&width=1200&height=800&seq=203&orientation=landscape",
      alt: "Close-up of DJ equipment",
    },
    {
      url: "https://readdy.ai/api/search-image?query=corporate%20event%20with%20professional%20DJ%20setup%20elegant%20venue%20with%20business%20professionals%20enjoying%20music%20sophisticated%20lighting%20and%20audio%20equipment%20visible%20same%20consistent%20background%20style%20as%20previous%20images&width=1200&height=800&seq=204&orientation=landscape",
      alt: "Corporate event with DJ setup",
    },
    {
      url: "https://readdy.ai/api/search-image?query=DJ%20booth%20setup%20with%20complete%20audio%20visual%20equipment%20including%20speakers%20lighting%20rig%20and%20controller%20at%20night%20event%20venue%20same%20consistent%20background%20style%20and%20atmosphere%20as%20previous%20images&width=1200&height=800&seq=205&orientation=landscape",
      alt: "Complete DJ booth setup",
    },
  ];

  const serviceFeatures = [
    { icon: "fa-music", text: "Professional DJ with 5+ years experience" },
    { icon: "fa-volume-up", text: "High-quality sound equipment" },
    { icon: "fa-list", text: "Custom playlist creation" },
    { icon: "fa-lightbulb", text: "Professional lighting setup" },
    { icon: "fa-microphone", text: "MC services available" },
    { icon: "fa-clock", text: "Flexible hours (up to 6 hours)" },
    { icon: "fa-truck", text: "Equipment delivery and setup" },
    { icon: "fa-headset", text: "Technical support throughout event" },
  ];

  const pricingPackages = [
    {
      id: "basic",
      name: "Basic",
      price: 350,
      features: [
        "4 hours of DJ service",
        "Standard sound system",
        "Basic lighting",
        "Pre-event consultation",
        "Setup and teardown",
      ],
    },
    {
      id: "standard",
      name: "Standard",
      price: 450,
      features: [
        "6 hours of DJ service",
        "Premium sound system",
        "Enhanced lighting package",
        "Custom playlist creation",
        "MC services",
        "Setup and teardown",
        "Backup equipment",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: 650,
      features: [
        "8 hours of DJ service",
        "Top-tier sound system",
        "Complete lighting production",
        "Custom playlist creation",
        "Professional MC",
        "Early setup option",
        "Backup equipment",
        "Dance floor lighting effects",
        "Photo booth integration",
      ],
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Michael Johnson",
      rating: 5,
      date: "April 15, 2025",
      review:
        "We hired the Professional DJ Services for our wedding and they exceeded all expectations. The DJ read the room perfectly and kept everyone dancing all night. The lighting setup transformed our venue!",
    },
    {
      id: 2,
      name: "Sarah Williams",
      rating: 5,
      date: "March 22, 2025",
      review:
        "Amazing service from start to finish. Our corporate event was a huge success thanks to the professional DJ who understood exactly what we needed. The sound quality was exceptional.",
    },
    {
      id: 3,
      name: "David Chen",
      rating: 4,
      date: "February 8, 2025",
      review:
        "Great DJ service for our birthday party. Very professional, arrived on time and set up quickly. Music selection was good and they were responsive to requests. Would recommend.",
    },
  ];

  const relatedServices = [
    {
      id: 1,
      title: "Sound System Rental",
      image:
        "https://readdy.ai/api/search-image?query=professional%20sound%20system%20setup%20with%20speakers%20amplifiers%20and%20audio%20mixer%20for%20event%20venue%20high-end%20audio%20equipment%20arranged%20for%20concert%20or%20corporate%20event%20clean%20minimal%20background%20with%20soft%20lighting%20consistent%20with%20main%20image%20style&width=400&height=300&seq=301&orientation=landscape",
      rating: 4.5,
      reviews: 32,
      price: 350,
      unit: "day",
    },
    {
      id: 2,
      title: "Live Music Equipment",
      image:
        "https://readdy.ai/api/search-image?query=professional%20live%20music%20equipment%20setup%20with%20instruments%20microphones%20amplifiers%20and%20stage%20monitors%20for%20band%20performance%20high-end%20musical%20gear%20arranged%20for%20concert%20or%20event%20clean%20minimal%20background%20with%20soft%20lighting%20consistent%20with%20main%20image%20style&width=400&height=300&seq=302&orientation=landscape",
      rating: 4.2,
      reviews: 15,
      price: 550,
      unit: "event",
    },
    {
      id: 3,
      title: "Karaoke System Rental",
      image:
        "https://readdy.ai/api/search-image?query=professional%20karaoke%20system%20with%20microphones%20speakers%20and%20screen%20display%20setup%20for%20party%20or%20event%20entertainment%20audio%20visual%20equipment%20with%20same%20consistent%20background%20style%20as%20other%20images&width=400&height=300&seq=303&orientation=landscape",
      rating: 4.3,
      reviews: 24,
      price: 250,
      unit: "event",
    },
  ];

  // Calculate price based on selected package
  const getSelectedPackagePrice = () => {
    const pkg = pricingPackages.find((p) => p.id === selectedPackage);
    return pkg ? pkg.price : 0;
  };
  const { id } = useParams();
  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const servicesData = await fetchServicesDetils(id);
        setServices(servicesData || []);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
      } finally {
        // setLoading(false);
      }
    };

    fetchServiceData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
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
                <li>
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 text-xs mx-2"></i>
                    <a
                      href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/cfadd2f5-f21f-4247-9bb4-8b0ddd9decd0"
                      data-readdy="true"
                      className="text-gray-500 hover:text-indigo-600 text-sm cursor-pointer"
                    >
                      Sound & DJ
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 text-xs mx-2"></i>
                    <span className="text-indigo-600 text-sm font-medium">
                      Professional DJ Services
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
                <button
                  onClick={toggleFullGallery}
                  className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-md shadow-md text-gray-800 hover:text-indigo-600 transition flex items-center !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-expand-alt mr-1"></i>
                  <span className="text-sm">View Gallery</span>
                </button>
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
                    Professional DJ Services
                  </h1>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                    Available
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
                  <span className="text-3xl font-bold">$450</span>
                  <span className="text-gray-600 ml-2">/ event</span>
                </div>

                {/* Quick Description */}
                <p className="mt-4 text-gray-700">
                  Experienced DJs for weddings, corporate events, and parties
                  with custom playlists and professional equipment. Our team of
                  professional DJs brings over 5 years of experience to make
                  your event unforgettable.
                </p>

                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
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
                </div>

                {/* Back to Services */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a
                    href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/cfadd2f5-f21f-4247-9bb4-8b0ddd9decd0"
                    data-readdy="true"
                    className="text-indigo-600 hover:text-indigo-800 flex items-center cursor-pointer"
                  >
                    <i className="fas fa-arrow-left mr-2"></i>
                    Back to all Sound & DJ services
                  </a>
                </div>
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
                <button
                  onClick={() => handleTabChange("pricing")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "pricing"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button cursor-pointer`}
                >
                  <i className="fas fa-tag mr-2"></i>
                  Pricing
                </button>
                <button
                  onClick={() => handleTabChange("availability")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "availability"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button cursor-pointer`}
                >
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Availability
                </button>
                <button
                  onClick={() => handleTabChange("reviews")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "reviews"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button cursor-pointer`}
                >
                  <i className="fas fa-star mr-2"></i>
                  Reviews
                </button>
                <button
                  onClick={() => handleTabChange("vendor")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "vendor"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button cursor-pointer`}
                >
                  <i className="fas fa-user mr-2"></i>
                  Vendor
                </button>
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
                      Our Professional DJ Services provide the perfect musical
                      atmosphere for any event. With over 5 years of experience
                      in the industry, our DJs specialize in reading the room
                      and creating the perfect soundtrack for your special
                      occasion.
                    </p>
                    <p className="mt-4">
                      Whether you're planning a wedding, corporate event,
                      birthday party, or any other celebration, our team will
                      work closely with you to understand your vision and
                      musical preferences. We pride ourselves on our ability to
                      keep the dance floor packed and your guests entertained
                      throughout the event.
                    </p>
                    <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">
                      What's Included:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Professional DJ with extensive experience and music
                        knowledge
                      </li>
                      <li>High-quality sound system with backup equipment</li>
                      <li>
                        Custom playlist creation based on your preferences
                      </li>
                      <li>
                        Professional lighting setup to enhance the atmosphere
                      </li>
                      <li>
                        MC services to make announcements and coordinate
                        activities
                      </li>
                      <li>
                        Pre-event consultation to plan your perfect soundtrack
                      </li>
                      <li>Setup and teardown included</li>
                      <li>Technical support throughout the event</li>
                    </ul>
                    <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">
                      Our Approach:
                    </h3>
                    <p>
                      We believe that music sets the tone for any successful
                      event. Our DJs are not just equipment operators – they're
                      experienced entertainers who understand how to read the
                      crowd and adjust the music accordingly. We take pride in
                      our professionalism, reliability, and attention to detail.
                    </p>
                    <p className="mt-4">
                      From the initial consultation to the final song of the
                      night, we're committed to making your event memorable with
                      the perfect soundtrack. Our goal is to exceed your
                      expectations and create an unforgettable experience for
                      you and your guests.
                    </p>
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
                          <p className="mt-1 text-gray-600">
                            {index === 0 &&
                              "Our DJs bring years of professional experience to your event, ensuring smooth execution and expert music selection."}
                            {index === 1 &&
                              "Premium speakers, mixers, and audio equipment to deliver crystal-clear sound at any venue size."}
                            {index === 2 &&
                              "We'll work with you to create the perfect playlist that matches your event style and preferences."}
                            {index === 3 &&
                              "Dynamic lighting options to enhance your venue and create the perfect atmosphere."}
                            {index === 4 &&
                              "Professional MC to make announcements, coordinate activities, and keep your event flowing smoothly."}
                            {index === 5 &&
                              "Standard package includes 6 hours of service with options to extend as needed."}
                            {index === 6 &&
                              "We handle all equipment logistics, arriving early to ensure everything is set up perfectly."}
                            {index === 7 &&
                              "Our team remains on-site to handle any technical needs throughout your entire event."}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 bg-indigo-50 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-indigo-900 mb-3">
                      Equipment Specifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-indigo-800 mb-2">
                          Sound System
                        </h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Professional-grade powered speakers</li>
                          <li>• Subwoofers for enhanced bass</li>
                          <li>• Digital mixer with effects</li>
                          <li>• Wireless microphones</li>
                          <li>• Backup equipment for reliability</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-indigo-800 mb-2">
                          Lighting Options
                        </h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• LED par cans for ambient lighting</li>
                          <li>• Moving head lights for dynamic effects</li>
                          <li>• Dance floor lighting patterns</li>
                          <li>• Uplighting for venue enhancement</li>
                          <li>• DMX-controlled lighting system</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Pricing Tab */}
              {activeTab === "pricing" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Pricing Packages
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pricingPackages.map((pkg) => (
                      <div
                        key={pkg.id}
                        className={`border rounded-lg overflow-hidden ${
                          pkg.id === "standard"
                            ? "border-indigo-500 shadow-md"
                            : "border-gray-200"
                        }`}
                      >
                        {pkg.id === "standard" && (
                          <div className="bg-indigo-500 text-white text-center py-1 text-sm font-medium">
                            Most Popular
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900">
                            {pkg.name}
                          </h3>
                          <div className="mt-4 flex items-baseline">
                            <span className="text-3xl font-bold text-indigo-600">
                              ${pkg.price}
                            </span>
                            <span className="ml-1 text-gray-500">/ event</span>
                          </div>
                          <ul className="mt-6 space-y-3">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => handlePackageChange(pkg.id)}
                            className={`mt-6 w-full py-2 px-4 rounded-md ${
                              selectedPackage === pkg.id
                                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                : "border border-indigo-500 text-indigo-600 hover:bg-indigo-50"
                            } transition !rounded-button whitespace-nowrap cursor-pointer`}
                          >
                            {selectedPackage === pkg.id
                              ? "Selected"
                              : "Select Package"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Additional Services
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md">
                        <div>
                          <h4 className="font-medium">Extra Hour</h4>
                          <p className="text-sm text-gray-600">
                            Extend your event beyond the package hours
                          </p>
                        </div>
                        <span className="font-medium text-indigo-600">
                          $75/hour
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md">
                        <div>
                          <h4 className="font-medium">
                            Enhanced Lighting Package
                          </h4>
                          <p className="text-sm text-gray-600">
                            Additional lighting effects and uplighting
                          </p>
                        </div>
                        <span className="font-medium text-indigo-600">
                          $150
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md">
                        <div>
                          <h4 className="font-medium">Ceremony Audio</h4>
                          <p className="text-sm text-gray-600">
                            Separate sound system for wedding ceremonies
                          </p>
                        </div>
                        <span className="font-medium text-indigo-600">
                          $100
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md">
                        <div>
                          <h4 className="font-medium">Early Setup</h4>
                          <p className="text-sm text-gray-600">
                            Setup 2+ hours before event start time
                          </p>
                        </div>
                        <span className="font-medium text-indigo-600">$75</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Availability Tab */}
              {activeTab === "availability" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Check Availability
                  </h2>
                  <div className="bg-white border border-gray-200 rounded-lg">
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">
                          May 2025
                        </h3>
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-md !rounded-button whitespace-nowrap cursor-pointer">
                            <i className="fas fa-chevron-left"></i>
                          </button>
                          <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-md !rounded-button whitespace-nowrap cursor-pointer">
                            <i className="fas fa-chevron-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-7 gap-2 text-center">
                        <div className="text-sm font-medium text-gray-500">
                          Sun
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          Mon
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          Tue
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          Wed
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          Thu
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          Fri
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          Sat
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-2 mt-2">
                        {/* First week */}
                        <div className="p-2 text-center text-gray-400">27</div>
                        <div className="p-2 text-center text-gray-400">28</div>
                        <div className="p-2 text-center text-gray-400">29</div>
                        <div className="p-2 text-center text-gray-400">30</div>
                        <div className="p-2 text-center">1</div>
                        <div className="p-2 text-center">2</div>
                        <div className="p-2 text-center">3</div>

                        {/* Second week */}
                        <div className="p-2 text-center">4</div>
                        <div className="p-2 text-center">5</div>
                        <div className="p-2 text-center bg-indigo-100 text-indigo-700 font-medium rounded-md">
                          6
                        </div>
                        <div className="p-2 text-center">7</div>
                        <div className="p-2 text-center">8</div>
                        <div className="p-2 text-center bg-red-100 text-red-700 font-medium rounded-md">
                          9
                        </div>
                        <div className="p-2 text-center bg-red-100 text-red-700 font-medium rounded-md">
                          10
                        </div>

                        {/* Third week */}
                        <div className="p-2 text-center">11</div>
                        <div className="p-2 text-center">12</div>
                        <div className="p-2 text-center">13</div>
                        <div className="p-2 text-center">14</div>
                        <div className="p-2 text-center">15</div>
                        <div className="p-2 text-center">16</div>
                        <div className="p-2 text-center bg-red-100 text-red-700 font-medium rounded-md">
                          17
                        </div>

                        {/* Fourth week */}
                        <div className="p-2 text-center">18</div>
                        <div className="p-2 text-center">19</div>
                        <div className="p-2 text-center">20</div>
                        <div className="p-2 text-center">21</div>
                        <div className="p-2 text-center">22</div>
                        <div className="p-2 text-center bg-red-100 text-red-700 font-medium rounded-md">
                          23
                        </div>
                        <div className="p-2 text-center bg-red-100 text-red-700 font-medium rounded-md">
                          24
                        </div>

                        {/* Fifth week */}
                        <div className="p-2 text-center">25</div>
                        <div className="p-2 text-center">26</div>
                        <div className="p-2 text-center">27</div>
                        <div className="p-2 text-center">28</div>
                        <div className="p-2 text-center">29</div>
                        <div className="p-2 text-center bg-red-100 text-red-700 font-medium rounded-md">
                          30
                        </div>
                        <div className="p-2 text-center bg-red-100 text-red-700 font-medium rounded-md">
                          31
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-indigo-100 rounded-sm mr-2"></div>
                          <span className="text-sm text-gray-700">Today</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-red-100 rounded-sm mr-2"></div>
                          <span className="text-sm text-gray-700">Booked</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-white border border-gray-200 rounded-sm mr-2"></div>
                          <span className="text-sm text-gray-700">
                            Available
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      Check Specific Date
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <label
                          htmlFor="event-date"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Event Date
                        </label>
                        <input
                          type="date"
                          id="event-date"
                          value={selectedDate}
                          onChange={handleDateChange}
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="event-type"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Event Type
                        </label>
                        <select
                          id="event-type"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          <option value="">Select event type</option>
                          <option value="wedding">Wedding</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="birthday">Birthday Party</option>
                          <option value="graduation">Graduation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="md:self-end">
                        <button className="w-full md:w-auto bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer">
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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

                  <div className="mt-8 flex justify-center">
                    <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                      Load More Reviews
                    </button>
                  </div>
                </div>
              )}

              {/* Vendor Tab */}
              {activeTab === "vendor" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Vendor Information
                  </h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center">
                          <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                            SE
                          </div>
                          <div className="ml-4">
                            <h3 className="text-xl font-bold text-gray-900">
                              Sound Experts
                            </h3>
                            <p className="text-gray-600">
                              Premium Audio Services
                            </p>
                          </div>
                        </div>
                        <div className="mt-6 space-y-3">
                          <div className="flex items-center">
                            <i className="fas fa-map-marker-alt text-indigo-600 w-5"></i>
                            <span className="ml-2 text-gray-700">
                              New York, NY
                            </span>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-phone-alt text-indigo-600 w-5"></i>
                            <span className="ml-2 text-gray-700">
                              (555) 123-4567
                            </span>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-envelope text-indigo-600 w-5"></i>
                            <span className="ml-2 text-gray-700">
                              contact@soundexperts.com
                            </span>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-globe text-indigo-600 w-5"></i>
                            <a
                              href="#"
                              className="ml-2 text-indigo-600 hover:text-indigo-800 cursor-pointer"
                            >
                              www.soundexperts.com
                            </a>
                          </div>
                        </div>
                        <div className="mt-6 flex space-x-3">
                          <a
                            href="#"
                            className="text-gray-500 hover:text-indigo-600 cursor-pointer"
                          >
                            <i className="fab fa-facebook-f text-lg"></i>
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-indigo-600 cursor-pointer"
                          >
                            <i className="fab fa-instagram text-lg"></i>
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-indigo-600 cursor-pointer"
                          >
                            <i className="fab fa-twitter text-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="prose max-w-none text-gray-700">
                        <p>
                          Sound Experts has been providing premium audio and DJ
                          services for over 10 years. Our team of professional
                          DJs and audio technicians are dedicated to creating
                          the perfect atmosphere for your event.
                        </p>
                        <p className="mt-4">
                          We specialize in weddings, corporate events, private
                          parties, and more. Our commitment to quality and
                          customer satisfaction has made us one of the top-rated
                          DJ services in the area.
                        </p>
                        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">
                          Credentials & Experience
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Over 10 years in the event industry</li>
                          <li>Certified audio engineers on staff</li>
                          <li>Served 1000+ events successfully</li>
                          <li>
                            Specialized training in wedding and corporate event
                            management
                          </li>
                          <li>Fully insured and licensed business</li>
                        </ul>
                        <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">
                          Our Team
                        </h3>
                        <p>
                          Our team consists of 8 professional DJs, each with
                          their own unique style and expertise. All of our DJs
                          undergo rigorous training and have extensive
                          experience in various event types. When you book with
                          us, we'll match you with the DJ whose style and
                          experience best fits your event needs.
                        </p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Package
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {pricingPackages.map((pkg) => (
                        <div key={pkg.id} className="relative">
                          <input
                            type="radio"
                            id={`package-${pkg.id}`}
                            name="package"
                            className="sr-only"
                            checked={selectedPackage === pkg.id}
                            onChange={() => handlePackageChange(pkg.id)}
                          />
                          <label
                            htmlFor={`package-${pkg.id}`}
                            className={`block border rounded-md p-3 cursor-pointer ${
                              selectedPackage === pkg.id
                                ? "border-indigo-500 bg-indigo-50"
                                : "border-gray-300 hover:border-indigo-300"
                            }`}
                          >
                            <div className="font-medium text-gray-900">
                              {pkg.name}
                            </div>
                            <div className="text-indigo-600 font-semibold">
                              ${pkg.price}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                              {pkg.id === "basic" && "4 hours, Basic setup"}
                              {pkg.id === "standard" && "6 hours, Full service"}
                              {pkg.id === "premium" &&
                                "8 hours, Premium service"}
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>
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
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-4">
                  Price Summary
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Selected Package (
                      {selectedPackage === "basic"
                        ? "Basic"
                        : selectedPackage === "standard"
                        ? "Standard"
                        : "Premium"}
                      )
                    </span>
                    <span className="font-medium">
                      ${getSelectedPackagePrice()}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 my-2 pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-indigo-600">
                        ${getSelectedPackagePrice()}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer">
                  Book Now
                </button>
                <p className="mt-2 text-xs text-gray-500 text-center">
                  A 25% deposit is required to secure your booking
                </p>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Related Services
              </h2>
              <a
                href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/cfadd2f5-f21f-4247-9bb4-8b0ddd9decd0"
                data-readdy="true"
                className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
              >
                View All
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-top transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <i
                            key={index}
                            className={`${
                              index < service.rating ? "fas" : "far"
                            } fa-star text-yellow-400 text-sm`}
                          ></i>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-1">
                        ({service.reviews} reviews)
                      </span>
                    </div>
                    <div className="mt-3 flex items-center text-indigo-700 font-semibold">
                      <span className="text-lg">${service.price}</span>
                      <span className="text-sm text-gray-500 ml-1">
                        / {service.unit}
                      </span>
                    </div>
                    <div className="mt-4">
                      <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
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
                    value={formData.name}
                    onChange={handleFormChange}
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
                    value={formData.email}
                    onChange={handleFormChange}
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
                    value={formData.phone}
                    onChange={handleFormChange}
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
                    value={formData.eventDate}
                    onChange={handleFormChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="eventType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleFormChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="graduation">Graduation</option>
                    <option value="other">Other</option>
                  </select>
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
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Tell us about your event and what you're looking for..."
                    required
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToPolicy"
                      checked={formData.agreeToPolicy}
                      onChange={handleFormChange}
                      className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      required
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      I agree to the privacy policy and consent to being
                      contacted regarding my inquiry.
                    </span>
                  </label>
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
          </div>
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
    </div>
  );
};

export default SoundAndDjServiceDetailsPage;
