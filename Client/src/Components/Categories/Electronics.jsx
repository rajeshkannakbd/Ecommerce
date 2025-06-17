import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App";


const Electronics = () => {
  const [products, setProducts] = useState([]);
  let [Electronics, setElectronics] = useState([]);
  const{cartItems,setCartItems}= useContext(cartContext)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        const men = data.filter(
          (product) => product.category === "electronics"
        );
        setElectronics(men);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
     const handleAdd = (product) => {
  setCartItems(prevItems => [...prevItems, product]);
};
 const cartIn = (id)=>{
  return cartItems.some((item)=>item.id === id)
 }
  return (
    <div className="py-36 px-12 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Electronics</h1>
      <div className="grid grid-cols-4 gap-6">
        {Electronics.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain p-4 bg-white"
            />
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold mb-1 truncate">
                {product.title}
              </h2>
              <p className="text-green-600 font-bold mb-2">
                ₹{(product.price * 83).toFixed(0)}
              </p>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between">
                <button
                  onClick={()=>{handleAdd(product)}}
                  disabled={cartIn(product.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-1 rounded"
                >
                  {cartIn(product.id)?"Added To Cart ":"Add To Cart"}
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
