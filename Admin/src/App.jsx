import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Products/Dashboard";
import DasboardLayout from "./Components/Products/Dashboardlayout";
import Products from "./Components/Products/Products";
import CreateProduct from "./Components/Products/CreateProduct";
import DashboardHome from "./DashboardHome";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin/dashboard" element={<DasboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="products/create" element={<CreateProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
