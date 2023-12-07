import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";
import { useState } from "react";
import ShowBookCard from "../../components/ShowBookCard/ShowBookCard";


const AllBooks = () => {
    const axios = useAxios();
    const [showAllBook,setShowAllBook] = useState(false);
    const [books,setBooks] = useState()
    const getBooks = async()=>{
        const res = await axios.get("/books")
        return res;
    }

    const {data,isLoading} = useQuery({
        queryKey:["allBooks"],
        queryFn:getBooks
    })

    useEffect(()=>{
        const filter = data?.data?.filter(items => items.productQuantity>0)
        setBooks(filter);
    },[data])

    if(isLoading){
        return <progress className="progress w-56"></progress>
    }
    console.log(data?.data,books);
    return (
        <div>
            
            <button className=" btn btn-ghost my-5 bg-red-800 rounded-none text-white mx-3" onClick={()=>setShowAllBook(!showAllBook)}> {showAllBook ? "Show Only Available Books": "Show All Books"}</button>
            
            {
                showAllBook ? <ShowBookCard data={data?.data}></ShowBookCard> : <ShowBookCard data={books}></ShowBookCard>
            }
        </div>
    );
};

export default AllBooks;