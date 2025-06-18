import homepageImage from "../assets/homepageimage.avif";
import image4 from "../assets/ChatGPT Image Jun 17, 2025, 12_56_55 PM.png"
import image3 from"../assets/ChatGPT Image Jun 17, 2025, 12_59_16 PM.png"
import image2 from "../assets/Moblieaccesories.png"
import image1 from "../assets/mensimage.png"
import ProductsList from "./ProductsList";
import { useEffect, useState } from "react";

const Homepage = () => {
  const images = [image1, image2, image3,image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen top-32 rounded-full transition-all duration-1000 ease-in-out">
      <img
        src={images[currentIndex]}
        alt="Homepage"
        className="h-[600px] w-[90%] mx-auto top-2 opacity-90 rounded-3xl object-cover transition-all duration-1000 ease-in-out"
      />

      <div className="absolute top-[30%] left-[30%] transform -translate-x-1/2 text-white font-bold text-4xl p-4">
        <h2>
          Grab Upto 50% off on <br />
          Selected Headphones
        </h2>
        <button className="rounded-full bg-green-500 text-2xl p-4 mt-3 hover:shadow-green-300 hover:shadow-lg">
          <a href="/products">Buy Now</a>
        </button>
      </div>

      <center>
        <button className="bg-green-500 mx-2 p-2 m-6 rounded-full">
          <a href="/products">Start Shopping</a>
        </button>
      </center>

      <ProductsList />
    </div>
  );
};

export default Homepage;
