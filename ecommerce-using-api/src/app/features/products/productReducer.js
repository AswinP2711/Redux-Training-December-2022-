function ProductReducer(
  products = {
    data: [],
    error: "",
    loading: false,
  },
  action
) {
  switch (action.type) {
    case "set-data":
      return {
        ...products,
        data: action.payload,
      };

    case "loading":
      return {
        ...products,
        loading: action.payload,
      };

    case "error":
      return {
        ...products,
        error: action.payload,
      };
    default:
      return products;
  }
}

export default ProductReducer;
