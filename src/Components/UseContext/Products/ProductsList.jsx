import { createContext } from "react";
import Productitems from "./Productitems";
const ProductListprovider = createContext();
const ProductsList = () => {
  const items = {
    name: "Santhoor Soap",
    price: 30,
  };
  return (
    <div>
      <ProductListprovider.Provider value={items}>
        <Productitems />
      </ProductListprovider.Provider>
    </div>
  );
};

export { ProductListprovider, ProductsList };
