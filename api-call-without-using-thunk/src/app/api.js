import axios from "axios";
import { setData, setError, setLoading } from "./features/products/productsAction";


function getProducts(dispatch){
    dispatch(setLoading(true));
    axios.get('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
    .then((reponse)=>{
        dispatch(setData(reponse.data))
        dispatch(setLoading(false))
    })
    .catch(()=>{
        dispatch(setError("An Error Occured"))
    });
}

export default getProducts