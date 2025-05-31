import { useState, useEffect } from "react";

const Carousel = () => {
  const images = [
    "https://readdy.ai/api/search-image?query=elegant%20wedding%20catering%20service%20with%20beautifully%20arranged%20food%20on%20a%20white%20table%20with%20soft%20lighting%20and%20minimal%20decoration%2C%20professional%20catering%20setup%20with%20high-end%20tableware&width=400&height=200&seq=1&orientation=landscape",
    "https://readdy.ai/api/search-image?query=professional%20event%20decoration%20service%20with%20elegant%20floral%20arrangements%2C%20stylish%20chair%20covers%20and%20table%20settings%20for%20a%20wedding%20reception%2C%20soft%20lighting%20and%20minimal%20background&width=400&height=200&seq=2&orientation=landscape",
    "https://readdy.ai/api/search-image?query=professional%20event%20photographer%20capturing%20a%20special%20moment%20at%20a%20corporate%20event%2C%20high-end%20camera%20equipment%2C%20elegant%20venue%20with%20soft%20lighting%20and%20minimal%20background%20decoration&width=400&height=200&seq=3&orientation=landscape",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-screen max-w-none mx-auto">
      <div className="relative h-full">
        <div className="overflow-hidden h-full">
          <div
            className="flex transition-all duration-500 h-full"
            style={{
              width: `${images.length * 100}%`,
              transform: `translateX(-${
                currentIndex * (100 / images.length)
              }%)`,
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ width: `${100 / images.length}%` }}
              />
            ))}
          </div>
        </div>
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full border border-gray-400 cursor-pointer transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
