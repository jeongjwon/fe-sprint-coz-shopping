
import { useEffect } from "react";
import styled from "styled-components";
import ProductsItem from "./ProductsItem";


export const ItemContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin-top: 0.8rem;
  flex-wrap: wrap;
`;


const ProductsItems = ({items, setItems, index}) => {
 

  console.log(index, items);
    return(
        <ItemContainer>
          {items.map((item) => {
            return  <ProductsItem
            key={item.id}
            id={item.id}
            item={item} 
            setItems={setItems}
            index={index}
            />
            
            // switch(index){
             
            //   case '0':
            //     return  <ProductsItem
            //     key={item.id}
            //     id={item.id}
            //     item={item} 
            //     setItems={setItems}
            //     />
            //   case '1':
            //    return item.type==='Product' ?
            //      <ProductsItem
            //     key={item.id}
            //     id={item.id}
            //     item={item} 
            //     setItems={setItems}
            //     /> : null 
            // }
           
          })}
        </ItemContainer>
    );
}
export default ProductsItems;
