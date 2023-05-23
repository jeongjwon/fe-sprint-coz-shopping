import Category from "../components/Category";
import { useState } from "react";

import Item from "../components/Item";
import * as L from "../style/List.styled";
import * as P from "../style/ProductsList.styled";

import useFetch from "../hooks/useFetch";

const ProductsList = () => {
  const [selectedType, setSelectedType] = useState(null);

  const [data, error] = useFetch('http://cozshopping.codestates-seb.link/api/v1/products');

  return (
    <>
      <P.ProductsListContainer>
        <Category selectedType={selectedType} setSelectedType={setSelectedType} />

       
        <L.ProductsSection>
          <L.ItemContainer>
            {error ? (
              <div>{error}</div>
            ) : (
              data
                .filter((d) =>  selectedType === null || d.type === selectedType)
                .map((d, idx) => <Item data={d} key={`id${idx}`} />)
            )}
          </L.ItemContainer>
        </L.ProductsSection>
      </P.ProductsListContainer>
    </>
  );
};

export default ProductsList;
