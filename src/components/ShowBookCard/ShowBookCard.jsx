import Rating from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ShowBookCard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2 className=" mx-6 mb-6 md:text-xl text-blue-800">Quantity : {data?.length}</h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
      
      {data?.map((item) => (
        <div
          key={item._id}
          className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full h-72 max-w-[48rem] flex-row"
        >
          <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src={item.productImg}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
              {item.productName}
            </h6>

            <p className="">Author : {item.authorName}</p>
            <p className="">
              Category : {item.catCode}
              <Rating
                count={5}
                size={24}
                activeColor="#000000"
                isHalf={false}
                value={item.rating}
                edit={false}
              />
            </p>
           <Link to={`/updateBooks/${item._id}`}> <button className=" btn btn-ghost mt-10 border-blue-900">Update</button></Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ShowBookCard;
