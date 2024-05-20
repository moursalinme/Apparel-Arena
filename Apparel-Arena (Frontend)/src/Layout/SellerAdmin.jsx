import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const SellerAdmin = () => {
    const navigate = useNavigate()
    const seller = true
    return (
        <div className="bg-green-50">
            <div className="relative containerArena grid grid-cols-12 p-5">

                <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>

                <div className="col-span-3 relative">
                    <aside id="sidebar-multi-level-sidebar" className="w-full top-0 left-0 z-40 h-[calc(100vh-50px)]  transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-md">
                            <ul className="space-y-2 font-medium">
                                <li>
                                    <NavLink to="/sellerDashboard"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:bg-gray-700 group" : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                                    >
                                        <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                        </svg>
                                        <span className="ms-3">Dashboard</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/sellerDashboard/profile"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:bg-gray-700 group" : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                                    >
                                        <FaBarsProgress />
                                        <span className="ms-3">Profile</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/sellerDashboard/products"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:bg-gray-700 group" : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                                    >
                                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                        </svg>
                                        <span className="ms-3">All Products</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/sellerDashboard/addProduct"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:bg-gray-700 group" : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                                    >
                                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Add Product</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/sellerDashboard/order"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:bg-gray-700 group" : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                                    >
                                        <IoMdAddCircle size={25} />
                                        <span className="flex-1 ms-3 whitespace-nowrap">Order</span>
                                    </NavLink>
                                </li>


                                <li>
                                    <div href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                                    </div>
                                </li>
                                <li onClick={() => navigate('/')}>
                                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-700 group">
                                        <IoArrowBackCircleSharp size={25} />
                                        <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </aside>
                </div>
                {/* sm:ml-64 */}
                <div className="p-4 col-span-9 h-[calc(100vh-50px)] overflow-auto w-full">
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        <Outlet />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SellerAdmin;