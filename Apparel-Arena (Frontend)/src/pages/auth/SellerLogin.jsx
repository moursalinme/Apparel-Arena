import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { PuffLoader } from "react-spinners";

const SellerLogin = () => {
    const navigate = useNavigate();
    const { loading, signInWithEmailPassword, setLoading, googleSignIn, githubSignIn } = useAuth() || {};
    const ENV = import.meta.env
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // google sign in
    const handleGoogleSignIn = (e) => {
        console.log('object')
        e.preventDefault();
        googleSignIn()
            .then((result) => {
                // axios.post('https://food-surplus-saver.vercel.app/jwt', { email: result?.user.email }, { withCredentials: true })
                //     .then(res => {
                //         setLoading(false);
                //         navigate(location?.state ? location.state : "/");
                //         toast.success("Login successful");
                //     })
                setLoading(false);
                navigate(location?.state ? location.state : "/");
                toast.success("Login successful");
            })
            .catch((err) => {
                setLoading(false);
                toast.error(err.message);
            });
    };

    // Handle Login
    const handleLogin = (data) => {
        const { email, password } = data || {}

        // axios.post(`${ENV.VITE_API_URL}/shops/login`, { email, password }, { withCredentials: true })
        // .then(res => {
        //     setLoading(false);
        //     console.log(res)
        //     localStorage.setItem('user', JSON.stringify(res?.data?.user));
        //     navigate(location?.state ? location.state : "/");
        //     toast.success("Login successful");
        // })


        signInWithEmailPassword(email, password)
            .then((result) => {
                // await axios.get(`${ENV.VITE_API_URL}/products`)
                axios.post(`${ENV.VITE_API_URL}/shops/login`, { email, password }, { withCredentials: true })
                    .then(res => {
                        setLoading(false);
                        console.log(res)
                        localStorage.setItem('user', JSON.stringify(res?.data?.user));
                        navigate(location?.state ? location.state : "/");
                        toast.success("Login successful");
                    })
                // setLoading(false);
                // navigate(location?.state ? location.state : "/");
                // toast.success("Login successful");

            })
            .catch((err) => {
                console.log(err)
                setLoading(false);
                toast.error(err.message);
            });
    };

    return (
        <div className='py-12 flex justify-center items-center containerArena'>
            <div className='lg:min-w-[850px]'>
                <div className='md:flex justify-between pb-5 text-lg text-[#366454]'>
                    <p>
                        Become a
                        <span onClick={() => navigate('/sellerRegister')} className=' text-blue-400 cursor-pointer'> Seller</span>
                    </p>
                    <p className='text-base'>
                        New member?
                        <span onClick={() => navigate('/register')} className=' text-blue-400 cursor-pointer'> Register </span>
                        here.
                    </p>
                </div>
                <div className='px-10 pb-10 pt-5 bg-[#F3F4F6] shadow-md w-full'>
                    <p className='mb-8 text-2xl font-semibold text-center text-[#366454]'>Welcome To Arena ! Please Login as Seller</p>
                    <form onSubmit={handleSubmit(handleLogin)} className='md:flex gap-10'>
                        <div className='space-y-5 flex-1'>

                            <div className=''>
                                <label htmlFor="email" className='block text-sm mb-2'>Email</label>
                                <input
                                    {...register("email", { required: true })}
                                    className='p-2 w-full focus:outline-[#366454]' type="email" name="email" id="email" placeholder='Enter email' />
                                {
                                    errors.email && <p className='text-red-500 text-sm font-semibold'>Name is required</p>
                                }
                            </div>
                            <div className=''>
                                <label htmlFor="password" className='block text-sm mb-2'>Password</label>
                                <input
                                    {...register("password", { required: true })}
                                    className='p-2 w-full focus:outline-[#366454]' type="password" name="password" id="password" placeholder='Enter password' />
                                {
                                    errors.password && <p className='text-red-500 text-sm font-semibold'>Name is required</p>
                                }
                                <div className='mt-5'>
                                    <button type="submit" className='arenaBtn w-full rounded-none py-3'>{loading ? <PuffLoader size={30} color="#36d7b7" /> : 'LOGIN'}</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1'>

                            <p className='text-sm text-[#6B7280] mt-5'>Or, Sign Up With</p>
                            <div className='space-y-3 pt-3'>
                                <button onClick={handleGoogleSignIn} className='arenaBtn w-full rounded-none py-3 bg-[#D34836] hover:bg-[#993325] flex gap-2 justify-center'><span><FaGoogle size={16} /></span>GOOGLE</button>
                                <button className='arenaBtn w-full rounded-none py-3  bg-[#3B5998] hover:bg-[#143b8f] flex gap-2 justify-center'><span><FaFacebookF size={16} /></span> FACEBOOK</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SellerLogin;


