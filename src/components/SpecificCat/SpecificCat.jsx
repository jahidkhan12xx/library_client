import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import SpecificCatCard from "../SpecificCatCard/SpecificCatCard";
import { Triangle } from "react-loader-spinner";


const SpecificCat = () => {
    const axios = useAxios();
    const {id} = useParams();

    const getSpecificBook = () =>{
        const res = axios.get(`/books/${id}`);
        return res;
    }

    console.log(id);

    const {data,isLoading,isFetching} = useQuery({
        queryKey : ["specificBook"],
        queryFn : getSpecificBook
    })

    if(isLoading){
        return <div className=" flex justify-center  min-h-screen"><Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /></div>
    }
    if(isFetching){
        return <div className=" flex justify-center  min-h-screen"><Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /></div>
    }

    // console.log(data.data);
    return (
        <div className=" my-28 ">
            <h2 className=" my-20 text-center underline text-3xl font-bold">BOOKS - {data.data.length} </h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 w-[50vw] mx-auto gap-12">
                {
                    data?.data?.map(items => <SpecificCatCard key={items._id} items={items}></SpecificCatCard>)
                }
            </div>
        </div>
    );
};

export default SpecificCat;