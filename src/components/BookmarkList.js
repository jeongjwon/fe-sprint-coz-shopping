import * as P from "../style/List.styled";
import axios from "axios";
import React, {useState, useEffect} from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

const BookmarkList = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    // const bookmark = useSelector((state) => state.bookmark);

    
    useEffect(() => {
        const fetchData = async () =>{
            try{
                const res = await axios.get(
                    "http://cozshopping.codestates-seb.link/api/v1/products?count=4"
                );
                setItems(res.data);
            } catch(error){
                setError("데이터를 가져오는 도중에 에러가 발생했습니다.");
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return(
        <P.ProductsSection>
            <P.Title>북마크 리스트</P.Title>
            <P.ItemContainer>
                {error ? (
                    <div>{error}</div>
                ) : (
                    items.map((item) => <Item item={item} key={item.id}/>)
                )}
            </P.ItemContainer>
        </P.ProductsSection>
    )
}
export default BookmarkList;