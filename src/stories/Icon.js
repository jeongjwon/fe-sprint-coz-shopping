import { Menu } from "react-feather";
import * as Icons from "react-feather";
import { styled } from "styled-components";

export const iconNames = ["Menu", "X", "Star", "Gift"];

export const Icon = ({icon}) => {
  const MenuIcon = styled(Icons[icon])`
    color: black;
  `;
  return <MenuIcon />;
};
