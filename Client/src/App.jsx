import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import ProductsList from "./Components/Products/ProductsList";
import MensClothing from "./Components/Categories/MensClothing";
import WomensClothing from "./Components/Categories/WomensClothing";
import Electronics from "./Components/Categories/Electronics";
import Jewelery from "./Components/Categories/Jewelery";
import Register from "./Components/Authentification/Register";
import Login from "./Components/Authentification/Login";
import Order from "./Components/Order/Order";
import Cart from "./Components/Cart/Cart";
import Search from "./Components/Categories/Search";
import UserDetails from "./Components/Authentification/UserDetails";
import ProtectedRoute from "./Components/Authentification/ProtectedRoute";
import ProductsDetailPage from "./Components/Products/ProductsDetailPage";
import NewProducts from "./Components/Categories/NewProducts";
import MainLayout from "./Components/Layots/Mainlayout";
import OrderHistoy from "./Components/Order/OrderHistoy";

export const Totalcontext = createContext();
export const cartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
});
export const searchContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart from localStorage if it exists
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [total, setTotal] = useState([]);
  const [search, setSearch] = useState("");
  const [isAunthencate, setIsAuthencate] = useState(false);
  const [userName, setUserName] = useState("");
  const [useremail, setUseremail] = useState("");
  const [role, setRole] = useState("");
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <cartContext.Provider
      value={{
        cartItems,
        setCartItems, 
        isAunthencate,
        setIsAuthencate,
        userName,
        setUserName,
        role,
        setRole,
        useremail,
        setUseremail,
      }}
    >
      <Totalcontext.Provider value={{ total, setTotal }}>
        <searchContext.Provider value={{ search, setSearch }}>
          <Routes>
             <Route path="/" element={<MainLayout />}>
              <Route index element={<Homepage />} />
              <Route path="products" element={<ProductsList />} />
              <Route path="men" element={<MensClothing />} />
              <Route path="women" element={<WomensClothing />} />
              <Route path="electronics" element={<Electronics />} />
              <Route path="jewelery" element={<Jewelery />} />
              <Route path="signup" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="/userdetails" element={<UserDetails />} />
              <Route path="latestProducts" element={<NewProducts />} />
              <Route
                path="ProductDetail/:id"
                element={<ProductsDetailPage />}
              />
              <Route
                path="cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="order"
                element={
                  <ProtectedRoute>
                    <Order />
                  </ProtectedRoute>
                }
              />
              <Route path="search" element={<Search />} />
              <Route
                path="orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoy />
                  </ProtectedRoute>
                }
              />
              <Route
                path="userdetails"
                element={
                  <ProtectedRoute>
                    <UserDetails />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </searchContext.Provider>
      </Totalcontext.Provider>
    </cartContext.Provider>
  );
}

export default App;
