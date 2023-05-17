import { useState, useEffect } from "react";

import Category from "../components/Category";
import ProductsItems from "../components/ProductsItems";
import LocalStorage from "../LocalStorage";

import * as P from "../style/ProductsList.styled";
const ProductsList = () => {
    const titles = ['Product', 'Category', 'Exhibition' , 'Brand'];
    const [index, setIndex] = useState(0);
    // const [items, setItems] = useState([]);
    const [items, setItems] =  LocalStorage("bookmarkLists", []);
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch(`http://cozshopping.codestates-seb.link/api/v1/products?`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setItems(data.map((item) => ({...item, bookmark: false})));
            setProducts(data.map((item) => ({...item, bookmark: false})));
          });
      };

      useEffect(() => {
        getProducts();
        // setProducts(items.map((item) => ({...item, bookmark: false})))
        // setProducts(...items);
      }, []);

      useEffect(()=>{
        // console.log('index 가 바뀔 때 마다');
        setProducts(items.filter((item) => {
          console.log(titles[index-1]);
          return index > 0 ? item.type === titles[index-1] : item 
        }));
      }, [index]);

      // useEffect(()=>{
      //   LocalStorage("bookmarkLists", items);
      // },[items])
    return(
    <P.ProductsListContainer>
        <Category setIndex={setIndex} />
        <ProductsItems index={index} items={items} setItems={setItems} />
    </P.ProductsListContainer>
    )
   
}
export default ProductsList;