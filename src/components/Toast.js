import styled from "styled-components";
import bookmarkOff from "../assets/bookmark_off.png";
import bookmarkOn from "../assets/bookmark_on.png";
import { HiOutlineStar } from "react-icons/hi";

export const ToastContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  right:0;
  border-radius: 12px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  animation-duration: 3s;
  animation-name:slidein;
  /* transform: translateX(calc(100%-2rem));
  transition: all 2s  cubic-bezier(0.68, -0.55, 0.25, 1.35); */
`;
export const ToastDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  > svg {
    fill: rgba(223, 223, 223);
    color: transparent;
    margin-right: 0.2rem;
  }
`;

const Toast = ({ bookmark }) => {
    console.log(bookmark);
  return (
    <ToastContainer>
      {!bookmark ? (
        <ToastDiv>
          <HiOutlineStar size={30} />{" "}
          <div>상품이 북마크에서 제거되었습니다.</div>
        </ToastDiv>
      ) : (
        <ToastDiv>
          <HiOutlineStar size={30} style={{ fill: "#ffd361" }} />
          <div>상품이 북마크에 추가되었습니다.</div>
        </ToastDiv>
      )}
    </ToastContainer>
  );
};

export default Toast;
