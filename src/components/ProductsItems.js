

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


const ProductsItems = ({items, setItems}) => {
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
  
            />
          })}
        </ItemContainer>
      </ProductsSection>
    );
}
export default ProductsItems;
