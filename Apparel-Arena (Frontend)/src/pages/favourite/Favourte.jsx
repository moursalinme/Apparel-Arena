import { useEffect } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

const Favourte = () => {
     // scroll to top
     useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <div className="containerArena py-10">
            <Breadcrumb />
            <div className="pt-6">
                {/* Desktop Responsive Start */}
                <div className="hidden sm:flex overflow-x-auto flex-col justify-start items-start categoryScroll">
                    <div className="flex flex-row justify-center items-end space-x-4">
                        <h1 className="text-4xl font-semibold leading-9 text-gray-800">Favourites</h1>
                        <p className="text-base leading-4 text-gray-600 pb-1">(12 Items)</p>
                    </div>
                    <table className="w-full mt-10 whitespace-nowrap border-2 overflow-x-auto">
                        <thead aria-label="table heading" className="w-full h-16 text-left  bg-gray-50 border-gray-200 border-b ">
                            <tr>
                                <th className="text-base font-medium leading-4 text-gray-600">YOUR PRODUCT</th>
                                <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20">DESCRIPTION</th>
                                <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 ">PRICE</th>
                                <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20">MORE OPTIONS</th>
                                <th className="text-base font-medium leading-4 text-gray-600 2xl:pr-20 pr-4 lg:pr-10" />
                            </tr>
                        </thead>
                        <tbody className="w-full text-left">
                            <tr className="border-gray-200 border-b  ">
                                <th>
                                    <img className="my-1" src="https://i.ibb.co/44vJTd4/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-3.png" alt="shoe" />
                                </th>
                                <th className="mt-1 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20">
                                    <p className=" text-base leading-4 text-gray-800">Jet black sportsmen shoes</p>
                                </th>
                                <th className="my-1  pl-6 lg:pl-20">
                                    <p className>$90</p>
                                </th>
                                <th className="my-1 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20">
                                    <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none  text-gray-800 focus:outline-none focus:underline">
                                        View details
                                    </a>
                                </th>
                                <th className="my-2 pl-4 lg:pl-12">
                                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800">
                                        <p>Remove Item</p>
                                    </button>
                                </th>
                            </tr>
                            <tr className="border-gray-200 border-b  ">
                                <th>
                                    <img className="my-1" src="https://i.ibb.co/44vJTd4/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-3.png" alt="shoe" />
                                </th>
                                <th className="mt-1 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20">
                                    <p className=" text-base leading-4 text-gray-800">Jet black sportsmen shoes</p>
                                </th>
                                <th className="my-1  pl-6 lg:pl-20">
                                    <p className>$90</p>
                                </th>
                                <th className="my-1 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20">
                                    <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none  text-gray-800 focus:outline-none focus:underline">
                                        View details
                                    </a>
                                </th>
                                <th className="my-2 pl-4 lg:pl-12">
                                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800">
                                        <p>Remove Item</p>
                                    </button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Desktop Responsive End */}
                {/* Mobile Responsive Start */}
                <div className=" flex justify-center items-center">
                    <div className="sm:hidden flex flex-col justify-start items-start ">
                        <div className="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
                            <p className="text-4xl font-semibold leading-9 text-gray-800">Favourites</p>
                            <p className="text-base leading-4 text-gray-600 pb-1">(12 Items)</p>
                        </div>
                        <div className="border-gray-200 border-b pb-10">
                            <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                                <div>
                                    <img src="https://i.ibb.co/bHgJDpd/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-2.png" alt="shoe" />
                                </div>
                            </div>
                            <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                                <div>
                                    <p className="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                                </div>
                                <div>
                                    <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                                </div>
                            </div>
                            <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                                <div>
                                    <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                                        {" "}
                                        View details
                                    </a>
                                </div>
                                <div>
                                    <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                                        <p>Remove Item</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border-gray-200 border-b pb-10">
                            <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                                <div>
                                    <img src="https://i.ibb.co/6y62DnT/daniel-storek-JM-q-KEd1-GMI-unsplash-1-1.png" alt="shoes" />
                                </div>
                            </div>
                            <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                                <div>
                                    <p className="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                                </div>
                                <div>
                                    <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                                </div>
                            </div>
                            <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                                <div>
                                    <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                                        {" "}
                                        View details
                                    </a>
                                </div>
                                <div>
                                    <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                                        <p>Remove Item</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border-gray-200 border-b pb-10">
                            <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                                <div>
                                    <img src="https://i.ibb.co/LR5LyDw/charles-deluvio-1-nx1-QR5d-TE-unsplash-1-1.png" alt="glasses" />
                                </div>
                            </div>
                            <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                                <div>
                                    <p className="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                                </div>
                                <div>
                                    <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                                </div>
                            </div>
                            <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                                <div>
                                    <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                                        {" "}
                                        View details
                                    </a>
                                </div>
                                <div>
                                    <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                                        <p>Remove Item</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border-gray-200 border-b pb-10">
                            <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                                <div>
                                    <img src="https://i.ibb.co/XzvpLZz/rocknwool-8-Lsy75-Lq-GVc-unsplash-1-4.png" alt="girl" />
                                </div>
                            </div>
                            <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                                <div>
                                    <p className="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                                </div>
                                <div>
                                    <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                                </div>
                            </div>
                            <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                                <div>
                                    <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                                        {" "}
                                        View details
                                    </a>
                                </div>
                                <div>
                                    <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                                        <p>Remove Item</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Responsive End */}
            </div>
        </div>
    );
};

export default Favourte;