import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { FaBars } from "react-icons/fa";

import DropDowbMenu from "./DropdownMenu";

import logo from "../assets/logo.png";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

  .header-wrapper{
    position: relative;
    display: flex;
    justify-content: space-between;
    padding : 2rem 8rem;
    align-items: center;
    width: 100%;
    max-width: 128rem;
  }
  .logo{
    display: flex;
    align-items: center;
    cursor: pointer;
    img{
        margin-right: 1rem;
    
    }
    span{
        font-weight: 700;
        font-size: 2rem;
        color: black;
    }
  }
  .gnb-btn{
        cursor: pointer;
    }
`;
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handdleToggle = () => {
        setToggle(!toggle);
    }
  return (
    <HeaderContainer>
      <div className="header-wrapper">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="logo">
            <img src={logo} alt="logo" />
            <span>COZ Shopping</span>
          </h1>
        </Link>
        <div className="gnb-btn" onClick={handdleToggle}>
          <FaBars size={30}/>
        </div>
        { toggle && (
            <DropDowbMenu handdleToggle={handdleToggle}/>
        )}
      </div>
    </HeaderContainer>
  );
};
export default Header;
