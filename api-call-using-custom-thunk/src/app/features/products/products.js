import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../api";


function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  console.log(products);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);
  return (
    <div>
        {
            products.loading && <h1>Loading</h1>
        }
        {
            products.error && <h1>{products.error}</h1>
        }
      <h1>Product API</h1>
      <table border={2}>
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Type</th>
        </thead>
        <tbody>
          {products.data.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
