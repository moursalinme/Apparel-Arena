import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";



const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />  
        </div>
    );
};

export default MainLayout;