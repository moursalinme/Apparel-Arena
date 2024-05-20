import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import cashOnDImg from '../../assets/cashOnD.png'
import cardPImg from '../../assets/cardP.png'
import useCart from "../../hooks/useCart";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLICK_KEY);


const CheckoutPage = () => {
    const ENV = import.meta.env
    const [cashOnD, setCashOnD] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    // scroll to top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    const navigate = useNavigate()


    // cartContext
    const { cart, subTotalPrize, shipping, itemQuantity } = useCart() || {};

    console.log(itemQuantity)


    const handleCheckout = (data) => {

        const productId = cart?.map(item => item?.product?.id)

        const { fName, lName, address, city, country, phone, paymentMethod } = data || {}

        const newData = {
            orderItems: itemQuantity,
            shippingAddress: address,
            paymentMethod: "cashOnD",
        }

        axios.post(`${ENV.VITE_API_URL}/orders/placeOrder`, newData, { withCredentials: true })
            .then(res => {
                navigate('/checkout/form')
                // toast.success('Order placed successfully')

            })
            .catch(err => {
                console.log(err)
                navigate('/checkout/form')
                // toast.success('Order placed Successfully')
            }

            )

        console.log(newData, 'newData')


    }
    return (
        <div className="containerArena py-10">
            <Breadcrumb />
            <div className="overflow-y-hidden pt-6">
                <div className="flex justify-center items-center  ">
                    <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                        <form onSubmit={handleSubmit(handleCheckout)} className="flex w-full  flex-col justify-start items-start">
                            <div className>
                                <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                            </div>

                            <div className="mt-12">
                                <p className="text-xl font-semibold leading-5 text-gray-800">Shipping Details</p>
                            </div>
                            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                                <input  {...register("fName")} name="fName" className="px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="First Name" />
                                <input {...register("lName")} name="lName" className="px-2  border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Last Name" />
                                <input {...register("address")} name="address" className="px-2  border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address" />

                                <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                    <input {...register("city")} name="city" className="px-2  border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="City" />
                                    <input {...register("country")} name="country" className="px-2  border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Country" />
                                </div>

                                <input {...register("phone")} name="phone" className=" px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full" type="text" placeholder="Phone Number" />
                            </div>

                            <div className="py-6 space-y-6">
                                <div className="flex gap-3">
                                    <input onChange={() => setCashOnD(true)} className="mr-3 w-5" id='paymentMethod' value='cashOnD'
                                        name='paymentMethod'
                                        type="radio" />
                                    <label htmlFor="paymentMethod">

                                        <img className="w-[150px] " src={cashOnDImg} alt="" />

                                    </label>
                                </div>
                                <div className="flex gap-3">
                                    <input onChange={() => setCashOnD(false)} className="mr-3 w-5" id='paymentMethod'
                                        name='paymentMethod'
                                        value='cardP' type="radio" />
                                    <label htmlFor="paymentMethod">

                                        <img className="w-[60px] " src={cardPImg} alt="" />

                                    </label>
                                </div>
                            </div>
                            {
                                cashOnD ? <button type="submit" className="arenaBtn w-full py-3 md:text-lg">Confirm Order</button>
                                    :
                                    <button type="submit" className="arenaBtn w-full py-3 md:text-lg">Proceed to payment</button>
                            }

                            <div className="mt-4 flex justify-start items-center w-full">
                                <a href="javascript:void(0)" onClick={() => navigate('/cart')} className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600">
                                    Back to my bag
                                </a>
                            </div>

                            <div>
                                {/* <Elements
                                    stripe={stripePromise}
                                >
                                    <CheckoutForm />
                                </Elements> */}
                                {/* <CheckoutForm /> */}
                            </div>
                        </form>
                        {/* right */}
                        <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                            <div>
                                <h1 className="text-2xl font-semibold leading-6 text-gray-800">Order Summary</h1>
                            </div>
                            <div className="flex mt-7 flex-col items-end w-full space-y-6">
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Total items</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">{cart?.length}</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">${subTotalPrize}</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Shipping charges</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">${shipping}</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Sub total </p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">${subTotalPrize + shipping}</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full items-center mt-32">
                                <p className="text-xl font-semibold leading-4 text-gray-800">Estimated Total </p>
                                <p className="text-lg font-semibold leading-4 text-gray-800">${subTotalPrize + shipping}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;