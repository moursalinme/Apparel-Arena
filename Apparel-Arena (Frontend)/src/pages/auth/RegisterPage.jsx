import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { PuffLoader } from 'react-spinners';
import axios from 'axios';
const RegisterPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signUpWithEmailPassword, updateUserProfile, loading, setLoading,
    } = useAuth() || {};
    const ENV = import.meta.env

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // Handle register
    const handleRegister = (data) => {
        const { name, email, password, phone } = data || {}
        console.log(data)




        signUpWithEmailPassword(email, password)
            .then((result) => {
                axios.post(`${ENV.VITE_API_URL}/users/signup`,{name,email,password,phone},{ withCredentials: true })
                .then(res => {
                    setLoading(false);
                    localStorage.setItem('user', JSON.stringify(res?.data?.user));
                    // console.log(res)
                    navigate(location?.state ? location.state : "/");
                    toast.success("Register successful");
                })
                
            })
            .catch((err) => {
                toast.error(err.message);
                setLoading(false);
            });

    }

    return (
        <div className='py-12 flex justify-center items-center containerArena'>
            <div className='lg:min-w-[850px]'>
                <div className='md:flex justify-between pb-5 text-lg text-[#366454]'>
                    <p>
                        Become a
                        <span onClick={() => navigate('/sellerRegister')} className=' text-blue-400 cursor-pointer'> Seller</span>
                    </p>
                    <p className='text-base'>
                        Already member?
                        <span onClick={() => navigate('/login')} className=' text-blue-400 cursor-pointer'> Login </span>
                        here.
                    </p>
                </div>
                <div className='px-10 pb-10 pt-5 bg-[#F3F4F6] shadow-md w-full'>
                    <p className='mb-8 text-2xl font-semibold text-center text-[#366454]'>Create You Arena Account</p>
                    <form onSubmit={handleSubmit(handleRegister)} className='md:flex gap-10'>
                        <div className='space-y-5 flex-1'>
                            <div className=''>
                                <label htmlFor="phone" className='block text-sm mb-2'>Phone Number</label>
                                <input
                                    {...register("phone")}
                                    className='p-2 w-full focus:outline-[#366454]' type="text" name="phone" id="phone" placeholder='Enter Number' />
                            </div>
                            <div className=''>
                                <label htmlFor="email" className='block text-sm mb-2'>Email</label>
                                <input
                                    {...register("email", { required: true })}
                                    className='p-2 w-full focus:outline-[#366454]' type="email" name="email" id="email" placeholder='Enter email' />
                                {
                                    errors.email && <p className='text-red-500 text-sm font-semibold'>Email is required</p>
                                }
                            </div>
                            <div className=''>
                                <label htmlFor="password" className='block text-sm mb-2'>Password</label>
                                <input
                                    {...register("password", { required: true })}
                                    className='p-2 w-full focus:outline-[#366454]' type="password" name="password" id="password" placeholder='Enter password' />
                                {
                                    errors.password && <p className='text-red-500 text-sm font-semibold'>Password is required</p>
                                }
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className=''>
                                <label htmlFor="name" className='block text-sm mb-2'>Full Name</label>
                                <input
                                    {...register("name")}
                                    className='p-2 w-full focus:outline-[#366454]' type="text" name="name" id="name" placeholder='Enter Name' />
                            </div>
                            <div className='mt-5'>
                                <button type='submit' className='arenaBtn w-full rounded-none py-3'>{loading ? <PuffLoader size={30} color="#36d7b7" /> : 'SIGN UP'}</button>
                            </div>
                            <p className='text-sm mt-1 text-[#6B7280]'>
                                By clicking “SIGN UP”, I agree to Arena <span className='text-blue-400 cursor-pointer '>Terms and Condition</span>
                            </p>
                            <p className='text-sm text-[#6B7280] mt-5'>Or, Sign Up With</p>
                            <div className='flex gap-3 pt-3'>
                                <button className='arenaBtn w-full rounded-none py-3 bg-[#D34836] hover:bg-[#993325] flex gap-2 justify-center'><span><FaGoogle size={16} /></span>GOOGLE</button>
                                <button className='arenaBtn w-full rounded-none py-3  bg-[#3B5998] hover:bg-[#143b8f] flex gap-2 justify-center'><span><FaFacebookF size={16} /></span> FACEBOOK</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default RegisterPage;