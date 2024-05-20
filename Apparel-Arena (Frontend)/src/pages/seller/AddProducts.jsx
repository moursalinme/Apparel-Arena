import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { imgUploader } from "../../components/uploader/uploader";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

const category = [
    {
        id: 1,
        name: "Pant",
        value: "Pant"
    },
    {
        id: 2,
        name: "T-Shirts",
        value: "tShirt"
    },
    {
        id: 3,
        name: "Jersey",
        value: "Jersey"
    }
]

const sizeData = [
    {
        id: 1,
        name: "S",
        value: "S"
    },
    {
        id: 2,
        name: "M",
        value: "M"
    },
    {
        id: 3,
        name: "L",
        value: "L"
    },
    {
        id: 4,
        name: "XL",
        value: "XL"
    }
]

const AddProducts = () => {
    const [uploadedLoading, setUploadedLoading] = useState(false)
    const [userData,setUserData] = useState({})
    const queryClient = new QueryClient()
    //    Add Products
    const ENV = import.meta.env
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    // const { data: allProductsInShop = [], isLoading } = useQuery({
    //     queryKey: ['allProductsInShop'],
    //     queryFn: async () => {
    //         const data = await axios.get(`${ENV.VITE_API_URL}/shops/myProducts`)
    //         // console.log(data)
    //         return data
    //     }
    // })

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('user'))
        console.log(localData, "localData")
        setUserData(localData)
    }, [])

    const { mutate, isPending } = useMutation({
        mutationFn: async (id) => {
            const data = await axios.post(`${ENV.VITE_API_URL}/products`)
            return data.data
        },
        onSuccess: () => {
            toast.success("Product Created Successfully")
            // refetch()
        },
        onError: (error) => {
            console.log(error)
            toast.error("Something went wrong ! isn't Create")
        },
        onSettled: () => {
            queryClient.invalidateQueries('shops')
        }
    })

    const handleAddProduct = (data) => {
        console.log(data.image, 'add product')
        const size = [
            {
                size: "S",
                quantity: 10
            },
            {
                size: "M",
                quantity: 10
            },
            {
                size: "L",
                quantity: 10
            },
            {
                size: "XL",
                quantity: 10
            }
        ]

        // imageUrls

        // const uploadPromises = data?.image?.map((file) => {
        //     // Create a new FormData instance for each file
        //     const formDataImage = new FormData();
        //     // Append the current file to the FormData object
        //     formDataImage.append('file', file);
        //     // Append the upload preset to the FormData object
        //     formDataImage.append('upload_preset', import.meta.env.VITE_IMG_UPLOAD_PRESET);

        //     // Return a promise that resolves when the upload is complete
        //     return imgUploader(formDataImage);
        // })


        const formDataImage = new FormData();
        formDataImage.append('file', data?.image[0]);
        formDataImage.append('upload_preset', import.meta.env.VITE_IMG_UPLOAD_PRESET);
        setUploadedLoading(true)
        imgUploader(formDataImage).then((res) => {
            const imgLink = res.data?.secure_url

            // const imgLinks = res.map((res) => res.data?.secure_url);

            // console.log(imgLinks, "imgLink")

            const newData = {
                name: data?.name,
                category: data?.category,
                sizes: size,
                price: data?.price,
                imageUrls: [imgLink, imgLink],
            }

            console.log(newData, "add product")
            axios.post(import.meta.env.VITE_API_URL + `/products/add/${userData._id}`, newData).then((res) => {
                setUploadedLoading(false)
                toast.success('Successfully added')
            }).catch((err) => {
                setUploadedLoading(false)
                console.log(err)
                toast.success('Successfully added')
            });
        })


    }



    return (
        <div>

            <form
                onSubmit={handleSubmit(handleAddProduct)}
            >
                <div className="grid gap-6 mb-6 md:grid-cols-12">
                    <div className="md:col-span-6">
                        <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-gray-900 ">Product name</label>
                        <input {...register("name")} type="text" id="product_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="product_name" required />
                    </div>
                    <div className="md:col-span-6">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Product Category</label>
                        <div className="relative">
                            <select
                                {...register("category")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option>Category</option>
                                {
                                    category.map((item) => (
                                        <option key={item.id} value={item.value}>{item.name}</option>
                                    ))

                                }
                            </select>
                        </div>
                    </div>
                    <div className="md:col-span-6">
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 ">Color</label>

                        <div className="flex items-center mb-4">
                            <input id="color-1" type="radio" value="red" name="color" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="color-1" className="ms-2 text-sm font-medium text-gray-900 ">Red</label>
                        </div>
                        <div className="flex items-center">
                            <input checked id="color-2" type="radio" value="black" name="color" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="color-2" className="ms-2 text-sm font-medium text-gray-900 ">Black</label>
                        </div>
                    </div>
                    <div className="md:col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="product_img">Upload Image</label>
                        <input
                            {...register("image")}
                            multiple
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="product_img" type="file" />
                    </div>

                    <div className="md:col-span-6">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Prize</label>
                        <input {...register("price")} type="number" min={1} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="price" />
                    </div>

                    {/* <div className="md:col-span-6">
                        <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 ">Product Size</label>
                        <div className="relative">
                            <select
                                {...register("size")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option>Category</option>
                                {
                                    sizeData.map((item) => (
                                        <option key={item.id} value={item.value}>{item.name}</option>
                                    ))

                                }
                            </select>
                        </div>
                    </div> */}

                    <div className="col-span-12">

                        <label htmlFor="discription" className="block mb-2 text-sm font-medium text-gray-900 ">Product Discription</label>
                        <textarea
                            {...register("discription")}
                            id="discription" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Discription"></textarea>

                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{uploadedLoading ? <PuffLoader size={24} color="#36d7b7" /> : 'Add Products'}</button>
            </form>

        </div>
    );
};

export default AddProducts;