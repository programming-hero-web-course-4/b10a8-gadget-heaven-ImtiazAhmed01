import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';


import Details from '../Details/Details';

const Dashboard = () => {
    useEffect(() => {
        document.title = "Dashboard | Gadget Hell"
    })
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [isActive, setIsActive] = useState({ available: true, status: "active" });


    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };


    const addToWishlist = (product) => {
        setWishlistItems((prevItems) => [...prevItems, product]);
    };

    return (
        <div>
            <Navbar />
            <Banner
                className='-mt-28 px-64 pb-20'
                title="Product Details"
                description="Explore the latest gadgets that will take your experience to the next level."
                backgroundColor="bg-[#9538E2]"
            />
            <div className='flex justify-center -mt-20 gap-5'>
                <div
                    className={`${isActive.available ? 'bg-white rounded-full text-[#9538E2] font-bold btn' : 'btn rounded-full bg-[#9538E2]'}`}
                    onClick={() => setIsActive({ available: true, status: "active" })}
                >
                    Cart
                </div>
                <div
                    className={`${!isActive.available ? 'bg-white rounded-full text-[#9538E2] font-bold btn' : 'btn rounded-full bg-[#9538E2]'}`}
                    onClick={() => setIsActive({ available: false, status: "selected" })}
                >
                    Wishlist
                </div>
            </div>

            <div>
                {isActive.available ? (
                    <Cart cartItems={cartItems} />
                ) : (
                    <Wishlist wishlistItems={wishlistItems} />
                )}
            </div>
            <Details addToCart={addToCart} addToWishlist={addToWishlist} />
            <Footer />
        </div>
    );
};

export default Dashboard;
