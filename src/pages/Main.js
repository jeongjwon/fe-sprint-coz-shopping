import { useState, useEffect } from "react";
import Card from "../components/Card";

import ProductsItems from "../components/ProductsItems";
import BookmarkItems from "../components/BookmarkItems";
import LocalStorage from "../LocalStorage";
import Loading from "../components/Loading";

import * as M from "../style/Main.styled";

const Main = () => {
  const [index, setIndex] = useState(0);
  // const [items, setItems] = useState([]);
  const [lists, setLists] = LocalStorage("bookmarkLists", []);
  const [items, setItems] = useState([]);

  const getProducts = () => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products?`)
      .then((res) => res.json())
      .then((data) => {

        setLists(data.map((item) => ({ ...item, bookmark: false })));
      });
  };
  
  useEffect(() => {
    getProducts();
    setItems(lists.slice(0,4));
  }, []);


  return (
    <M.MainContainer>
      <M.ProductsSection>
        <M.Title>상품 리스트</M.Title>
        <ProductsItems items={items} setItems={setItems} />
      </M.ProductsSection>
      <M.ProductsSection>
        <M.Title>북마크 리스트</M.Title>
        {
          (items.filter((item) => item.bookmark)).length > 0 ? 
        
        <BookmarkItems

          items={items}
          setIndex={setItems}
        /> : <Loading /> }
      </M.ProductsSection>
    </M.MainContainer>
  );
};
export default Main;
