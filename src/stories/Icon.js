import { Menu } from "react-feather"
import { styled } from "styled-components";

export const hamburger = 'Menu';
export const Icon = () =>{

    const MenuIcon = styled(Menu)`
        color: black;
    `
    return <MenuIcon />
}