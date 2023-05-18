import { HiX, HiOutlineStar } from "react-icons/hi";
import { useState } from "react";

import * as M from "../style/Modal.styled";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modal";

const Modal = () => {
    const isShowModal = useSelector((state) => state.modal.showModal);

    const dispatch = useDispatch();

const handleCloseModal = () =>{
    dispatch(modalActions.close());
}

    return (
        <M.Background >
          <M.ModalDiv img={isShowModal.image_url} onClick={(e) => e.stopPropagation()}>
            <M.ModalBtn onClick={handleCloseModal}>
              <HiX size={40} />
            </M.ModalBtn>
            <M.ModalDesc>
              <M.BookmarkBtn onClick={() => {
              
                
              }}>
                {/* { bookmark ?  
                    <HiOutlineStar size={40} style={{fill:"#ffd361"}} /> 
                    : <HiOutlineStar size={40} /> } */}
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