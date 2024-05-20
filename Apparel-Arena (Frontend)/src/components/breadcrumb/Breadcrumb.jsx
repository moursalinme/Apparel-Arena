import { IoIosArrowForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const Breadcrumb = () => {
    const navigate= useNavigate()
    const location = useLocation()
    console.log(location.pathname.replace('/',''))
    return (
        <div className="flex items-center gap-2 text-[#000]/70 w-full border-b pb-2">
            <button onClick={()=>navigate('/')}>Home</button>
            <IoIosArrowForward />
            <button>{location.pathname.replace('/','')}</button>
        </div>
    );
};

export default Breadcrumb;