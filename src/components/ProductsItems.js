

import styled from "styled-components";
import ProductsItem from "./ProductsItem";

export const ItemContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin-top: 0.8rem;
`;


const ProductsItems = ({items}) => {
    return(
        <section>
        <h2>상품리스트</h2>
        <ItemContainer>
          {items.map((item) => {
            return <ProductsItem
                item={item} 
                key={item.id}/>
          })}
        </ItemContainer>
      </section>
    );
}
export default ProductsItems;
