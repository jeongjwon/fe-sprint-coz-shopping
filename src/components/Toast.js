import styled from "styled-components";
import bookmarkOff from "../assets/bookmark_off.png";
import bookmarkOn from "../assets/bookmark_on.png";
import { HiOutlineStar } from "react-icons/hi";

export const ToastContainer = styled.div`
    
`
const Toast = ({}) => {

    return(
        <ToastContainer>
             <HiOutlineStar size={35} /> 상품이 북마크에서 제거되었습니다.
             <HiOutlineStar size={35} style={{fill:"#ffd361"}} /><div>상품이 북마크에 추가되었습니다.</div>
        </ToastContainer>
    )
}
