import React, { useState } from "react";

const PhotographyServiceDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("standard");
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

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

  const packageOptions = {
    basic: {
      name: "Basic Package",
      price: "$1,200",
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
      price: "$2,200",
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
      price: "$3,500",
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

  const galleryImages = [
    "https://readdy.ai/api/search-image?query=elegant%2520wedding%2520photography%2520of%2520bride%2520and%2520groom%2520in%2520a%2520beautiful%2520garden%2520setting%2520with%2520soft%2520natural%2520lighting%252C%2520romantic%2520atmosphere%252C%2520professional%2520composition%2520with%2520bokeh%2520effect%2520and%2520artistic%2520framing%252C%2520high%2520quality%2520professional%2520wedding%2520photography&width=600&height=400&seq=101&orientation=landscape",
    "https://readdy.ai/api/search-image?query=wedding%2520photography%2520of%2520emotional%2520first%2520look%2520moment%2520between%2520bride%2520and%2520groom%252C%2520candid%2520capture%2520with%2520natural%2520lighting%252C%2520elegant%2520venue%2520background%2520slightly%2520blurred%252C%2520professional%2520wedding%2520photography%2520with%2520perfect%2520timing%2520and%2520composition&width=600&height=400&seq=102&orientation=landscape",
    "https://readdy.ai/api/search-image?query=artistic%2520wedding%2520photography%2520of%2520bride%2520and%2520bridesmaids%2520getting%2520ready%252C%2520elegant%2520hotel%2520room%2520with%2520soft%2520window%2520light%252C%2520emotional%2520preparation%2520moment%252C%2520professional%2520documentary%2520style%2520wedding%2520photography%2520with%2520beautiful%2520composition&width=600&height=400&seq=103&orientation=landscape",
    "https://readdy.ai/api/search-image?query=wedding%2520ceremony%2520photography%2520capturing%2520exchange%2520of%2520vows%2520in%2520beautiful%2520church%2520setting%2520with%2520dramatic%2520lighting%252C%2520emotional%2520moment%2520with%2520guests%2520watching%252C%2520professional%2520wedding%2520photography%2520with%2520perfect%2520timing%2520and%2520composition&width=600&height=400&seq=104&orientation=landscape",
    "https://readdy.ai/api/search-image?query=wedding%2520reception%2520photography%2520of%2520first%2520dance%2520with%2520beautiful%2520venue%2520lighting%252C%2520romantic%2520atmosphere%252C%2520guests%2520watching%2520in%2520background%252C%2520professional%2520event%2520photography%2520with%2520perfect%2520timing%2520and%2520composition&width=600&height=400&seq=105&orientation=landscape",
    "https://readdy.ai/api/search-image?query=wedding%2520detail%2520photography%2520of%2520rings%2520on%2520wedding%2520invitation%2520with%2520flowers%252C%2520macro%2520photography%2520with%2520shallow%2520depth%2520of%2520field%252C%2520artistic%2520composition%252C%2520professional%2520wedding%2520photography%2520with%2520beautiful%2520styling&width=600&height=400&seq=106&orientation=landscape",
    "https://readdy.ai/api/search-image?query=wedding%2520cake%2520cutting%2520photography%2520with%2520bride%2520and%2520groom%2520laughing%252C%2520beautiful%2520reception%2520venue%2520with%2520elegant%2520decor%252C%2520candid%2520moment%252C%2520professional%2520event%2520photography%2520with%2520perfect%2520timing%2520and%2520composition&width=600&height=400&seq=107&orientation=landscape",
    "https://readdy.ai/api/search-image?query=wedding%2520photography%2520of%2520couple%2520portrait%2520at%2520sunset%2520with%2520golden%2520hour%2520lighting%252C%2520silhouette%2520effect%252C%2520romantic%2520composition%252C%2520professional%2520wedding%2520photography%2520with%2520artistic%2520vision%2520and%2520beautiful%2520natural%2520lighting&width=600&height=400&seq=108&orientation=landscape",
  ];

  const testimonials = [
    {
      name: "Jessica & David Thompson",
      date: "May 15, 2025",
      rating: 5,
      comment:
        "John captured our wedding day perfectly! His attention to detail and ability to capture candid moments exceeded our expectations. The photos truly tell the story of our special day and we couldn't be happier!",
      image:
        "https://readdy.ai/api/search-image?query=happy%2520young%2520couple%2520smiling%2520at%2520camera%252C%2520professional%2520headshot%2520style%252C%2520neutral%2520background%252C%2520well-dressed%2520wedding%2520couple%252C%2520genuine%2520expressions%252C%2520high%2520quality%2520portrait&width=100&height=100&seq=201&orientation=squarish",
    },
    {
      name: "Michael & Sarah Wilson",
      date: "April 3, 2025",
      rating: 5,
      comment:
        "Working with John was the best decision we made for our wedding. He was professional, creative, and made us feel so comfortable. The photos are absolutely stunning and captured every emotion of the day.",
      image:
        "https://readdy.ai/api/search-image?query=smiling%2520middle-aged%2520couple%2520portrait%252C%2520professional%2520headshot%2520style%252C%2520neutral%2520background%252C%2520well-dressed%2520wedding%2520couple%252C%2520genuine%2520expressions%252C%2520high%2520quality%2520portrait&width=100&height=100&seq=202&orientation=squarish",
    },
    {
      name: "Emily Rodriguez",
      date: "March 22, 2025",
      rating: 4,
      comment:
        "John is incredibly talented and professional. He captured beautiful moments from our wedding that we'll cherish forever. The only reason for 4 stars instead of 5 is that we wished we had received the photos a bit sooner.",
      image:
        "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520young%2520latina%2520woman%2520smiling%252C%2520neutral%2520background%252C%2520business%2520casual%2520attire%252C%2520genuine%2520expression%252C%2520high%2520quality%2520portrait&width=100&height=100&seq=203&orientation=squarish",
    },
  ];

  const availabilityDates = [
    { date: "2025-05-10", available: true },
    { date: "2025-05-11", available: true },
    { date: "2025-05-12", available: false },
    { date: "2025-05-13", available: false },
    { date: "2025-05-14", available: true },
    { date: "2025-05-15", available: true },
    { date: "2025-05-16", available: false },
    { date: "2025-05-17", available: true },
    { date: "2025-05-18", available: false },
    { date: "2025-05-19", available: true },
    { date: "2025-05-20", available: true },
  ];

  const relatedServices = [
    {
      title: "Corporate Event Photography",
      image:
        "https://readdy.ai/api/search-image?query=professional%2520corporate%2520event%2520photography%2520showing%2520a%2520keynote%2520speaker%2520on%2520stage%2520at%2520a%2520business%2520conference%252C%2520elegant%2520venue%2520with%2520professional%2520lighting%252C%2520audience%2520in%2520foreground%252C%2520high%2520quality%2520corporate%2520photography%2520with%2520professional%2520equipment&width=300&height=200&seq=301&orientation=landscape",
      price: "From $800",
      photographer: "Sarah Johnson",
    },
    {
      title: "Portrait Sessions",
      image:
        "https://readdy.ai/api/search-image?query=professional%2520portrait%2520photography%2520session%2520in%2520a%2520studio%2520with%2520photographer%2520adjusting%2520lighting%2520equipment%252C%2520model%2520posing%2520elegantly%252C%2520high-end%2520camera%2520setup%252C%2520artistic%2520portrait%2520photography%2520with%2520soft%2520studio%2520lighting%2520and%2520neutral%2520background&width=300&height=200&seq=302&orientation=landscape",
      price: "From $250",
      photographer: "Michael Chen",
    },
    {
      title: "Special Events Coverage",
      image:
        "https://readdy.ai/api/search-image?query=professional%2520photographer%2520capturing%2520a%2520special%2520celebration%2520event%2520with%2520guests%2520dancing%252C%2520elegant%2520venue%2520with%2520colorful%2520lighting%2520and%2520decorations%252C%2520festive%2520atmosphere%252C%2520event%2520photography%2520with%2520professional%2520equipment%2520and%2520creative%2520angle&width=300&height=200&seq=303&orientation=landscape",
      price: "From $500",
      photographer: "Emily Rodriguez",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main>
        {/* Back Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a
            href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/4b86dd28-1296-4a69-a1e5-b7dd046401d6"
            data-readdy="true"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 cursor-pointer"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Photography Services
          </a>
        </div>

        {/* Service Hero Section */}
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                    Wedding
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
                <h1 className="text-4xl font-bold mb-4">Wedding Photography</h1>
                <p className="text-lg text-indigo-100 mb-6">
                  Comprehensive wedding photography packages to capture your
                  special day from preparation to reception. Includes engagement
                  photos and custom album.
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
                    <p className="font-medium">Photographer: John Anderson</p>
                    <p className="text-indigo-200 text-sm">
                      10+ years of experience
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    Check Availability
                  </button>
                  <button className="bg-pink-500 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-600 transition !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-heart mr-2"></i>
                    Book Now
                  </button>
                </div>
              </div>
              <div className="relative h-80 md:h-auto overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://readdy.ai/api/search-image?query=elegant%2520wedding%2520photography%2520scene%2520with%2520a%2520professional%2520photographer%2520capturing%2520a%2520bride%2520and%2520groom%2520in%2520a%2520romantic%2520pose%252C%2520beautiful%2520wedding%2520venue%2520with%2520soft%2520natural%2520lighting%252C%2520dreamy%2520atmosphere%2520with%2520bokeh%2520effect%2520and%2520professional%2520lighting%2520setup&width=600&height=400&seq=8&orientation=landscape"
                  alt="Wedding Photography"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Service Details Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Tabs Navigation */}
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
                <button
                  onClick={() => setActiveTab("pricing")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === "pricing"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button whitespace-nowrap cursor-pointer`}
                >
                  <i className="fas fa-tag mr-2"></i>
                  Pricing
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === "reviews"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button whitespace-nowrap cursor-pointer`}
                >
                  <i className="fas fa-star mr-2"></i>
                  Reviews
                </button>
                <button
                  onClick={() => setActiveTab("availability")}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === "availability"
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } !rounded-button whitespace-nowrap cursor-pointer`}
                >
                  <i className="fas fa-calendar-check mr-2"></i>
                  Availability
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Service Overview
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Our wedding photography service is designed to capture every
                    special moment of your wedding day, from the intimate
                    preparation moments to the joyous reception celebration.
                    With a blend of photojournalistic and traditional
                    approaches, we create a visual narrative that tells the
                    unique story of your love and commitment.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      What's Included
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <i className="fas fa-camera"></i>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium text-gray-900">
                              Professional Coverage
                            </h4>
                            <p className="mt-1 text-gray-600">
                              Full-day coverage of your wedding with experienced
                              photographers
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <i className="fas fa-heart"></i>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium text-gray-900">
                              Engagement Session
                            </h4>
                            <p className="mt-1 text-gray-600">
                              Pre-wedding photoshoot to capture your love story
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <i className="fas fa-edit"></i>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium text-gray-900">
                              Professional Editing
                            </h4>
                            <p className="mt-1 text-gray-600">
                              Carefully edited images with color correction and
                              retouching
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <i className="fas fa-cloud"></i>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium text-gray-900">
                              Online Gallery
                            </h4>
                            <p className="mt-1 text-gray-600">
                              Private online gallery to share with friends and
                              family
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <i className="fas fa-book"></i>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium text-gray-900">
                              Custom Album
                            </h4>
                            <p className="mt-1 text-gray-600">
                              Beautifully designed wedding album with premium
                              options
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <i className="fas fa-file-download"></i>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium text-gray-900">
                              Digital Files
                            </h4>
                            <p className="mt-1 text-gray-600">
                              High-resolution digital files with print release
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Our Approach
                    </h3>
                    <p className="text-gray-700 mb-4">
                      We believe that every wedding is unique, and our approach
                      is tailored to capture the distinct personality and style
                      of each couple. Our photography style blends candid
                      photojournalism with traditional portraiture, ensuring we
                      document both the big moments and the small, intimate
                      details that make your day special.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Before your wedding, we'll meet to discuss your vision,
                      preferences, and the specific moments you want captured.
                      We'll create a detailed shot list and timeline to ensure
                      nothing is missed. On your wedding day, we'll be
                      unobtrusive yet attentive, capturing authentic moments
                      while also providing direction when needed for formal
                      portraits.
                    </p>
                    <p className="text-gray-700">
                      After your wedding, we carefully select and edit the best
                      images to tell the complete story of your day. You'll
                      receive a curated collection of photographs that you'll
                      treasure for generations to come.
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

                  {/* Image Modal */}
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
                    {/* Basic Package */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900">
                          Basic Package
                        </h3>
                        <div className="mt-4 flex justify-center">
                          <span className="text-3xl font-extrabold text-gray-900">
                            $1,200
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {packageOptions.basic.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <i className="fas fa-check text-green-500 mr-2"></i>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer ${
                          selectedPackage === "basic"
                            ? "ring-2 ring-offset-2 ring-indigo-500"
                            : ""
                        }`}
                        onClick={() => setSelectedPackage("basic")}
                      >
                        {selectedPackage === "basic"
                          ? "Selected"
                          : "Select Package"}
                      </button>
                    </div>

                    {/* Standard Package */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 relative">
                      <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                        MOST POPULAR
                      </div>
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900">
                          Standard Package
                        </h3>
                        <div className="mt-4 flex justify-center">
                          <span className="text-3xl font-extrabold text-gray-900">
                            $2,200
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {packageOptions.standard.features.map(
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
                          selectedPackage === "standard"
                            ? "ring-2 ring-offset-2 ring-indigo-500"
                            : ""
                        }`}
                        onClick={() => setSelectedPackage("standard")}
                      >
                        {selectedPackage === "standard"
                          ? "Selected"
                          : "Select Package"}
                      </button>
                    </div>

                    {/* Premium Package */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900">
                          Premium Package
                        </h3>
                        <div className="mt-4 flex justify-center">
                          <span className="text-3xl font-extrabold text-gray-900">
                            $3,500
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {packageOptions.premium.features.map(
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
                          selectedPackage === "premium"
                            ? "ring-2 ring-offset-2 ring-indigo-500"
                            : ""
                        }`}
                        onClick={() => setSelectedPackage("premium")}
                      >
                        {selectedPackage === "premium"
                          ? "Selected"
                          : "Select Package"}
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Additional Services
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md bg-white">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Second Photographer
                          </h4>
                          <p className="text-sm text-gray-600">
                            Additional coverage from different angles
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">$500</p>
                          <button className="text-xs text-indigo-600 hover:text-indigo-800 !rounded-button whitespace-nowrap cursor-pointer">
                            Add to Package
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md bg-white">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Bridal Boudoir Session
                          </h4>
                          <p className="text-sm text-gray-600">
                            Private pre-wedding photoshoot
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">$350</p>
                          <button className="text-xs text-indigo-600 hover:text-indigo-800 !rounded-button whitespace-nowrap cursor-pointer">
                            Add to Package
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md bg-white">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Rehearsal Dinner Coverage
                          </h4>
                          <p className="text-sm text-gray-600">
                            2 hours of photography
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">$400</p>
                          <button className="text-xs text-indigo-600 hover:text-indigo-800 !rounded-button whitespace-nowrap cursor-pointer">
                            Add to Package
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md bg-white">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Premium Photo Album
                          </h4>
                          <p className="text-sm text-gray-600">
                            Upgrade to luxury album
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">$300</p>
                          <button className="text-xs text-indigo-600 hover:text-indigo-800 !rounded-button whitespace-nowrap cursor-pointer">
                            Add to Package
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Payment Information
                    </h3>
                    <p className="text-gray-700 mb-4">
                      A 30% non-refundable retainer is required to secure your
                      date, with the remaining balance due 30 days before the
                      wedding. We accept credit cards, bank transfers, and
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

              {/* Reviews Tab */}
              {activeTab === "reviews" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Customer Reviews
                    </h2>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className="font-medium">5.0</span>
                      <span className="text-gray-500 ml-1">(18 reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="h-12 w-12 rounded-full"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-gray-900">
                                {testimonial.name}
                              </h4>
                              <span className="text-sm text-gray-500">
                                {testimonial.date}
                              </span>
                            </div>
                            <div className="flex text-yellow-400 my-1">
                              {[...Array(5)].map((_, i) => (
                                <i
                                  key={i}
                                  className={
                                    i < testimonial.rating
                                      ? "fas fa-star"
                                      : "far fa-star"
                                  }
                                ></i>
                              ))}
                            </div>
                            <p className="text-gray-700 mt-2">
                              {testimonial.comment}
                            </p>
                            <div className="mt-4 flex space-x-2">
                              <div className="h-16 w-16 rounded-md overflow-hidden">
                                <img
                                  src="https://readdy.ai/api/search-image?query=wedding%2520photography%2520sample%2520showing%2520bride%2520and%2520groom%2520portrait%2520with%2520beautiful%2520lighting%252C%2520emotional%2520moment%252C%2520professional%2520wedding%2520photography%2520with%2520artistic%2520composition&width=100&height=100&seq=401&orientation=squarish"
                                  alt="Review photo"
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="h-16 w-16 rounded-md overflow-hidden">
                                <img
                                  src="https://readdy.ai/api/search-image?query=wedding%2520reception%2520photography%2520sample%2520showing%2520first%2520dance%2520with%2520beautiful%2520lighting%252C%2520emotional%2520moment%252C%2520professional%2520wedding%2520photography%2520with%2520artistic%2520composition&width=100&height=100&seq=402&orientation=squarish"
                                  alt="Review photo"
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Write a Review
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="rating"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Rating
                        </label>
                        <div className="flex text-gray-400 text-2xl">
                          <i className="far fa-star hover:text-yellow-400 cursor-pointer"></i>
                          <i className="far fa-star hover:text-yellow-400 cursor-pointer"></i>
                          <i className="far fa-star hover:text-yellow-400 cursor-pointer"></i>
                          <i className="far fa-star hover:text-yellow-400 cursor-pointer"></i>
                          <i className="far fa-star hover:text-yellow-400 cursor-pointer"></i>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="review"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Review
                        </label>
                        <textarea
                          id="review"
                          rows={4}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Share your experience with this service..."
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Add Photos
                        </label>
                        <div className="flex items-center">
                          <button className="flex items-center justify-center h-16 w-16 rounded-md border-2 border-dashed border-gray-300 text-gray-400 hover:text-gray-500 hover:border-gray-400 !rounded-button whitespace-nowrap cursor-pointer">
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>

                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer">
                        Submit Review
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Availability Tab */}
              {activeTab === "availability" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Check Availability
                  </h2>

                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          May 2025
                        </h3>
                        <p className="text-sm text-gray-500">
                          Select a date to check availability
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0 flex items-center">
                        <button className="p-2 text-gray-500 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fas fa-chevron-left"></i>
                        </button>
                        <button className="p-2 text-gray-500 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fas fa-chevron-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-2 mb-4">
                      <div className="text-center text-sm font-medium text-gray-500">
                        Sun
                      </div>
                      <div className="text-center text-sm font-medium text-gray-500">
                        Mon
                      </div>
                      <div className="text-center text-sm font-medium text-gray-500">
                        Tue
                      </div>
                      <div className="text-center text-sm font-medium text-gray-500">
                        Wed
                      </div>
                      <div className="text-center text-sm font-medium text-gray-500">
                        Thu
                      </div>
                      <div className="text-center text-sm font-medium text-gray-500">
                        Fri
                      </div>
                      <div className="text-center text-sm font-medium text-gray-500">
                        Sat
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                      {/* Previous month days - grayed out */}
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        28
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        29
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        30
                      </div>

                      {/* Current month days */}
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        1
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        2
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        3
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        4
                      </div>

                      {availabilityDates.map((date, index) => {
                        const day = parseInt(date.date.split("-")[2]);
                        return (
                          <div
                            key={index}
                            className={`h-12 rounded-md flex items-center justify-center cursor-pointer ${
                              date.available
                                ? "hover:bg-indigo-50 text-gray-900"
                                : "bg-gray-100 text-gray-400 cursor-not-allowed"
                            } ${
                              selectedDate === date.date
                                ? "bg-indigo-100 text-indigo-700 font-medium"
                                : ""
                            }`}
                            onClick={() =>
                              date.available && setSelectedDate(date.date)
                            }
                          >
                            {day}
                            {date.available && (
                              <span className="w-1 h-1 bg-green-500 rounded-full absolute bottom-1"></span>
                            )}
                          </div>
                        );
                      })}

                      {/* Next month days - grayed out */}
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        21
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        22
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        23
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        24
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        25
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        26
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        27
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        28
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        29
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        30
                      </div>
                      <div className="h-12 flex items-center justify-center text-gray-400">
                        31
                      </div>
                    </div>

                    <div className="mt-6 flex items-center">
                      <div className="flex items-center mr-4">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        <span className="text-sm text-gray-700">Available</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-gray-300 rounded-full mr-2"></span>
                        <span className="text-sm text-gray-700">Booked</span>
                      </div>
                    </div>
                  </div>

                  {selectedDate && (
                    <div className="bg-indigo-50 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Request Booking for {selectedDate}
                      </h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Enter your full name"
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
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="package"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Select Package
                          </label>
                          <select
                            id="package"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            value={selectedPackage}
                            onChange={(e) => setSelectedPackage(e.target.value)}
                          >
                            <option value="basic">
                              Basic Package - $1,200
                            </option>
                            <option value="standard">
                              Standard Package - $2,200
                            </option>
                            <option value="premium">
                              Premium Package - $3,500
                            </option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Additional Information
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Tell us about your event, special requests, or questions..."
                          ></textarea>
                        </div>

                        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition !rounded-button whitespace-nowrap cursor-pointer">
                          Request Booking
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Photographer Profile */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-indigo-700 to-purple-700 p-6 text-white">
                <div className="flex flex-col items-center text-center">
                  <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-white mb-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520male%2520photographer%2520with%2520a%2520confident%2520smile%252C%2520neutral%2520studio%2520background%252C%2520professional%2520attire%252C%2520well-groomed%2520appearance%252C%2520high%2520quality%2520portrait&width=200&height=200&seq=9&orientation=squarish"
                      alt="John Anderson"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">John Anderson</h3>
                  <p className="text-indigo-200 mb-4">
                    Professional Photographer
                  </p>
                  <div className="flex space-x-3 mb-6">
                    <a
                      href="#"
                      className="text-white hover:text-indigo-200 cursor-pointer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-indigo-200 cursor-pointer"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-indigo-200 cursor-pointer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-indigo-200 cursor-pointer"
                    >
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                  <div className="w-full">
                    <button className="w-full bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-envelope mr-2"></i>
                      Contact John
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-gray-50 px-4 py-2 rounded-full">
                    <div className="flex items-center">
                      <i className="fas fa-camera text-indigo-600 mr-2"></i>
                      <span className="text-gray-700">
                        10+ Years Experience
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-2 rounded-full">
                    <div className="flex items-center">
                      <i className="fas fa-award text-indigo-600 mr-2"></i>
                      <span className="text-gray-700">Award-Winning</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-2 rounded-full">
                    <div className="flex items-center">
                      <i className="fas fa-graduation-cap text-indigo-600 mr-2"></i>
                      <span className="text-gray-700">Fine Arts Degree</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  About John
                </h3>
                <p className="text-gray-700 mb-4">
                  John Anderson is a passionate wedding and portrait
                  photographer with over 10 years of experience capturing life's
                  most precious moments. With a background in fine arts and a
                  keen eye for detail, John specializes in creating authentic,
                  emotional images that tell your unique story.
                </p>
                <p className="text-gray-700 mb-6">
                  His work has been featured in numerous wedding publications,
                  and he has received multiple awards for his artistic approach
                  to wedding photography. John's style blends photojournalism
                  with fine art portraiture, resulting in timeless images that
                  capture both the grand moments and intimate details of your
                  special day.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Equipment & Style
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <i className="fas fa-camera-retro"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Professional Gear
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Canon EOS R5, multiple prime lenses, professional
                        lighting equipment
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <i className="fas fa-paint-brush"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Artistic Approach
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Blend of photojournalism and fine art portraiture
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Book Your Wedding Photography?
                </h2>
                <p className="text-indigo-100 mb-8">
                  Secure your date now and let us capture the beautiful moments
                  of your special day. Our calendar fills up quickly, especially
                  during peak wedding season.
                </p>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      id="booking-date"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-package"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Select Package
                    </label>
                    <select
                      id="booking-package"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={selectedPackage}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                    >
                      <option value="basic">Basic Package - $1,200</option>
                      <option value="standard">
                        Standard Package - $2,200
                      </option>
                      <option value="premium">Premium Package - $3,500</option>
                    </select>
                  </div>

                  <button className="w-full bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition !rounded-button whitespace-nowrap cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 bg-indigo-900 p-8 md:p-12">
                <h3 className="text-xl font-bold text-white mb-4">
                  Have Questions?
                </h3>
                <p className="text-indigo-200 mb-6">
                  Contact us directly and we'll be happy to answer any questions
                  you may have about our wedding photography services.
                </p>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="What would you like to know?"
                    ></textarea>
                  </div>

                  <button className="w-full bg-indigo-500 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-600 transition !rounded-button whitespace-nowrap cursor-pointer">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Photography Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Photographer: {service.photographer}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-bold">
                      {service.price}
                    </span>
                    <a
                      href="https://readdy.ai/home/bcdd3814-0fce-4c39-9e2f-e221ce2b69ce/4b86dd28-1296-4a69-a1e5-b7dd046401d6"
                      data-readdy="true"
                      className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
                    >
                      View Details <i className="fas fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PhotographyServiceDetailsPage;
