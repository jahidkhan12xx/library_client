import { useState } from 'react';
import Rating from 'react-rating-stars-component';
import useAxios from '../../hooks/useAxios';
import toast from 'react-hot-toast';

const AddBook = () => {

    const axios = useAxios();

    const [rating,setRating] = useState()

    const handleRatingChange = (newRating) => {
        // console.log(`Rating changed to: ${newRating}`);
        setRating(newRating)
        // Add any additional logic here
      };

      const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const productImg = form.img.value;
        const productName = form.name.value;
        const productQuantity = parseInt(form.quantity.value);
        const authorName = form.author.value;
        const catCode = form.cat.value;
        const productDes = form.des.value;
        

        const product = {productImg,productName,productQuantity,productDes,authorName,catCode,rating};

        axios.post("/books",product)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                toast.success("Book Added Successfully")
            }
        })

        console.log(product);
      }

      console.log(rating);
    return (
        <div className=" w-[85vw] mx-auto my-32">
            

<form onSubmit={handleSubmit}>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="img" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Image URL</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="number" name="quantity" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Quantity</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="author" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Author Name</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">

        <select required name="cat" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer">
            <option value="">Select Category</option>
            <option value="novel">Novel</option>
            <option value="sifi">Science Fiction</option>
            <option value="manga">Manga</option>
            <option value="fantasy">Fantasy</option>
        </select>
        
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="des" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Short Description</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
  <div>
      <h1>Rating</h1>
      <Rating
        count={5}
        onChange={handleRatingChange}
        size={24}
        activeColor="#0000FF"
        isHalf={false}
        value={0} // You can set the initial value here
      />
    </div>
  </div>
  <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Submit"></input>
</form>

        </div>
    );
};

export default AddBook;