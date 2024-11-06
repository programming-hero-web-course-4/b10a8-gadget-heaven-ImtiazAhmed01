import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Cart from '../Cart/Cart';
import { Outlet } from 'react-router-dom';  // Use Outlet for nested routing

const Dashboard = () => {
    const [isActive, setIsActive] = useState({
        available: true,
        status: "active",
    });

    const [cartItems, setCartItems] = useState([]);

    // Function to update the isActive state
    const handleIsActiveState = (status) => {
        setIsActive({
            available: status === "available",
            status: status === "available" ? "active" : "selected",
        });
    };

    // Function to add a product to the cart
    const handleAddToCart = (product) => {
        // Check if the item already exists in the cart
        const itemExists = cartItems.find(item => item.product_id === product.product_id);
        if (!itemExists) {
            setCartItems([...cartItems, product]); // Add the product to the cart
        }
    };

    return (
        <div>
            <Navbar />
            <Banner
                className='-mt-28 px-64 pb-20'
                title="Product Details"
                description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                backgroundColor="bg-[#9538E2]"
            />
            <div className='flex justify-center -mt-20 gap-5'>
                <div
                    className={`${isActive.available ? 'bg-white rounded-full text-[#9538E2] font-bold btn' : 'btn rounded-full bg-[#9538E2] outline outline-bg-[#9538E2] outline-1'} p-3 lg:p-4`}
                    onClick={() => handleIsActiveState('available')}
                >
                    Cart
                </div>
                <div
                    className={`${isActive.available ? 'btn rounded-full bg-[#9538E2] outline outline-bg-[#9538E2] outline-1' : 'btn bg-white rounded-full text-[#9538E2] font-bold'} p-3 lg:p-4`}
                    onClick={() => handleIsActiveState('selected')}
                >
                    Wishlist
                </div>
            </div>

            {/* Render Cart or Wishlist based on active state */}
            {isActive.available ? (
                <Cart cartItems={cartItems} />
            ) : (
                <div>Your Wishlist is empty.</div>
            )}

            <Footer />
        </div>
    );
};

export default Dashboard;
