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
    
    return(
        <ItemContainer>
          {items.map((item) => 
            item.bookmark ? <ProductsItem
                item={item} 
                key={item.id}/>
           : null )}
        </ItemContainer>
    );
}
export default BookmarkItems;