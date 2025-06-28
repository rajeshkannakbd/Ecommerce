import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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
import AdminRoutes from "./Components/Producted/AdminRoutes";
import UserDetails from "./Components/Authentification/UserDetails";
import Dasboard from "./Components/Admin/Dasboard";
import Products from "./Components/Admin/Products";
import CreateProduct from "./Components/Admin/CreateProduct";
import ProtectedRoute from "./Components/Authentification/ProtectedRoute";
import DasboardLayout from "./Components/Admin/DasboardLayout";
import ProductsDetailPage from "./Components/Products/ProductsDetailPage";
import NewProducts from "./Components/Categories/NewProducts";
import MainLayout from "./Components/Layots/Mainlayout";

export const Totalcontext = createContext();
export const cartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
});
export const searchContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState([]);
  const [search, setSearch] = useState("");
  const [isAunthencate, setIsAuthencate] = useState(false);
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");

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
      }}
    >
      <Totalcontext.Provider value={{ total, setTotal }}>
        <searchContext.Provider value={{ search, setSearch }}>
        
            <Routes>
              {/* Main public routes layout */}
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Homepage />} />
                <Route path="products" element={<ProductsList />} />
                <Route path="men" element={<MensClothing />} />
                <Route path="women" element={<WomensClothing />} />
                <Route path="electronics" element={<Electronics />} />
                <Route path="jewelery" element={<Jewelery />} />
                <Route path="signup" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="latestProducts" element={<NewProducts />} />
                <Route path="ProductDetail/:id" element={<ProductsDetailPage />} />
                <Route path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                <Route path="order" element={<ProtectedRoute><Order /></ProtectedRoute>} />
                <Route path="search" element={<Search />} />
                <Route path="userdetails" element={<ProtectedRoute><UserDetails /></ProtectedRoute>} />
              </Route>

              {/* Admin routes (optional layout) */}
              {/* <Route path="/admin/dashboard" element={<AdminRoutes><DasboardLayout /></AdminRoutes>}>
                <Route index element={<Dasboard />} />
                <Route path="products" element={<Products />} />
                <Route path="products/create" element={<CreateProduct />} />
              </Route> */}
            </Routes>
      
        </searchContext.Provider>
      </Totalcontext.Provider>
    </cartContext.Provider>
  );
}

export default App;
