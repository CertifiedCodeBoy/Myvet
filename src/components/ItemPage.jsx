import React, { useState, useContext } from "react";
import { SketchPicker } from "react-color";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook directly from react-router-dom
import { ProductsContext } from "../contexts/ProductsContext";
import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const ItemPage = () => {
  const { addProduct } = useContext(ProductsContext);
  //getting sellerId from params
  const { id } = useParams();
  const history = useNavigate(); // Initialize useHistory

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [colors, setColors] = useState([]);
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [sizes, setSizes] = useState([]);
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [hoveredColorIndex, setHoveredColorIndex] = useState(null);
  const [hoveredSizeIndex, setHoveredSizeIndex] = useState(null);

  const handleColorAdd = () => {
    setColors([...colors, selectedColor]);
    setShowColorPicker(false);
  };

  const handleSizeAdd = () => {
    setSizes([...sizes, selectedSize]);
    setSelectedSize("");
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
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

    const product =
      category == "Shoe"
        ? {
            name: name,
            price: Number(price),
            description: description,
            colors: colors.map((color) => ({
              color: color,
              sizes: sizes.map((size) => ({
                value: "",
                shoeSize: size, // Assuming you have a state for this
                inStock: stock, // Assuming you have a state for this
              })),
            })),
            category: category, // Assuming you have a state for this
            gender: gender, // Assuming you have a state for this
            age: age, // Assuming you have a state for this
            pic: image, // Assuming image is a string URL
          }
        : {
            name: name,
            price: Number(price),
            pic: image, // Assuming image is a string URL
            category: category, // Assuming you have a state for this
            gender: gender, // Assuming you have a state for this
            age: age, // Assuming you have a state for this
            colors: colors.map((color) => ({
              color: color,
              sizes: sizes.map((size) => ({
                value: size,
                shoeSize: "", // Assuming you have a state for this
                inStock: stock, // Assuming you have a state for this
              })),
            })),
          };
          
    console.log(product);

    try {
      await addProduct(product, id);
      history("/"); // Use history to navigate back to the homepage
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

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
                {/* hoveredColorIndex === index */}
                {true && (
                  <button
                    type="button"
                    className="w-5 items-center absolute top-0 right-0 transform translate-x-2/4 -translate-y-2/4 text-red-600 focus:outline-none"
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
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-800"
          >
            <option value="">Select Category</option>
            <option value="Shoe">Shoe</option>
            <option value="Pants">Pants</option>
            <option value="Hoodie">Hoodie</option>
            <option value="TShirt">TShirt</option>
            <option value="Jacket">Jacket</option>
            <option value="Sweater">Sweater</option>
            <option value="Shorts">Shorts</option>
            <option value="Skirt">Skirt</option>
            <option value="Dress">Dress</option>
            <option value="Hidjeb">Hidjeb</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Sizes
          </label>
          <div className="flex items-center">
            {category == "Shoe" ? (
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-800 mr-2"
              >
                <option value="">Select Size</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
              </select>
            ) : (
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
              </select>
            )}
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
              <Flex
                key={index}
                alignItems="center"
                className="mb-2"
                dir="column"
                justifyItems={"center"}
                placeItems={"center"}
              >
                <div
                  className="px-3 py-1 bg-gray-200 text-sm rounded-full mr-2 relative"
                  onMouseEnter={() => setHoveredSizeIndex(index)}
                  onMouseLeave={() => setHoveredSizeIndex(null)}
                >
                  {size}
                  {/*hoveredSizeIndex === index*/}
                  {true && (
                    <>
                      <button
                        type="button"
                        className="ml-2 text-red-600 focus:outline-none"
                        onClick={() => handleSizeDelete(index)}
                      >
                        X
                      </button>
                    </>
                  )}
                </div>
                <input
                  type="text"
                  className="px-2 py-1 m-1 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                  placeholder="Stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </Flex>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-800"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Age
          </label>
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-800"
          >
            <option value="">Select Age</option>
            <option value="Adult">Adult</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Image
          </label>
          <input
            type="text"
            onChange={handleImageChange}
            value={image}
            className="w-full px-4 py-2 rounded-md focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-950"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ItemPage;
