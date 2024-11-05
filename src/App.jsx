import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { useLoaderData } from 'react-router-dom'


const App = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-232px)]">
                <div>
                    <Category categories={categories}></Category>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default App;