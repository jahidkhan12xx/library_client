import { Link, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "../Modal/Modal";
import './index.css';

const SpecificBook = () => {
   const [openModal,setOpenModal] = useState(false)
  const { user } = useAuth();
  const { cat, id } = useParams();
  const [bookCount, setBookCount] = useState();
  console.log(cat, id);
  const axios = useAxios();
  const getBook = async () => {
    const res = axios.get(`/specificBook/${id}`);
    return res;
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["specificBook"],
    queryFn: getBook,
  });

  useEffect(() => {
    const count = data?.data?.productQuantity;
    setBookCount(count);
  }, [data]);

  if (isLoading) {
    return <span className="loading loading-ball loading-lg"></span>;
  }
 

 

  

  

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${data?.data?.productImg})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              {data?.data?.productName}
            </h1>
            <p className="mb-5">{data?.data?.productDes}</p>

            <h2 className=" text-2xl text-white my-5">
              Remain Book : {data?.data?.productQuantity}
            </h2>
            <button className="btn btn-primary mr-4">Read More</button>
           
              {
                user ? <button 
                disabled={data?.data?.productQuantity == 0 ? true : false}
                onClick={() => {
                  
                   setOpenModal(true)
                }}
                className={` modalButton btn btn-primary mr-4 disabled:text-red-800 disabled:bg-white disabled:opacity-60 `}
              >
                {data?.data?.productQuantity == 0 ? "Not Available" : "Borrow"}
              </button> :
              <Link to="/login"><button className=" btn btn-primary">Login to Borrow</button></Link>
              }
            
            <Modal open={openModal} id={data?.data?._id} refetch={refetch} data={data} onClose={() => setOpenModal(false)}/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificBook;
