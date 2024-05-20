import { useEffect, useState } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ProductCard from "../../components/cards/ProductCard";
import FilterSide from "./FilterSide";
import { IoMenuOutline } from "react-icons/io5";
import { MdFilterListAlt } from "react-icons/md";
import Sort from "./Sort";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/spinner/Spinner";
import { useNavigate, useParams } from "react-router-dom";

const CategoryPage = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [productsData, setProductsData] = useState([])
    const [shopData, setShopData] = useState({})

    console.log(shopData, "sfdhfhs")

    const { id } = useParams()

    console.log(id, "id")

    const navigate = useNavigate();

    // all products
    const ENV = import.meta.env
    const { data: allProducts = [], isLoading } = useQuery({
        queryKey: ['allProductsInCategory'],
        queryFn: async () => {
            const data = await axios.get(`${ENV.VITE_API_URL}/products`)
            return data
        }
    })

    // shopdataById
    // const { data: shopById = [],isLoading:shopIdLoading } = useQuery({
    //     queryKey: ['shopById'],
    //     queryFn: async () => {
    //         const data = await axios.get(`${ENV.VITE_API_URL}/shops/${id}`)
    //         return data?.data
    //     }
    // })





    useEffect(() => {
        if (id) {
            const getProducts = async () => {
                const data = await axios.get(`${ENV.VITE_API_URL}/shops/${id}/totalItems`)
                setProductsData(data?.data)
            }
            const getShop = async () => {
                const data = await axios.get(`${ENV.VITE_API_URL}/shops/${id}`)
                console.log(data,"shop Data")
                setShopData(data?.data?.shop)
            }
            getProducts()
            getShop()
        } else {
            setProductsData(allProducts?.data)
        }
    }, [allProducts, id, ENV])

    console.log(" mitul", productsData)

    // scroll to top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    const sellerpage = id ? true : false

    if (isLoading) return <Spinner />
    return (
        <div className="containerArena py-10">
            <Breadcrumb />
            <div className="pt-6 grid grid-cols-12 gap-8">
                {/* filter  */}
                <div className="lg:col-span-3 col-span-full shadow-inner bg-[#F9FAFB]">
                    <FilterSide mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />
                </div>

                {/* right product side */}
                <div className="lg:col-span-9 col-span-full">
                    <div className="">
                        {sellerpage && <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
                            <p className=" w-10/12 mx-auto md:w-fullfont-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">{
                                //    !shopData || shopData?.shop?.lenght==0?"Crazy Shop":
                                shopData?.name
                            }</p>
                        </div>}
                        <div className=" py-6">


                            <div className=" flex justify-between items-center">
                                <div className=" flex space-x-3 justify-center items-center">
                                    {/* <IoMenuOutline size={20} />
                                    <p className=" font-semibold text-lg leading-4 text-gray-800 font">Filter</p> */}

                                    {/* filter btn for mobile */}
                                    <button
                                        type="button"
                                        className=" text-gray-400 hover:text-gray-500 lg:hidden"
                                        onClick={() => setMobileFiltersOpen(true)}
                                    >
                                        <span className="sr-only">Filters</span>
                                        <MdFilterListAlt size={24} />
                                    </button>
                                    {/* sort */}
                                    <div>
                                        <Sort />
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center">
                                    {
                                        sellerpage && <button onClick={() => navigate(`/create&order/${shopData?._id}`)} className="arenaBtn py-2 px-3">
                                            Create Custom Order
                                        </button>
                                    }
                                    <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">Showing {productsData?.data?.length} products</p>
                                </div>
                            </div>

                            <div className=" grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-8 lg:gap-x-5 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                                {/* products */}
                                {productsData?.data?.length === 0 || !productsData ? <p className=" text-center w-full">No products available</p> :
                                    productsData?.data?.map((product, index) => (
                                        <ProductCard key={index} data={product} />
                                    ))
                                }


                            </div>

                            <div className=" flex justify-center items-center pt-20">
                                <button className=" arenaBtn py-3 px-8 text-sm md:text-lg">Load More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryPage;