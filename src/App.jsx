import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";


const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-232px)]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default App;