import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ProductsContext } from '../contexts/ProductsContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { deleteProduct } = useContext(ProductsContext);

  // Define state variables for selected sizes and quantities
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
    setLoading(false); // Simulating data loading completion
  }, []);

  const handleDelete = (itemId) => {
    // Remove the item from cart and update local storage
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className='flex justify-center'>
      <div className='w-full md:w-4/5 lg:w-3/4 px-4 py-8 '>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold'>Cart</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='mr-10'>
            {loading ? (
              <p>Loading...</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className={`p-6 flex items-start rounded-lg relative border-t border-b border-gray-200`}
                >
                  <img src={item.image} alt={item.name} className='w-32 h-32 object-cover mr-4' style={{ marginLeft: '-1rem' }} />
                  <div>
                    <div className="mb-2 flex">
                      <h3 className='font-bold mb-2'>{item.name}</h3>
                      <h3 className='font-bold ml-12'>${item.price}</h3>
                    </div>
                    <p className='text-gray-400'>{item.category}</p>
                    <div className="flex items-center mb-2 mt-3 ">
                      <label htmlFor={`quantity-${item.id}`} className="mr-2 text-gray-400">Quantity:</label>
                      <span className="mr-2">{item.quantity}</span>
                    </div>
                    <div className='absolute bottom-0 left-0 flex items-center space-x-4 ml-40 mb-6 ' style={{ left: '-1rem' }}>
                      <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                      <FontAwesomeIcon icon={faTrashAlt} className='text-amber-0 cursor-pointer' onClick={() => handleDelete(item.id)} />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className='mx-10'>
            <h2 className='text-xl font-bold mb-4 '>Invoice</h2>
            <div className='border p-4'>
              <div className='flex justify-between mb-2'>
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className='flex justify-between mb-2'>
                <span>Shipping:</span>
                <span>$10</span>
              </div>
              <hr className='my-2' />
              <div className='flex justify-between'>
                <span>Total:</span>
                <span>${(totalPrice + 10).toFixed(2)}</span>
              </div>
              <button className='bg-primary text-white px-4 py-2 mt-4 w-full rounded-2xl'>
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
