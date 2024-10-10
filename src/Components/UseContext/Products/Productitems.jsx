import { useContext } from "react";
import { ProductListprovider } from "./ProductsList";
const Productitems = () => {
  const items = useContext(ProductListprovider);
  return <div>{items.name}-{items.price}</div>;
};

export default Productitems;
