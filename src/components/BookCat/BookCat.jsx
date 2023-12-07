import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import BookCatCard from "../BookCatCard/BookCatCard";
import { Triangle } from "react-loader-spinner";


const BookCat = () => {

    const axios = useAxios();
    

    const getBookCat = async () =>{
        const result = await axios.get("/bookCat")
        return result;
    }
    

    const {data,isLoading,isFetching} = useQuery({
        queryKey:["bookCat"],
        queryFn: getBookCat
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

    // console.log(data?.data);
    return (
        <div className="  w-[90vw] mx-auto  min-h-screen">
            <h2 className=" my-12 text-4xl text-blue-800">Books Category</h2>

            <div className=" grid grid-cols-2 gap-4">
                {
                    data?.data?.map(cat => <BookCatCard key={cat._id} cat={cat}></BookCatCard> )
                }
            </div>
        </div>
    );
};

export default BookCat;