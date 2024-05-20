import { useRef, useState } from "react";
import tcBg from '../../assets/design/color/0.jpg'
import tc1 from '../../assets/design/color/1.jpg'
import tc2 from '../../assets/design/color/2.jpg'
import tc3 from '../../assets/design/color/3.jpg'
import tc4 from '../../assets/design/color/4.jpg'
import tc5 from '../../assets/design/color/5.jpg'
import tc6 from '../../assets/design/color/6.jpg'
import tc7 from '../../assets/design/color/7.jpg'
import tc8 from '../../assets/design/color/8.jpg'

// tShirt design
import tcd1 from '../../assets/design/1.png'
import tcd2 from '../../assets/design/2.png'
import tcd3 from '../../assets/design/3.png'
import tcd4 from '../../assets/design/4.png'
import CreateDesignForm from "../../components/form/CreateDesignForm";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";

const tShirtColorData = [
    {
        id: 1,
        color: tc1,
        colorName: 'blue'
    },
    {
        id: 2,
        color: tc2,
        colorName: 'black'
    },
    {
        id: 3,
        color: tc3,
        colorName: 'gray'
    },
    {
        id: 4,
        color: tc4,
        colorName: 'green'
    },
    {
        id: 5,
        color: tc5,
        colorName: 'olive'
    },
    {
        id: 6,
        color: tc6,
        colorName: 'tiya'
    },
    {
        id: 7,
        color: tc7,
        colorName: 'brown'
    },
    {
        id: 8,
        color: tc8,
        colorName: 'red'
    }
]

const tShirtDesignData = [
    {
        id: 1,
        design: tcd1,
    },
    {
        id: 2,
        design: tcd2,
    },
    {
        id: 3,
        design: tcd3,
    },
    {
        id: 4,
        design: tcd4,
    }
]

const CreateDesignPage = ({ shopId }) => {
    const [tShirtColor, setTShirtColor] = useState(tShirtColorData[0])
    const [tShirtDesign, setTShirtDesign] = useState(tShirtDesignData[0])
    const [choose, setChoose] = useState('create')


    const [formData, setFormData] = useState({})

    console.log({ ...formData, color: tShirtColor }, "custom order data")

    // shop
    const ENV = import.meta.env
    const { data: shop = {}, isLoading } = useQuery({
        queryKey: ['shopById'],
        queryFn: async () => {
            const data = await axios.get(`${ENV.VITE_API_URL}/shops/${shopId}`)
            return data?.data?.shop[0]
        }
    })


    // for image upload
    const fileInput = useRef(null);
    const [image, setImage] = useState(null);

    const handleOndragOver = (event) => {
        event.preventDefault();
    };

    const handleFile = (file) => {
        // setIsVideo(false);
        setImage(file);
    };

    const handleOndrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const imageFile = event.dataTransfer.files[0];
        handleFile(imageFile);

    };

    const handleChoose = (e) => {
        if (e.target.value === 'create') {
            setChoose('create')
        } else {
            setChoose('existing')
        }

    }

    if (isLoading) return <Spinner />

    return (
        <div className="pt-6">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold">Choose What You Want?</h1>
                <select onChange={(e) => handleChoose(e)} name="choose" id="" className="max-w-[400px] w-full px-2 py-1 bg-transparent border">
                    <option value="create">Create Design</option>
                    <option value="existing">Existing Design</option>
                </select>
            </div>



            {/* create & order*/}
            <div className="grid lg:grid-cols-2 gap-16 pt-10">
                {/* create */}
                {
                    choose === 'create' ? (
                        <div className="overflow-hidden">
                            <div className="flex gap-2 flex-wrap md:flex-nowrap overflow-hidden">
                                <div className="w-full relative overflow-hidden">
                                    <img src={tShirtColor?.color} alt="" className="w-full h-full" />
                                    <img src={tShirtDesign?.design} alt="" className="max-w-[300px] w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                </div>
                                <div className="flex md:flex-col">
                                    {
                                        tShirtDesignData?.map((item, index) => (
                                            <img onClick={() => setTShirtDesign(item)} key={index} src={item.design} alt="" className="max-w-[100px] border-b-2 border-dashed cursor-pointer w-full" />
                                        ))
                                    }
                                </div>
                            </div>

                            {/* color */}
                            <div className="flex gap-3 pt-4 w-full overflow-auto categoryScroll">
                                {
                                    tShirtColorData?.map((item, index) => (
                                        <img onClick={() => setTShirtColor(item)} key={index} src={item.color} alt="" className="max-w-[50px] border-b-2 border-dashed cursor-pointer" />
                                    ))
                                }
                            </div>
                        </div>
                    ) : (
                        <div className="w-full">
                            <p className="text-[#6A9485] font-medium text-lg mb-3">Enter Your Existing Design</p>
                            <div className="wrapper">
                                <div
                                    role="button"
                                    onDrop={handleOndrop}
                                    onDragOver={handleOndragOver}
                                    onClick={() => fileInput?.current?.click()}
                                    onKeyPress={(event) => {
                                        if (event.key === 'Enter') {
                                            fileInput?.current?.click();
                                        }
                                    }}
                                    className="border-2 p-6 rounded-xl border-dashed border-[#191B26]/60 w-full h-48 flex flex-col items-center justify-center cursor-pointer"
                                    tabIndex={0}
                                >
                                    <IoCloudUploadOutline className="text-4xl" />
                                    <p className="md:text-3xl text-xl my-2 text-[#191B26]/80">Browse File</p>
                                    <p className="text-sm text-[#191B26]/60"> Drag and drop Logo Here</p>
                                    <input
                                        name="image"
                                        type="file"
                                        accept="image/* video/*"
                                        ref={fileInput}
                                        hidden
                                        onChange={(e) => handleFile(e.target.files[0])}
                                    />
                                </div>
                            </div>

                            <div>
                                <img src={tcBg} className="w-full mt-2" alt="" />
                            </div>
                        </div>
                    )

                }

                {/* right Side */}
                <div className="">
                    <CreateDesignForm
                        setFormData={setFormData}
                        name={shop.name}

                    />
                </div>
            </div>
        </div>
    );
};

export default CreateDesignPage;