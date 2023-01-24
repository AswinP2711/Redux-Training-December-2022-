export function setData(data) {
  return {
    type: "set-data",
    payload: data,
  };
}

export function setLoading(isLoading) {
  return {
    type: "loading", 
    payload: isLoading,
  };
}

export function setError(error) {
  return {
    type: "error",
    payload: error,
  };
}

export function ProductAdded(name, price, type) {
  const priceProd = parseInt(price);
  let payload = {
    name: name,
    price: priceProd,
    image: "",
    type: type,
  };
  return {
    type: "product-added",
    payload,
  };
}

export function ProductDeleted(productName){
  return{
    type:"delete-product",
    productName
  }
}
