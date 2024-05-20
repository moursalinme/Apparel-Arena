import { useEffect, useState } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { CiStar } from "react-icons/ci";
import demoimg from '../../assets/bestSellers/shoe2.png'
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Rating, Star } from "@smastrom/react-rating";
import Spinner from "../../components/spinner/Spinner";
import toast from "react-hot-toast";


const ProductDetailsPage = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [color, setColor] = useState("White");
    const [size, setSize] = useState("");
    const { id } = useParams()

    // rating style
    const ratingStyle = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }


    // product get

    const ENV = import.meta.env
    const { data: products = {}, isLoading, refetch, isSuccess } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const data = await axios.get(`${ENV.VITE_API_URL}/products/${id}`)
            return data?.data
        }
    })

    const { category, imageUrls, name, price, priceAfterDiscount, rating, reviews, description } = products?.data || {}
    // console.log("details", products)




    const getColor = (value) => {
        setColor(value);
    };

    const getSize = (value) => {
        setSize(value);
    };


    // add to cart

    const addToCart = () => {
        const localCart = JSON.parse(localStorage.getItem("products")) || [];
        const exist = localCart.find((item) => item.id === id);
        if(exist){
            toast.error("Product already in cart")
        }else{
            const newcartproduct=[...localCart,{product:products.data,size:size}]
            localStorage.setItem("products", JSON.stringify(newcartproduct))
            toast.success("Product added to cart")
        }
    }


    // scroll to top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);

    if (isLoading) return <Spinner />

    return (
        <div className="py-10 containerArena">
            <Breadcrumb />

            <div className="pt-10">
                <div className="md:flex items-start justify-center py-12">
                    <div className=" md:block hidden max-w-[350px] w-full">
                        <img className="w-full" alt="product" src={imageUrls?.length === 0 ? demoimg : imageUrls[0]} />
                        <img className="mt-6 w-full" alt="product" src={imageUrls?.length === 0 ? demoimg : imageUrls[1]} />
                    </div>
                    <div className="md:hidden">
                        <img className="w-full" alt="img of a girl posing" src={demoimg} />
                    </div>
                    <div className="lg:ml-8 md:ml-6 md:mt-0 mt-6">
                        <div className="border-b border-gray-200 pb-6">
                            <p className="text-sm leading-none text-gray-600">{category}</p>
                            <h1
                                className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                            >
                                {name}
                            </h1>
                        </div>

                        {/* seclect size */}
                        <div className="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-6">

                            <div className=" flex justify-start items-center mt-4">
                                <p className="font-normal text-lg leading-6 text-gray-600 mr-4">{priceAfterDiscount}</p>
                                <div className="cursor-pointer flex space-x-2 mr-3 text-xl">
                                    <Rating style={{ maxWidth: 100 }} readOnly value={rating} itemStyles={ratingStyle} />
                                </div>
                                <p className=" font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">{reviews?.length} reviews</p>
                            </div>
                            <div className="  mt-10">
                                <p id="text" className=" font-semibold text-base leading-4 text-gray-800">
                                    {color}
                                </p>
                                <div className=" flex space-x-2 mt-4">
                                    <div tabIndex="0" onClick={() => getColor("White")} className="focus:outline-none ring-1 ring-offset-2 ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-gray-50"></div>
                                    <div tabIndex="0" onClick={() => getColor("Red")} className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-red-700"></div>
                                    <div tabIndex="0" onClick={() => getColor("Yellow")} className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-yellow-300"></div>
                                </div>
                            </div>
                            <div className=" mt-10 w-full">
                                <div className=" flex justify-between">
                                    <p className="font-semibold text-base leading-4 text-gray-800">Size</p>
                                    <p className="cursor-pointer hover:text-gray-800 font-medium text-base leading-4 text-gray-500 underline">Size guide</p>
                                </div>
                                <div className=" grid grid-cols-3 gap-10 sm:flex sm:flex-wrap md:gap-4 sm:justify-between lg:justify-start mt-4">
                                    <div onClick={() => getSize("XSS")} id="XSS" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "XSS" ? "border-gray-500" : "border-gray-200")}>
                                        XXS
                                    </div>
                                    <div onClick={() => getSize("XS")} id="XS" className={"font-medium text-base leading-4 text-gray-800 border  py-3 w-20 text-center cursor-pointer " + (size === "XS" ? "border-gray-500" : "border-gray-200")}>
                                        XS
                                    </div>
                                    <div onClick={() => getSize("S")} id="S" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "S" ? "border-gray-500" : "border-gray-200")}>
                                        S
                                    </div>
                                    <div onClick={() => getSize("M")} id="M" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "M" ? "border-gray-500" : "border-gray-200")}>
                                        M
                                    </div>
                                    <div onClick={() => getSize("L")} id="L" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "L" ? "border-gray-500" : "border-gray-200")}>
                                        L
                                    </div>
                                    <div onClick={() => getSize("XL")} id="XL" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "XL" ? "border-gray-500" : "border-gray-200")}>
                                        XL
                                    </div>
                                </div>
                            </div>
                            <p className=" mt-4 font-normal text-sm leading-3 text-gray-500 hover:text-gray-600 duration-100 underline cursor-pointer">Find the perfect size?</p>

                            <div className="flex  w-full gap-5 pb-10">
                                <button onClick={()=>addToCart()} className="arenaBtn w-full py-3">Add to Cart</button>
                                <button className="arenaBtn w-full py-3">Add to Wishlist</button>
                            </div>
                        </div>

                        <button
                            className="w-full py-3 arenaBtn bg-[#366454] flex items-center justify-center"
                        >
                            <svg className="mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.66699 4.83333V4.84166" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.333 11.5V11.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Check availability in store
                        </button>
                        <div>
                            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">{description}</p>
                            <p className="text-base leading-4 mt-7 text-gray-600">Product Code: {id}</p>
                            <p className="text-base leading-4 mt-4 text-gray-600">Length: 13.2 inches</p>
                            <p className="text-base leading-4 mt-4 text-gray-600">Height: 10 inches</p>
                            <p className="text-base leading-4 mt-4 text-gray-600">Depth: 5.1 inches</p>
                            <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">Composition: 100% calf leather, inside: 100% lamb leather</p>
                        </div>
                        <div>
                            <div className="border-t border-b py-4 mt-7 border-gray-200">
                                <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                                    <p className="text-base leading-4 text-gray-800">Shipping and returns</p>
                                    <button
                                        className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                        aria-label="show or hide"
                                    >
                                        <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                                    You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="border-b py-4 border-gray-200">
                                <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                                    <p className="text-base leading-4 text-gray-800">Contact us</p>
                                    <button
                                        className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                        aria-label="show or hide"
                                    >
                                        <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                                    If you have any questions on how to return your item to us, contact us.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;