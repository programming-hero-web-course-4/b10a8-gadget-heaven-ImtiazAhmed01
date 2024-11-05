import Banner from "./Components/Banner/Banner";
import BannerStyle from "./Components/BannerStyle/BannerStyle";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet, useLoaderData } from 'react-router-dom';


const App = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <BannerStyle></BannerStyle>
            <div className="min-h-[calc(100vh-232px)] px-16">
                <h1 className="text-5xl mt-20 text-center font-bold">Explore Cutting-Edge Gadgets</h1>
                <div className="flex gap-7">
                    <Category categories={categories} className='w-1/3 pt-16'></Category>
                    <Outlet context={{ categories }} className='w-2/3' />
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default App;