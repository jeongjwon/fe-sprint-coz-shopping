import { Link } from "react-router-dom";
import { HiOutlineGift, HiOutlineStar } from "react-icons/hi";

import * as D from "../style/DropdownMenu.styled";


const DropDowbMenu = ({ handleToggle }) => {
 
  return (
    <D.Gnb>
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
    </D.Gnb>
  );
};
export default DropDowbMenu;
