import { useState, useEffect } from "react";

import all from "../assets/productsNav/all.png";
import product from "../assets/productsNav/product.png";
import category from "../assets/productsNav/category.png";
import exhibition from "../assets/productsNav/exhibition.png";
import brand from "../assets/productsNav/brand.png";

import * as C from "../style/Category.styled";

const Category = ({ setIndex }) => {
  const categoryLists = [
    { title: "전체", type: "All", img_url: all },
    { title: "상품", type: "Product", img_url: product },
    { title: "카테고리", type: "Category", img_url: category },
    { title: "기획전", type: "Exhibition", img_url: exhibition },
    { title: "브랜드", type: "Brand", img_url: brand },
  ];

  return (
    <C.NavContainer>
      {categoryLists.map((list, idx) => {
        return (
          <C.NavList key={idx} onClick={() => setIndex(idx)}>
            <div className="nav-box">
              <img src={list.img_url} alt={list.img_url} />
              <span>{list.title}</span>
            </div>
          </C.NavList>
        );
      })}
    </C.NavContainer>
  );
};

export default Category;
