import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const NavbarTop = () => {
    return (
        <div className="py-2 border-b bg-gray-100 hidden md:block">
            <div className="w-full flex justify-between text-gray-500 containerArena items-center flex-wrap gap-2">
                <div className="flex gap-2 w-full justify-center md:w-auto md:justify-start">
                    <button className="bg-gray-200 p-[6px] text-gray-500 rounded-md flex justify-center items-center">
                        <FaFacebook size={20} />
                    </button>
                    <button className="bg-gray-200 p-[6px] text-gray-500 rounded-md flex justify-center items-center">
                        <FaInstagram size={20} />
                    </button>
                    <button className="bg-gray-200 p-[6px] text-gray-500 rounded-md flex justify-center items-center">
                        <FaLinkedin size={20} />
                    </button>
                </div>
                <div className="w-full md:w-auto md:justify-start">
                    <p className="text-center text-sm font-semibold">FREE SHIPING THIS WEEK ORDER OVER -60$</p>
                </div>
                <div className="flex gap-3 text-sm font-semibold w-full justify-center md:w-auto md:justify-start">
                    <span>BDT</span>
                    <span>ENGLISH</span>
                </div>
            </div>
        </div>
    );
};

export default NavbarTop;