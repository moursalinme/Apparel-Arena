import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import CreateDesignPage from "./CreateDesignPage";


const CreateOrder = () => {
    const {id}= useParams()
    return (
        <div className="containerArena py-10">
            <Breadcrumb/>
            <CreateDesignPage shopId={id}/>
        </div>
    );
};

export default CreateOrder;