import styled from "styled-components";
import { HiX, HiOutlineStar } from "react-icons/hi";
import { useState } from "react";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
export const ModalDiv = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;

  transform: translate(-50%, -20%);
  width: 60vw;
  height: 60vh;
  border-radius: 12px;
  background-color: white;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
`;
export const ModalBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #F8F8F8;
  display: flex;
  justify-content: flex-end;

  > svg {
    align-items: flex-end;
    cursor: pointer;
  }
`;
export const ModalDesc = styled.div`
  display: flex;
  align-items: center;

  color: #f8f8f8;
 
`;
export const BookmarkBtn = styled.button`
background: transparent;
border: none;
     > svg {
    cursor: pointer;
    fill: rgba(223, 223, 223);
    color: transparent;
  }
`;
export const SubTitle = styled.h4`
    font-size: 1.5rem;
    margin-left: 0.4rem;
`;
const Modal = ({ openModal, info }) => {
    const [bookmark, setBookmark] = useState(info.bookmark);
    // const { title, url, bookmark } = info;

  console.log(info);
  return (
    <Background onClick={openModal}>
      <ModalDiv img={info.url} onClick={(e) => e.stopPropagation()}>
        <ModalBtn onClick={openModal}>
          <HiX size={40} />
        </ModalBtn>
        <ModalDesc>
          <BookmarkBtn onClick={() => setBookmark(!bookmark)}>
            { bookmark ?  
                <HiOutlineStar size={40} style={{fill:"#ffd361"}} /> 
                : <HiOutlineStar size={40} /> }
            </BookmarkBtn>
          <SubTitle>{info.title}</SubTitle>
        </ModalDesc>
      </ModalDiv>
    </Background>
  );
};

export default Modal;
