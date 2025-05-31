// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";

const DecorationDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedGalleryFilter, setSelectedGalleryFilter] = useState("All");
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

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
    {
      name: "Michael Chen",
      event: "Corporate Event",
      date: "January 22, 2025",
      rating: 5,
      image:
        "https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520an%2520asian%2520man%2520in%2520business%2520attire%2520with%2520short%2520dark%2520hair%2520smiling%2520confidently%2520at%2520camera%2520with%2520soft%2520lighting%2520and%2520neutral%2520background%2520high%2520quality%2520professional%2520headshot&width=80&height=80&seq=202&orientation=squarish",
      review:
        "EventPro transformed our annual conference into something truly special. The decorations perfectly aligned with our brand identity while creating an elegant atmosphere.",
    },
    {
      name: "Jessica Williams",
      event: "Wedding",
      date: "April 8, 2025",
      rating: 5,
      image:
        "https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520a%2520woman%2520with%2520dark%2520hair%2520and%2520warm%2520smile%2520looking%2520at%2520camera%2520with%2520soft%2520lighting%2520and%2520neutral%2520background%2520high%2520quality%2520professional%2520headshot&width=80&height=80&seq=203&orientation=squarish",
      review:
        "I was blown away by how they brought my vision to life. The floral arrangements were stunning, and the lighting created the perfect romantic atmosphere for our special day.",
    },
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
    {
      icon: "fas fa-table",
      title: "Elegant Table Settings",
      description:
        "Complete table decor including linens, centerpieces, and place settings",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Ambient Lighting",
      description: "String lights, candles, uplighting, and accent lighting",
    },
    {
      icon: "fas fa-archway",
      title: "Ceremony Backdrop",
      description: "Custom-designed backdrop for your ceremony or photo area",
    },
    {
      icon: "fas fa-chair",
      title: "Chair Decorations",
      description: "Chair covers, sashes, and decorative elements",
    },
    {
      icon: "fas fa-sign",
      title: "Signage & Stationery",
      description:
        "Custom welcome signs, table numbers, and directional signage",
    },
  ];

  const faqs = [
    {
      question: "How far in advance should I book my decoration services?",
      answer:
        "We recommend booking at least 3-6 months in advance for weddings and large events, and 1-2 months for smaller events. Popular dates can fill up quickly, especially during wedding season.",
    },
    {
      question:
        "Can I customize the decoration package to fit my specific needs?",
      answer:
        "Absolutely! Our packages are designed to be flexible. We can add or remove elements to create a customized decoration plan that perfectly matches your vision and budget.",
    },
    {
      question: "Do you provide setup and teardown services?",
      answer:
        "Yes, all our decoration packages include professional setup and teardown services. Our team will handle everything so you can focus on enjoying your special day.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We require a 50% deposit to secure your date, which is non-refundable within 30 days of the event. Cancellations made more than 30 days before the event may be eligible for a partial refund.",
    },
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
    {
      title: "Modern Minimalist",
      image:
        "https://readdy.ai/api/search-image?query=modern%2520minimalist%2520wedding%2520decoration%2520with%2520clean%2520lines%2520geometric%2520elements%2520white%2520flowers%2520and%2520greenery%2520on%2520simple%2520neutral%2520background%2520professional%2520event%2520styling%2520high%2520quality&width=300&height=200&seq=205&orientation=landscape",
      price: "$1,400 - $3,200",
      rating: 4.9,
      reviews: 28,
    },
    {
      title: "Garden Romance",
      image:
        "https://readdy.ai/api/search-image?query=garden%2520themed%2520wedding%2520decoration%2520with%2520lush%2520greenery%2520colorful%2520flowers%2520fairy%2520lights%2520and%2520natural%2520elements%2520on%2520simple%2520neutral%2520background%2520professional%2520event%2520styling%2520high%2520quality&width=300&height=200&seq=206&orientation=landscape",
      price: "$1,600 - $3,500",
      rating: 5.0,
      reviews: 42,
    },
  ];

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
                Wedding Elegance Package
              </h1>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative">
          <div
            className="h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%2520wedding%2520decoration%2520with%2520white%2520and%2520blush%2520floral%2520arrangements%252C%2520crystal%2520chandeliers%252C%2520draped%2520fabrics%252C%2520sophisticated%2520table%2520settings%252C%2520romantic%2520lighting%252C%2520and%2520premium%2520decor%2520elements%2520in%2520a%2520luxurious%2520venue%2520with%2520soft%2520ambient%2520lighting&width=1440&height=500&seq=207&orientation=landscape')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl font-bold mb-4">
                    Wedding Elegance Package
                  </h1>
                  <p className="text-xl mb-6">
                    Transform your wedding venue into a breathtaking space with
                    our premium decoration services designed to create an
                    elegant and romantic atmosphere.
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
                    <span className="text-2xl font-bold">$1,500 - $3,000</span>
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
              {["overview", "gallery", "pricing", "reviews", "faqs"].map(
                (tab) => (
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
                )
              )}
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
                      Our Wedding Elegance Package is designed to create a
                      sophisticated and romantic atmosphere for your special
                      day. With meticulous attention to detail, we transform
                      your venue into a breathtaking space that reflects your
                      personal style and creates a memorable backdrop for your
                      celebration.
                    </p>
                    <p className="text-gray-600 mb-4">
                      This comprehensive decoration package includes premium
                      floral arrangements, elegant table settings, ambient
                      lighting, and custom backdrop designs. Our experienced
                      team handles everything from initial concept development
                      to final setup, ensuring a stress-free experience for you.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Each element is carefully curated to create a cohesive and
                      stunning visual experience that will impress your guests
                      and provide a beautiful setting for your wedding
                      photographs. We use only the highest quality materials and
                      fresh flowers to ensure everything looks perfect
                      throughout your event.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                      Key Features
                    </h3>
                    <ul className="list-disc pl-5 text-gray-600 mb-6">
                      <li className="mb-2">
                        Personalized consultation to understand your vision and
                        preferences
                      </li>
                      <li className="mb-2">
                        Custom color palette development to match your wedding
                        theme
                      </li>
                      <li className="mb-2">
                        Premium floral arrangements using fresh, seasonal
                        flowers
                      </li>
                      <li className="mb-2">
                        Elegant table settings including linens, centerpieces,
                        and place settings
                      </li>
                      <li className="mb-2">
                        Custom-designed ceremony backdrop and aisle decorations
                      </li>
                      <li className="mb-2">
                        Ambient lighting including string lights, candles, and
                        uplighting
                      </li>
                      <li className="mb-2">
                        Chair decorations with premium fabrics and accents
                      </li>
                      <li className="mb-2">
                        Professional setup and teardown services
                      </li>
                      <li>
                        Dedicated event decorator on-site during your wedding
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Package Details
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <i className="fas fa-clock text-indigo-600"></i>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-gray-900">
                            Duration
                          </h4>
                          <p className="text-sm text-gray-500">
                            Full day coverage (up to 12 hours)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <i className="fas fa-users text-indigo-600"></i>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-gray-900">
                            Guest Capacity
                          </h4>
                          <p className="text-sm text-gray-500">
                            Suitable for 50-300 guests
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <i className="fas fa-map-marker-alt text-indigo-600"></i>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-gray-900">
                            Service Area
                          </h4>
                          <p className="text-sm text-gray-500">
                            Within 50 miles of city center
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <i className="fas fa-calendar-alt text-indigo-600"></i>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-gray-900">
                            Booking Timeline
                          </h4>
                          <p className="text-sm text-gray-500">
                            3-6 months in advance recommended
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <i className="fas fa-dollar-sign text-indigo-600"></i>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-gray-900">
                            Deposit Required
                          </h4>
                          <p className="text-sm text-gray-500">
                            50% to secure your date
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
                  Package Inclusions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {packageInclusions.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                          <i
                            className={`
                             ${
                               item.icon === "fas fa-flower"
                                 ? "fas fa-spa"
                                 : item.icon
                             } text-indigo-600
                            `}
                          ></i>
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
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Gallery</h2>
                <div className="flex space-x-2">
                  {["All", "Ceremony", "Reception", "Details"].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedGalleryFilter(filter)}
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        selectedGalleryFilter === filter
                          ? "bg-indigo-600 text-white"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                      } !rounded-button whitespace-nowrap cursor-pointer`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-sm">
                  <img
                    src="https://readdy.ai/api/search-image?query=elegant%2520wedding%2520ceremony%2520setup%2520with%2520white%2520flowers%2520draped%2520fabric%2520arch%2520and%2520decorated%2520aisle%2520with%2520soft%2520lighting%2520in%2520a%2520beautiful%2520venue%2520professional%2520event%2520decoration%2520high%2520quality&width=600&height=450&seq=208&orientation=landscape"
                    alt="Wedding ceremony setup"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                    <button className="bg-white text-gray-900 p-3 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-sm">
                  <img
                    src="https://readdy.ai/api/search-image?query=elegant%2520wedding%2520reception%2520table%2520setting%2520with%2520white%2520and%2520blush%2520floral%2520centerpieces%2520crystal%2520glassware%2520fine%2520china%2520and%2520ambient%2520candle%2520lighting%2520professional%2520event%2520decoration%2520high%2520quality&width=600&height=450&seq=209&orientation=landscape"
                    alt="Wedding reception table setting"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                    <button className="bg-white text-gray-900 p-3 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-sm">
                  <img
                    src="https://readdy.ai/api/search-image?query=elegant%2520wedding%2520backdrop%2520with%2520white%2520roses%2520orchids%2520and%2520greenery%2520with%2520draped%2520fabrics%2520and%2520soft%2520lighting%2520for%2520ceremony%2520or%2520photo%2520area%2520professional%2520event%2520decoration%2520high%2520quality&width=600&height=450&seq=210&orientation=landscape"
                    alt="Wedding backdrop"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                    <button className="bg-white text-gray-900 p-3 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-sm">
                  <img
                    src="https://readdy.ai/api/search-image?query=elegant%2520wedding%2520ceiling%2520decoration%2520with%2520crystal%2520chandeliers%2520draped%2520fabrics%2520fairy%2520lights%2520and%2520hanging%2520floral%2520elements%2520creating%2520magical%2520atmosphere%2520professional%2520event%2520decoration%2520high%2520quality&width=600&height=450&seq=211&orientation=landscape"
                    alt="Wedding ceiling decoration"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                    <button className="bg-white text-gray-900 p-3 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-sm">
                  <img
                    src="https://readdy.ai/api/search-image?query=elegant%2520wedding%2520chair%2520decoration%2520with%2520white%2520covers%2520satin%2520sashes%2520and%2520small%2520floral%2520accents%2520in%2520a%2520beautifully%2520arranged%2520ceremony%2520or%2520reception%2520setup%2520professional%2520event%2520decoration%2520high%2520quality&width=600&height=450&seq=212&orientation=landscape"
                    alt="Wedding chair decoration"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                    <button className="bg-white text-gray-900 p-3 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-sm">
                  <img
                    src="https://readdy.ai/api/search-image?query=elegant%2520wedding%2520cake%2520table%2520decoration%2520with%2520white%2520tablecloth%2520floral%2520arrangements%2520candles%2520and%2520beautifully%2520displayed%2520cake%2520in%2520a%2520reception%2520setting%2520professional%2520event%2520decoration%2520high%2520quality&width=600&height=450&seq=213&orientation=landscape"
                    alt="Wedding cake table"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                    <button className="bg-white text-gray-900 p-3 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-search-plus"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                  Load More Images
                </button>
              </div>
            </div>
          )}

          {/* Pricing Tab */}
          {activeTab === "pricing" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Pricing Options
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Package */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Basic Elegance
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Essential decorations for a beautiful wedding
                    </p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gray-900">
                        $1,500
                      </span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">Ceremony backdrop</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Basic floral arrangements (5 pieces)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Table centerpieces (up to 10 tables)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">Chair decorations</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Basic lighting setup
                        </span>
                      </li>
                      <li className="flex items-start text-gray-400">
                        <i className="fas fa-times mt-1 mr-2"></i>
                        <span>Premium floral varieties</span>
                      </li>
                      <li className="flex items-start text-gray-400">
                        <i className="fas fa-times mt-1 mr-2"></i>
                        <span>Ceiling decorations</span>
                      </li>
                      <li className="flex items-start text-gray-400">
                        <i className="fas fa-times mt-1 mr-2"></i>
                        <span>Custom signage</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setShowQuoteForm(true)}
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>

                {/* Standard Package */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-indigo-600 hover:shadow-lg transition relative">
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Premium Elegance
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive decorations for a stunning wedding
                    </p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gray-900">
                        $2,200
                      </span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Custom ceremony backdrop
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Premium floral arrangements (10 pieces)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Elegant table centerpieces (up to 15 tables)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Premium chair decorations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Enhanced lighting package
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Ceiling decorations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Basic custom signage
                        </span>
                      </li>
                      <li className="flex items-start text-gray-400">
                        <i className="fas fa-times mt-1 mr-2"></i>
                        <span>Full venue transformation</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setShowQuoteForm(true)}
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>

                {/* Luxury Package */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Luxury Elegance
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Complete venue transformation for a magical wedding
                    </p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gray-900">
                        $3,000
                      </span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Luxury custom backdrop
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Luxury floral arrangements (15+ pieces)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Luxury table centerpieces (unlimited tables)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Luxury chair decorations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Complete lighting design
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Elaborate ceiling installations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Custom signage and stationery
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">
                          Full venue transformation
                        </span>
                      </li>
                    </ul>
                    <button
                      onClick={() => setShowQuoteForm(true)}
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Custom Pricing
                </h3>
                <p className="text-gray-600 mb-4">
                  Need something specific? We offer fully customizable
                  decoration packages tailored to your unique requirements and
                  budget. Contact us for a personalized quote.
                </p>
                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Get Custom Quote
                </button>
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Customer Reviews
                </h2>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="ml-2 font-medium">5.0 (42 reviews)</span>
                </div>
              </div>

              {/* Testimonial Carousel */}
              <div className="relative bg-white rounded-lg shadow-sm p-6 mb-12">
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

              {/* Individual Reviews */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start">
                    <img
                      src="https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520a%2520woman%2520with%2520long%2520brown%2520hair%2520and%2520warm%2520smile%2520looking%2520at%2520camera%2520with%2520soft%2520lighting%2520and%2520neutral%2520background%2520high%2520quality%2520professional%2520headshot&width=60&height=60&seq=214&orientation=squarish"
                      alt="Emily Davis"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Emily Davis
                      </h3>
                      <div className="flex items-center mt-1 mb-2">
                        <div className="flex text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          Wedding • February 12, 2025
                        </span>
                      </div>
                      <p className="text-gray-600">
                        The decorations were absolutely breathtaking! Every
                        detail was perfect, from the ceremony arch to the
                        reception centerpieces. Our guests couldn't stop taking
                        photos of everything. The team was professional,
                        punctual, and so easy to work with. They took our vision
                        and made it even better than we imagined.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start">
                    <img
                      src="https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520a%2520man%2520with%2520short%2520dark%2520hair%2520and%2520beard%2520smiling%2520at%2520camera%2520with%2520soft%2520lighting%2520and%2520neutral%2520background%2520high%2520quality%2520professional%2520headshot&width=60&height=60&seq=215&orientation=squarish"
                      alt="James Wilson"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        James Wilson
                      </h3>
                      <div className="flex items-center mt-1 mb-2">
                        <div className="flex text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          Wedding • January 5, 2025
                        </span>
                      </div>
                      <p className="text-gray-600">
                        We were completely blown away by the decorations for our
                        wedding. The team at EventPro went above and beyond to
                        create a magical atmosphere. The lighting, the flowers,
                        the table settings - everything was perfect. They were
                        also very accommodating with last-minute changes. Highly
                        recommend!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start">
                    <img
                      src="https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520a%2520woman%2520with%2520blonde%2520hair%2520in%2520updo%2520smiling%2520at%2520camera%2520with%2520soft%2520lighting%2520and%2520neutral%2520background%2520high%2520quality%2520professional%2520headshot&width=60&height=60&seq=216&orientation=squarish"
                      alt="Sophia Martinez"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Sophia Martinez
                      </h3>
                      <div className="flex items-center mt-1 mb-2">
                        <div className="flex text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          Wedding • December 18, 2024
                        </span>
                      </div>
                      <p className="text-gray-600">
                        The Wedding Elegance Package was exactly what we needed
                        for our special day. The decorations were stunning and
                        matched our theme perfectly. The team was attentive to
                        all our requests and made the planning process
                        stress-free. Our venue looked like something out of a
                        fairy tale, and we received so many compliments from our
                        guests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                  Load More Reviews
                </button>
              </div>
            </div>
          )}

          {/* FAQs Tab */}
          {activeTab === "faqs" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Have More Questions?
                </h3>
                <p className="text-gray-600 mb-4">
                  We're here to help! If you have any questions that aren't
                  answered above, please don't hesitate to contact us.
                </p>
                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Related Packages */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Packages
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
                        href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/cc6836e2-95a3-4503-b7be-b568897fed6e"
                        data-readdy="true"
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
                Request Wedding Elegance Quote
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
                      Wedding Date
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
                      Package Option
                    </label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                      <option>Basic Elegance ($1,500)</option>
                      <option selected>Premium Elegance ($2,200)</option>
                      <option>Luxury Elegance ($3,000)</option>
                      <option>Custom Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Color Preferences
                    </label>
                    <input
                      type="text"
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="e.g. Blush pink, ivory, gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Describe any specific decoration elements or themes you'd like..."
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

export default DecorationDetailsPage;
