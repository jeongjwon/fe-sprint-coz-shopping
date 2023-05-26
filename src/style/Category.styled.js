import styled from "styled-components";

export const NavContainer = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin-bottom: 1.2rem;
    
`;
export const NavList = styled.li`
    margin: 1rem;
    cursor: pointer;
    > .nav-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > img{
            margin-bottom : 0.5rem;
        }
        > span{
            font-weight: 400;

        }
        .clickedBtn{
            font-weight: 700;
            text-decoration: underline;
            color: #412dd4;
        }
    }
`;