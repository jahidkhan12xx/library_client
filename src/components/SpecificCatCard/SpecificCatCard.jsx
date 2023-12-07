import Rating from 'react-rating-stars-component';
import { Link } from 'react-router-dom';


const SpecificCatCard = ({items}) => {
    console.log(items);
    return (
        <div>
            
          
            

<div className=" md:h-[58vh]  border border-gray-200 rounded-r-[50px] shadow-slate-800  shadow-2xl  bg-slate-800">
    <div >
        <img className=" h-[30vh] w-full" src={items.productImg} alt="" />
    </div>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{items.productName}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{items.productDes.slice(0,70)}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Author : {items.authorName}</p>
        <div className=' my-3'>
        <Rating
        count={5}
        size={24}
        activeColor="#FFFFFF"
        isHalf={false}
        value={items.rating} 
        edit={false} 
        
      />
        </div>
        <Link to={`/bookCat/${items.catCode}/${items._id}`}><button  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            See Details
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button></Link>
    </div>
</div>

        </div>
    );
};

export default SpecificCatCard;