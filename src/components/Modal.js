import { HiX, HiOutlineStar } from "react-icons/hi";
import { useState } from "react";

import * as M from "../style/Modal.styled";

const Modal = ({ openModal, info }) => {
    const [bookmark, setBookmark] = useState(info.bookmark);
    // const { title, url, bookmark } = info;
  return (
    <M.Background onClick={openModal}>
      <M.ModalDiv img={info.url} onClick={(e) => e.stopPropagation()}>
        <M.ModalBtn onClick={openModal}>
          <HiX size={40} />
        </M.ModalBtn>
        <M.ModalDesc>
          <M.BookmarkBtn onClick={() => setBookmark(!bookmark)}>
            { bookmark ?  
                <HiOutlineStar size={40} style={{fill:"#ffd361"}} /> 
                : <HiOutlineStar size={40} /> }
            </M.BookmarkBtn>
          <M.SubTitle>{info.title}</M.SubTitle>
        </M.ModalDesc>
      </M.ModalDiv>
    </M.Background>
  );
};

export default Modal;