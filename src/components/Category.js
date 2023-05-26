

import all from "../assets/productsNav/all.png";
import product from "../assets/productsNav/product.png";
import category from "../assets/productsNav/category.png";
import exhibition from "../assets/productsNav/exhibition.png";
import brand from "../assets/productsNav/brand.png";

import * as C from "../style/Category.styled";
import { types } from "../constants/types";

const Category = ({ selectedType, setSelectedType }) => {
  const { PRODUCT, CATEGORY, EXHIBITION , BRAND } = types;
  const categoryLists = [
    { title: "전체", type: null, img_url: all },
    { title: "상품", type: PRODUCT, img_url: product },
    { title: "카테고리", type: CATEGORY, img_url: category },
    { title: "기획전", type: EXHIBITION, img_url: exhibition },
    { title: "브랜드", type: BRAND, img_url: brand },
  ];

  return (
    <C.NavContainer>
      {categoryLists.map((list, idx) => {
        return (
          <C.NavList key={idx} onClick={()=> setSelectedType(list.type)}>
            <div className="nav-box">
              <img src={list.img_url} alt={list.img_url} />
              <span className={selectedType === list.type && 'clickedBtn'}>{list.title}</span>
            </div>
          </C.NavList>
        );
      })}
    </C.NavContainer>
  );
};

export default Category;
