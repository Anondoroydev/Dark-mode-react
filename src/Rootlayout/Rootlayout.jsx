import { Outlet } from "react-router";
import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";

 
const Rootlayout = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <Header/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Rootlayout;