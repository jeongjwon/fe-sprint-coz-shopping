import { HiX, HiOutlineStar } from "react-icons/hi";
import { useState } from "react";

import * as M from "../style/Modal.styled";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modal";
import { bookmarkActions } from "../store/bookmark";

const Modal = () => {
  const isShowModal = useSelector((state) => state.modal.showModal);
  const isMarked = useSelector((state) => state.bookmark.includes(isShowModal.id));
  const dispatch = useDispatch();

const handleCloseModal = () =>{
    dispatch(modalActions.close());
}
  const handleBookmark = () => {
    dispatch(bookmarkActions.toggleBookmark(isShowModal.id));
  }

    return (
        <M.Background >
          <M.ModalDiv img={isShowModal.image_url || isShowModal.brand_image_url} onClick={(e) => e.stopPropagation()}>
            <M.ModalBtn onClick={handleCloseModal}>
              <HiX size={40} />
            </M.ModalBtn>
            <M.ModalDesc>
              <M.BookmarkBtn onClick={handleBookmark}>
                { isMarked ?  
                    <HiOutlineStar size={40} style={{fill:"#ffd361"}} /> 
                    : <HiOutlineStar size={40} /> }
                </M.BookmarkBtn>
              <M.SubTitle>
                {isShowModal.title}
                {/* { isShowModal.type === "Category" ? (`# ${isShowModal.title}`) : ({isShowModal.title || isShowModal.brand_name})} */}
              </M.SubTitle>
            </M.ModalDesc>
          </M.ModalDiv>
        </M.Background>
      );
}

export default Modal;