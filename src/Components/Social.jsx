import React, { useContext } from 'react';
import { FaGooglePlusG } from 'react-icons/fa';
import { authContext } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Social = () => {
    const {signInWithGoogle} = useContext(authContext)
    const navigate  = useNavigate()

    const handleGoogle = () =>{
        signInWithGoogle()
        .then(() => {
            Swal.fire({
                title: "Success!",
                text: "You have successfully logged In.",
                icon: "success",
                timer: 2000
              }).then(() =>{navigate('/')}) 
        })
    }
    return (
        <div onClick={handleGoogle} className="btn w-full bg-transparent border-black mb-3"><FaGooglePlusG className="text-2xl" /> Continue with Google </div>
    );
};

export default Social;