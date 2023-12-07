import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";



const Modal = ({ open, onClose,id,refetch,data }) => {
  const {user} = useAuth();
  const [date,setDate] = useState();
  const [isExist,setIsExist] = useState();
    const name = user?.displayName;
    const email = user?.email;
    const img = data?.data?.productImg;
    const bookName = data?.data?.productName;
    const bookCat = data?.data?.catCode;
    const returnDate = date;
    const currentDate = moment();
    const borrowDate = currentDate.format('YYYY-MM-DD');
  
    const axios =useAxios();
    const getBorrowedBooks = async() =>{
      const res = await axios.get(`/borrowBooks?email=${user?.email}`);
      return res;
    }

    const {data:bookData,isLoading,refetch:refresh} = useQuery({
      queryKey:["borrowedBooks"],
      queryFn:getBorrowedBooks
    })

    useEffect(()=>{
      const findBook = bookData?.data?.find(item => item.bookName === bookName )
      setIsExist(findBook);
      

    },[bookData,bookName])

    console.log(bookData?.data,isExist);

    
    
    
    
    

    console.log(name,email,date);

    const handleConfirm = () =>{
        axios.patch(`/bookCount/${id}`)
    .then(res=>{
        if(res?.data?.modifiedCount>0){
            axios.post("/addBorrowBooks",{
                name,email, date: date,img,bookName,bookCat,returnDate,borrowDate
            })
            .then(res=>{
                if(res?.data?.insertedId){
                    refetch();
                    refresh();
                    toast.success("Book Borrowed Successfully")
                }
            })
        }
        
    })
    }




  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        
        <div className='modalRight'>
          <button className='closeBtn cursor-pointer hover:bg-red-800 hover:text-white hover:rounded-full h-8 w-8 z-50'  onClick={onClose}>
            X
          </button>
          <div className='content'>
            <form className=" text-black flex flex-col gap-4 " >
                <div>
                    <label>Name : </label>
                <input readOnly defaultValue={user?.displayName} className=" text-black px-4 border-2 ml-2 border-red-900" type="text" />
                </div>
                <div>
                    <label>Email : </label>
                <input readOnly defaultValue={user?.email} className=" text-black px-4 border-2 ml-2 border-red-900" type="email" />
                </div>
                <div>
                    <label>Return Date : </label>
                <input onChange={(e)=> setDate(e.target.value) } className=" border-2 ml-2 border-red-900" type="date" />
                </div>
            </form>
          </div>
          <div className='btnContainer'>
            <button disabled={isExist? true :false} onClick={() => { handleConfirm(); onClose() }} className={`btnPrimary ${isExist && " pointer-events-none opacity-30"}`}>
              <span className='bold'>{isExist? "Already Borrowed": "Borrow"}</span>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;