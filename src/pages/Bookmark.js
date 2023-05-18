import { useState, useEffect } from "react";

import Category from "../components/Category";
import ProductsItems from "../components/ProductsItems";
import LocalStorage from "../LocalStorage";

import * as B from "../style/Bookmark.styled";


const Bookmark = () => {
    const titles = ['Product', 'Category', 'Exhibition' , 'Brand'];
    const [index, setIndex] = useState(0);
    // const [items, setItems] = useState([]);
    const [items, setItems] =  LocalStorage("bookmarkLists", []);
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch(`http://cozshopping.codestates-seb.link/api/v1/products?`)
          .then((res) => res.json())
          .then((data) => {
            setItems(data.map((item) => ({...item, bookmark: false})));
            // setProducts(data.map((item) => ({...item, bookmark: false})));
          });
      };

      useEffect(() => {
        getProducts();
        // setProducts(items.map((item) => ({...item, bookmark: false})))
        setProducts(items.filter((item) => item.Bookmark === true));
      }, []);

      useEffect(()=>{
        // const filteredData = items.filter((item) => {
        //     return (index > 0 ? item.type === titles[index-1] :item ) && item.bookmark === true ;
        // });
        // setProducts(filteredData.filter((data) => {
       
        //     // data.bookmark === true
        // }));
        // setProducts(items.filter((item) => {
        //     return (index > 0 ? item.type === titles[index-1] : item) && item.bookmark === true;
        // }))

        setProducts((items.filter((item) => {
            return index > 0 ? item.type === titles[index-1] : item 
          })).filter((e) => e.bookmark));
      }, [index]);

    
    return(
    <B.BookmarkContainer>
        <Category setIndex={setIndex} />
        <ProductsItems index={index} items={products} setItems={setProducts} />
    </B.BookmarkContainer>
    )
   
}
export default Bookmark;