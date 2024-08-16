import Lottie from 'lottie-react';
import welcome from '../assets/welcome.json'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logoImg from '../assets/GH.png'
import Social from './Social';
import { useContext } from 'react';
import { authContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { signInUser } = useContext(authContext)
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        signInUser(data.email, data.password)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "You have successfully logged In.",
                    icon: "success",
                    timer: 2000
                }).then(() => { navigate('/') })
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    html: `<span style="color: red;">${error.message || 'Something went wrong. Please try again.'}</span>`,
                  });
                
            })
    }

    return (
        <div className="sm:h-[600px] w-11/12 max-w-screen-lg mx-auto my-8 shadow-2xl flex flex-col  sm:flex-row-reverse items-center " >
            <div className="bg-black h-full sm:w-1/2 flex flex-col justify-center items-center max-sm:py-5" >
                <h1 className="text-white font-bold font-serif text-4xl">Welcome Back!</h1>
                <Lottie animationData={welcome} loop={true} />;
            </div>
            <div className="sm:w-1/2 sm:p-10  max-sm:mt-4">
                <Link to={'/'} className='mb-3 btn btn-ghost text-2xl font-bold flex'><img src={logoImg} alt="" className='w-11' />GadgetHub</Link>
                <h1 className="font-bold text-xl">Login Now</h1>
                <p className="text-sm mt-1">Don`t have an account? <Link to={'/register'}><span className="underline font-bold hover:text-blue-700">Create Now</span></Link></p>
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
                <Social></Social>
            </div>
        </div>
    );
};

export default Login;