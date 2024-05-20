import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import CreateOrder from "../pages/create&Order/CreateOrder";
import AboutPage from "../pages/about/AboutPage";
import ProductDetailsPage from "../pages/product/ProductDetailsPage";
import CategoryPage from "../pages/category/CategoryPage";
import NotFoundPage from "../pages/NotFoundPage";
import Cartpage from "../pages/cart/Cartpage";
import CheckoutPage from "../pages/cart/CheckoutPage";
import Favourte from "../pages/favourite/Favourte";
import SellerPage from "../pages/auth/SellerPage";
import SellerAdmin from "../Layout/SellerAdmin";
import Dashboard from "../pages/seller/Dashboard";
import AllProducts from "../pages/seller/AllProducts";
import AddProducts from "../pages/seller/AddProducts";
import SellerProfile from "../pages/seller/SellerProfile";
import SellerLogin from "../pages/auth/SellerLogin";
import CheckoutForCustom from "../pages/cart/CheckoutForCustom";
import CheckoutForm from "../pages/cart/CheckoutForm";


const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/product/:id",
                element: <ProductDetailsPage />
            },
            {
                path: "/category",
                element: <CategoryPage />
            },
            {
                path: "/category/:id",
                element: <CategoryPage />
            },
            {
                path: "/create&order/:id",
                element: <CreateOrder />
            },
            {
                path: "/cart",
                element: <Cartpage/>
            },
            {
                path: "/checkout",
                element: <CheckoutPage/>
            },
            {
                path: "/checkout/form",
                element: <CheckoutForm/>
            },
            {
                path: "/customCheckout",
                element: <CheckoutForCustom/>
            },
            {
                path: "/favourite",
                element: <Favourte/>
            },
            {
                path: "/sellerRegister",
                element: <SellerPage/>
            },
            {
                path: "/sellerLogin",
                element: <SellerLogin/>
            },
            {
                path: "/register",
                element: <RegisterPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
        ],
    },
    {
        path: "/sellerDashboard",
        element: <SellerAdmin/>,
        errorElement: <NotFoundPage />,
        children: [
            {
                // path:'',
                index:true,
                element: <Dashboard/>,
            },
            {
                path:'profile',
                element:<SellerProfile/>
            },
            {
                path:'products',
                element:<AllProducts/>
            },
            {
                path:'order',
                element:<AllProducts/>
            },
            {
                path:'addProduct',
                element:<AddProducts/>
            }
           
        ],
    },
]);


export default Route;