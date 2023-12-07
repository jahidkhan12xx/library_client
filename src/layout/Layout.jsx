import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import Register from "../Pages/Register/Register";
import SpecificCat from "../components/SpecificCat/SpecificCat";
import SpecificBook from "../components/SpecificBook/SpecificBook";
import UpdateBooks from "../Pages/UpdateBooks/UpdateBooks";
import PrivateRoute from "./PrivateRoute";


const Layout = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/bookCat/:id",
                element:<SpecificCat></SpecificCat>
            },
            {
                path:"/bookCat/:cat/:id",
                element:<SpecificBook></SpecificBook>
            },
            {
                path:"/addBook",
                element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path:"/allBooks",
                element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },
            {
                path:"/updateBooks/:id",
                element:<PrivateRoute><UpdateBooks></UpdateBooks></PrivateRoute>,
                loader:({params})=> fetch(`https://library-9yuaai0at-mizan181.vercel.app/api/v1/specificBook/${params.id}`)
            },
            {
                path:"/borrowedBooks",
                element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            }
            
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    }
])

export default Layout;