import styled from "styled-components";
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 111111;
  background: #ffffff;
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