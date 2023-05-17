import { useEffect } from "react";

import ProductsItem from "./ProductsItem";

import * as P from "../style/ProductsItems.styled";

const ProductsItems = ({ items, setItems, index }) => {
  console.log(index, items);
  return (
    <P.ItemContainer>
      {items.map((item) => {
        return(
        <ProductsItem
          key={item.id}
          id={item.id}
          item={item}
          setItems={setItems}
          index={index}
        />
        )
      })}
    </P.ItemContainer>
  );
};
export default ProductsItems;
