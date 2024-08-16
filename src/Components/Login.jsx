import Lottie from 'lottie-react';
import welcome from '../assets/welcome.json'
import { Link } from 'react-router-dom';
import { FaGooglePlusG } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
            <div className="sm:h-[600px] w-11/12 max-w-screen-lg mx-auto my-8 shadow-2xl flex flex-col  sm:flex-row-reverse items-center " >
                <div className="bg-black h-full sm:w-1/2 flex flex-col justify-center items-center max-sm:py-5" >
                    <h1 className="text-white font-bold font-serif text-4xl">Welcome Back!</h1>
                    <Lottie animationData={welcome} loop={true} />;
                </div>
                <div className="sm:w-1/2 sm:p-10  max-sm:mt-4">
                    <h1 className="font-bold text-xl">Login Now</h1>
                    <p className="text-sm mt-1">Don`t have an account? <Link to={'/register'}><span className="underline font-bold">Create Now</span></Link></p>
                    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="example@gmail.com" {...register("email", { required: true })} className="input input-bordered" required />
                            {errors.email && <span className="text-[#ED1D24]">Email is required</span>}
                        </div>
                        <div className="form-control my-3">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password", { required: true })} className="input input-bordered" required />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-black text-white">Login</button>
                        </div>
                    </form>
                    <div className="divider"> OR</div>
                    <div className="btn w-full bg-transparent border-black mb-3"><FaGooglePlusG className="text-2xl" /> Continue with Google </div>
                </div>
            </div>
    );
};

export default Login;