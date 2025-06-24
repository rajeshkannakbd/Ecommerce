import React, { useContext, useEffect, useState } from "react";
import { searchContext } from "../../App";
import { cartContext } from "../../App";

const Search = () => {
  const { search } = useContext(searchContext);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const{cartItems,setCartItems} = useContext(cartContext)
  useEffect(() => {
    // Fetch products from API
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => setProducts(data.product));
  }, []);

  useEffect(() => {
    const results = products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [search, products]);

   const handleAdd = (product) => {
  setCartItems(prevItems => [...prevItems, product]);
};

  const isInCart = (id)=>{
  return cartItems.some((item)=>item.id === id)
}


  return (
    <div className="p-4 relative top-32">
      <h1 className="text-2xl font-bold mb-4">{search.length <= 0 ? "":`Search Results for: "${search}"`}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.length > 0 ? (
          filtered.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.title}
              className="h-48 w-full object-contain p-4 bg-white"
            />
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold mb-1 truncate">
                {product.title}
              </h2>
              <p className="text-green-600 font-bold mb-2">
                ₹{(product.price *3 ).toFixed(0)}
              </p>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between">
               <button
                    onClick={()=>handleAdd(product)}
                    disabled={isInCart(product.id)}
                    className="bg-yellow-500 disabled:bg-yellow-600 hover:bg-yellow-600 text-white text-sm px-3 py-1 rounded"
                  >
                    {isInCart(product.id) ? "Added To Cart" : "Add To Cart"}
                  </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))
        ) : (
          <p className=" text-nowrap">No matching products found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
