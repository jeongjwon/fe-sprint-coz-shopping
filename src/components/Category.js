import { useState, useEffect } from "react";

import all from "../assets/productsNav/all.png";
import product from "../assets/productsNav/product.png";
import category from "../assets/productsNav/category.png";
import exhibition from "../assets/productsNav/exhibition.png";
import brand from "../assets/productsNav/brand.png";

import * as C from "../style/Category.styled"

const ProductsNav = ({setIndex}) => {
    const [images, setImages] = useState([]);
    const titles = ["전체", "상품", "카테고리", "기획전", "브랜드"]


    useEffect(() => {
        setImages([all,product, category, exhibition, brand]);
    },[]);

    return(
        <C.NavContainer>
            {images.map((image,idx) => {
                return(
                    <C.NavList key={idx} onClick={()=>setIndex(idx)}>
                        <div className="nav-box">
                            <img src={image} alt={image} />
                            <span>{titles[idx]}</span>
                        </div>
                        
                    </C.NavList>
                );
                
            })}
            
            
           
        </C.NavContainer>
    )
}

export default ProductsNav;