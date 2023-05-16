import { useState, useEffect } from "react";
import { styled } from "styled-components";
import ProductsNav from "../components/ProductsNav";
import ProductsItems from "../components/ProductsItems";
export const ProductsListContainer = styled.main`
    padding : 2rem 8rem;
`;
const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const getProducts = () => {
        fetch(`http://cozshopping.codestates-seb.link/api/v1/products?`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setProducts(data.map((item) => ({...item, bookmark: false})));
          });
      };
      useEffect(() => {
        getProducts();
      }, []);
    return(
    <ProductsListContainer>
        <ProductsNav />

        상품리스트 페이지
        <ProductsItems items={products} setItems={setProducts} />

    </ProductsListContainer>
    )
   
}
export default ProductsList;