import Category from "../components/Category";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item";
import * as L from "../style/List.styled";
import * as P from "../style/ProductsList.styled";
import * as C from "../style/Category.styled";
import all from "../assets/productsNav/all.png";
import product from "../assets/productsNav/product.png";
import category from "../assets/productsNav/category.png";
import exhibition from "../assets/productsNav/exhibition.png";
import brand from "../assets/productsNav/brand.png";

const ProductsList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [type, setType] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://cozshopping.codestates-seb.link/api/v1/products?count"
        );
        setItems(res.data);
      } catch (error) {
        setError("데이터를 가져오는 도중에 에러가 발생했습니다.");
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {

  // },[type]);
  const categoryLists = [
    { title: "전체", type: "All", img_url: all },
    { title: "상품", type: "Product", img_url: product },
    { title: "카테고리", type: "Category", img_url: category },
    { title: "기획전", type: "Exhibition", img_url: exhibition },
    { title: "브랜드", type: "Brand", img_url: brand },
  ];
  return (
    <>
      <P.ProductsListContainer>
        {/* <Category setType={setType}/> */}

        <C.NavContainer>
          {categoryLists.map((list, idx) => {
            return (
              <C.NavList
                key={idx}
                onClick={() =>
                  setType(list.type === "전체" ? null : list.type)
                }
              >
                <div className="nav-box">
                  <img src={list.img_url} alt={list.img_url} />
                  <span>{list.title}</span>
                </div>
              </C.NavList>
            );
          })}
        </C.NavContainer>
        <L.ProductsSection>
          <L.ItemContainer>
            {error ? (
              <div>{error}</div>
            ) : (
              items
                .filter((item) =>  type === null || item.type === type)
                .map((item, idx) => <Item item={item} key={`id${idx}`} />)
            )}
          </L.ItemContainer>
        </L.ProductsSection>
      </P.ProductsListContainer>
    </>
  );
};

export default ProductsList;
