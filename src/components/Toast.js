
import bookmarkOff from "../assets/bookmark_off.png";
import bookmarkOn from "../assets/bookmark_on.png";
import { HiOutlineStar } from "react-icons/hi";
import * as T from "../style/Toast.styled";

const Toast = ({ bookmark }) => {
    console.log(bookmark);
  return (
    <T.ToastContainer>
      {!bookmark ? (
        <T.ToastDiv>
          <HiOutlineStar size={30} />{" "}
          <div>상품이 북마크에서 제거되었습니다.</div>
        </T.ToastDiv>
      ) : (
        <T.ToastDiv>
          <HiOutlineStar size={30} style={{ fill: "#ffd361" }} />
          <div>상품이 북마크에 추가되었습니다.</div>
        </T.ToastDiv>
      )}
    </T.ToastContainer>
  );
};

export default Toast;
