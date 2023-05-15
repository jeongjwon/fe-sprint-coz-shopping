import { Link } from "react-router-dom";

import styled from "styled-components";

import { HiOutlineGift, HiOutlineStar } from "react-icons/hi";

export const Gnb = styled.nav`
  position: absolute;
  top: 4rem;
  right: 3rem;
  display: flex;
  flex-direction: column;
  height: 8rem;

  .shark {
    width: 1.6rem;
    padding-top: 1.8rem;
    margin-left: 11.2rem;
    -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background-color: #ffffff;
    box-shadow: 0px -2px 8px 5px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px -2px 8px 5px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px -2px 8px 5px rgba(0, 0, 0, 0.1);
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 18rem;
    border-radius: 1.2rem;
    background-color: #ffffff;
    box-shadow: 0px -2px 8px 5px rgba(0, 0, 0, 0.1);

    > li{
        display: flex;
        align-items: center;
        height: 4rem;
        padding: 0 3rem;


        &:not(:first-of-type){
            border-top: 0.5px solid rgba(0,0,0,0.1);
        }
    }
    a{
        display: flex;
        align-items: center;
        color: black;
        cursor: pointer;
    }
    svg{
        margin-right: 0.5rem;
    }
  }
`;

const DropDowbMenu = ({handleToggle}) => {
  return (
    <Gnb>
      <div className="shark"></div>
      <ul>
        <li>OOO님, 안녕하세요!</li>
        <li onClick={handleToggle}>
          <Link to="/products/list" style={{ textDecoration: "none" }}>
            <HiOutlineGift size={30} /> 상품리스트 페이지
          </Link>
        </li>
        <li onClick={handleToggle}>
          <Link to="/bookmark" style={{ textDecoration: "none" }}>
            <HiOutlineStar size={30} /> 북마크 페이지
          </Link>
        </li>
      </ul>
    </Gnb>
  );
};
export default DropDowbMenu;
