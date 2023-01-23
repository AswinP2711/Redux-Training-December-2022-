import axios from "axios";
import {
  setData,
  setError,
  setLoading,
} from "./features/products/productAction";

function getProducts() {
  return function (dispatch) {
    dispatch(setLoading(true));
    axios
      .get("http://localhost:5102/products")
      .then((response) => {
        dispatch(setData(response.data));
        dispatch(setLoading(false));
      })
      .catch(() => {
        dispatch(setError("An Error Occured"));
      });
  };
}

export default getProducts;
