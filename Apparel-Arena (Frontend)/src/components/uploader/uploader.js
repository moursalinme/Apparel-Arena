import axios from "axios";

export const imgUploader = (imgFile)=>{
    if(imgFile){
        return axios.post(import.meta.env.VITE_IMG_UPLOAD_URL, imgFile)
    }
    else{
        return null
    }
}