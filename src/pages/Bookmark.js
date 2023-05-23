import Category from "../components/Category";
import { useState } from "react";

import Item from "../components/Item";
import * as L from "../style/List.styled";
import * as P from "../style/ProductsList.styled";

import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";


const Bookmark = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [data, error] = useFetch('http://cozshopping.codestates-seb.link/api/v1/products');

  const bookmark = useSelector(state => state.bookmark);
  const bookmarkedData = data.filter((d) => bookmark.includes(d.id));
 

  return (
    <>
      <P.ProductsListContainer>
      <Category selectedType={selectedType} setSelectedType={setSelectedType} />


        <L.ProductsSection>
          <L.ItemContainer>
          {error ? (
              <div>{error}</div>
            ) : (
              bookmarkedData
                .filter((d) =>  selectedType === null || d.type === selectedType)
                .map((d, idx) => <Item data={d} key={`id${idx}`} />)
            )}
          </L.ItemContainer>
        </L.ProductsSection>
      </P.ProductsListContainer>
    </>
  );
};

export default Bookmark;
