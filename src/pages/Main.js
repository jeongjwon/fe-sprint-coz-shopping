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

const Main = () => {
  // const [items, setItems] = useState([]);
  const [items, setItems] = useState([]);
  const [bookmarkedItems, setBookmarkedItems] =  LocalStorage("bookmarkLists", []); 

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
      <ProductsItems 
        items={items} 
        setItems={setItems} 
        />
      <BookmarkItems items={items}/>
    </MainContainer>
  );
};
export default Main;
