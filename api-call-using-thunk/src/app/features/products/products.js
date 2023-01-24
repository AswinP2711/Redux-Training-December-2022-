import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../api";
import { ProductDeleted } from "./productsAction";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onDeleteProduct = (productName) => {
    dispatch(ProductDeleted(productName));
  };
  return (
    <div>
      {products.loading && <h1>Loading</h1>}
      {products.error && <h1>{products.error}</h1>}
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
              <button onClick={() => onDeleteProduct(product.name)}>
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;