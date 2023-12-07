import { Link } from "react-router-dom";


const BookCatCard = ({cat}) => {
    console.log(cat);
    return (
        <div>

<div className="card  h-[30vh] bg-base-100 shadow-xl image-full">
  <figure><img className=" w-full" src={cat.relevant_image} alt="Shoes" /></figure>
  <div className="card-body flex justify-center items-center">
    <h2 className="card-title text-4xl font-bold">{cat.category_name}</h2>
    <Link to={`/bookCat/${cat.cat_code}`}><button className="btn btn-primary bg-transparent border-red-800">See Books</button></Link>
   
    
  </div>
</div>
        </div>
    );
};

export default BookCatCard;