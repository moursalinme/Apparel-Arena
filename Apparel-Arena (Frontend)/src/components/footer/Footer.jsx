import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import logo from '../../assets/logo/logo.png'
const Footer = () => {
    return (
        // bg-[#151515]
        // text-[#6B7280]
        <div className="bg-[#F3F4F6] border-t">
            <div className="">
                <div className="space-y-1 py-10 border-b-2 containerArena">
                    <p className="text-[#366454] font-semibold text-lg mb-2">BRAND DIRECTORY</p>
                    <p>
                        <span className="text-[#6B7280] font-semibold">FASHION :</span>
                        <span className="text-[#6B7280] ml-3">
                            T-Shirt | Shirts | Shorts & Jeans | Jacket
                        </span>
                    </p>
                    <p>
                        <span className="text-[#6B7280] font-semibold">FOOTWEAR :</span>
                        <span className="text-[#6B7280] ml-3">
                            Sport | Formal | Boots | Casual
                        </span>
                    </p>
                    <p>
                        <span className="text-[#6B7280] font-semibold">COSMETICS :</span>
                        <span className="text-[#6B7280] ml-3">
                            Shampoo | Bodywash | Facewash | Perfume | Lotion | Hair Dye
                        </span>
                    </p>
                </div>
                {/* Links */}
                <div className="py-10 border-b-2 containerArena grid grid-cols-2 lg:grid-cols-4 gap-5 ">
                    <div>
                        <p className="text-[#366454] font-bold">POPULAR CATEGORIES</p>
                        <div className="w-16 h-[3px] bg-[#6A9485] mt-1"></div>
                        <ul className="space-y-1 pt-3">
                            <li className="text-[#6B7280]">Fashion</li>
                            <li className="text-[#6B7280]">Footwear</li>
                            <li className="text-[#6B7280]">Cosmetic</li>
                            <li className="text-[#6B7280]">Health</li>
                            <li className="text-[#6B7280]">Watches</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-[#366454] font-bold">OUR COMPANY</p>
                        <div className="w-16 h-[3px] bg-[#6A9485] mt-1"></div>
                        <ul className="space-y-1 pt-3">
                            <li className="text-[#6B7280]">Delivery</li>
                            <li className="text-[#6B7280]">Legal Notice</li>
                            <li className="text-[#6B7280]">Terms</li>
                            <li className="text-[#6B7280]">About Us</li>
                            <li className="text-[#6B7280]">Payment</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-[#366454] font-bold">SERVICES</p>
                        <div className="w-16 h-[3px] bg-[#6A9485] mt-1"></div>
                        <ul className="space-y-1 pt-3">
                            <li className="text-[#6B7280]">Prices Drop</li>
                            <li className="text-[#6B7280]">New Products</li>
                            <li className="text-[#6B7280]">Best Sales</li>
                            <li className="text-[#6B7280]">Contact Us</li>
                            <li className="text-[#6B7280]">Sitemap</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-[#366454] font-bold">CONTACT</p>
                        <div className="w-16 h-[3px] bg-[#6A9485] mt-1"></div>
                        <ul className="space-y-1 pt-3 text-[#6B7280]">
                            <li className="text-[#6B7280] flex items-center gap-2">
                                <span><IoLocationOutline size={22} /></span>
                                B-521/1 Dhaka
                            </li>
                            <li className="text-[#6B7280] flex items-center gap-2">
                                <span><FiPhone size={22} /></span>
                                +8801700000
                            </li>
                            <li className="text-[#6B7280] flex items-center gap-2">
                                <span><MdOutlineEmail size={22} /></span>
                                info@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
                {/* logo */}
                <div className="py-10 containerArena flex justify-center">
                      <img src={logo} className="w-[200px]" alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default Footer;