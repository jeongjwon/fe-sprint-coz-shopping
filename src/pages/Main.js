import { useState, useEffect } from "react";
import Card from "../components/Card";
import styled from "styled-components";
import ProductsItems from "../components/ProductsItems";
import BookmarkItems from "../components/BookmarkItems";

export const MainContainer = styled.main`
  padding: 2rem 8rem;
  display: flex;
  justify-content: center;
`;

const Main = () => {
  const [items, setItems] = useState([]);
  const getProducts = () => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=4`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainContainer>
      <ProductsItems items={items}/>
      <BookmarkItems />
    </MainContainer>
  );
};
export default Main;
