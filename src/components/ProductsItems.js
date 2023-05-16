
import { useEffect } from "react";
import styled from "styled-components";
import ProductsItem from "./ProductsItem";

export const ProductsSection = styled.section`
    margin: 1rem;
`;
export const ItemContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin-top: 0.8rem;
  flex-wrap: wrap;
`;


const ProductsItems = ({items, setItems, index}) => {
  //   const titles = [, 'Products', 'Category', 'Exhibition' , 'Brand'];

  // useEffect(() => {
  //   setItems(items.filter((item) => item.type === titles[index] ))
  // },[index]);

  console.log(index, items);
    return(
        <ProductsSection>
        <h2>상품리스트</h2>
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
      </ProductsSection>
    );
}
export default ProductsItems;
