
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Banner from "./Components/Banner/Banner";
import BannerStyle from "./Components/BannerStyle/BannerStyle";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect } from 'react';



const App = () => {
    useEffect(() => {
        document.title = "Gadget Hell"
    })

    const categories = useLoaderData();
    const location = useLocation();
    // const [cartItems, setCartItems] = useState([]);
    // const [wishlistItems, setWishlistItems] = useState([]);

    // // Function to add item to cart
    // const addToCart = (product) => {
    //     setCartItems([...cartItems, product]);
    // };

    // // Function to add item to wishlist
    // const addToWishlist = (product) => {
    //     setWishlistItems([...wishlistItems, product]);


    const isDetailsPage = location.pathname.includes('/product/');


    return (
        <div>
            <Navbar />

            {!isDetailsPage && (
                <>
                    <Banner className='mx-16 -mt-32 pb-52 rounded-xl'
                        title="Upgrade Your Tech Accessories"
                        description="Explore the latest gadgets that will enhance your experience!"
                        buttons={[{ text: "Shop Now", }]}
                        backgroundColor="bg-[#9538E2]" />
                    <BannerStyle />
                </>
            )}


            <div className="min-h-[calc(100vh-232px)] px-16">
                <h1 className="text-5xl mt-20 text-center font-bold">Explore Cutting-Edge Gadgets</h1>
                <div className="flex gap-7">
                    {!isDetailsPage && <Category categories={categories} className='w-1/3 pt-16' />}
                    <Outlet context={{ categories }} className={!isDetailsPage ? 'w-2/3' : 'w-full'} />
                </div>
                <Footer />
            </div>
        </div>
    )

};
export default App;
