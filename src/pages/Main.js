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
  // const [lists, setLists] = LocalStorage("bookmarkLists", []);
  const [items, setItems] = useState([]);
  const [bookmarkItems, setBookmarkItems] = useState([]);

  const getProducts = () => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products?`)
      .then((res) => res.json())
      .then((data) => {
        // setLists(data.map((item) => ({ ...item, bookmark: false })));
        setItems(data.map((item) => ({ ...item, bookmark: false })));
      });
  };

  //북마크 클릭하면 해당 item 을 bookmarkItems 에 추가
  //items 에는  item 에 bookmark 속성 추가한 모든 item 배열
  //북마크 클릭시 -> setItem(bookmark:!bookmark) 로 변경
  //bookmark 가 true 일 때 bookmarkItems 에 추가
  //bookmark 가 false 일 때 bookmarkItems 에서 삭제

  //Main -> ProductsItems -> bookmark 클릭 -> setItems, setBookmark
  //     -> BookmarkItems -> bookmark 클릭시 -> setIems, setBookmark

  const getBookmark = () => {
    let local = localStorage.getItem("bookmarkLists");
    if (local !== null) setBookmarkItems(JSON.parse(local));
  };

  useEffect(() => {
    getProducts();
    // getBookmark();
  }, []);

  // useEffect(()=>{
  //   setItems(items.map((item) => ({...item , bookmark: !bookmark}))); //bookmark 변경

  // }, [items]);

  return (
    <M.MainContainer>
      <M.ProductsSection>
        <M.Title>상품 리스트</M.Title>
        <ProductsItems
          items={items.slice(0, 4)}
          setItems={setItems}
          // bookitems={bookmarkItems}
          // setBookmarkItems={setBookmarkItems}
        />
      </M.ProductsSection>
      <M.ProductsSection>
        <M.Title>북마크 리스트</M.Title>
        {items.filter((item) => item.bookmark).length > 0 ? (
          <BookmarkItems items={items} setIndex={setItems} />
        ) : (
          <Loading />
        )}
      </M.ProductsSection>
    </M.MainContainer>
  );
};
export default Main;
