import React, { useState, useContext, useEffect } from "react";
import { SketchPicker } from "react-color";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";
import { useTimeout, Flex } from "@chakra-ui/react";

const EditPage = () => {
  const history = useNavigate();
  const { id } = useParams();
  const { getProduct, product, updateProduct, setError, error } =
    useContext(ProductsContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [colors, setColors] = useState([]);
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [image, setImage] = useState(null);
  const [hoveredColorIndex, setHoveredColorIndex] = useState(null);

  useEffect(() => {
    getProduct(id);
  }, []);

  useTimeout(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
      setColors(product.colors);
      setCategory(product.category);
      setGender(product.gender);
      setAge(product.age);
    }
  }, 500);

  const handleColorAdd = () => {
    setColors([
      ...colors,
      {
        color: selectedColor,
        sizes: ["S", "M", "L", "XL", "XXL"].map((size) => ({
          value: size,
          shoeSize: "",
          inStock: 0,
        })),
      },
    ]);
    setShowColorPicker(false);
  };

  const handleColorChange = (index, newColor) => {
    const updatedColors = colors.map((color, i) =>
      i === index ? { ...color, color: newColor.hex } : color
    );
    setColors(updatedColors);
  };

  const handleColorDelete = (index) => {
    const updatedColors = [...colors];
    updatedColors.splice(index, 1);
    setColors(updatedColors);
  };

  const handleSizeStockChange = (colorIndex, sizeIndex, newStock) => {
    const updatedColors = colors.map((color, i) => {
      if (i === colorIndex) {
        const updatedSizes = color.sizes.map((size, j) =>
          j === sizeIndex ? { ...size, inStock: parseInt(newStock) } : size
        );
        return { ...color, sizes: updatedSizes };
      }
      return color;
    });

    setColors(updatedColors);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filteredColors = colors.map((color) => ({
      color: color.color,
      sizes: color.sizes.filter((size) => size.inStock > 0),
    }));

    const productData = {
      name,
      price: Number(price),
      description,
      colors: filteredColors,
      category,
      gender,
      age,
      pic: image ? image.name : "",
    };

    try {
      await updateProduct(id, productData);
      history("/");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Edit Product</h1>
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
            Product Colors and Sizes
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
          </div>
          <div className="flex flex-wrap mt-2">
            {colors.map((color, colorIndex) => (
              <div key={colorIndex} className="mb-4 w-full">
                <div className="flex items-center mb-2">
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: color.color }}
                  ></div>
                  <button
                    type="button"
                    className="ml-2 text-red-600 focus:outline-none"
                    onClick={() => handleColorDelete(colorIndex)}
                  >
                    X
                  </button>
                </div>
                <div className="flex flex-wrap">
                  {color.sizes.map((size, sizeIndex) => (
                    <div
                      key={sizeIndex}
                      className="flex items-center mr-2 mb-2"
                    >
                      <div className="mr-2">{size.value || size.shoeSize}</div>
                      <input
                        type="number"
                        value={size.inStock}
                        onChange={(e) =>
                          handleSizeStockChange(colorIndex, sizeIndex, e.target.value)
                        }
                        className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-amber-800"
                      />
                    </div>
                  ))}
                </div>
              </div>
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
            <option value="Kids">Kids</option>
            <option value="Adults">Adults</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-950"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
