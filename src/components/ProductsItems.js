import { useEffect } from "react";

import ProductsItem from "./ProductsItem";

import * as P from "../style/ProductsItems.styled";

const ProductsItems = ({ items, setItems }) => {

  return (
    <P.ItemContainer>
      {items.map((item) => {
        return(
        <ProductsItem
          key={item.id}
          id={item.id}
          item={item}
          setItems={setItems}

        />
        )
      })}
    </P.ItemContainer>
  );
};
export default ProductsItems;
