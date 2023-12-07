import axios from "axios";


const useAxios = () => {

    const instance = axios.create({
        baseURL: 'https://library-khaki-theta.vercel.app/api/v1',
        withCredentials: true
      });
    return instance;
};

export default useAxios;