import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";


const BorrowBooks = ({item,refetch}) => {
    const axios = useAxios();

    const handleReturn = (bookName) =>{
        console.log(bookName,item._id);
        axios.delete(`/deleteBorrowBooks/${item._id}`)
        .then(res=>{
            if(res.data.deletedCount>0){
                axios.patch(`/increaseCount/${bookName}`)
                .then(res=>{
                    console.log(res.data);
                    toast.success("Book returned Successfully")
                    refetch();

                })
            }
        })

    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className=" h-52" src={item?.img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{item?.bookName}</h2>
    <div>
    <p> Category : {item.bookCat}</p>
    <p> Borrow Date : {item?.borrowDate}</p>
    <p> Return Date : {item?.returnDate}</p>
    </div>
    <div className="card-actions justify-end">
      <button onClick={()=>handleReturn(item?.bookName)} className="btn btn-primary">Return</button>
     
    </div>
  </div>
</div>
            
        </div>
    );
};

export default BorrowBooks;