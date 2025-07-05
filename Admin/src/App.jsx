import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Components/Products/Products";
import CreateProduct from "./Components/Products/CreateProduct";
import Homepage from "./Components/Homepage";
import EditProduct from "./Components/Products/EditProduct";
import UserDetail from "./Components/Users/UserDetail";
import OrderDetails from "./Components/Orders/OrderDetails";
import HomepageDetails from "./HomepageDetails";
import EditUser from "./Components/Users/EditUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} >
          <Route index element={<HomepageDetails />} />
            <Route path="products" element={<Products />} />
            <Route path="home" element={<HomepageDetails/>} />
            <Route path="userdetail" element={<UserDetail/>} />
            <Route path="orderdetail" element={<OrderDetails/>} />
            <Route path="products/create" element={<CreateProduct />} />
            <Route path="products/edit/:id" element={<EditProduct />} />
            <Route path="Users/edit/:id" element={<EditUser />} /></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
