import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import BorrowBooks from "../../components/BorrowBooks/BorrowBooks";


const BorrowedBooks = () => {
    const axios = useAxios();
    const {user} = useAuth();
    const getBorrowedBooksList = async() =>{
        const res = await axios.get(`/borrowedBooks?email=${user.email}`);
        return res;
      }
  
      const {data,isLoading,refetch} = useQuery({
        queryKey:["booksList"],
        queryFn:getBorrowedBooksList
      })

      if(isLoading ){
        
        return <span className="loading loading-ring loading-lg"></span>;
      }

      console.log(data?.data);
    return (
        <div>
           <h2 className=" flex justify-center items-center text-center my-8 text-4xl font-semibold underline">Borrowed Books : {data?.data?.length}</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
          {
            data?.data?.map(item => <BorrowBooks key={item._id} item={item} refetch={refetch}></BorrowBooks>)
           }
          </div>
        </div>
    );
};

export default BorrowedBooks;