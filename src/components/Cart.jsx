import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contexts/CartContext";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { ProductsContext } from "../contexts/ProductsContext";
import Loading from "./Loading";
import { Heart, Trash } from "phosphor-react";
import { Box, Skeleton, Heading, Text } from "@chakra-ui/react";
import PageNotFound from "./PageNotFound";
import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";

const Cart = () => {
  const { favorites, fetchFavorites, addFavorite, isFavorite } =
    useContext(FavoritesContext);
  const { cart, fetchCart, removeFromCart, loading, error } =
    useContext(CartContext);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [isInFavorites, setIsInFavorites] = useState(false);
  const { product, getProduct } = useContext(ProductsContext);
  const toast = useToast();

  useEffect(() => {
    fetchCart();
    getProduct();
  }, [CartContext]);

  const handleRemove = (item) => {
    removeFromCart(item);
    setTimeout(() => {
      fetchCart();
    }, 1000);
  };

  const handleBuy = () => {
    fetch("http://localhost:5000/cart/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        jwt: Cookies.get("jwt"),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 401) {
          throw new Error("Unauthorized: User is not logged in.");
        } else if (response.status === 404) {
          throw new Error(
            "Not Found: Cart is empty, product not found, seller not found, or product ran out of stock."
          );
        } else if (response.status === 500) {
          throw new Error(
            "Internal Server Error: An internal server error occurred."
          );
        } else {
          throw new Error("Purchase failed: " + response.statusText);
        }
      })
      .then((data) => {
        console.log("Purchase successful. Total Price:", data);
        fetchCart();
        toast({
          title: "Purchase successful",
          description: `Total Price: ${data.totalPrice}`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Failed to purchase:", error.message);
        toast({
          title: "Purchase failed",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
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
        <div
          className="
              h-screen
              flex
              justify-center
            "
        >
          <PageNotFound reason={"No Elements in cart"} />
        </div>
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
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSizeChange = (itemId, newSize) => {
    setSelectedSizes({ ...selectedSizes, [itemId]: newSize });
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setSelectedQuantities({ ...selectedQuantities, [itemId]: newQuantity });
  };

  const handleAddToFavorites = () => {
    console.log(product);
    // addFavorite(productId);
    setTimeout(() => {
      setIsInFavorites(!isInFavorites);
    }, 500);
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
            {cart.length > 0 &&
              cart.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 flex items-start rounded-lg relative ${
                    index === 0 ? "border-b border-gray-200" : ""
                  } ${
                    index === cart.length - 1 ? "border-t border-gray-200" : ""
                  } ${
                    index !== 0 && index !== cart.length - 1
                      ? "border-t border-b border-gray-200"
                      : ""
                  }`}
                >
                  {/* Product Image */}
                  <img
                    src={item.pic}
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
                        id={`size-${item.productId}`}
                        value={selectedSizes[item.productId] || ""}
                        onChange={(e) =>
                          handleSizeChange(item.productId, e.target.value)
                        }
                        className={`mr-4 text-gray-400`}
                        style={{
                          backgroundColor:
                            item.colors.color === "black"
                              ? "white"
                              : item.colors.color === "white"
                              ? "black"
                              : item.colors.color,
                          color:
                            item.colors.color === "black" ? "black" : "white",
                        }}
                      >
                        <option
                          value={`
                          ${item.colors.color === "black" ? "white" : "black"}
                        `}
                        >
                          {item.colors.sizes.value
                            ? item.colors.sizes.value
                            : item.colors.sizes.shoeSize}
                        </option>
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
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value)
                          )
                        }
                        className="mr-2 w-16 text-gray-400"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 flex items-center space-x-4 ml-40 mb-6 ">
                      {" "}
                      {/* Adjusted icon position */}
                      <button
                        onClick={handleAddToFavorites}
                        className="bg-transparent"
                      >
                        {isInFavorites ? (
                          <div className="flex items-center justify-center gap-4">
                            <Heart size={24} color="red" weight="fill" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <Heart size={24} />
                          </div>
                        )}
                      </button>
                      <Trash
                        size={24}
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleRemove(item)}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* Right side - Invoice */}
          <div className="mx-10">
            <h2 className="text-xl font-bold mb-4 ">Invoice</h2>
            <div className="border p-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>
                  $
                  {
                    // i want to print each product's price * quantity in the cart
                    cart.reduce(
                      (acc, item) =>
                        acc + item.price * (selectedQuantities[item.id] || 1),
                      0
                    )
                  }
                </span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between">
                <span>Total:</span>
                <span>${totalPrice}</span>
              </div>
              <button
                className="bg-primary text-white px-4 py-2 mt-4 w-full rounded-2xl"
                onClick={handleBuy}
              >
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
