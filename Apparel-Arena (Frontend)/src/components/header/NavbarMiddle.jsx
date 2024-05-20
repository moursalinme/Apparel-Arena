import logo from '../../assets/logo/logo.png';
import userAvater from '../../assets/user.png';
import { IoIosSearch } from "react-icons/io";

// import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
const NavbarMiddle = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const seller = true
    const { user, logOut } = useAuth() || {};
    console.log(user)

    // console.log(user)

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("products")) || [];

        setCart(localCart);
    }, []);


    const handleLogOut = () => {
        logOut()
            .then(result => toast.success('successfully Logout'))
            .catch(err => toast.error(err))
        //   setUserOpen(false)
    }
    return (
        <div className='border-b'>
            <div className='flex justify-between items-center containerArena py-1 gap-3'>
                <div onClick={()=>navigate('/')}>
                    <img src={logo} className='md:w-[120px] w-20' alt="logo" />
                </div>
                <div className='w-3/5 hidden md:block'>
                    <div className="pt-2 relative mx-auto text-gray-600 ">
                        <input className="border border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                            type="search" name="search" placeholder="Search" />
                        <button type="submit" className="absolute right-0 top-0 mt-5 mr-2 text-gray-600">
                            <IoIosSearch size={20} />
                        </button>
                    </div>
                </div>
                <div className='flex gap-4 items-center text-gray-600 '>
                    {/* login user */}
                    {
                        user ?
                            <button className='group relative'>
                                <img src={user?.photoURL} className='w-10 h-10 rounded-full' alt="" />

                                {/* Open login user */}
                                <div className="z-50 hidden group-hover:block absolute top-6 right-0  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900 dark:text-white">{user?.displayName}</span>
                                        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                                    </div>
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                        {
                                            seller ?
                                                <li
                                                    onClick={() => navigate('/sellerDashboard')}
                                                >
                                                    <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</p>
                                                </li>
                                                :
                                                <li
                                                    onClick={() => navigate('/userDashboard')}
                                                >
                                                    <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</p>
                                                </li>
                                        }

                                        {/* <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                        </li> */}
                                        {/* <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                        </li> */}
                                        <li onClick={handleLogOut}>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </button>
                            :
                            <button onClick={() => navigate('/login')} className='bg-arena-color px-4 py-2 rounded text-sm font-semibold text-white hover:bg-arena-color-hover duration-200'>Login</button>
                    }
                    <button onClick={() => navigate('/favourite')} className='relative'>
                        <FaRegHeart size={30} />
                        <span className='bg-arena-color px-[4px] rounded-full text-xs font-bold text-white absolute -top-2 -right-2'>0</span>
                    </button>
                    <button onClick={() => navigate('/cart')} className='relative'>
                        <IoBagHandleOutline size={30} />
                        <span className='bg-arena-color px-[4px] rounded-full text-xs font-bold text-white absolute -top-1 -right-1'>{cart?.length}</span>
                    </button>


                </div>
            </div>
        </div>
    );
};

export default NavbarMiddle;