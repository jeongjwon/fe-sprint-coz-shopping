import styled from "styled-components";
import ProductsItem from "./ProductsItem";
import { useState, useEffect } from "react";


import * as P from "../style/ProductsItems.styled";

const BookmarkItems = ({ items, setItems }) => {

  
  
  return (
    <P.ItemContainer>
        {items.map((item) => {
         return(
        item.bookmark ? <ProductsItem
          key={item.id}
          id={item.id}
          item={item}
          setItems={setItems}

        />  : null
        )
      })}
    </P.ItemContainer>
  );
};
export default BookmarkItems;
