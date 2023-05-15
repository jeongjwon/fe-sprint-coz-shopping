import { useState, useEffect } from "react";
import Card from "../components/Card";
import styled from "styled-components";
import { HiOutlineStar } from "react-icons/hi";
import bookmarkOff from "../assets/bookmark_off.png";

export const MainContainer = styled.main`
  padding: 2rem 8rem;
  display: flex;
  justify-content: center;
`;
export const ItemContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin-top: 0.8rem;
`;
export const Item = styled.li`
  /* margin: 1rem; */
  /* overflow:hidden ; */
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;
`;
export const ItemImg = styled.div`
  width: 20vw;
  height: 30vh;
  margin-bottom: 0.5rem;
  position: relative;
  > img.product_img{
    background-image: url(${(props) => props.src});
    background-size: cover;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 0.5rem;
  }
  > img.bookmark{
    position: ;
    top: ;
  }
  
`;
export const ItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 500;
`;

const Main = () => {
  const [items, setItems] = useState([]);
  const getPopular = () => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=4`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  };
  useEffect(() => {
    getPopular();
  }, []);

  return (
    <MainContainer>
      <section>
        <h1>상품리스트</h1>
        <ItemContainer>
          {items.map((item) => {
            return (
              <Item key={item.id}>
                <ItemImg>
                  <img src={item.image_url || item.brand_image_url} className="product_img"/>
                    <img src={bookmarkOff} className="bookmark"/>
                </ItemImg>
                <ItemDesc>{item.title || item.brand_name}</ItemDesc>
              </Item>
            );
          })}
        </ItemContainer>
      </section>
    </MainContainer>
  );
};
export default Main;
