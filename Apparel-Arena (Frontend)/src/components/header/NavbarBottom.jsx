import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import logo from '../../assets/logo/logo.png';
import mansAdds from '../../assets/Adds/mens-banner.jpg';

const menu = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "CATEGORIES", link: "/category" },
    // { name: "Create&Order", link: "/create&Order" },
    { name: "BLOG", link: "/blog" },
    { name: "HOT OFFERS", link: "/gotOffers" },
]

const NavbarBottom = () => {
    // Ekhane MENS  categories er viterore ace tai extra rout banano thik hobe na
    return (
        <div className="containerArena py-3">
            <div className=" md:flex justify-center items-center gap-5 hidden ">

                <NavLink to='/'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-arena-color font-medium border-b-[3px] border-arena-color md:text-sm lg:text-base" : "text-gray-600 font-medium hover:text-arena-color hover:border-b-[3px] border-b-[3px] border-transparent hover:border-arena-color duration-100 md:text-sm lg:text-base"}
                >HOME
                </NavLink>
                <NavLink to='/about'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-arena-color font-medium border-b-[3px] border-arena-color md:text-sm lg:text-base" : "text-gray-600 border-b-[3px] border-transparent font-medium hover:text-arena-color hover:border-b-[3px] hover:border-arena-color duration-100 md:text-sm lg:text-base"}
                >ABOUT
                </NavLink>
                {/* category */}
                <div className="relative group">
                    <NavLink to='/category'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-arena-color font-medium border-b-[3px] border-arena-color md:text-sm lg:text-base" : "text-gray-600 font-medium hover:text-arena-color hover:border-b-[3px] border-b-[3px] border-transparent hover:border-arena-color duration-100 md:text-sm lg:text-base"}
                    >CATEGORIES
                    </NavLink>
                    <div className="absolute hidden group-hover:block top-[25px]  right-1/2 translate-x-1/2  p-5 z-30 shadow-xl rounded-md bg-white border">
                        <div className="flex gap-8">
                            <div className="w-full">
                                <p className="border-b py-1 font-semibold">Men's</p>
                                <div className="mt-3 flex flex-col gap-2 text-gray-700">
                                    <p className="cursor-pointer hover:text-arena-color duration-150">Formal</p>
                                    <p className="cursor-pointer hover:text-arena-color duration-150">Casual</p>
                                    <p className="cursor-pointer hover:text-arena-color  duration-150">Sports</p>
                                    <p className="cursor-pointer hover:text-arena-color  duration-150">Jacket</p>
                                    <p className="cursor-pointer hover:text-arena-color duration-150">Sunglasses</p>
                                    <div className="w-[250px] ">
                                    </div>
                                    <img src={mansAdds} className="rounded-md mt-3  w-full" alt="" />
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="border-b py-1 font-semibold">Men's</p>
                                <div className="mt-3 flex flex-col gap-2 text-gray-700">
                                    <p className="cursor-pointer hover:text-arena-color duration-150">Formal</p>
                                    <p className="cursor-pointer hover:text-arena-color duration-150">Casual</p>
                                    <p className="cursor-pointer hover:text-arena-color  duration-150">Sports</p>
                                    <p className="cursor-pointer hover:text-arena-color  duration-150">Jacket</p>
                                    <p className="cursor-pointer hover:text-arena-color duration-150">Sunglasses</p>
                                    <div className="w-[250px] ">
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <NavLink to='/create&Order'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-arena-color font-medium border-b-[3px] border-arena-color md:text-sm lg:text-base" : "text-gray-600 border-b-[3px] border-transparent font-medium hover:text-arena-color hover:border-b-[3px] hover:border-arena-color duration-100 md:text-sm lg:text-base"}
                >Create&Order
                </NavLink> */}
                <NavLink to='/blog'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-arena-color font-medium border-b-[3px] border-arena-color md:text-sm lg:text-base" : "text-gray-600 border-b-[3px] border-transparent font-medium hover:text-arena-color hover:border-b-[3px] hover:border-arena-color duration-100 md:text-sm lg:text-base"}
                >BLOG
                </NavLink>
                <NavLink to='/hotOffers'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-arena-color font-medium border-b-[3px] border-arena-color md:text-sm lg:text-base" : "text-gray-600 font-medium border-b-[3px] border-transparent hover:text-arena-color hover:border-b-[3px] hover:border-arena-color duration-100 md:text-sm lg:text-base"}
                >HOT OFFERS
                </NavLink>


            </div>


            <div className="flex justify-between gap-5 items-center md:hidden">
                {/* serch */}
                <div className="pt-2 relative text-gray-600 w-4/5">
                    <input className="border border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                        type="search" name="search" placeholder="Search" />
                    <button type="submit" className="absolute right-0 top-0 mt-5 mr-2 text-gray-600">
                        <IoIosSearch size={20} />
                    </button>
                </div>
                {/* mobile menu */}
                <div>
                    <input type="checkbox" id="drawer-toggle" className="relative sr-only peer" />
                    <label htmlFor="drawer-toggle" className="inline-block p-2 transition-all duration-500 bg-arena-color rounded-lg peer-checked:rotate-180 peer-checked:left-64 mt-2">
                        <div className="w-5 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
                        <div className="w-5 h-1 rotate-45 bg-white rounded-lg"></div>

                    </label>

                    {/* drawer */}
                    <div className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
                        <div className="px-6 py-4">
                            <div className="flex justify-center">
                                <img className="w-[120px]" src={logo} alt="logo" />
                            </div>
                            <div className="flex flex-col gap-5 mt-10">
                                {
                                    menu.map((item, index) => {
                                        return <NavLink key={index} to={item.link}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#F18787] font-medium border-b-[3px] border-[#F18787] md:text-sm lg:text-base" : "text-gray-700 font-medium hover:text-[#F18787] hover:border-b-[3px] hover:border-[#F18787] duration-200 md:text-sm lg:text-base"
                                            }
                                        >{item.name}</NavLink>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavbarBottom;