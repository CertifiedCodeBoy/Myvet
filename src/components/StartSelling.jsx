import React from 'react';
import ShoppingBags from '../Assets/ShoppingBags.png';
import { Bag, ShoppingBag } from 'phosphor-react';
import { Link } from 'react-router-dom';
const StartSelling = ({user}) => {
    return ( 
        <div>
            <div
                className="
                bg-red-100
                flex justify-start items-center
                h-[100px]
                px-8
                gap-8
                "
            >
                <Bag size={60} color="#000" />
                <h1 className="text-4xl font-bold">Start Selling Today!</h1>
                <p>
                    Check your {
                        <Link to={`/Profile/${user}`}>
                            <span className="text-blue-500">Profile</span>
                        </Link>
                    }{" "} to start selling your products.
                </p>
            </div>
        </div>
     );
}
 
export default StartSelling;