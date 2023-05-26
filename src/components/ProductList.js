import * as P from "../style/List.styled";

import Item from "./Item";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import { title } from "../constants/title";

const ProductList = ({titleList}) => {
    const [data, error] = useFetch( "http://cozshopping.codestates-seb.link/api/v1/products");
    const bookmark = useSelector((state) => state.bookmark);
    const favoriteCount = 4;
    return(
        <P.ProductsSection>
            <P.Title>{titleList}</P.Title>
            <P.ItemContainer>
                {error ? (
                    <div>{error}</div>
                ) : titleList === title.PRODUCT_LIST ? (
                    data.map((d) => <Item data={d} key={d.id} />).slice(0,favoriteCount)
                ) : bookmark.length === 0 ? (
                    <div> 북마크에 담긴 상품이 없습니다. </div>
                ) : (
                    bookmark.map((id) => {
                        return data.filter((d) => d.id === id)[0];
                    })
                    .slice(0, favoriteCount)
                    .map((d, idx) => <Item data={d} key={`id${idx}`}/>)
                )}
               
            </P.ItemContainer>
        </P.ProductsSection>
    )

}
export default ProductList;