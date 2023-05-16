import styled from "styled-components";
import ProductsItem from "./ProductsItem";
import {useState, useEffect} from "react";
export const ProductsSection = styled.section`
    margin: 1rem;
`;
export const ItemContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin-top: 0.8rem;
`;
const BookmarkItems = ({items}) => {
    const [bookmarkedItems, setBookmarkedItems] = useState([]);
    console.log('bookmarkItems', items);
    
    // useEffect(() => {

    // },[items])

    return(
        <ProductsSection>
        <h2>북마크 리스트</h2>
        <ItemContainer>
          {items.map((item) => 
            item.bookmark ? <ProductsItem
                item={item} 
                key={item.id}/>
           : null )}
        </ItemContainer>
      </ProductsSection>
    );
}
export default BookmarkItems;