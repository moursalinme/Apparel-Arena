import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";


const CartCard = ({ data }) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1)

    // cartContext
    const { cart:allCart,setItemQuantity,itemQuantity } = useCart() || {};

   

    console.log(quantity)

    const { category, imageUrls, name, price, priceAfterDiscount, rating, reviews, description, id } = data?.product || {}

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("products")) || [];

        setCart(localCart);
    }, []);

    // remove into cart

    const removeItem = () => {
        // remove item from cart
        const newCart = cart.filter(item => item.product.id !== id)
        localStorage.setItem("products", JSON.stringify(newCart))
        toast.success("Item removed from cart")
        window.location.reload()
        setCart(newCart)
    }

    useEffect(() => {
        const newitems= {
            product:id,
            quantity:quantity
        }
        setItemQuantity([...itemQuantity,newitems])
    }, [quantity])

    return (
        <div>
            <div className="md:flex items-center py-8 border-t border-gray-200">
                <div className="w-1/4">
                    <img src={imageUrls} alt className="w-full aspect-square object-center object-fill" />
                </div>
                <div className="md:pl-3 md:w-3/4 w-full">
                    <p className="text-sm leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                    <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-2xl leading-none text-gray-800 font-semibold">{name}</p>
                        <input onChange={(e)=>setQuantity(e.target.value)} type="number" className="mr-6 border border-gray-400 py-1 px-3 max-w-[100px] rounded-md" placeholder="Quantity" defaultValue={1} min={1} />
                    </div>
                    <p className="leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                    <p className="leading-3 text-gray-600 py-4">Size: {data?.size}</p>
                    <p className="w-96 leading-3 text-gray-600">Composition: 100% calf leather</p>
                    <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                            <p className="text-sm leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                            <p onClick={() => removeItem()} className="text-sm leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                        </div>
                        <p className="text-lg font-black leading-none text-gray-800">{priceAfterDiscount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;