import { useState } from "react";
import { Link } from "react-router-dom";


import { FaBars } from "react-icons/fa";

import DropdownMenu from "./DropdownMenu";
import logo from "../assets/logo.png";
import * as H from "../style/Header.styled";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }
  return (
    <H.HeaderContainer>
      <div className="header-wrapper">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="logo">
            <img src={logo} alt="logo" />
            <span>COZ Shopping</span>
          </h1>
        </Link>
        <div className="gnb-btn" onClick={handleToggle}>
          <FaBars size={30}/>
        </div>
        { toggle && (
            <DropdownMenu handleToggle={handleToggle}/>
        )}
      </div>
    </H.HeaderContainer>
  );
};
export default Header;
