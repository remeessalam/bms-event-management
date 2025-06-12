import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../translations";
import { Link } from "react-router-dom";
import { FaStar, FaHeart, FaAward } from "react-icons/fa";
import { FaHandshake, FaTools, FaGlobe } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { scroller } from "react-scroll";

const HomePage = () => {
  const { language } = useLanguage();
  // const [services, setServices] = useState([]);

  const translate = useTranslation(language);
  const services = [
    {
      id: 1,
      name: "cateringService",
      path: "/catering-service",
      imageUrl:
        "https://readdy.ai/api/search-image?query=elegant%20wedding%20catering%20service%20with%20beautifully%20arranged%20food%20on%20a%20white%20table%20with%20soft%20lighting%20and%20minimal%20decoration%2C%20professional%20catering%20setup%20with%20high-end%20tableware&width=400&height=200&seq=1&orientation=landscape",
      count: 8,
      description:
        "Food services for events including buffets, plated meals, and specialty cuisines",
    },
    {
      id: 2,
      name: "decorations",
      path: "/decorations",
      imageUrl:
        "https://readdy.ai/api/search-image?query=professional%20event%20decoration%20service%20with%20elegant%20floral%20arrangements%2C%20stylish%20chair%20covers%20and%20table%20settings%20for%20a%20wedding%20reception%2C%20soft%20lighting%20and%20minimal%20background&width=400&height=200&seq=2&orientation=landscape",
      count: 5,
      description:
        "Event decoration services including themes, floral arrangements, and lighting",
    },
    {
      id: 3,
      name: "photographyServices",
      path: "/photography-services",
      imageUrl:
        "https://readdy.ai/api/search-image?query=professional%20event%20photographer%20capturing%20a%20special%20moment%20at%20a%20corporate%20event%2C%20high-end%20camera%20equipment%2C%20elegant%20venue%20with%20soft%20lighting%20and%20minimal%20background%20decoration&width=400&height=200&seq=3&orientation=landscape",
      count: 4,
      description:
        "Professional photography services for capturing special moments at events",
    },
    {
      id: 4,
      name: "soundAndDjServices",
      path: "/sound-and-dj-services",
      imageUrl:
        "https://readdy.ai/api/search-image?query=professional%20sound%20system%20and%20DJ%20equipment%20setup%20for%20an%20event%20venue%2C%20high-quality%20speakers%20and%20mixing%20console%2C%20elegant%20venue%20with%20soft%20lighting%20and%20minimal%20background%20decoration&width=400&height=200&seq=4&orientation=landscape",
      count: 3,
      description:
        "Audio equipment, DJ services, and music arrangements for events",
    },
    {
      id: 5,
      name: "venues",
      path: "/venues",
      imageUrl:
        "https://readdy.ai/api/search-image?query=luxury%20event%20venue%20with%20elegant%20decorations%2C%20spacious%20hall%20with%20round%20tables%20and%20chairs%20set%20up%20for%20a%20formal%20event%2C%20soft%20lighting%20and%20minimal%20background%20decoration&width=400&height=200&seq=5&orientation=landscape",
      count: 6,
      description:
        "Event spaces including banquet halls, outdoor venues, and conference rooms",
    },
    {
      id: 6,
      name: "invitation",
      path: "/invitation",
      imageUrl:
        "https://readdy.ai/api/search-image?query=professional%20event%20invitation%20cards%20and%20printed%20materials%2C%20elegant%20stationery%20with%20custom%20designs%2C%20arranged%20on%20a%20white%20table%20with%20soft%20lighting%20and%20minimal%20background%20decoration&width=400&height=200&seq=6&orientation=landscape",
      count: 2,
      description:
        "Custom invitation design, printing, and digital invitation services",
    },
  ];

  const scrollToServices = () => {
    scroller.scrollTo("services", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -150, // adjust if you have a fixed navbar
    });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <div className="relative min-h-[800px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=luxurious%20grand%20ballroom%20with%20crystal%20chandeliers%2C%20elegant%20floral%20arrangements%2C%20sophisticated%20event%20setup%20with%20dramatic%20lighting%2C%20high%20ceiling%20with%20architectural%20details%2C%20perfect%20for%20high%20end%20events%20and%20celebrations&width=1440&height=800&seq=10&orientation=landscape')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
            <div className="max-w-3xl text-white z-10">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
                Crafting Extraordinary Events
              </h1>
              <p className="text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
                Transform your vision into unforgettable experiences with
                V-ZOLVE's premium planning platform and exclusive vendor
                network.
              </p>
              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={scrollToServices}
                  className="bg-white text-indigo-900 px-8 py-4 text-lg rounded-md font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer shadow-lg"
                >
                  <i className="fas fa-calendar-alt mr-3"></i>
                  Start Planning Now
                </button>
                <Link
                  to={"/vendor"}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 text-lg rounded-md font-semibold hover:bg-white/10 transition-all transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-store mr-3"></i>
                  Join as Vendor
                </Link>
              </div>
              <div className="mt-16 flex items-center space-x-8">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center border-2 border-white">
                    <FaStar className="text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center border-2 border-white">
                    <FaHeart className="text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-indigo-700 flex items-center justify-center border-2 border-white">
                    <FaAward className="text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold">
                    Trusted by 10,000+ Event Planners
                  </p>
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <span className="ml-2 text-gray-300">5.0 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style>
            {`
@keyframes fadeIn {
from { opacity: 0; transform: translateY(20px); }
to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
animation: fadeIn 1s ease-out;
}
`}
          </style>
        </div>
        {/* About Us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">About V-ZOLVE</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              We connect event planners with the perfect vendors to create
              memorable experiences for any occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandshake className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Trusted Partnerships
              </h3>
              <p className="text-gray-600">
                We carefully vet all vendors on our platform to ensure quality
                service for every event.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaTools className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Powerful Tools
              </h3>
              <p className="text-gray-600">
                Our platform provides comprehensive tools for planning,
                budgeting, and managing your events.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGlobe className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Connect with vendors and plan events anywhere in the world with
                our extensive network.
              </p>
            </div>
          </div>
        </div>
        {/* How It Works Section */}
        <div className="bg-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-6"></div>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                Our simple process makes event planning stress-free and
                enjoyable.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center h-full">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Create Account
                  </h3>
                  <p className="text-gray-600">
                    Sign up and complete your profile with your event
                    preferences.
                  </p>
                </div>
                {/* <div className="hidden md:block absolute top-12 right-0 w-full h-1 bg-indigo-200 transform translate-x-1/2 z-0"></div> */}
              </div>
              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center h-full">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Browse Vendors
                  </h3>
                  <p className="text-gray-600">
                    Explore our curated list of vendors filtered by your needs.
                  </p>
                </div>
                {/* <div className="hidden md:block absolute top-12 right-0 w-full h-1 bg-indigo-200 transform translate-x-1/2 z-0"></div> */}
              </div>
              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center h-full">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Book Services
                  </h3>
                  <p className="text-gray-600">
                    Connect with vendors and secure their services for your
                    event.
                  </p>
                </div>
                {/* <div className="hidden md:block absolute top-12 right-0 w-full h-1 bg-indigo-200 transform translate-x-1/2 z-0"></div> */}
              </div>
              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center h-full">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Enjoy Your Event
                  </h3>
                  <p className="text-gray-600">
                    Relax as our vendors deliver exceptional service for your
                    special day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Featured Categories */}
        <main>
          {/* Service Categories */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {translate("services")}
              </h2>
            </div>
            <div
              id="services"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer"
                >
                  <Link to={service.path} data-readdy="true">
                    <div
                      className="h-40 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${service.imageUrl}')`,
                      }}
                    ></div>
                  </Link>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {translate(service.name)}
                      </h3>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {service.count} Services
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">
                      {service.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <Link
                        to={service.path}
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        View Details
                      </Link>
                      <div className="flex space-x-2">
                        <button className="text-gray-500 hover:text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="text-gray-500 hover:text-red-600 !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        {/* Testimonials Section */}
        <div className="bg-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">What Our Clients Say</h2>
              <div className="w-24 h-1 bg-white mx-auto mt-4 mb-6"></div>
              <p className="max-w-3xl mx-auto text-lg text-indigo-200">
                Hear from event planners and vendors who have used our platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-yellow-400 flex mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="italic mb-6">
                  "V-ZOLVE made planning my daughter's wedding so much easier.
                  We found amazing vendors all in one place and saved so much
                  time!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mr-4">
                    <FaUser className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-indigo-200 text-sm">Wedding Planner</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-yellow-400 flex mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="italic mb-6">
                  "As a catering business, joining V-ZOLVE has increased our
                  bookings by 40%. The platform is intuitive and client
                  communication is seamless."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mr-4">
                    <FaUser className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Rodriguez</h4>
                    <p className="text-indigo-200 text-sm">
                      Gourmet Catering Co.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-yellow-400 flex mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="italic mb-6">
                  "Our corporate event was a huge success thanks to the vendors
                  we found through V-ZOLVE. The quality of service exceeded our
                  expectations."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mr-4">
                    <FaUser className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Jennifer Lee</h4>
                    <p className="text-indigo-200 text-sm">
                      Corporate Event Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-12 flex items-center">
                <div className="text-white">
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Create Your Perfect Event?
                  </h2>
                  <p className="text-indigo-100 mb-8">
                    Join thousands of event planners who have successfully used
                    V-ZOLVE to create memorable experiences.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                      to="/login"
                      className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="md:w-1/2 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20event%20planning%20concept%20with%20people%20discussing%20over%20event%20details%2C%20professional%20event%20planners%20working%20together%2C%20luxury%20venue%20with%20minimal%20decoration%20and%20sophisticated%20atmosphere%20in%20background&width=600&height=400&seq=8&orientation=landscape')`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default HomePage;
