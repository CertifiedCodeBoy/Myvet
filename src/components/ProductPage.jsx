import React, { useState, useEffect, useContext, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";
import { UserContext } from "../contexts/UserContext";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { CartContext } from "../contexts/CartContext";
import { Tag, Text, Toast, useToast } from "@chakra-ui/react";
import { Heart } from "phosphor-react";
import Loading from "./Loading";

const findHex = (hex) => {
  const namedColors = {
    black: "#000000",
    white: "#FFFFFF",
    red: "#FF0000",
    green: "#008000",
    blue: "#0000FF",
    yellow: "#FFFF00",
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    // Add more named colors here...
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  const colorDistance = (color1, color2) => {
    return Math.sqrt(
      Math.pow(color2.r - color1.r, 2) +
        Math.pow(color2.g - color1.g, 2) +
        Math.pow(color2.b - color1.b, 2)
    );
  };

  const findClosestColorName = (hex) => {
    const rgb = hexToRgb(hex);
    let closestColorName = "";
    let minDistance = Infinity;

    for (const [name, hexValue] of Object.entries(namedColors)) {
      const namedRgb = hexToRgb(hexValue);
      const distance = colorDistance(rgb, namedRgb);
      if (distance < minDistance) {
        minDistance = distance;
        closestColorName = name;
      }
    }

    return closestColorName;
  };

  const hexColor = hex;
  const colorName = findClosestColorName(hexColor);
  return colorName;
};

const ProductPage = () => {
  const { user, isLoggedIn } = useContext(UserContext);
  const { favorites, fetchFavorites, addFavorite, isFavorite } =
    useContext(FavoritesContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const { getProduct, loading } = useContext(ProductsContext);
  const toast = useToast();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [rating, setRating] = useState(0);
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [comment, setComment] = useState();
  const [comments, setComments] = useState([]);
  const [product, setProduct] = useState(null);
  const [isInFavorites, setIsInFavorites] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setIsInFavorites(isFavorite);
    const fetchProduct = async () => {
      const data = await getProduct(id);
      setProduct(data.result);
      setIsInFavorites(data.isFavorite);
      setComments(data.result.comments);
    };
    fetchProduct();
  }, [FavoritesContext, id, isFavorite, ProductsContext]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedSize(""); // Reset size when color changes
  };

  const handleAddToCart = async (id) => {
    const productDetails =
      product.category === "Shoe"
        ? {
            ProductId: product._id,
            colors: {
              sizes: {
                value: "",
                ShoeSize: selectedSize,
              },
              color: selectedColor,
            },
            quantity: quantity,
          }
        : {
            ProductId: product._id,
            colors: {
              sizes: {
                value: selectedSize,
                ShoeSize: null,
              },
              color: selectedColor,
            },
            quantity: quantity,
          };

    toast({
      title: "Adding to cart...",
      status: "loading",
      duration: 2000,
      isClosable: true,
    });

    try {
      addToCart(productDetails, product._id);
      if (!isLoggedIn) {
        setTimeout(() => {
          toast({
            title: "Failed to add to cart, Login First !",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }, 2000);
      }
      setTimeout(() => {
        toast({
          title: "Added to cart",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }, 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
      setTimeout(() => {
        toast({
          title: "Failed to add to cart, Login First !",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }, 2000);
    }
  };

  const handleAddToFavorites = () => {
    const productId = product._id;
    addFavorite(productId);
    setTimeout(() => {
      setIsInFavorites(!isInFavorites);
    }, 500);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleToggleReviewForm = () => {
    if (isLoggedIn) {
      setIsAddingReview(!isAddingReview);
    } else {
      toast({
        title: "You must be logged in to write a review",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSubmitReview = () => {
    const newComment = {
      id: comments.length + 1,
      name: user.name,
      rating: rating,
      comment: comment,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };
    setComments([...comments, newComment]);
    setIsAddingReview(false);

    toast({
      title: "Review submitted",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const averageRating =
    comments.length > 0
      ? comments.reduce((total, comment) => total + comment.rating, 0) /
        comments.length
      : 0;

  if (loading || !product) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:w-1/2">
      <div className="flex flex-wrap items-start">
        {/* Product Photo */}
        <div className="w-full md:w-1/2 p-2">
          <img
            src={product.pic[0]}
            alt={product.name}
            className="w-full h-auto md:h-auto rounded-none shadow-lg p-4"
            style={{ maxHeight: "500px" }}
          />
        </div>
        {/* Product Details */}
        <div className="w-full md:w-1/2 p-4">
          <div className="flex gap-2">
            <Tag>{product.gender}</Tag>
            <Tag>{product.age}</Tag>
            <Tag>
              <Link to={`/Categories/${product.category}`}>
                <span className="hover:underline">{product.category}</span>
              </Link>
            </Tag>
          </div>
          <div
            className="
              flex
              items-center
              justify-start
              gap-8
              mt-2
              mb-2
              flex-col
              md:flex-row
            "
          >
            <h1 className="text-3xl font-bold text-gray-900">
              {product.name.toUpperCase()}
            </h1>
          </div>
          <div className={`flex items-center gap-2`}>
            <p className="text-xl text-black   font-semibold ">
              {product.price} DA
            </p>
            {product.promotion > 0 && (
              <Tag color={"red"}>Promotion: {product.promotion}%</Tag>
            )}
          </div>
          <div
            className="
              flex
              flex-col
              gap-2
              my-4
            "
          >
            <h1 className="text-xl font-medium  text-gray-900">Description</h1>
            <p className="text-gray-700 mb-2 text-pretty text-justify ">
              <Text>
                {/* {product.description} */}
                &nbsp; &nbsp;
                {product.description}{" "}
              </Text>
            </p>
          </div>
          {/* Color Selector */}
          <div className="mb-4 flex items-center">
            <label className="text-gray-700 mr-2 font-semibold">Colors :</label>
            <div className="flex items-center">
              {product.colors.length === 0 ? (
                <p>Out of stock</p>
              ) : (
                product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full mr-2 focus:outline-none border-2 ${
                      selectedColor === color.color
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.color,
                      cursor: "pointer",
                    }}
                    onClick={() => handleColorChange(color.color)}
                  ></button>
                ))
              )}
            </div>
          </div>
          {/* Size Selector */}
          {selectedColor ? (
            product.colors.map(
              (color, colorIndex) =>
                color.color === selectedColor && (
                  <div key={colorIndex} className="mb-4 flex items-center">
                    <label className="text-gray-700 mr-2 font-semibold">
                      {findHex(
                        color.color.charAt(0).toUpperCase() +
                          color.color.slice(1)
                      )[0].toUpperCase() +
                        findHex(
                          color.color.charAt(0).toUpperCase() +
                            color.color.slice(1)
                        ).slice(1)}{" "}
                      sizes:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {color.sizes.map((size, sizeIndex) => (
                        <button
                          key={`${colorIndex}-${sizeIndex}`}
                          className={`px-2 py-1 size-9 flex items-start justify-center rounded-full focus:outline-none border-2 ${
                            product.category === "Shoe"
                              ? selectedSize === size.shoeSize
                                ? "border-black"
                                : "border-gray-300"
                              : selectedSize === size.value
                              ? "border-black"
                              : "border-gray-300"
                          }`}
                          style={{
                            backgroundColor:
                              color.color === "black"
                                ? "white"
                                : color.color === "white"
                                ? "black"
                                : color.color,
                            color: color.color === "black" ? "black" : "white",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            handleSizeChange(
                              product.category === "Shoe"
                                ? size.shoeSize
                                : size.value
                            )
                          }
                        >
                          {product.category === "Shoe"
                            ? size.shoeSize
                            : size.value}
                        </button>
                      ))}
                    </div>
                  </div>
                )
            )
          ) : (
            <p className="text-gray-700 mb-6">
              Please select a color to see available sizes.
            </p>
          )}
          {/* Buttons: Add to Cart and Add to Favorites */}
          <div className="flex flex-col gap-4">
            {/* 
              quantity selector goes here
            */}
            <div
              className="
    flex
    items-center
    gap-4
    mb-4
  "
            >
              <label className="text-gray-700 mr-2 font-semibold">
                Quantity :
              </label>

              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </div>

            <button
              onClick={() => {
                isLoggedIn
                  ? handleAddToCart(product._id)
                  : toast({
                      title: "You must be logged in to add to cart",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
              }}
              className="bg-primary text-white px-6 py-4 rounded-3xl hover:bg-amber-950 cursor-pointer"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Add to Cart
            </button>
            <button
              onClick={() => {
                isLoggedIn
                  ? handleAddToFavorites()
                  : toast({
                      title: "You must be logged in to add to favorites",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
              }}
              className="bg-transparent text-primary border border-amber-950 px-6 py-4 rounded-3xl hover:bg-gray-100 hover:text-amber-950"
            >
              {isInFavorites ? (
                <div className="flex items-center justify-center gap-4">
                  <Heart size={24} color="red" weight="fill" />
                  <p className="text-amber-950 hover:text-amber-950 text-md">
                    Remove from Favorites
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Heart size={24} />
                  <p>Add to Favorites</p>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-2 lg:mt-4">
        <h2 className="text-xl font-semibold mb-4">
          Reviews ({averageRating.toFixed(1)})
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        </h2>
        {/* Write a Review Button (conditional) */}
        <div className="mb-4">
          <button
            onClick={handleToggleReviewForm}
            className="bg-transparent text-primary border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white focus:outline-none"
          >
            Write a Review
          </button>
        </div>
        {/* Fake Comments */}
        {comments.map((comment, index) => (
          console.log(comment),
          <div key={index} className="mb-4">
            <div className="flex items-center mb-1">
              {/* User Rating */}
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={
                      i < comment.rating ? "text-yellow-500" : "text-gray-400"
                    }
                  />
                ))}
              </div>
              {/* User Name */}
              <p className="text-gray-800 font-semibold">{comment.name}</p>
            </div>
            {/* Comment Date */}
            <p className="text-gray-600 mb-1">{comment.name}</p>
            {/* User Comment */}
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
        {/* Review Form (conditional) */}
        {isAddingReview && (
          <div className="mb-4">
            {/* Review Form goes here */}
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Write your review here..."
              className="border border-gray-400 rounded-md p-2 w-full"
            ></textarea>
            <div className="flex items-center mb-4">
              <p className="mr-2">Rating:</p>
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={`cursor-pointer ${
                    i < rating ? "text-yellow-500" : "text-gray-400"
                  }`}
                  onClick={() => handleRatingChange(i + 1)}
                />
              ))}
            </div>
            <button
              onClick={handleSubmitReview}
              className="bg-primary text-white px-4 py-2 rounded-md mt-2 hover:bg-amber-800"
            >
              Submit Review
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

export const QuantitySelector = ({ quantity, setQuantity }) => {
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleDecrement}
        className="bg-gray-200 text-gray-700 text-md px-2 py-0 rounded-l-md hover:bg-gray-300 focus:outline-none"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        className="w-12 text-center border-y h-6 border-gray-300 focus:outline-none"
        min="1"
      />
      <button
        onClick={handleIncrement}
        className="bg-gray-200 text-gray-700 px-2 py-0 text-md rounded-r-md hover:bg-gray-300 focus:outline-none"
      >
        +
      </button>
    </div>
  );
};
