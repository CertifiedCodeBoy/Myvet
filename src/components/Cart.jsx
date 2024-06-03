import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contexts/CartContext";
import Loading from "./Loading";
import { Heart, Trash } from "phosphor-react";
import { Box, Skeleton, Heading, Text } from "@chakra-ui/react";

const Cart = () => {

  const { cart, fetchCart, removeFromCart, loading, error } = useContext(CartContext);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedQuantities, setSelectedQuantities] = useState({});


  
  useEffect(() => {
    fetchCart();
  }, [CartContext]);

  const handleRemove = (item) => {
    removeFromCart(item);
    setTimeout(() => {
      fetchCart();
    }, 1000);
  };

  if (loading) {
    return (
      <Box>
        <Skeleton
          isLoaded={!loading}
          startColor="gray.200"
          endColor="gray.300"
          height="90px"
        />
      </Box>
    );
  }

  if (!cart || cart.length === 0 || error == "Cart is empty") {
    return (
      <Box>
        <Heading as="h1" size="xl" textAlign="center" my={10}>
          Cart
        </Heading>
        <Text textAlign="center">No items in cart yet</Text>
      </Box>
    );
  }

  // useEffect(() => {
  //   fetch('http://localhost:5000/Cart', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       jwt: Cookies.get("jwt"),
  //     },
  //   })

  //     .then((res) => res.json())
  //     .then((data) => {
  //       setcart(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }, []);

  // const cart = [
  //   {
  //     id: 1,
  //     name: 'Product 1',
  //     price: 50,
  //     quantity: 1,
  //     size: 'M',
  //     category: 'Category 1',
  //     image: 'https://via.placeholder.com/200', // Replace with actual image URL
  //   },
  //   {
  //     id: 2,
  //     name: 'Product 2',
  //     price: 70,
  //     quantity: 1,
  //     size: 'L',
  //     category: 'Category 2',
  //     image: 'https://via.placeholder.com/200', // Replace with actual image URL
  //   },
  //   {
  //     id: 3,
  //     name: 'Product 3',
  //     price: 90,
  //     quantity: 1,
  //     size: 'S',
  //     category: 'Category 3',
  //     image: 'https://via.placeholder.com/200', // Replace with actual image URL
  //   },

  // ];

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * (selectedQuantities[item.id] || 1), 0);

  const handleSizeChange = (itemId, newSize) => {
    setSelectedSizes({ ...selectedSizes, [itemId]: newSize });
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setSelectedQuantities({ ...selectedQuantities, [itemId]: newQuantity });
  };

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-4/5 lg:w-3/4 px-4 py-8 ">
        {" "}
        {/* Increased width */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Cart</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {" "}
          {/* Adjusted grid columns */}
          {/* Left side - Cart Items */}
          <div className="mr-10">
            { cart.length > 0 &&            
            cart.map((item, index) => (
              <div
                key={index}
                className={`p-6 flex items-start rounded-lg relative ${
                  index === 0 ? "border-b border-gray-200" : ""
                } ${
                  index === cart.length - 1
                    ? "border-t border-gray-200"
                    : ""
                } ${
                  index !== 0 && index !== cart.length - 1
                    ? "border-t border-b border-gray-200"
                    : ""
                }`}
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover mr-4"
                  style={{ marginLeft: "-1rem" }}
                />{" "}
                {/* Adjusted image position */}
                {/* Product Info */}
                <div>
                  <div className="mb-2 flex">
                    <h3 className="font-bold mb-2">{item.name}</h3>
                    <h3 className="font-bold ml-12">${item.price}</h3>
                  </div>
                  <p className="text-gray-400">{item.category}</p>
                  <div className="flex items-center mb-2 mt-3 ">
                    <select
                      id={`size-${item.id}`}
                      value={selectedSizes[item.id] || ""}
                      onChange={(e) =>
                        handleSizeChange(item.id, e.target.value)
                      }
                      className="mr-4 text-gray-400 "
                    >
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                    <label
                      htmlFor={`quantity-${item.id}`}
                      className="mr-2 text-gray-400"
                    >
                      Quantity:
                    </label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      value={selectedQuantities[item.id] || 1}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="mr-2 w-16 text-gray-400"
                    />
                  </div>
                  <div
                    className="absolute bottom-0 right-0 flex items-center space-x-4 ml-40 mb-6 "
                  >
                    {" "}
                    {/* Adjusted icon position */}
                    <Heart size={24} className="text-amber-0 cursor-pointer" />
                    <Trash size={24} className="text-red-500 cursor-pointer" onClick={() => handleRemove(item)} />
                  </div>
                </div>
              </div>
            ))
          }
          </div>
          {/* Right side - Invoice */}
          <div className="mx-10">
            <h2 className="text-xl font-bold mb-4 ">Invoice</h2>
            <div className="border p-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>$10</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between">
                <span>Total:</span>
                <span>${totalPrice + 10}</span>
              </div>
              <button className="bg-primary text-white px-4 py-2 mt-4 w-full rounded-2xl">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
