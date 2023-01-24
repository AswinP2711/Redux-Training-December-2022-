import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductAdded } from "./productsAction";

function AddProduct() {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productType, setProductType] = useState("");

  const onNameChange = (e) => {
    setProductName(e.target.value);
  };

  const onPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const onTypeChange = (e) => {
    setProductType(e.target.value);
  };

  const onSaveClicked = () => {
    if (productName && productPrice && productType) {
      dispatch(ProductAdded(productName, productPrice, productType));
      setProductName("");
      setProductPrice("");
      setProductType("");
    }
  };

  return (
    <Fragment>
      <h3>Add Product</h3>
      <form>
        <input
          type="text"
          id="name"
          name="name"
          value={productName}
          onChange={onNameChange}
          placeholder="Product Name"
        />
        <input
          type="number"
          id="price"
          name="price"
          value={productPrice}
          onChange={onPriceChange}
          placeholder="Product Price"
        />
        <input
          type="text"
          id="type"
          name="type"
          value={productType}
          onChange={onTypeChange}
          placeholder="Product Type"
        />
        <button type="button" onClick={onSaveClicked}>
          Save
        </button>
      </form>
    </Fragment>
  );
}

export default AddProduct;
