import { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";


const useCart = () => {
    const all = useContext(CartContext);
    return all
};

export default useCart;