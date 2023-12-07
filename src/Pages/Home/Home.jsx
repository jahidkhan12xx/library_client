import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Banner from "../../components/Banner/Banner";
import BookCat from "../../components/BookCat/BookCat";



const Home = () => {

    const {user} = useContext(AuthContext);

    console.log(user);
    return (
        <div>
           <Banner></Banner>
           <BookCat></BookCat>
        </div>
    );
};

export default Home;