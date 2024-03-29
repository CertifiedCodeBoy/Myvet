import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const ProductPage = () => {
  // Sample product data (replace it with your actual data)
  const product = {
    id: 1,
    name: 'Nike Air Zoom Pegasus 38',
    price: 120,
    description: 'The Nike Air Zoom Pegasus 38 continues to put a spring in your step, using the same responsive foam as its predecessor. Mesh in the upper combines the comfort and durability you want with a fit that nods to the fast.',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Black', 'White', 'Blue'],
    image: 'https://via.placeholder.com/500x850', // Adjusted image height
  };

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login state

  // Sample fake comments data
  const [comments, setComments] = useState([
    { id: 1, name: 'John Doe', rating: 5, comment: 'Great shoes! Very comfortable.', date: 'Feb 18, 2024' },
    { id: 2, name: 'Jane Smith', rating: 4, comment: 'Nice design and good quality.', date: 'Feb 16, 2024' },
    { id: 3, name: 'Alice Johnson', rating: 2, comment: 'Decent shoes, but could be better.', date: 'Feb 20, 2024' },
  ]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality
  };

  const handleAddToFavorites = () => {
    // Implement add to favorites functionality
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleToggleReviewForm = () => {
    // Check if user is logged in
    if (isLoggedIn) {
      setIsAddingReview(!isAddingReview);
    } else {
      // Redirect user to login page or show login modal
      alert('You need to be logged in to write a review.');
    }
  };

  const handleSubmitReview = () => {
    // Implement submit review functionality
    const newComment = {
      id: comments.length + 1,
      name: 'Logged in User', // Replace with actual user name after authentication
      rating,
      comment,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    };
    setComments([...comments, newComment]);
    setIsAddingReview(false);
  };

  // Function to check if a size is available
  const isAvailableSize = (size) => {
    return product.sizes.includes(size);
  };

  // Function to fake user login
  const handleLogin = () => {
    // Implement login functionality
    setIsLoggedIn(true);
  };

  // Calculate average star rating
  const averageRating = comments.length > 0 ? comments.reduce((total, comment) => total + comment.rating, 0) / comments.length : 0;

  return (
    <div className="container mx-auto px-4 py-8 lg:w-1/2"> {/* Reduced width for large screens */}
      <div className="flex flex-wrap items-center">
        {/* Product Photo */}
        <div className="w-full md:w-1/2 p-4">
          <img src={product.image} alt={product.name} className="w-full h-auto md:h-auto rounded-none shadow-lg" style={{ maxHeight: '500px' }} />
        </div>
        {/* Product Details */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-3xl font-semibold mb-1 text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-2">${product.price}</p>
          <h1 className='text-3xl font-medium mb-3 text-gray-900'>Description</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          {/* Color Selector */}
          <div className="mb-4 flex">
            <label className="text-gray-700 mr-2 font-semibold">Color:</label>
            <div className="flex items-center">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border border-gray-400 mr-2 focus:outline-none focus:border-gray-700 ${selectedColor === color ? 'ring-2 ring-primarybg-primary' : ''}`}
                  style={{ backgroundColor: color.toLowerCase(), cursor: 'pointer' }}
                  onClick={() => handleColorChange(color)}
                ></button>
              ))}
            </div>
          </div>
          {/* Size Selector */}
          <div className="mb-4 flex items-center">
            <label className="text-gray-700 mr-2 font-semibold">Size:</label>
            <div className="flex items-center">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`w-10 h-10 rounded-md border border-gray-400 mr-2 focus:outline-none focus:border-gray-700 ${!isAvailableSize(size) ? 'bg-gray-200 cursor-not-allowed' : selectedSize === size ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}
                  style={{ minWidth: '2.5rem', textAlign: 'center' }}
                  onClick={() => isAvailableSize(size) && handleSizeChange(size)}
                  disabled={!isAvailableSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* Buttons: Add to Cart and Add to Favorites */}
          <div className="flex flex-col gap-4">
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
              className="bg-primary text-white px-6 py-4 rounded-3xl hover:bg-amber-950 cursor-pointer"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Add to Cart
            </button>
            <button
              onClick={handleAddToFavorites}
              className="bg-transparent text-primarybg-primary border border-amber-950 px-6 py-4 rounded-3xl hover:bg-gray-100 hover:text-amber-950"
            >
              <FontAwesomeIcon icon={faHeart} className="mr-2" />
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
      {/* Reviews Section */}
      <div className="mt-2 lg:mt-4">
        <h2 className="text-xl font-semibold mb-4">Reviews ({averageRating.toFixed(1)})<FontAwesomeIcon icon={faStar} className="text-yellow-500" /></h2>
        {/* Write a Review Button (conditional) */}
        <div className="mb-4">
          <button
            onClick={handleToggleReviewForm}
            className="bg-transparent text-primarybg-primary border border-primarybg-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white focus:outline-none"
          >
            Write a Review
          </button>
        </div>
        {/* Fake Comments */}
        {comments.map((fakeComment, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center mb-1">
              {/* User Rating */}
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className={i < fakeComment.rating ? 'text-yellow-500' : 'text-gray-400'} />
                ))}
              </div>
              {/* User Name */}
              <p className="text-gray-800 font-semibold">{fakeComment.name}</p>
            </div>
            {/* Comment Date */}
            <p className="text-gray-600 mb-1">{fakeComment.date}</p>
            {/* User Comment */}
            <p className="text-gray-700">{fakeComment.comment}</p>
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
