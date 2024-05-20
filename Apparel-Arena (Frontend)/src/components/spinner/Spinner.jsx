import { PuffLoader } from "react-spinners";


const Spinner = () => {
    return (
        <div className="h-[100px] w-full flex justify-center items-center">
            <PuffLoader size={60} color="#36d7b7" />
        </div>
    );
};

export default Spinner;