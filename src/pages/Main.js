import { useState, useEffect } from "react";
import Card from "../components/Card";
import styled from "styled-components";
import ProductsItems from "../components/ProductsItems";
import BookmarkItems from "../components/BookmarkItems";
import LocalStorage from "../LocalStorage";

export const MainContainer = styled.main`
  padding: 2rem 8rem;
  display: flex;
  flex-direction: column;

`;
export const ProductsSection = styled.section`
    margin: 1rem;
`;
export const Title = styled.h2`

`;
const Main = () => {
  const [index, setIndex] = useState(0);
  // const [items, setItems] = useState([]);
  const [items, setItems] = LocalStorage("bookmarkLists", []); 
  const [bookmarkItems, setBookmarkItems] =  LocalStorage("bookmarkLists", []); 

  const getProducts = () => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=4`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data.map((item) => ({...item, bookmark: false})));
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log('main',items);

  return (
    <MainContainer>
      <ProductsSection>
        <Title>상품 리스트</Title>
        <ProductsItems 
        items={items} 
        setItems={setItems} 
        />
        </ProductsSection>
        <ProductsSection>
        <Title>북마크 리스트</Title>
        <BookmarkItems 
      bookmarkItems={bookmarkItems}
        items={items} 
        setIndex={setIndex}/>
        </ProductsSection>
     
    </MainContainer>
  );
};
export default Main;
