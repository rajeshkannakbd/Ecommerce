import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
    category: "",
    images: "",
    stock: "",
    rating: {
      rate: "",
      count: "",
    },
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Product/${id}`)
      .then((res) => {
        const product = res.data.product;
        // For rating, assume product.rating[0]
        const rating =
          Array.isArray(product.rating) && product.rating[0]
            ? product.rating[0]
            : { rate: 0, count: 0 };

        setFormData({
          title: product.title || "",
          desc: product.description || "",
          price: product.price || "",
          category: product.category || "",
          images: product.image || "",
          rating: {
            rate: rating.rate,
            count: rating.count,
          },
        });
      })
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        alert("Error loading product");
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["rate", "count"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        rating: { ...prev.rating, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        rating: [
          {
            rate: parseFloat(formData.rating.rate),
            count: parseInt(formData.rating.count),
          },
        ],
      };

      await axios.put(`http://localhost:5000/Product/${id}`, payload);
      alert("Product updated successfully.");
      navigate("/admin/dashboard/products");
    } catch (error) {
      console.error("Failed to update product:", error);
      alert("Update failed.");
    }
  };


  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl text-blue-600 font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <label htmlFor="title" className=" font-normal text-slate-500 text-lg -mb-3 ">Product Name : </label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2"
        />
         <label htmlFor="desc" className=" font-normal text-slate-500 text-lg -mb-3 ">Product Description : </label>
        <input
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2"
        />
         <label htmlFor="price" className=" font-normal text-slate-500 text-lg -mb-3 ">Product Price : </label>
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2"
        />
         <label htmlFor="category" className=" font-normal text-slate-500 text-lg -mb-3 ">Product Category : </label>
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="border p-2"
        />
          <label htmlFor="images" className=" font-normal text-slate-500 text-lg -mb-3 ">Product Image : </label>
        <input
          name="images"
          value={formData.images}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2"
        />
        <label htmlFor="rate" className=" font-normal text-slate-500 text-lg -mb-3 ">Product Ratings : </label>
        <input
          name="rate"
          type="number"
          value={formData.rating.rate}
          onChange={handleChange}
          placeholder="Rating"
          className="border p-2"
        />
        <label htmlFor="count" className=" font-normal text-slate-500 text-lg -mb-3 ">Product Count : </label>
        <input
          name="count"
          type="number"
          value={formData.rating.count}
          onChange={handleChange}
          placeholder="Rating Count"
          className="border p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
