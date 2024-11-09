import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Statistics = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner
                className='-mt-28 px-64 pb-20'
                title="Stastics"
                description="Explore the latest gadgets that will take your experience to the next level."
                backgroundColor="bg-[#9538E2]"
            />
            <Footer></Footer>
        </div>
    );
};

export default Statistics;