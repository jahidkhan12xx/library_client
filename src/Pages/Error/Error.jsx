import Lottie from "lottie-react";
import error from '../../../public/Animation - 1699626237253.json'
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className=" max-h-screen flex justify-center items-center flex-col">
            <Lottie className=" h-[60vh]" animationData={error}>
            </Lottie>
            <h2 className=" text-4xl text-center font-bold text-red-800">You are in a wrong route </h2>
            <Link to="/"><button className=" rounded-none font-bold bg-black hover:bg-white hover:text-red-800 my-3 btn btn-secondary text-center">Go Home</button></Link>
        </div>
    );
};

export default Error;