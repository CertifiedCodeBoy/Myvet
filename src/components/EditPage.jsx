import React, { useState, useContext, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate hook directly from react-router-dom
import { ProductsContext } from '../contexts/ProductsContext';

const EditPage = () => {
  const { products, addProduct } = useContext(ProductsContext);
  const history = useNavigate(); // Initialize useHistory
  const { id } = useParams();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [sizes, setSizes] = useState([]);
  const [image, setImage] = useState(null);
  const [hoveredColorIndex, setHoveredColorIndex] = useState(null);
  const [hoveredSizeIndex, setHoveredSizeIndex] = useState(null);

  const handleColorAdd = () => {
    setColors([...colors, selectedColor]);
    setShowColorPicker(false);
  };

  const handleSizeAdd = () => {
    setSizes([...sizes, selectedSize]);
    setSelectedSize('');
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleColorDelete = (index) => {
    const updatedColors = [...colors];
    updatedColors.splice(index, 1);
    setColors(updatedColors);
  };

  const handleSizeDelete = (index) => {
    const updatedSizes = [...sizes];
    updatedSizes.splice(index, 1);
    setSizes(updatedSizes);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', name);
      formData.append('price', parseFloat(price));
      formData.append('description', description);
      formData.append('image', image);
      formData.append('category', "men's clothing");
      formData.append('colors', JSON.stringify(colors)); // Add colors to form data
      formData.append('sizes', JSON.stringify(sizes)); // Add sizes to form data

      const newProduct = {
        title: name,
        price: parseFloat(price),
        description,
        image,
        category: "men's clothing",
        colors,
        sizes,
      };

      await addProduct(newProduct);
      console.log('Product added successfully!');
      history("/SellerProfile");
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const product = products[id - 1];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            value={name}
            placeholder={product.title}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-800"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Price
          </label>
          <input
            type="text"
            value={price}
            placeholder={product.price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-800"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Description
          </label>
          <textarea
            value={description}
            placeholder={product.description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-800"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Colors
          </label>
          <div className="flex items-center">
            <button
              type="button"
              className="mr-2 p-2 rounded-full bg-gray-300 focus:outline-none"
              onClick={() => setShowColorPicker(!showColorPicker)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
            {showColorPicker && (
              <div className="absolute z-10">
                <SketchPicker
                  color={selectedColor}
                  onChange={(color) => setSelectedColor(color.hex)}
                />
                <button
                  type="button"
                  onClick={handleColorAdd}
                  className="bg-amber-800 text-white px-2 py-1 rounded-md mt-2 hover:bg-amber-950"
                >
                  Add Color
                </button>
              </div>
            )}
            {colors.map((color, index) => (
              <div
                key={index}
                className="flex items-center mr-2 relative"
                onMouseEnter={() => setHoveredColorIndex(index)}
                onMouseLeave={() => setHoveredColorIndex(null)}
              >
                <div
                  className="w-8 h-8 rounded-full mx-1"
                  style={{ backgroundColor: color }}
                ></div>
                {hoveredColorIndex === index && (
                  <button
                    type="button"
                    className="w-5 items-center absolute top-0 right-0 transform translate-x-2/4 -translate-y-2/4 text-gray-600 focus:outline-none"
                    onClick={() => handleColorDelete(index)}
                  >
                    X
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Sizes
          </label>
          <div className="flex items-center">
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-800 mr-2"
            >
              <option value="">Select Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="XXXL">XXXL</option>
            </select>
            <button
              type="button"
              onClick={handleSizeAdd}
              className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-950"
            >
              Add Size
            </button>
          </div>
          <div className="flex flex-wrap mt-2">
            {sizes.map((size, index) => (
              <div
                key={index}
                className="px-3 py-1 bg-gray-200 text-sm rounded-full mr-2 mb-2 relative"
                onMouseEnter={() => setHoveredSizeIndex(index)}
                onMouseLeave={() => setHoveredSizeIndex(null)}
              >
                {size}
                {hoveredSizeIndex === index && (
                  <button
                    type="button"
                    className="ml-1 text-gray-600 focus:outline-none"
                    onClick={() => handleSizeDelete(index)}
                  >
                    X
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 rounded-md focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-950"
        >
          Edit Product
        </button>
      </form>
    </div>
  );
};

export default EditPage;
