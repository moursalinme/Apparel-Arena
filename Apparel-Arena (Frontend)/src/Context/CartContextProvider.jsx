import { createContext, useEffect, useState } from "react";

// create a context
export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [subTotalPrize, setSubTotalPrize] = useState(0);
    const [shipping, setShipping] = useState(5)
    const [itemQuantity, setItemQuantity] = useState([])
    const [customOrder, setCustomOrder] = useState([{ color: '', url: '',quantity:'1'}])

    // handle cart
    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("products")) || [];
        const totalPrize = localCart?.reduce((acc, item) => {
            return acc + parseFloat(item.product.priceAfterDiscount)
        }, 0)
        setCart(localCart);
        setSubTotalPrize(totalPrize)
    }, []);



    // context data
    const cartInfo = {
        cart,
        setCart,
        subTotalPrize,
        setSubTotalPrize,
        shipping,
        setShipping,
        setItemQuantity,
        itemQuantity,
        setCustomOrder,
        customOrder
    }


    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;