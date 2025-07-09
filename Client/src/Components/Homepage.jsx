import homepageImage from "../assets/homepageimage.avif";
import image4 from "../assets/ChatGPT Image Jun 17, 2025, 12_56_55 PM.png";
import image3 from "../assets/ChatGPT Image Jun 17, 2025, 12_59_16 PM.png";
import image2 from "../assets/Moblieaccesories.png";
import image1 from "../assets/mensimage.png";
import ProductsList from "../Components/Products/ProductsList";
import { useEffect, useState } from "react";

const Homepage = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 px-4  sm:px-6 md:px-10">
      <div className="relative w-full rounded-2xl overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Homepage"
          className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover transition-all duration-500"
        />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 sm:top-1/2 sm:left-[15%] sm:translate-x-0 text-center sm:text-left text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl px-4">
          <h2>
            Grab Upto 50% off on <br className="hidden sm:block" />
            Selected Headphones
          </h2>
          <a
            href="/products"
            className="inline-block mt-4 bg-green-500 px-6 py-3 rounded-full text-white text-sm sm:text-base hover:shadow-green-300 hover:shadow-lg transition"
          >
            Buy Now
          </a>
        </div>
      </div>
      <div className="text-center mt-8">
        <a
          href="/products"
          className="inline-block bg-green-500 px-6 py-2 rounded-full text-white text-sm sm:text-base hover:bg-green-600 transition"
        >
          Start Shopping
        </a>
      </div>
      <div className="mt-8">
        <ProductsList />
      </div>
    </div>
  );
};

export default Homepage;
