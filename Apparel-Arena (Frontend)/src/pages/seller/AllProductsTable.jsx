import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../components/spinner/Spinner";


const AllProductsTable = () => {

    const [localdata, setLocalData] = useState({})

    // all products
    const ENV = import.meta.env


    useEffect(() => {
        const localUserData = JSON.parse(localStorage.getItem('user'))
        setLocalData(localUserData)

        // axios.get(`${ENV.VITE_API_URL}/shops/${localUserData._id}`,{withCredentials:true}).then((res) => {
        //     console.log(res,"sdfjjsdf")
        // }).catch((err) => {
        //     console.log(err)
        // })
    }, [])

    console.log(localdata, 'localdata')

    const { data: allProductsInShop = [], isLoading } = useQuery({
        queryKey: ['allProductsInShop'],
        queryFn: async () => {
            const data = await axios.get(`${ENV.VITE_API_URL}/shops/${localdata._id}`, { withCredentials: true })

            // axios.get(`${ENV.VITE_API_URL}/shops/${localdata._id}`, { withCredentials: true }).then((res) => { }).catch((err) => { console.log(err) })

            // console.log(data)
            return data?.data?.products
        }
    })

    if (isLoading) return <Spinner />

    console.log(allProductsInShop)
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product Id
                            </th>
                            {/* <th scope="col" className="px-6 py-3">
                                Color
                            </th> */}
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProductsInShop?.map((product, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {
                                        product?.id}
                                </th>
                                {/* <td className="px-6 py-4">
                                Silver
                            </td> */}
                                <td className="px-6 py-4">
                                    {product?.category}
                                </td>
                                <td className="px-6 py-4">
                                    ${product?.price}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllProductsTable;