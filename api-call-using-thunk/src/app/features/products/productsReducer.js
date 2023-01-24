export function ProductReducer(
  state = {
    data: [],
    error: "",
    loading: false,
  },
  action
) {
  switch (action.type) {
    case "set-data":
      return {
        ...state,
        data: action.payload,
      };

    case "loading":
      return {
        ...state,
        loading: action.payload,
      };

    case "error":
      return {
        ...state,
        error: action.payload,
      };

    case "product-added":
      return {
        ...state,
        data:[...state.data,action.payload]
      };
    case "delete-product":
      state.data = state.data.filter((products)=>products.name !== action.productName);
      return {
        ...state
      }
    default:
      return state;
  }
}
