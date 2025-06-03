import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../translations";
import Carousel from "../Components/Carousel";
import { useEffect } from "react";
// import { fetchServices } from "../Api/serviceApi";

const HomePage = () => {
  const { language } = useLanguage();
  // const [services, setServices] = useState([]);

  const translate = useTranslation(language);
  let currentSlide = 1;
  const totalSlides = 3;
  useEffect(() => {
    // const ser = fetchServices();

    const interval = setInterval(() => {
      currentSlide = (currentSlide % totalSlides) + 1;
      const radio = document.getElementById(`carousel-${currentSlide}`);
      if (radio) radio.checked = true;

      const slider = document.querySelector(".flex.transition-all");
      if (slider) {
        slider.style.transform = `translateX(-${(currentSlide - 1) * 33.333}%)`;
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // // Services data array
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main>
        {/* Stats Section */}
        {/* <Carousel /> */}

        {/* Service Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {translate("services")}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      {/* Footer */}
    </div>
  );
};

export default HomePage;
