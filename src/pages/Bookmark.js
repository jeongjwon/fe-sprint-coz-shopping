import Category from "../components/Category";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item";
import * as L from "../style/List.styled";
import * as P from "../style/ProductsList.styled";
import { useSelector } from "react-redux";

const BookmarkList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [type, setType] = useState("All");
  const bookmark = useSelector(state => state.bookmark);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://cozshopping.codestates-seb.link/api/v1/products?count"
        );
        setItems(res.data.filter((d) => {
            return bookmark.includes(d.id);
        }));
      } catch (error) {
        setError("데이터를 가져오는 도중에 에러가 발생했습니다.");
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <P.ProductsListContainer>
        <Category />

        <L.ProductsSection>
          <L.ItemContainer>
            {error ? (
              <div>{error}</div>
            ) : (
              items.map((item) => <Item item={item} key={item.id} />)
            )}
          </L.ItemContainer>
        </L.ProductsSection>
      </P.ProductsListContainer>
    </>
  );
};

export default BookmarkList;
