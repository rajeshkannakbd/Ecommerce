import homepageImage from "../assets/homepageimage.avif";
import ProductsList from "./ProductsList";

const Homepage = () => (
  <div className="relative h-screen top-32 rounded-full">


    <img
      src={homepageImage}
      alt="Homepage"
      className="h-[600px] w-[90%] mx-auto  top-2 opacity-90 rounded-3xl object-cover "
    />

           
    <div className="absolute top-[30%]  left-[30%] transform -translate-x-1/2 text-white font-bold text-4xl p-4">
      <h2>
        Grab Upto 50% off on <br />
        Selected Headphones
      </h2>
      <button className=" rounded-full bg-green-500 text-2xl p-4 mt-3 hover:shadow-green-300 hover:shadow-lg   ">
        <a href="/products">Buy Now</a>
      </button>
    </div>
    <center>
      <button className=" bg-green-500 mx-2 p-2 m-6 rounded-full">
        <a href="/products">Start Shopping</a>
      </button>
    </center>
    <ProductsList/>
  </div>
);

export default Homepage;
