import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from 'react-icons/fa';


const Login = () => {

    const {signIn,googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location);

    const [error,setError] = useState("");

    const handleGoogle = () =>{
        googleLogin()
        .then(res=>{
            console.log(res.user);
            if(res.user){
                toast.success("Login Success")
            }
            navigate(location.state || "/")
        })
        .catch(err=>{
            console.log(err.message);
            setError(err.message)
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        signIn(email,pass)
        .then(res=>{
            console.log(res.user);
            if(res.user){
                toast.success("Login Success")
            }
            navigate("/")
            location.reload();
        })
        .catch(err=>{
            console.log(err.message);
        })


    }
    return (
        
       <div>
        
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Please Login</h1>
				</div>
                {error && <h2 className=" text-xs font-bold text-red-800">Error : {error}</h2>}
				<form onSubmit={handleSubmit} className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input autocomplete="off" id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div className="relative">
							<input autocomplete="off" id="pass" name="pass" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
                       <div className=" flex text-sm gap-2"> <p>Already have account</p> <Link className="no-underline hover:underline text-blue-700" to="/register">Register</Link></div>
						<div className="relative flex flex-col gap-3">
							<button className="bg-blue-500 text-white rounded-md px-2 py-1">Login</button>
							
						</div>
					</div>
				</form>
               
			</div>
            <button onClick={handleGoogle} className=" text-white bg-red-800 rounded-md text-center flex justify-center items-center gap-3 w-full px-2 py-1"> <FaGoogle></FaGoogle> <span>Google</span> </button>
		</div>
	</div>
</div>
       </div>
      
    );
};

export default Login;