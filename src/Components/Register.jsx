import Lottie from 'lottie-react';
import welcome from '../assets/welcome.json'
import { Link } from 'react-router-dom';
import { FaGooglePlusG } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div className="sm:h-[700px] w-11/12 max-w-screen-lg mx-auto shadow-2xl flex flex-col  sm:flex-row items-center " >
                <div className="bg-black h-full sm:w-1/2 flex flex-col justify-center  items-center " >
                    <h1 className="text-white font-bold font-serif text-4xl max-sm:my-5">Join Us Today!</h1>
                    <Lottie animationData={welcome} loop={true} />;
                </div>
                <div className="sm:w-1/2 p-10 ">
                    <h1 className="font-bold text-xl">Register Now</h1>
                    <p className="text-sm mt-1">If you`re already a member, <Link to={'/login'}><span className="underline font-bold">Login Now</span></Link> </p>
                    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <div className="label">
                                <span className="label-text">Image Url</span>
                            </div>
                            <input type="url" placeholder="url" {...register("image", { required: true })} className="input input-bordered" />
                            {errors.image && <span className="text-[#ED1D24]">Image is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-bordered" />
                            {errors.name && <span className="text-[#ED1D24]">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="example@gmail.com" {...register("email", { required: true })} className="input input-bordered" />
                            {errors.email && <span className="text-[#ED1D24]">Email is required</span>}
                        </div>
                        <div className="form-control my-3">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password", { required: true })} className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-black text-white">Register</button>
                        </div>
                    </form>
                    <div className="divider"> OR</div>
                    <div className="btn w-full bg-transparent border-black mb-3"><FaGooglePlusG className="text-2xl" /> Continue with Google </div>
                </div>
            </div>
        </div>
    );
};

export default Register;