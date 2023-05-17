import { useState, useEffect } from "react";
import Card from "../components/Card";

import ProductsItems from "../components/ProductsItems";
import BookmarkItems from "../components/BookmarkItems";
import LocalStorage from "../LocalStorage";

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
        console.log(data);
        setLists(data.map((item) => ({ ...item, bookmark: false })));
      });
  };
  useEffect(() => {
    getProducts();
    setItems(lists.splice(0,4));
  }, []);
  console.log("main", items);

  return (
    <M.MainContainer>
      <M.ProductsSection>
        <M.Title>상품 리스트</M.Title>
        <ProductsItems items={items} setItems={setItems} />
      </M.ProductsSection>
      <M.ProductsSection>
        <M.Title>북마크 리스트</M.Title>
        <BookmarkItems
          bookmarkItems={items}
          items={items}
          setIndex={setIndex}
        />
      </M.ProductsSection>
    </M.MainContainer>
  );
};
export default Main;
