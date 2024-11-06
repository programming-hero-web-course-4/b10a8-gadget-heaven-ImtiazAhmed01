import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Banner from "./Components/Banner/Banner";
import BannerStyle from "./Components/BannerStyle/BannerStyle";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from 'react';

const App = () => {
    const categories = useLoaderData();
    const location = useLocation();

    // State to hold the cart items
    const [cart, setCart] = useState([]);

    // Function to handle adding items to the cart
    const handleAddToCart = (product) => {
        console.log('Product added to cart:', product);
        setCart((prevCart) => [...prevCart, product]); // Adds the product to the cart
    };

    const isDetailsPage = location.pathname.includes('/product/');

    return (
        <div>
            <Navbar />
            {/* Conditionally render Banner and BannerStyle only if not on Details page */}
            {!isDetailsPage && (
                <>
                    <Banner className='mx-16 -mt-32 pb-52 rounded-xl'
                        title="Upgrade Your Tech Accessories"
                        description="Explore the latest gadgets that will enhance your experience!"
                        buttons={[{ text: "Shop Now", }]}
                        backgroundColor="bg-[#9538E2]"
                    />
                    <BannerStyle />
                </>
            )}

            <div className="min-h-[calc(100vh-232px)] px-16">
                <h1 className="text-5xl mt-20 text-center font-bold">Explore Cutting-Edge Gadgets</h1>
                <div className="flex gap-7">
                    {!isDetailsPage && <Category categories={categories} className='w-1/3 pt-16' />}
                    <Outlet context={{ categories, handleAddToCart, cart }} className={!isDetailsPage ? 'w-2/3' : 'w-full'} />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
